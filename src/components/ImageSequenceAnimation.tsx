'use client';

import { useEffect, useRef, useState } from 'react';
import { useMotionValueEvent, MotionValue } from 'framer-motion';

const TOTAL_FRAMES = 90;

interface Props {
  progress: MotionValue<number>;
}

export function ImageSequenceAnimation({ progress }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);

  // Preload all images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new window.Image();
      const frameStr = String(i).padStart(3, '0');
      img.src = `/images/pourAnimation/ezgif-frame-${frameStr}.jpg`;
      
      img.onload = () => {
        loadedCount++;
        if (loadedCount === TOTAL_FRAMES) {
          setImages(loadedImages);
        }
      };
      
      loadedImages.push(img);
    }
  }, []);

  const drawFrame = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, img: HTMLImageElement) => {
    // Ensure canvas dimensions match its display size for crisp rendering
    const { width, height } = canvas.getBoundingClientRect();
    if (canvas.width !== width || canvas.height !== height) {
      canvas.width = width;
      canvas.height = height;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Calculate object-contain behavior
    const hRatio = canvas.width / img.width;
    const vRatio = canvas.height / img.height;
    const ratio  = Math.min(hRatio, vRatio);
    
    const centerShift_x = (canvas.width - img.width * ratio) / 2;
    const centerShift_y = (canvas.height - img.height * ratio) / 2;  

    ctx.drawImage(
      img, 
      0, 0, img.width, img.height,
      centerShift_x, centerShift_y, img.width * ratio, img.height * ratio
    );

    // Hide VEO logo (bottom right)
    ctx.fillStyle = 'black';
    const logoW = 250 * ratio;
    const logoH = 100 * ratio;
    ctx.fillRect(
      centerShift_x + (img.width * ratio) - logoW,
      centerShift_y + (img.height * ratio) - logoH,
      logoW,
      logoH
    );
  };

  // Draw the initial frame once images are loaded
  useEffect(() => {
    if (images.length === TOTAL_FRAMES && canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      if (ctx && images[0]) {
         drawFrame(ctx, canvas, images[0]);
      }
    }
  }, [images]);

  // Handle scroll updates
  useMotionValueEvent(progress, "change", (latest) => {
    if (images.length !== TOTAL_FRAMES || !canvasRef.current) return;

    // Map scroll progress (0 to 1) to frame index (0 to 89)
    // We want the full animation to finish slightly before the bottom, so multiply by 1.1 or clamp
    let frameIndex = Math.floor(latest * TOTAL_FRAMES);
    
    if (frameIndex >= TOTAL_FRAMES) frameIndex = TOTAL_FRAMES - 1;
    if (frameIndex < 0) frameIndex = 0;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    if (ctx && images[frameIndex]) {
       drawFrame(ctx, canvas, images[frameIndex]);
    }
  });

  return (
    <div className="relative w-full h-full min-h-[50vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-radial-gradient">
      <div className="relative w-full h-full max-w-2xl max-h-full mix-blend-lighten opacity-90 p-10 flex items-center justify-center">
        <canvas 
          ref={canvasRef}
          className="w-full h-full object-contain pointer-events-none"
        />
      </div>
      
      {/* Overlay to blend the edges perfectly into black */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,#000000_80%)] pointer-events-none" />
    </div>
  );
}

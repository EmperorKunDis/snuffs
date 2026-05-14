'use client';

import { useRef } from 'react';
import { useScroll } from 'framer-motion';
import Image from 'next/image';
import { ImageSequenceAnimation } from './ImageSequenceAnimation';

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section ref={containerRef} className="relative w-full h-[120vh] bg-black">
      {/* Sticky Container - Stays fixed while scrolling the 120vh parent */}
      <div className="sticky top-0 h-screen w-full flex flex-col md:flex-row border-b border-dark-gray/50 overflow-hidden">
        
        {/* Left Column (Text) */}
        <div className="w-full md:w-1/2 flex flex-col justify-center px-6 md:px-16 lg:px-24 py-16 z-10 pt-32">
          <div className="mb-8">
             <Image src="/images/vestige-logo.svg" alt="Vestige Logo" width={80} height={80} className="opacity-90" />
          </div>
          <h1 className="text-6xl md:text-7xl lg:text-9xl font-serif text-white mb-4 tracking-tight">
            Vestige
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-sans font-light text-gray-300 mb-8 tracking-wide">
            The Lost Art of the Pinch.
          </h2>
          <p className="text-base md:text-lg text-gray-400 font-sans max-w-md mb-12 leading-relaxed text-balance">
            Vestige reimagines nasal snuff for the modern connoisseur. 100% organic, sun-cured tobacco leaves milled to perfection. Restore the dignity of the pinch.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            <a href="#collection" className="px-8 py-4 bg-[#111111] hover:bg-[#1a1a1a] text-[#c5a059] border border-[#333] hover:border-[#c5a059] transition-all duration-300 font-sans tracking-widest text-sm uppercase">
              Explore Collection
            </a>
            <a href="#ritual" className="px-8 py-4 bg-transparent hover:bg-white/5 text-gray-400 hover:text-white transition-all duration-300 font-sans tracking-widest text-sm uppercase flex items-center justify-center">
              The Ritual
            </a>
          </div>
        </div>

        {/* Right Column (Visual) */}
        <div className="w-full md:w-1/2 absolute md:relative inset-0 md:inset-auto h-full flex items-center justify-center -z-10 md:z-0 opacity-30 md:opacity-100">
           <ImageSequenceAnimation progress={scrollYProgress} />
        </div>
      </div>
    </section>
  );
}

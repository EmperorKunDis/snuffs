'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export function Philosophy() {
  return (
    <section id="philosophy" className="w-full py-32 px-6 md:px-16 lg:px-24 bg-black relative border-t border-[#111]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        {/* Left Side: Text Content */}
        <div className="w-full lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6 tracking-wide">
              Our Philosophy
            </h2>
            <div className="w-12 h-[1px] bg-[#c5a059] mb-8 opacity-70"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-300 font-sans leading-relaxed">
              We believe that true luxury requires time. In an era dominated by instantaneous gratification and mass production, Vestige represents a return to deliberate, mindful consumption.
            </p>
            <p className="text-base text-gray-400 font-sans leading-relaxed">
              Our tobacco is sourced exclusively from small-yield, sun-cured harvests. We do not use chemical accelerators or artificial humidifiers. Instead, we rely on traditional fermentation and natural maceration processes that take months to complete. 
            </p>
            <p className="text-base text-[#c5a059] font-serif italic pt-4 opacity-90">
              &quot;To pinch is to pause. To pause is to live.&quot;
            </p>
          </motion.div>
        </div>

        {/* Right Side: Visual/Abstract Element */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative">
           <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative w-full max-w-md aspect-square rounded-full border border-[#222] p-8 flex items-center justify-center bg-radial-gradient"
           >
              <div className="absolute inset-0 rounded-full border border-[#c5a059]/20 animate-pulse" style={{ animationDuration: '4s' }}></div>
              <div className="relative w-3/4 h-3/4 opacity-80">
                <Image 
                  src="/images/vestige-logo.svg" 
                  alt="Vestige Emblem" 
                  fill 
                  className="object-contain" 
                />
              </div>
           </motion.div>
        </div>

      </div>
    </section>
  );
}
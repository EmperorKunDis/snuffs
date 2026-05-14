'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const handleNotImplemented = (e: React.MouseEvent) => {
    e.preventDefault();
    showToast("This feature will be available soon.");
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-dark-gray transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/images/vestige-logo.svg" alt="Vestige Logo" width={36} height={36} className="opacity-90" />
            <span className="text-2xl font-serif text-white tracking-wider pt-1">Vestige</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-sans tracking-wide text-gray-400">
            <Link href="#collection" className="hover:text-white transition-colors duration-300">The Collection</Link>
            <Link href="#philosophy" className="hover:text-white transition-colors duration-300">Our Philosophy</Link>
            <Link href="#ritual" className="hover:text-white transition-colors duration-300">The Ritual</Link>
          </div>

          <div className="flex items-center gap-6 text-sm font-sans">
            <button 
              onClick={handleNotImplemented} 
              className="text-gray-400 hover:text-white transition-colors duration-300 hidden sm:block cursor-pointer"
            >
              Log In
            </button>
            <button 
              onClick={handleNotImplemented} 
              className="px-5 py-2.5 border border-dark-gray bg-white/5 hover:bg-white/10 hover:border-gray-600 text-white transition-all duration-300 cursor-pointer"
            >
              Shop Now
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 z-[60] bg-[#111] border border-[#333] px-6 py-3 rounded-full shadow-2xl flex items-center gap-3"
          >
            <div className="w-2 h-2 rounded-full bg-[#c5a059] animate-pulse"></div>
            <span className="text-sm font-sans text-gray-300 tracking-wide">{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

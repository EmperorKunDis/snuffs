'use client';

import Link from 'next/link';
import Image from 'next/image';

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

export function Footer() {
  return (
    <footer className="w-full bg-[#050505] border-t border-[#111] pt-20 pb-12 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
        
        {/* Brand Column */}
        <div className="col-span-1 md:col-span-1">
          <Link href="/" className="flex items-center gap-3 mb-6">
            <Image src="/images/vestige-logo.svg" alt="Vestige Logo" width={32} height={32} className="opacity-90 grayscale" />
            <span className="text-xl font-serif text-white tracking-wider pt-1">Vestige</span>
          </Link>
          <p className="text-sm text-gray-500 font-sans leading-relaxed mb-6 pr-4">
            Reimagining nasal snuff for the modern connoisseur. Restore the dignity of the pinch.
          </p>
          <div className="flex gap-4 text-gray-400">
            <a href="#" className="hover:text-[#c5a059] transition-colors duration-300">
              <InstagramIcon />
            </a>
            <a href="#" className="hover:text-[#c5a059] transition-colors duration-300">
              <TwitterIcon />
            </a>
            <a href="mailto:hello@vestigesnuff.com" className="hover:text-[#c5a059] transition-colors duration-300">
              <MailIcon />
            </a>
          </div>
        </div>

        {/* Explore Links */}
        <div className="col-span-1">
          <h4 className="text-white font-serif text-lg mb-6 tracking-wide">Explore</h4>
          <ul className="space-y-4 text-sm font-sans text-gray-500">
            <li><Link href="#collection" className="hover:text-white transition-colors duration-300">The Heritage Collection</Link></li>
            <li><Link href="#philosophy" className="hover:text-white transition-colors duration-300">Our Philosophy</Link></li>
            <li><Link href="#ritual" className="hover:text-white transition-colors duration-300">The Art of the Pinch</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors duration-300">Journal</Link></li>
          </ul>
        </div>

        {/* Support Links */}
        <div className="col-span-1">
          <h4 className="text-white font-serif text-lg mb-6 tracking-wide">Support</h4>
          <ul className="space-y-4 text-sm font-sans text-gray-500">
            <li><Link href="#" className="hover:text-white transition-colors duration-300">FAQ</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors duration-300">Shipping & Returns</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors duration-300">Contact Us</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors duration-300">Wholesale</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="col-span-1 md:col-span-1">
          <h4 className="text-white font-serif text-lg mb-6 tracking-wide">Newsletter</h4>
          <p className="text-sm text-gray-500 font-sans mb-4">
            Subscribe for updates on rare batches and limited releases.
          </p>
          <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Email address" 
              className="w-full bg-[#111] border border-[#333] px-4 py-3 text-sm text-white focus:outline-none focus:border-[#c5a059] transition-colors"
            />
            <button 
              type="submit" 
              className="w-full bg-white/5 hover:bg-white/10 border border-[#333] hover:border-gray-500 text-white px-4 py-3 text-sm tracking-widest uppercase transition-all duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-[#111] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-600 font-sans text-xs tracking-widest uppercase">
          © 2026 Vestige Snuff Tobacco. All rights reserved.
        </p>
        <div className="flex gap-6 text-xs text-gray-600 font-sans uppercase tracking-widest">
          <Link href="#" className="hover:text-gray-400 transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-gray-400 transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
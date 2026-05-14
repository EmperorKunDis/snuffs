import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { HeritageCollection } from "@/components/HeritageCollection";
import { TheRitual } from "@/components/TheRitual";

export default function Home() {
  return (
    <main className="min-h-screen bg-black overflow-x-hidden">
      <Navbar />
      <Hero />
      <HeritageCollection />
      <TheRitual />
      
      {/* Footer Placeholder for completeness */}
      <footer className="w-full py-12 border-t border-dark-gray text-center bg-[#0a0a0a]">
         <p className="text-gray-600 font-sans text-sm tracking-widest uppercase">
           © 2026 Vestige Snuff Tobacco. All rights reserved.
         </p>
      </footer>
    </main>
  );
}

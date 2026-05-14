import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Philosophy } from "@/components/Philosophy";
import { HeritageCollection } from "@/components/HeritageCollection";
import { TheRitual } from "@/components/TheRitual";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black overflow-x-hidden">
      <Navbar />
      <Hero />
      <Philosophy />
      <HeritageCollection />
      <TheRitual />
      <Footer />
    </main>
  );
}

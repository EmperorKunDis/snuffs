'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X } from 'lucide-react';

const products = [
  {
    id: 1,
    title: 'The Botanist',
    tags: ['Fine', 'Dry'],
    notes: 'Lavender, Bergamot, White Pepper',
    image: '/images/VestigeTheBotanist.png',
    subtitle: '"Clarity in a pinch."',
    description: 'The Botanist is our most uplifting and brisk blend, designed to cut through brain fog and provide a sharp, immediate sense of clarity. It is milled to a very fine powder and kept completely dry, allowing for a swift, clean uptake that awakens the senses instantly.',
    base: 'Sun-cured, bright Virginia leaf, chosen for its naturally sweet, grassy notes and high nicotine yield.',
    infusion: 'Essential oil of English Lavender provides a calming floral top note, while cold-pressed Bergamot rind adds a sharp, citrusy edge. A microscopic trace of white pepper gives it a warming, tingling finish in the nose.',
    moisture: 'Fine / Dry.',
    nicotine: 'High and immediate.',
    ritual: 'First thing in the morning alongside a green tea, or right before a session of deep, focused work when you need to quickly reset your attention.'
  },
  {
    id: 2,
    title: 'The Woodsman',
    tags: ['Medium', 'Moist'],
    notes: 'Cedar, Oakmoss, Dark Cocoa',
    image: '/images/vestigeTheWoodsman.png',
    subtitle: '"Rooted in the earth."',
    description: 'The Woodsman is the anchor of the collection. It is a robust, deeply comforting blend that smells like a damp forest floor in late autumn. It has a slightly higher moisture content, making it easier to take for beginners, with a slower, more sustained release.',
    base: 'A blend of air-cured Burley and a touch of dark-fired Kentucky tobacco, giving it a naturally smoky, leathery foundation.',
    infusion: 'Wild-foraged pine needle absolute and Himalayan cedarwood oil create a fresh, woody core, rounded out by a subtle maceration of smoked vanilla bean to soften the edges.',
    moisture: 'Medium / Moist.',
    nicotine: 'Moderate and sustained.',
    ritual: 'Mid-afternoon. Best enjoyed when stepping away from the screen for a walk, or paired with a strong, black pour-over coffee.'
  },
  {
    id: 3,
    title: 'The Alchemist',
    tags: ['Coarse', 'Dark'],
    notes: 'Black Cherry, Vanilla Bean, Clove',
    image: '/images/vestigeTheAlchemist.png',
    subtitle: '"Decadence, dark and slow."',
    description: 'Inspired by the traditional German Schmalzler snuffs, The Alchemist is a rich, heavy, and intensely flavorful experience. It is the dessert of the snuff world—dark, oiled, and complex. Because of its coarse grind and high moisture, it sits very comfortably in the nose without traveling too far back.',
    base: 'Heavily fermented, dark South American tobaccos. The fermentation process removes the sharp edges, resulting in a deep, earthy, and naturally chocolaty profile.',
    infusion: 'Ground organic dark cocoa beans and black cherry extract, finished with a subtle warmth from toasted cardamom. It is traditionally oiled (using a neutral, food-grade mineral oil) to bind the flavors and retain its heavy texture.',
    moisture: 'Coarse / Highly Moist (Oiled).',
    nicotine: 'Mild to medium, but very long-lasting.',
    ritual: 'Late evening. This is best savored slowly after a heavy dinner, paired perfectly with a glass of single malt scotch, a dark stout, or an espresso.'
  },
];

type Product = typeof products[0];

export function HeritageCollection() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <section id="collection" className="w-full py-32 px-6 md:px-16 lg:px-24 bg-black relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6 tracking-wide">
            The Heritage Collection
          </h2>
          <div className="w-12 h-[1px] bg-[#c5a059] mx-auto opacity-70"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {products.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
              whileHover={{ y: -8 }}
              onClick={() => setSelectedProduct(product)}
              className="group relative flex flex-col bg-[#0a0a0a] border border-[#222] hover:border-[#c5a059] rounded-3xl transition-all duration-500 overflow-hidden cursor-pointer h-[550px]"
            >
              {/* Image Container */}
              <div className="relative w-full flex-grow p-12 flex items-center justify-center overflow-hidden bg-radial-gradient">
                 <motion.div
                    className="relative w-full h-full"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                 >
                   <Image 
                     src={product.image}
                     alt={product.title}
                     fill
                     className="object-contain drop-shadow-2xl opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                   />
                 </motion.div>
              </div>

              {/* Content */}
              <div className="p-8 border-t border-[#222] group-hover:border-[#c5a059]/30 transition-colors duration-500 bg-[#111111] relative z-10 flex flex-col justify-between h-[180px]">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-serif text-white tracking-wide">{product.title}</h3>
                    <div className="flex gap-2 text-[10px] uppercase tracking-wider text-gray-500">
                      {product.tags.map(tag => (
                        <span key={tag} className="px-2 py-1 border border-[#333] rounded-sm">{tag}</span>
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 font-sans">
                    Notes: <span className="text-gray-400">{product.notes}</span>
                  </p>
                </div>
                
                <div className="flex items-center text-[#c5a059] text-xs font-semibold tracking-widest uppercase opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  View Details 
                  <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Product Details Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProduct(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-md overflow-y-auto"
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0a0a0a] border border-[#333] rounded-3xl overflow-hidden max-w-5xl w-full flex flex-col md:flex-row relative shadow-2xl my-auto"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedProduct(null)} 
                className="absolute top-6 right-6 z-10 p-2 bg-black/50 hover:bg-[#c5a059]/20 rounded-full text-gray-400 hover:text-[#c5a059] transition-all duration-300 backdrop-blur-md"
              >
                <X size={24} />
              </button>
              
              {/* Image Col */}
              <div className="w-full md:w-2/5 bg-radial-gradient p-12 flex items-center justify-center min-h-[300px] border-b md:border-b-0 md:border-r border-[#222]">
                <div className="relative w-full aspect-square">
                  <Image 
                    src={selectedProduct.image} 
                    alt={selectedProduct.title} 
                    fill 
                    className="object-contain drop-shadow-2xl" 
                  />
                </div>
              </div>
              
              {/* Content Col */}
              <div className="w-full md:w-3/5 p-8 md:p-12 text-left bg-[#111111]">
                <h3 className="text-4xl md:text-5xl font-serif text-white mb-2 tracking-wide">{selectedProduct.title}</h3>
                <p className="text-xl md:text-2xl text-[#c5a059] font-serif italic mb-6 opacity-90">{selectedProduct.subtitle}</p>
                
                <p className="text-gray-300 font-sans leading-relaxed mb-10 text-base">{selectedProduct.description}</p>
                
                <div className="space-y-6 font-sans text-sm">
                  <div>
                    <span className="text-white font-semibold tracking-widest uppercase text-xs opacity-70">The Base</span>
                    <p className="text-gray-400 mt-2 leading-relaxed">{selectedProduct.base}</p>
                  </div>
                  
                  <div>
                    <span className="text-white font-semibold tracking-widest uppercase text-xs opacity-70">The Infusion</span>
                    <p className="text-gray-400 mt-2 leading-relaxed">{selectedProduct.infusion}</p>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-[#222]">
                    <div>
                      <span className="text-white font-semibold tracking-widest uppercase text-xs opacity-70">Moisture & Grind</span>
                      <p className="text-gray-300 mt-2">{selectedProduct.moisture}</p>
                    </div>
                    <div>
                      <span className="text-white font-semibold tracking-widest uppercase text-xs opacity-70">Nicotine Hit</span>
                      <p className="text-gray-300 mt-2">{selectedProduct.nicotine}</p>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-[#222]">
                    <span className="text-[#c5a059] font-semibold tracking-widest uppercase text-xs opacity-90">The Ideal Ritual</span>
                    <p className="text-gray-300 mt-2 leading-relaxed italic">{selectedProduct.ritual}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

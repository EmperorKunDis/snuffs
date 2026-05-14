'use client';

import { motion } from 'framer-motion';

export function TheRitual() {
  return (
    <section id="ritual" className="w-full py-32 px-6 md:px-16 lg:px-24 bg-[#050505] relative border-t border-[#111]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-serif text-white mb-6 tracking-wide"
          >
            The Vestige Ritual: The Art of the Pinch
          </motion.h2>
          <div className="w-12 h-[1px] bg-[#c5a059] mx-auto opacity-70 mb-8"></div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 font-sans leading-relaxed text-balance"
          >
            For centuries, taking snuff was a symbol of sophistication—a momentary pause in the day reserved for reflection, conversation, and sensory appreciation. At Vestige, we believe the modern world moves too fast. Our tobacco is designed to bring you back to the present.
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-base text-gray-400 font-sans leading-relaxed mt-4"
          >
            Taking snuff is not about rushing a nicotine hit; it is a mindful, tactile experience. Here is the proper etiquette and technique for enjoying the Heritage Collection.
          </motion.p>
        </div>

        <div className="space-y-16">
          {/* Step 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row gap-6 md:gap-12 items-start"
          >
            <div className="text-5xl font-serif text-[#c5a059] opacity-30 md:w-1/4">01</div>
            <div className="md:w-3/4">
              <h3 className="text-2xl font-serif text-white mb-4">The Preparation</h3>
              <p className="text-gray-400 font-sans leading-relaxed">
                The ritual begins before the tin is even opened. Ensure your hands are clean and dry. A true aficionado respects the product and the process. Hold the brushed aluminum tin in your hand, feeling its weight and temperature. Slide the mechanism open until it "clicks," releasing the initial aroma of the blend.
              </p>
            </div>
          </motion.div>

          {/* Step 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row gap-6 md:gap-12 items-start"
          >
            <div className="text-5xl font-serif text-[#c5a059] opacity-30 md:w-1/4">02</div>
            <div className="md:w-3/4">
              <h3 className="text-2xl font-serif text-white mb-4">The Presentation</h3>
              <p className="text-gray-400 font-sans leading-relaxed mb-4">
                There are two classical methods for presenting the tobacco to the nose.
              </p>
              <div className="space-y-4 pl-4 border-l border-[#333]">
                <div>
                  <span className="text-white font-serif">The Pinch (The Traditionalist Method): </span>
                  <span className="text-gray-400 font-sans leading-relaxed">Using your thumb and index finger, take a very small pinch of the tobacco. Roll it slightly between your fingertips to gauge the moisture and grind.</span>
                </div>
                <div>
                  <span className="text-white font-serif">The Anatomical Snuffbox (The Continental Method): </span>
                  <span className="text-gray-400 font-sans leading-relaxed">Tap a small mound—no larger than a lentil—onto the back of your hand, specifically in the small depression at the base of your thumb (historically known as the "anatomical snuffbox").</span>
                </div>
              </div>
              <p className="text-sm text-[#c5a059] font-sans mt-4 italic opacity-90">
                Note: For the fine, dry grind of The Botanist, The Pinch is highly recommended for precise control.
              </p>
            </div>
          </motion.div>

          {/* Step 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row gap-6 md:gap-12 items-start"
          >
            <div className="text-5xl font-serif text-[#c5a059] opacity-30 md:w-1/4">03</div>
            <div className="md:w-3/4">
              <h3 className="text-2xl font-serif text-white mb-4">The Inhalation</h3>
              <p className="text-gray-400 font-sans leading-relaxed mb-4">
                This is where most beginners make their mistake. <strong className="text-white font-normal">You do not snort snuff; you sniff it.</strong>
              </p>
              <p className="text-gray-400 font-sans leading-relaxed">
                Bring the pinch or the back of your hand close to your nostril (about a half-inch away). Gently and steadily inhale, as if you are smelling a delicate flower or a fine glass of wine. The goal is to coat the mucous membranes at the front of the nose, not to draw the powder back into your sinuses or throat.
                <br /><br />
                Repeat the process for the other nostril.
              </p>
            </div>
          </motion.div>

          {/* Step 4 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row gap-6 md:gap-12 items-start"
          >
            <div className="text-5xl font-serif text-[#c5a059] opacity-30 md:w-1/4">04</div>
            <div className="md:w-3/4">
              <h3 className="text-2xl font-serif text-white mb-4">The Pause</h3>
              <p className="text-gray-400 font-sans leading-relaxed">
                Close the tin, letting the magnetic lid snap shut. Close your eyes for a brief moment. You will immediately feel a slight tingle, followed by a rush of the blend’s botanical notes—the sharp lavender, the damp pine, or the rich dark cocoa. Let the nicotine lift settle in. This is your moment of clarity.
              </p>
            </div>
          </motion.div>

          {/* Step 5 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row gap-6 md:gap-12 items-start"
          >
            <div className="text-5xl font-serif text-[#c5a059] opacity-30 md:w-1/4">05</div>
            <div className="md:w-3/4">
              <h3 className="text-2xl font-serif text-white mb-4">The Aftermath</h3>
              <p className="text-gray-400 font-sans leading-relaxed">
                It is entirely normal for the nose to run slightly, especially with moister blends like The Alchemist. Keep a clean, dark handkerchief (or a high-quality tissue) on hand to discreetly dab away any excess. A gentle blow of the nose after 10 to 15 minutes is standard etiquette, clearing the palate for your next pinch later in the day.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

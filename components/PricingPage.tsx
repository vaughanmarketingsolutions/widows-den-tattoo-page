import React from 'react';
import { motion } from 'framer-motion';

const PricingPage: React.FC = () => {
  return (
    <div className="pt-32 pb-20 px-4 min-h-screen relative z-10 bg-[#163023] flex flex-col items-center">
      {/* Page Title */}
      <div className="text-center mb-16 md:mb-24 relative">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-display text-6xl md:text-9xl text-[#f2f0e9] uppercase tracking-tighter"
        >
          Pricing Guide
        </motion.h1>
        <div className="w-24 h-1 bg-[#CF7696] mx-auto mt-6" />
      </div>

      <div className="max-w-5xl w-full flex flex-col gap-16 md:gap-24">
        
        {/* Tattoo Pricing Section */}
        <motion.section 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <h2 className="font-display text-4xl md:text-6xl text-[#f2f0e9] uppercase">Tattoo Pricing</h2>
            <div className="h-[2px] grow bg-[#CF7696]/30" />
          </div>
          <div className="rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/5 bg-[#1F4030]">
            <img 
              src="https://i.imgur.com/F0KRAVj.png" 
              alt="Widow's Den Tattoo Pricing Information" 
              className="w-full h-auto block"
            />
          </div>
        </motion.section>

        {/* Piercing Pricing Section */}
        <motion.section 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[2px] grow bg-[#8CB59E]/30" />
            <h2 className="font-display text-4xl md:text-6xl text-[#f2f0e9] uppercase">Piercing Pricing</h2>
          </div>
          <div className="rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/5 bg-[#1F4030]">
            <img 
              src="https://i.imgur.com/ZMcIh18.png" 
              alt="Widow's Den Piercing Pricing Information" 
              className="w-full h-auto block"
            />
          </div>
        </motion.section>

      </div>

      {/* Decorative Bottom Area */}
      <div className="text-center mt-20 pb-8">
        <p className="text-[#a3c9c7]/40 text-xs uppercase tracking-[0.4em]">
          All prices subject to final design and jewelry selection
        </p>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#163023] to-transparent pointer-events-none" />
    </div>
  );
};

export default PricingPage;
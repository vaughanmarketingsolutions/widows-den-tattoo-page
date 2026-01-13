import React from 'react';
import { motion } from 'framer-motion';
import BrutalButton from './ui/BrutalButton';
import { ArrowDown } from 'lucide-react';

interface HeroProps {
    onViewGallery: () => void;
    onBook: () => void;
}

const Hero: React.FC<HeroProps> = ({ onViewGallery, onBook }) => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-12 md:pt-20">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 opacity-30">
         <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-[#CF7696] rounded-full blur-[180px] animate-pulse" />
         <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-[#8CB59E] rounded-full blur-[180px] animate-pulse" style={{ animationDelay: '2s'}} />
      </div>

      <div className="z-10 text-center px-4 max-w-5xl">
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-[#CF7696] font-display text-xl md:text-3xl tracking-[0.3em] mb-2 md:mb-4 uppercase drop-shadow-[0_0_15px_rgba(207,118,150,0.5)]">
            Angier, North Carolina
          </h2>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-[9rem] leading-[0.9] font-display text-[#f2f0e9] uppercase tracking-tighter mix-blend-difference relative"
        >
          Widow's Den<br />Tattoo
          {/* Subtle pink glow behind text */}
          <div className="absolute inset-0 -z-10 blur-3xl opacity-20 bg-[#CF7696] rounded-full"></div>
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mt-8 md:mt-12"
        >
          <BrutalButton size="lg" variant="bone" onClick={onBook} className="w-full md:w-auto">
            Book Appointment
          </BrutalButton>
          <BrutalButton size="lg" variant="orange" className="rotate-1 md:rotate-2 w-full md:w-auto" onClick={onViewGallery}>
            View Gallery
          </BrutalButton>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <ArrowDown className="text-[#CF7696] animate-bounce w-8 h-8" />
      </motion.div>
    </section>
  );
};

export default Hero;
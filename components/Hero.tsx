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
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 opacity-20">
         <div className="absolute top-[-20%] left-[-20%] w-[50%] h-[50%] bg-[#CF7696] rounded-full blur-[150px] animate-pulse" />
         <div className="absolute bottom-[-20%] right-[-20%] w-[50%] h-[50%] bg-[#8CB59E] rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '2s'}} />
      </div>

      <div className="z-10 text-center px-4 max-w-5xl">
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-[#CF7696] font-display text-2xl md:text-3xl tracking-[0.2em] mb-4">
            Angier, North Carolina
          </h2>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-7xl md:text-[9rem] leading-[0.9] font-display text-[#f2f0e9] uppercase tracking-tighter mix-blend-difference"
        >
          Widow's Den<br />Tattoo
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6 mt-12"
        >
          <BrutalButton size="lg" variant="bone" onClick={onBook}>
            Book Appointment
          </BrutalButton>
          <BrutalButton size="lg" variant="orange" className="rotate-2" onClick={onViewGallery}>
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
        <ArrowDown className="text-[#f2f0e9] animate-bounce w-8 h-8" />
      </motion.div>
    </section>
  );
};

export default Hero;
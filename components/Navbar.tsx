import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import BrutalButton from './ui/BrutalButton';

interface NavbarProps {
  setView: (view: 'home' | 'artists' | 'gallery') => void;
  onBook: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ setView, onBook }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const handleNav = (view: 'home' | 'artists' | 'gallery') => {
    setView(view);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBook = () => {
    onBook();
    setIsOpen(false);
  }

  return (
    <motion.nav 
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 w-full z-50"
    >
      {/* Header Content with Blend Mode */}
      <div className="relative z-50 px-6 py-4 mix-blend-difference text-[#f2f0e9]">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
            <button 
              onClick={() => handleNav('home')}
              className="text-2xl font-display tracking-widest uppercase flex items-center gap-3 hover:scale-105 transition-transform"
            >
              <img 
                  src="https://i.imgur.com/X6ThXQ1.png" 
                  alt="Widow's Den Tattoo Logo" 
                  className="w-10 h-10 object-contain rounded-full bg-[#f2f0e9]"
              />
              Widow's Den Tattoo
            </button>

            <div className="hidden md:flex gap-8 items-center font-semibold text-sm tracking-wide uppercase">
                <button onClick={() => handleNav('artists')} className="hover:underline decoration-2 underline-offset-4">Artists</button>
                <button onClick={() => handleNav('gallery')} className="hover:underline decoration-2 underline-offset-4">Gallery</button>
                <button onClick={() => handleNav('home')} className="hover:underline decoration-2 underline-offset-4">FAQ</button>
                <BrutalButton size="sm" variant="bone" onClick={handleBook}>Book Now</BrutalButton>
            </div>

            <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X /> : <Menu />}
            </button>
        </div>
      </div>

      {/* Mobile Menu - Opaque & Animated */}
      <AnimatePresence>
        {isOpen && (
            <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute top-full left-0 w-full bg-[#163023] text-[#f2f0e9] border-b border-white/10 overflow-hidden shadow-2xl"
            >
                <div className="p-6 flex flex-col gap-6 md:hidden">
                    <button onClick={() => handleNav('artists')} className="text-left text-2xl font-display hover:text-[#CF7696] transition-colors">Artists</button>
                    <button onClick={() => handleNav('gallery')} className="text-left text-2xl font-display hover:text-[#CF7696] transition-colors">Gallery</button>
                    <button onClick={() => handleNav('home')} className="text-left text-2xl font-display hover:text-[#CF7696] transition-colors">FAQ</button>
                    <BrutalButton className="w-full" variant="bone" onClick={handleBook}>Book Now</BrutalButton>
                </div>
            </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
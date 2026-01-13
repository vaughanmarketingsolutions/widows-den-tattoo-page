import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import BrutalButton from './ui/BrutalButton';

interface NavbarProps {
  setView: (view: 'home' | 'artists' | 'gallery' | 'pricing') => void;
  onBook: () => void;
}

const NavItem = ({ children, onClick }: React.PropsWithChildren<{ onClick: () => void }>) => (
  <button 
    onClick={onClick} 
    className="group relative hover:text-[#CF7696] transition-colors duration-300 whitespace-nowrap"
  >
    {children}
    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#CF7696] transition-all duration-300 group-hover:w-full"></span>
  </button>
);

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

  const handleNav = (view: 'home' | 'artists' | 'gallery' | 'pricing') => {
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
      className="fixed top-0 w-full z-50 bg-[#163023] border-b border-white/5 shadow-lg"
    >
      {/* Header Content */}
      <div className="relative z-50 px-6 py-4 text-[#f2f0e9]">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
            {/* Logo/Brand Section - Left Side */}
            <button 
              onClick={() => handleNav('home')}
              className="text-xl sm:text-2xl font-display tracking-widest uppercase flex items-center gap-3 hover:scale-105 transition-transform group text-left shrink-0"
            >
              <img 
                  src="https://i.imgur.com/X6ThXQ1.png" 
                  alt="Widow's Den Tattoo Logo" 
                  className="w-10 h-10 object-contain rounded-full bg-[#f2f0e9] border-2 border-transparent group-hover:border-[#CF7696] transition-colors shrink-0"
              />
              <span className="inline-block whitespace-nowrap">Widow's Den Tattoo</span>
            </button>

            {/* Desktop Navigation Items - Right Side */}
            <div className="hidden md:flex gap-8 items-center font-semibold text-sm tracking-wide uppercase">
                <NavItem onClick={() => handleNav('artists')}>Artists</NavItem>
                <NavItem onClick={() => handleNav('gallery')}>Gallery</NavItem>
                <NavItem onClick={() => handleNav('pricing')}>Pricing</NavItem>
                <BrutalButton size="sm" variant="orange" onClick={handleBook}>Book Now</BrutalButton>
            </div>

            {/* Mobile Menu Trigger - Right Side */}
            <button className="md:hidden hover:text-[#CF7696] transition-colors shrink-0" onClick={() => setIsOpen(!isOpen)}>
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
                    <button onClick={() => handleNav('pricing')} className="text-left text-2xl font-display hover:text-[#CF7696] transition-colors">Pricing</button>
                    <BrutalButton className="w-full" variant="orange" onClick={handleBook}>Book Now</BrutalButton>
                </div>
            </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
import React from 'react';
import { motion } from 'framer-motion';

interface BrutalButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'orange' | 'bone' | 'black' | 'teal';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const BrutalButton: React.FC<BrutalButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'orange', 
  className = '',
  size = 'md'
}) => {
  const bgColors = {
    orange: 'bg-[#CF7696] text-black', // Pink
    bone: 'bg-[#f2f0e9] text-black',
    black: 'bg-black text-[#f2f0e9]',
    teal: 'bg-[#8CB59E] text-black', // Sage
  };

  const padding = {
    sm: 'px-4 py-1 text-sm',
    md: 'px-8 py-3 text-lg',
    lg: 'px-10 py-4 text-xl',
  };

  // SVG Path for a "paint stroke" look
  const clipPathVal = 'polygon(0% 2%, 100% 0%, 98% 98%, 2% 100%)';

  return (
    <motion.button
      whileHover={{ 
        scale: 1.05, 
        rotate: -1,
        boxShadow: "0px 10px 20px rgba(0,0,0,0.4)"
      }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`relative font-display tracking-wide uppercase font-bold border-none outline-none ${bgColors[variant]} ${padding[size]} ${className}`}
      style={{
        clipPath: clipPathVal,
        borderRadius: '4px' // Fallback
      }}
    >
      <span className="relative z-10">{children}</span>
      {/* Rough background decoration */}
      <div className="absolute inset-0 bg-black/10 opacity-0 hover:opacity-100 transition-opacity duration-200 pointer-events-none mix-blend-overlay" />
    </motion.button>
  );
};

export default BrutalButton;
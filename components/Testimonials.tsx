import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Testimonial } from '../types';
import { Star, Instagram, Globe, Twitter, Quote, ChevronDown } from 'lucide-react';
import { TESTIMONIALS, COLORS } from '../constants';

const PlatformIcon = ({ platform }: { platform: string }) => {
  switch (platform.toLowerCase()) {
    case 'instagram': return <Instagram size={18} className="text-[#CF7696]" />;
    case 'twitter': return <Twitter size={18} className="text-[#1DA1F2]" />;
    default: return <Globe size={18} className="text-[#8CB59E]" />;
  }
};

const TestimonialCard: React.FC<{ data: Testimonial; index: number; isMobile?: boolean }> = ({ data, index, isMobile }) => {
  const cardRef = useRef(null);
  
  // Adjusted animation strategy:
  // On mobile (inside dropdown), we rely on parent staggering if possible, or simple entry.
  // On desktop, we use scroll-triggered View.
  
  return (
    <motion.div
      ref={cardRef}
      initial={isMobile ? { opacity: 0, x: -20 } : { opacity: 0, y: 50 }}
      whileInView={!isMobile ? { opacity: 1, y: 0 } : undefined}
      animate={isMobile ? { opacity: 1, x: 0 } : undefined}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: isMobile ? index * 0.1 : index * 0.1 }}
      whileHover={{ 
        y: -10, 
        transition: { type: "spring", stiffness: 300 } 
      }}
      className="bg-[#1F4030] p-6 rounded-2xl border border-white/5 relative group h-full flex flex-col justify-between"
    >
      {/* Background Glow on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />

      <div>
        {/* Header: Logo/Platform & Rating */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2 font-bold text-lg text-[#f2f0e9]">
            <PlatformIcon platform={data.platform} />
            <span>{data.platform}</span>
          </div>
          <div className="flex items-center gap-1 bg-white/10 px-2 py-1 rounded-md">
             <span className="font-mono font-bold text-[#f2f0e9] text-sm">{data.rating.toFixed(1)}</span>
             <Star size={14} className="fill-[#CF7696] text-[#CF7696]" />
          </div>
        </div>

        {/* Quote */}
        <div className="mb-8 relative">
          <Quote className="absolute -top-2 -left-2 w-6 h-6 text-[#8CB59E]/20 rotate-180" />
          <p className="text-[#a3c9c7] leading-relaxed relative z-10 pl-2">
            "{data.text}"
          </p>
        </div>
      </div>

      {/* Footer: User Profile */}
      <div className="flex items-center gap-3 pt-4 border-t border-white/5">
        <img 
            src={data.avatar} 
            alt={data.client} 
            className="w-10 h-10 rounded-full object-cover border border-white/10"
        />
        <div>
            <h4 className="text-[#f2f0e9] font-bold text-sm">{data.client}</h4>
            <p className="text-xs text-[#8CB59E]">{data.handle}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Testimonials: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="py-24 bg-[#163023] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#CF7696]/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-display text-[#f2f0e9] mb-4"
          >
            Client <span className="text-[#CF7696] bg-[#f2f0e9] text-black px-2 transform -rotate-2 inline-block rounded-sm">Stories</span>
          </motion.h2>
          <p className="text-[#a3c9c7] max-w-xl mx-auto">
            Real experiences from real people. We take pride in our craft and our community.
          </p>
        </div>

        {/* Mobile Toggle Button (Visible only on mobile) */}
        {!isDesktop && (
            <div className="flex justify-center mb-8 relative z-20">
                <motion.button
                    onClick={() => setIsExpanded(!isExpanded)}
                    whileTap={{ scale: 0.95 }}
                    className="relative group bg-[#1F4030] text-[#f2f0e9] border border-[#8CB59E]/30 px-8 py-4 rounded-full flex items-center gap-4 shadow-lg hover:shadow-[#8CB59E]/20 hover:border-[#8CB59E] transition-all duration-300"
                >
                    <span className="font-display tracking-widest text-xl uppercase">
                        {isExpanded ? 'Close Stories' : 'Read Stories'}
                    </span>
                    
                    {/* Animated Chevron Circle */}
                    <div className="w-8 h-8 rounded-full bg-[#8CB59E] text-[#163023] flex items-center justify-center">
                        <motion.div
                            animate={{ rotate: isExpanded ? 180 : 0 }}
                            transition={{ type: "spring", stiffness: 200, damping: 15 }}
                        >
                            <ChevronDown size={20} />
                        </motion.div>
                    </div>

                    {/* Button Glow Effect */}
                    <div className="absolute inset-0 rounded-full bg-[#8CB59E]/10 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.button>
            </div>
        )}

        {/* Content Container - Handles Animated Expansion on Mobile */}
        <motion.div
            layout
            initial={isDesktop ? "open" : "collapsed"}
            animate={isDesktop ? "open" : (isExpanded ? "open" : "collapsed")}
            variants={{
                open: { 
                    height: "auto", 
                    opacity: 1,
                    transition: { duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] } 
                },
                collapsed: { 
                    height: 0, 
                    opacity: 0,
                    transition: { duration: 0.3, ease: "easeInOut" }
                }
            }}
            className="overflow-hidden md:overflow-visible"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-4 md:pb-0">
                {TESTIMONIALS.map((testimonial, index) => (
                    <TestimonialCard 
                        key={testimonial.id} 
                        data={testimonial} 
                        index={index} 
                        isMobile={!isDesktop}
                    />
                ))}
            </div>
            
            {/* Fade effect at the bottom when collapsing on mobile (optional visual flair) */}
            {!isDesktop && isExpanded && (
                <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    transition={{ delay: 0.3 }}
                    className="h-8 bg-gradient-to-t from-[#163023] to-transparent w-full" 
                />
            )}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
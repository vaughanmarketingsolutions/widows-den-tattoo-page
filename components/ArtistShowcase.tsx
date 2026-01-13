import React from 'react';
import { motion } from 'framer-motion';
import { Artist } from '../types';
import BrutalButton from './ui/BrutalButton';
import { ArrowRight, Instagram, Facebook } from 'lucide-react';

interface Props {
  artist: Artist;
  reversed?: boolean;
  onBook: () => void;
  onViewGallery: () => void;
}

const ArtistShowcase: React.FC<Props> = ({ artist, reversed = false, onBook, onViewGallery }) => {
  const bgClass = artist.themeColor === 'teal' ? 'bg-[#8CB59E]' : 'bg-[#CF7696]';
  
  // Card Container Variants - Straightened out (rotate: 0)
  const cardVariants = {
    offscreen: { y: 50, opacity: 0, rotate: 0 },
    onscreen: { 
      y: 0, 
      opacity: 1, 
      rotate: 0,
      transition: { type: "spring", bounce: 0.2, duration: 0.6 }
    }
  };

  return (
    <section className="py-12 md:py-16 px-4 md:px-8 relative z-10">
      <motion.div 
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-5xl mx-auto"
      >
        <motion.div 
          variants={cardVariants}
          className="relative rounded-[1.5rem] md:rounded-[2.5rem] p-5 md:p-10 bg-[#f2f0e9] text-[#050505] overflow-hidden shadow-xl"
        >
          <div className={`flex flex-col lg:flex-row gap-8 md:gap-12 items-center ${reversed ? 'lg:flex-row-reverse' : ''}`}>
            
            {/* Left/Image Section */}
            <div className="w-full lg:w-2/5 flex flex-col gap-4">
              <div className="relative">
                <div className="absolute inset-0 bg-black rounded-[1.5rem] md:rounded-[2rem] translate-y-1.5 translate-x-1.5"></div>
                <div className="relative rounded-[1.5rem] md:rounded-[2rem] overflow-hidden border-4 border-black bg-black aspect-square">
                  <img src={artist.image} alt={artist.name} className="w-full h-full object-cover" />
                </div>
                {/* Sticker badge */}
                 <div className="absolute -top-3 -right-3 bg-black text-[#f2f0e9] rounded-full w-16 h-16 md:w-20 md:h-20 flex items-center justify-center font-display text-lg md:text-xl rotate-12 z-20 border-4 border-[#f2f0e9]">
                  {artist.name}
                </div>
              </div>
              
              <div className="hidden lg:block">
                 <h3 className="font-display text-2xl mb-2">PORTFOLIO</h3>
                 <div className="grid grid-cols-3 gap-2">
                    {artist.portfolio.map((img, i) => (
                      <div key={i} className="rounded-lg overflow-hidden border-2 border-black aspect-square">
                        <img src={img} alt="work" className="w-full h-full object-cover" />
                      </div>
                    ))}
                 </div>
              </div>
            </div>

            {/* Right/Info Section */}
            <div className="w-full lg:w-3/5 flex flex-col gap-6">
              <div className="flex justify-between items-start border-b-2 border-black pb-4">
                <div>
                    <h2 className="font-display text-5xl md:text-7xl leading-none mb-1">{artist.name.toUpperCase()}</h2>
                    <p className="font-serif italic text-base md:text-lg opacity-80 leading-snug">"{artist.bio}"</p>
                </div>
                {artist.instagram && (
                  <a 
                    href={artist.instagram} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="shrink-0"
                  >
                    <Instagram className="w-8 h-8 border-2 border-black rounded-full p-1 hover:bg-black hover:text-white transition-colors cursor-pointer" />
                  </a>
                )}
                {artist.facebook && (
                  <a 
                    href={artist.facebook} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="shrink-0"
                  >
                    <Facebook className="w-8 h-8 border-2 border-black rounded-full p-1 hover:bg-black hover:text-white transition-colors cursor-pointer" />
                  </a>
                )}
              </div>

              {/* Stats Grid - Simplified and Rate Removed */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 <div className="bg-black text-[#f2f0e9] p-5 rounded-[1.5rem] flex flex-col justify-between min-h-[100px] hover:scale-[1.02] transition-transform duration-300">
                    <span className="font-bold opacity-60 uppercase tracking-widest text-[10px]">Specialization</span>
                    <span className="font-display text-3xl">{artist.style}</span>
                 </div>
                 
                 <div className={`${bgClass} border-4 border-black p-5 rounded-[1.5rem] flex flex-col justify-between min-h-[100px] text-black hover:scale-[1.02] transition-transform duration-300`}>
                    <span className="font-bold opacity-70 uppercase tracking-widest text-[10px]">Availability</span>
                    <span className="font-display text-3xl">{artist.availability}</span>
                 </div>
              </div>

              {/* Mobile Portfolio */}
               <div className="lg:hidden">
                 <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
                    {artist.portfolio.map((img, i) => (
                      <div key={i} className="min-w-[80px] rounded-lg overflow-hidden border-2 border-black aspect-square">
                        <img src={img} alt="work" className="w-full h-full object-cover" />
                      </div>
                    ))}
                 </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col md:flex-row gap-3 mt-4">
                  <BrutalButton 
                    variant={artist.themeColor === 'teal' ? 'teal' : 'orange'} 
                    size="md" 
                    className="flex-1 w-full flex items-center justify-center gap-2 text-xl"
                    onClick={onBook}
                  >
                     Book Appointment
                  </BrutalButton>

                  <BrutalButton 
                    variant="black" 
                    size="md" 
                    className="w-full md:w-auto flex items-center justify-center gap-2"
                    onClick={onViewGallery}
                  >
                     View Work <ArrowRight className="w-4 h-4" />
                  </BrutalButton>
              </div>

            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ArtistShowcase;
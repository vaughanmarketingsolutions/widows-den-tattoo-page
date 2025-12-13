import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Artist } from '../types';
import BrutalButton from './ui/BrutalButton';
import { ArrowRight, Instagram } from 'lucide-react';

interface Props {
  artist: Artist;
  reversed?: boolean;
  onBook: () => void;
  onViewGallery: () => void;
}

const ArtistShowcase: React.FC<Props> = ({ artist, reversed = false, onBook, onViewGallery }) => {
  const bgClass = artist.themeColor === 'teal' ? 'bg-[#8CB59E]' : 'bg-[#CF7696]';
  const textClass = 'text-black'; // Contrast on colors is black
  
  // Card Container Variants
  const cardVariants = {
    offscreen: { y: 100, opacity: 0, rotate: reversed ? -2 : 2 },
    onscreen: { 
      y: 0, 
      opacity: 1, 
      rotate: reversed ? -2 : 2,
      transition: { type: "spring", bounce: 0.4, duration: 0.8 }
    }
  };

  return (
    <section className="py-24 px-4 md:px-8 relative z-10">
      <motion.div 
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-6xl mx-auto"
      >
        {/* Main "Artist of the Day" style card */}
        <motion.div 
          variants={cardVariants}
          className={`relative rounded-[2.5rem] p-6 md:p-12 ${artist.themeColor === 'bone' ? 'bg-[#f2f0e9]' : 'bg-[#f2f0e9]'} text-[#050505] overflow-hidden`}
        >
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            
            {/* Left/Image Section */}
            <div className={`w-full lg:w-1/3 flex flex-col gap-6 ${reversed ? 'lg:order-2' : ''}`}>
              <div className="relative group">
                <div className="absolute inset-0 bg-black rounded-[2rem] translate-y-2 translate-x-2 transition-transform duration-300 group-hover:translate-x-4 group-hover:translate-y-4"></div>
                <div className="relative rounded-[2rem] overflow-hidden border-4 border-black bg-black aspect-square">
                  <img src={artist.image} alt={artist.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                </div>
                {/* Sticker badge */}
                 <div className="absolute -top-4 -right-4 bg-black text-[#f2f0e9] rounded-full w-20 h-20 flex items-center justify-center font-display text-xl rotate-12 z-20 border-4 border-[#f2f0e9]">
                  {artist.name}
                </div>
              </div>
              
              <div className="hidden lg:block">
                 <h3 className="font-display text-4xl mb-2">WORKS</h3>
                 <div className="grid grid-cols-3 gap-2">
                    {artist.portfolio.map((img, i) => (
                      <div key={i} className="rounded-xl overflow-hidden border-2 border-black aspect-square cursor-pointer hover:scale-105 transition-transform">
                        <img src={img} alt="work" className="w-full h-full object-cover" />
                      </div>
                    ))}
                 </div>
              </div>
            </div>

            {/* Right/Info Section */}
            <div className="w-full lg:w-2/3 flex flex-col gap-8">
              <div className="flex justify-between items-start border-b-4 border-black pb-6">
                <div>
                    <h2 className="font-display text-6xl md:text-8xl leading-none mb-2">{artist.name.toUpperCase()}</h2>
                    <p className="font-serif italic text-xl opacity-80">"{artist.bio}"</p>
                </div>
                <Instagram className="w-10 h-10 border-2 border-black rounded-full p-1 hover:bg-black hover:text-white transition-colors cursor-pointer" />
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="bg-black text-[#f2f0e9] p-6 rounded-[2rem] flex flex-col justify-between min-h-[160px] hover:-translate-y-2 transition-transform duration-300">
                    <span className="font-bold opacity-60 uppercase tracking-widest text-xs">Style</span>
                    <span className="font-display text-4xl">{artist.style}</span>
                 </div>
                 
                 <div className={`${bgClass} border-4 border-black p-6 rounded-[2rem] flex flex-col justify-between min-h-[160px] text-black hover:-translate-y-2 transition-transform duration-300`}>
                    <div className="flex justify-between items-start">
                        <span className="font-bold opacity-70 uppercase tracking-widest text-xs">Rate</span>
                        <span className="font-display text-2xl">{artist.rate}</span>
                    </div>
                     <span className="font-display text-3xl">{artist.availability}</span>
                 </div>
              </div>

              {/* Mobile Portfolio (Visible only on small screens) */}
               <div className="lg:hidden">
                 <h3 className="font-display text-3xl mb-2">Selected Works</h3>
                 <div className="flex gap-2 overflow-x-auto pb-4 no-scrollbar">
                    {artist.portfolio.map((img, i) => (
                      <div key={i} className="min-w-[100px] rounded-xl overflow-hidden border-2 border-black aspect-square">
                        <img src={img} alt="work" className="w-full h-full object-cover" />
                      </div>
                    ))}
                 </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col md:flex-row gap-4 mt-8">
                  {/* "Book With Name" - Fills space on left */}
                  <BrutalButton 
                    variant={artist.themeColor === 'teal' ? 'teal' : 'orange'} 
                    size="lg" 
                    className="flex-1 w-full flex items-center justify-center gap-2 text-2xl md:text-3xl"
                    onClick={onBook}
                  >
                     Book With {artist.name}
                  </BrutalButton>

                  {/* "View Gallery" - Replaces original button, sits on right */}
                  <BrutalButton 
                    variant="black" 
                    size="lg" 
                    className="w-full md:w-auto flex items-center justify-center gap-2"
                    onClick={onViewGallery}
                  >
                     View Gallery <ArrowRight className="w-5 h-5" />
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
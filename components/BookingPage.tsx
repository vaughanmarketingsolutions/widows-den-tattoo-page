import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import BrutalButton from './ui/BrutalButton';
import { ARTISTS } from '../constants';

interface BookingPageProps {
  preSelectedArtistId?: string | null;
  onBack: () => void;
}

const REDIRECTS: Record<string, string> = {
  ryn: 'https://book.heygoldie.com/Ryn-Ink/checkout',
  jeperti: 'https://book.heygoldie.com/WIDOWS-DEN-TATTOO/checkout'
};

const BookingPage: React.FC<BookingPageProps> = ({ onBack }) => {
  const handleRedirect = (artistId: string) => {
    const url = REDIRECTS[artistId];
    if (url) {
      window.location.href = url;
    }
  };

  return (
    <div className="min-h-screen pt-32 px-4 pb-20 flex flex-col items-center justify-start relative z-20 bg-[#163023]">
      
      {/* Header Area */}
      <div className="w-full max-w-5xl mb-12 text-center">
        <motion.button 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={onBack}
          className="flex items-center gap-2 text-[#8CB59E] hover:text-[#f2f0e9] transition-colors uppercase tracking-[0.2em] text-sm font-bold mb-8 mx-auto"
        >
          <ArrowLeft size={16} /> Back to Studio
        </motion.button>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-6xl md:text-8xl text-[#f2f0e9] uppercase tracking-tighter mb-4"
        >
          Choose Your <span className="text-[#CF7696]">Artist</span>
        </motion.h1>
        <p className="text-[#a3c9c7] text-lg md:text-xl font-serif italic max-w-2xl mx-auto">
          Select an artist below to view their schedule and secure your appointment through our booking platform.
        </p>
      </div>

      {/* Artist Selection Grid */}
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {ARTISTS.map((artist, index) => (
          <motion.div
            key={artist.id}
            initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + (index * 0.1) }}
            className="relative group bg-[#1F4030] rounded-[2rem] overflow-hidden border-2 border-white/5 hover:border-[#CF7696]/30 transition-all duration-500 shadow-2xl"
          >
            {/* Background Image Container */}
            <div className="aspect-[4/5] relative overflow-hidden">
              <img 
                src={artist.image} 
                alt={artist.name} 
                className="w-full h-full object-cover grayscale brightness-75 transition-all duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#163023] via-transparent to-transparent opacity-90" />
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10">
              <div className="mb-6">
                <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-3 ${artist.themeColor === 'teal' ? 'bg-[#8CB59E] text-[#163023]' : 'bg-[#CF7696] text-black'}`}>
                  {artist.style}
                </span>
                <h3 className="font-display text-5xl md:text-6xl text-[#f2f0e9] leading-none mb-2">
                  {artist.name}
                </h3>
                <p className="text-[#a3c9c7] text-sm md:text-base font-serif italic line-clamp-2 opacity-80">
                  {artist.bio}
                </p>
              </div>

              <BrutalButton 
                variant={artist.themeColor === 'teal' ? 'teal' : 'orange'} 
                className="w-full flex items-center justify-center gap-2 group/btn"
                size="lg"
                onClick={() => handleRedirect(artist.id)}
              >
                Book with {artist.name} <ExternalLink size={20} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
              </BrutalButton>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer Note */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-16 text-center text-[#a3c9c7]/40 text-xs uppercase tracking-[0.3em]"
      >
        You will be redirected to our secure booking partner
      </motion.div>
    </div>
  );
};

export default BookingPage;
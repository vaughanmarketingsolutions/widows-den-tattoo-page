import React from 'react';
import { motion } from 'framer-motion';
import { ARTISTS } from '../constants';
import BrutalButton from './ui/BrutalButton';
import { ArrowUpRight, Instagram, Mail } from 'lucide-react';

interface ArtistsPageProps {
  onBook: (artistId: string) => void;
}

const ArtistsPage: React.FC<ArtistsPageProps> = ({ onBook }) => {
  return (
    <div className="pt-32 pb-20 px-4 min-h-screen relative z-10">
      
      {/* Page Title */}
      <div className="text-center mb-24 relative">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-display text-6xl md:text-9xl text-[#f2f0e9] uppercase tracking-tighter"
        >
          The Artists
        </motion.h1>
        <div className="w-24 h-1 bg-[#CF7696] mx-auto mt-6" />
      </div>

      <div className="max-w-7xl mx-auto flex flex-col gap-32">
        {ARTISTS.map((artist, index) => {
            const isEven = index % 2 === 0;
            const accentColor = artist.themeColor === 'teal' ? '#8CB59E' : '#CF7696';

            return (
                <motion.div 
                    key={artist.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-start`}
                >
                    {/* Image Section */}
                    <div className="w-full lg:w-1/2 relative group">
                        <div className={`absolute inset-0 translate-x-4 translate-y-4 rounded-[2rem] border-4 border-[#f2f0e9] opacity-30 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-500`} style={{ borderColor: accentColor }} />
                        <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[3/4]">
                            <img 
                                src={artist.image} 
                                alt={artist.name} 
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                            />
                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center h-full pt-8">
                        <div className="flex items-center gap-4 mb-4">
                            <h2 className="font-display text-7xl md:text-8xl text-[#f2f0e9]">{artist.name}</h2>
                            <div className="h-[2px] grow bg-white/20" />
                        </div>
                        
                        <p className={`font-display text-2xl tracking-widest mb-8`} style={{ color: accentColor }}>
                            {artist.style}
                        </p>

                        <p className="text-xl leading-relaxed text-[#a3c9c7] mb-8 font-serif">
                            {artist.fullBio || artist.bio}
                        </p>

                        <div className="flex flex-wrap gap-4 mb-12">
                            <div className="bg-[#1F4030] px-6 py-3 rounded-xl border border-white/5">
                                <span className="block text-xs uppercase tracking-wider opacity-60 mb-1">Experience</span>
                                <span className="font-bold text-lg">8+ Years</span>
                            </div>
                            <div className="bg-[#1F4030] px-6 py-3 rounded-xl border border-white/5">
                                <span className="block text-xs uppercase tracking-wider opacity-60 mb-1">Rate</span>
                                <span className="font-bold text-lg">{artist.rate}</span>
                            </div>
                            <div className="bg-[#1F4030] px-6 py-3 rounded-xl border border-white/5">
                                <span className="block text-xs uppercase tracking-wider opacity-60 mb-1">Status</span>
                                <span className="font-bold text-lg text-[#f2f0e9]">{artist.availability}</span>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <BrutalButton 
                                variant={artist.themeColor === 'teal' ? 'teal' : 'orange'} 
                                className="flex-1"
                                onClick={() => onBook(artist.id)}
                            >
                                Book Appointment
                            </BrutalButton>
                            <button className="bg-transparent border-2 border-[#f2f0e9] text-[#f2f0e9] px-6 rounded-md hover:bg-[#f2f0e9] hover:text-black transition-all duration-300">
                                <Instagram className="w-6 h-6" />
                            </button>
                        </div>
                    </div>
                </motion.div>
            );
        })}
      </div>

      {/* Decorative Bottom */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#163023] to-transparent pointer-events-none" />
    </div>
  );
};

export default ArtistsPage;
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const GALLERY_ITEMS = [
  // Ryn's Work
  { id: 101, src: 'https://i.imgur.com/9CJgcOY.png', artist: 'Ryn' },
  { id: 102, src: 'https://i.imgur.com/9I60LuV.png', artist: 'Ryn' },
  { id: 103, src: 'https://i.imgur.com/aXE3o1s.png', artist: 'Ryn' },
  { id: 104, src: 'https://i.imgur.com/XCayjMA.png', artist: 'Ryn' },
  { id: 105, src: 'https://i.imgur.com/2fIzf6u.png', artist: 'Ryn' },
  { id: 106, src: 'https://i.imgur.com/x34LYOt.png', artist: 'Ryn' },
  { id: 107, src: 'https://i.imgur.com/zyMF0JW.png', artist: 'Ryn' },
  { id: 108, src: 'https://i.imgur.com/p1DhgcQ.png', artist: 'Ryn' },

  // Jeperti's Work
  { id: 201, src: 'https://i.imgur.com/Wfb3no2.png', artist: 'Jeperti' },
  { id: 202, src: 'https://i.imgur.com/jkxusvf.png', artist: 'Jeperti' },
  { id: 203, src: 'https://i.imgur.com/AmxIyAL.png', artist: 'Jeperti' },
  { id: 204, src: 'https://i.imgur.com/Ch8jfLI.png', artist: 'Jeperti' },
  { id: 205, src: 'https://i.imgur.com/BOJKfE1.png', artist: 'Jeperti' },
  { id: 206, src: 'https://i.imgur.com/AuqPsYX.png', artist: 'Jeperti' },
  { id: 207, src: 'https://i.imgur.com/vNCwnwe.png', artist: 'Jeperti' },
  { id: 208, src: 'https://i.imgur.com/Wfhhq1g.png', artist: 'Jeperti' },
];

const GalleryPage: React.FC = () => {
    const [filter, setFilter] = useState<'All' | 'Ryn' | 'Jeperti'>('All');

    const filteredItems = filter === 'All' 
        ? GALLERY_ITEMS 
        : GALLERY_ITEMS.filter(item => item.artist === filter);

    return (
        <div className="pt-32 pb-20 px-2 md:px-4 min-h-screen relative z-10 bg-[#163023]">
            {/* Header */}
            <div className="text-center mb-12">
                 <motion.h1 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="font-display text-5xl md:text-8xl text-[#f2f0e9] uppercase tracking-tighter"
                >
                    Inked Reality
                </motion.h1>
                
                {/* Artist Filter Tabs */}
                <div className="flex justify-center gap-2 mt-6">
                    {['All', 'Ryn', 'Jeperti'].map((f) => (
                        <button
                            key={f}
                            onClick={() => setFilter(f as any)}
                            className={`px-5 py-1.5 rounded-full border text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                                filter === f 
                                ? 'bg-[#f2f0e9] text-black border-[#f2f0e9]' 
                                : 'border-white/10 text-[#a3c9c7] hover:border-[#CF7696] hover:text-[#f2f0e9]'
                            }`}
                        >
                            {f}
                        </button>
                    ))}
                </div>
            </div>

            {/* Compact Masonry Grid */}
            <div className="max-w-[1600px] mx-auto columns-2 md:columns-4 lg:columns-5 gap-1.5 space-y-1.5">
                <AnimatePresence mode="popLayout">
                    {filteredItems.map((item) => (
                        <motion.div
                            key={item.id}
                            layout
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="break-inside-avoid relative overflow-hidden bg-[#1F4030] rounded-sm"
                        >
                            <img 
                                src={item.src} 
                                alt={`Tattoo by ${item.artist}`} 
                                className="w-full h-auto object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-500 block" 
                            />
                            
                            {/* Subtle non-interactive artist tag for context */}
                            <div className="absolute bottom-1 right-1 px-1.5 py-0.5 bg-black/40 backdrop-blur-sm rounded-sm pointer-events-none">
                                <span className={`text-[9px] font-bold uppercase tracking-tighter ${item.artist === 'Ryn' ? 'text-[#CF7696]' : 'text-[#8CB59E]'}`}>
                                    {item.artist}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {/* Decorative Bottom Area */}
            <div className="text-center mt-16 pb-8">
                <p className="text-[#a3c9c7]/40 text-xs uppercase tracking-[0.4em]">
                    End of Portfolio
                </p>
            </div>
            
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#163023] to-transparent pointer-events-none" />
        </div>
    );
};

export default GalleryPage;
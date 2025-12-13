import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const GALLERY_ITEMS = [
  // Ryn's Work
  {
    id: 101,
    src: 'https://i.imgur.com/9CJgcOY.png',
    artist: 'Ryn',
  },
  {
    id: 102,
    src: 'https://i.imgur.com/9I60LuV.png',
    artist: 'Ryn',
  },
  {
    id: 103,
    src: 'https://i.imgur.com/aXE3o1s.png',
    artist: 'Ryn',
  },
  {
    id: 104,
    src: 'https://i.imgur.com/XCayjMA.png',
    artist: 'Ryn',
  },
  {
    id: 105,
    src: 'https://i.imgur.com/2fIzf6u.png',
    artist: 'Ryn',
  },
  {
    id: 106,
    src: 'https://i.imgur.com/x34LYOt.png',
    artist: 'Ryn',
  },
  {
    id: 107,
    src: 'https://i.imgur.com/zyMF0JW.png',
    artist: 'Ryn',
  },
  {
    id: 108,
    src: 'https://i.imgur.com/p1DhgcQ.png',
    artist: 'Ryn',
  },

  // Jeperti's Work (formerly Laura)
  {
    id: 201,
    src: 'https://i.imgur.com/Wfb3no2.png',
    artist: 'Jeperti',
  },
  {
    id: 202,
    src: 'https://i.imgur.com/jkxusvf.png',
    artist: 'Jeperti',
  },
  {
    id: 203,
    src: 'https://i.imgur.com/AmxIyAL.png',
    artist: 'Jeperti',
  },
  {
    id: 204,
    src: 'https://i.imgur.com/Ch8jfLI.png',
    artist: 'Jeperti',
  },
  {
    id: 205,
    src: 'https://i.imgur.com/BOJKfE1.png',
    artist: 'Jeperti',
  },
  {
    id: 206,
    src: 'https://i.imgur.com/AuqPsYX.png',
    artist: 'Jeperti',
  },
  {
    id: 207,
    src: 'https://i.imgur.com/vNCwnwe.png',
    artist: 'Jeperti',
  },
  {
    id: 208,
    src: 'https://i.imgur.com/Wfhhq1g.png',
    artist: 'Jeperti',
  },
];

const GalleryPage: React.FC = () => {
    const [selectedItem, setSelectedItem] = useState<typeof GALLERY_ITEMS[0] | null>(null);
    const [filter, setFilter] = useState<'All' | 'Ryn' | 'Jeperti'>('All');

    const filteredItems = filter === 'All' 
        ? GALLERY_ITEMS 
        : GALLERY_ITEMS.filter(item => item.artist === filter);

    return (
        <div className="pt-32 pb-20 px-4 min-h-screen relative z-10">
            {/* Header */}
            <div className="text-center mb-16">
                 <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="font-display text-6xl md:text-9xl text-[#f2f0e9] uppercase tracking-tighter"
                >
                    Inked Reality
                </motion.h1>
                <div className="w-24 h-1 bg-[#8CB59E] mx-auto mt-6" />
                <p className="mt-6 text-[#a3c9c7] max-w-2xl mx-auto text-lg font-serif">
                    A curated collection of our finest work. Filter by artist to see specific styles.
                </p>

                {/* Filter Buttons */}
                <div className="flex justify-center gap-4 mt-8">
                    {['All', 'Ryn', 'Jeperti'].map((f) => (
                        <button
                            key={f}
                            onClick={() => setFilter(f as any)}
                            className={`px-6 py-2 rounded-full border transition-all duration-300 uppercase tracking-widest text-sm font-bold ${filter === f ? 'bg-[#f2f0e9] text-black border-[#f2f0e9]' : 'border-white/20 hover:border-[#CF7696] text-[#f2f0e9]'}`}
                        >
                            {f}
                        </button>
                    ))}
                </div>
            </div>

            {/* Masonry Grid */}
            <div className="max-w-7xl mx-auto columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                <AnimatePresence mode="popLayout">
                {filteredItems.map((item) => (
                    <motion.div
                        key={item.id}
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.4 }}
                        className="break-inside-avoid relative group rounded-2xl overflow-hidden cursor-pointer bg-[#1F4030]"
                        onClick={() => setSelectedItem(item)}
                    >
                        <img src={item.src} alt={`Tattoo by ${item.artist}`} className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105" />
                        
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                            <span className={`font-display text-6xl tracking-wider translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75 ${item.artist === 'Ryn' ? 'text-[#8CB59E]' : 'text-[#CF7696]'}`}>
                                {item.artist}
                            </span>
                        </div>
                    </motion.div>
                ))}
                </AnimatePresence>
            </div>
            
            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedItem && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
                        onClick={() => setSelectedItem(null)}
                    >
                        <button className="absolute top-8 right-8 text-white hover:text-[#CF7696] transition-colors z-10">
                            <X size={48} />
                        </button>
                        <div className="relative max-w-5xl w-full flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
                            <motion.img 
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                src={selectedItem.src} 
                                className="max-h-[80vh] rounded-lg shadow-2xl object-contain border border-white/10"
                            />
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="mt-8 text-center"
                            >
                                <p className={`font-display text-5xl uppercase tracking-widest font-bold ${selectedItem.artist === 'Ryn' ? 'text-[#8CB59E]' : 'text-[#CF7696]'}`}>
                                    by {selectedItem.artist}
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Decorative Bottom Gradient */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#163023] to-transparent pointer-events-none" />
        </div>
    )
}

export default GalleryPage;
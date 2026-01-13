import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ArtistShowcase from './components/ArtistShowcase';
import Testimonials from './components/Testimonials';
import LocationHours from './components/LocationHours';
import ArtistsPage from './components/ArtistsPage';
import GalleryPage from './components/GalleryPage';
import BookingPage from './components/BookingPage';
import PricingPage from './components/PricingPage';
import Footer from './components/Footer';
import { ARTISTS } from './constants';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const [view, setView] = useState<'home' | 'artists' | 'gallery' | 'booking' | 'pricing'>('home');
  const [preSelectedArtist, setPreSelectedArtist] = useState<string | null>(null);
  
  // Parallax background texture
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  // Page Transition Variants
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  const handleBook = (artistId?: string) => {
    if (artistId) setPreSelectedArtist(artistId);
    else setPreSelectedArtist(null);
    setView('booking');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-[#163023] text-[#f2f0e9] overflow-hidden">
      {/* Global Grain/Noise Texture */}
      <motion.div 
        style={{ y: bgY }}
        className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none"
      >
        <svg className='w-full h-full'>
            <filter id='noiseFilter'>
                <feTurbulence 
                    type='fractalNoise' 
                    baseFrequency='0.8' 
                    numOctaves='3' 
                    stitchTiles='stitch'/>
            </filter>
            <rect width='100%' height='100%' filter='url(#noiseFilter)'/>
        </svg>
      </motion.div>

      {/* Navigation */}
      {view !== 'booking' && <Navbar setView={setView} onBook={() => handleBook()} />}
      
      <main className="relative z-10">
        <AnimatePresence mode="wait">
          {view === 'home' && (
            <motion.div 
              key="home"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4 }}
            >
              <Hero onViewGallery={() => setView('gallery')} onBook={() => handleBook()} />
              
              {/* Artists Section on Home */}
              <div className="py-12 md:py-20 flex flex-col gap-0">
                  <div className="text-center mb-4 md:mb-8">
                      <span className="text-[#CF7696] uppercase tracking-[0.3em] text-xs md:text-sm font-bold drop-shadow-sm">The Talent</span>
                  </div>
                  {ARTISTS.map((artist, index) => (
                  <ArtistShowcase 
                      key={artist.id} 
                      artist={artist} 
                      reversed={index % 2 !== 0} 
                      onBook={() => handleBook(artist.id)}
                      onViewGallery={() => {
                          setView('gallery');
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                  />
                  ))}
              </div>

              <Testimonials />
              <LocationHours />
              
              {/* CTA Section */}
              <section className="py-24 md:py-32 px-4 text-center bg-[#f2f0e9] text-[#163023] rounded-t-[2rem] md:rounded-t-[3rem] relative z-20 mt-12 border-t-8 border-[#CF7696]">
                   <h2 className="font-display text-5xl md:text-9xl mb-8 leading-none">READY FOR<br/><span className="text-[#CF7696]">NEW INK?</span></h2>
                   <p className="max-w-xl mx-auto text-lg md:text-xl mb-10 md:mb-12 opacity-80 font-serif italic px-4">
                      We are an appointment-only studio. Let's make something permanent.
                   </p>
                   <button 
                    onClick={() => handleBook()}
                    className="bg-[#CF7696] text-black text-xl md:text-2xl px-10 md:px-12 py-5 md:py-6 rounded-full font-display uppercase tracking-wider hover:scale-105 transition-all duration-300 shadow-[0_10px_40px_rgba(207,118,150,0.4)] border-4 border-black"
                   >
                      Schedule Consultation
                   </button>
              </section>
            </motion.div>
          )}

          {view === 'artists' && (
            <motion.div
              key="artists"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4 }}
            >
              <ArtistsPage onBook={handleBook} />
            </motion.div>
          )}

          {view === 'gallery' && (
            <motion.div
              key="gallery"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4 }}
            >
              <GalleryPage />
            </motion.div>
          )}

          {view === 'pricing' && (
            <motion.div
              key="pricing"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4 }}
            >
              <PricingPage />
            </motion.div>
          )}

          {view === 'booking' && (
            <motion.div
                key="booking"
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.4 }}
            >
                <BookingPage 
                    preSelectedArtistId={preSelectedArtist} 
                    onBack={() => setView('home')} 
                />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {view !== 'booking' && <Footer />}
    </div>
  );
};

export default App;
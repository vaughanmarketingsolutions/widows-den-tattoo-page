import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Calendar, Check, Clock, Mail, User, Sparkles } from 'lucide-react';
import BrutalButton from './ui/BrutalButton';
import { ARTISTS } from '../constants';

interface BookingPageProps {
  preSelectedArtistId?: string | null;
  onBack: () => void;
}

const STEPS = ['Artist', 'Concept', 'Date', 'Details'];

const BookingPage: React.FC<BookingPageProps> = ({ preSelectedArtistId, onBack }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const [formData, setFormData] = useState({
    artistId: preSelectedArtistId || '',
    type: '',
    date: '',
    name: '',
    email: '',
    desc: ''
  });

  const handleNext = () => {
    setDirection(1);
    setCurrentStep((prev) => Math.min(prev + 1, STEPS.length));
  };

  const handleBack = () => {
    if (currentStep === 0) {
        onBack();
    } else {
        setDirection(-1);
        setCurrentStep((prev) => Math.max(prev - 1, 0));
    }
  };

  const updateField = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  // Animation Variants
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
      filter: 'blur(10px)',
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      filter: 'blur(0px)',
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 50 : -50,
      opacity: 0,
      filter: 'blur(10px)',
    }),
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ARTISTS.map((artist) => (
              <motion.div
                key={artist.id}
                whileHover={{ scale: 1.02, y: -5 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => updateField('artistId', artist.id)}
                className={`cursor-pointer rounded-2xl overflow-hidden border-2 relative group h-96 ${formData.artistId === artist.id ? 'border-[#CF7696] shadow-[0_0_30px_rgba(207,118,150,0.3)]' : 'border-white/10'}`}
              >
                <img src={artist.image} alt={artist.name} className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="font-display text-4xl text-[#f2f0e9]">{artist.name}</h3>
                  <p className="text-[#8CB59E]">{artist.style}</p>
                </div>
                {formData.artistId === artist.id && (
                    <div className="absolute top-4 right-4 bg-[#CF7696] text-black p-2 rounded-full">
                        <Check size={20} />
                    </div>
                )}
              </motion.div>
            ))}
            {/* No Preference Option */}
            <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => updateField('artistId', 'any')}
                className={`cursor-pointer rounded-2xl border-2 border-dashed flex flex-col items-center justify-center gap-4 h-96 bg-[#1F4030]/50 ${formData.artistId === 'any' ? 'border-[#8CB59E] bg-[#8CB59E]/20' : 'border-white/10 hover:border-white/30'}`}
            >
                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center">
                    <Sparkles className="text-[#f2f0e9]" />
                </div>
                <h3 className="font-display text-3xl text-[#f2f0e9] opacity-80">First Available</h3>
            </motion.div>
          </div>
        );
      case 1:
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {['Custom Design', 'Flash Piece', 'Touch Up', 'Consultation'].map((type) => (
               <motion.button
                key={type}
                whileHover={{ x: 10, backgroundColor: 'rgba(255,255,255,0.05)' }}
                whileTap={{ scale: 0.98 }}
                onClick={() => updateField('type', type)}
                className={`p-6 text-left rounded-xl border transition-all duration-300 flex justify-between items-center ${formData.type === type ? 'border-[#CF7696] bg-[#CF7696]/10' : 'border-white/10 bg-[#1F4030]'}`}
               >
                 <span className="font-display text-2xl tracking-wide">{type}</span>
                 {formData.type === type && <Check className="text-[#CF7696]" />}
               </motion.button>
            ))}
             <div className="md:col-span-2 mt-4">
                <label className="block text-[#8CB59E] text-sm uppercase tracking-widest mb-2 font-bold">Placement & Size Idea</label>
                <textarea 
                    value={formData.desc}
                    onChange={(e) => updateField('desc', e.target.value)}
                    placeholder="e.g., Left forearm, roughly 5 inches, black and grey..."
                    className="w-full bg-[#1F4030] border border-white/10 rounded-xl p-4 text-[#f2f0e9] focus:outline-none focus:border-[#8CB59E] min-h-[120px]"
                />
             </div>
          </div>
        );
      case 2:
        return (
            <div className="bg-[#1F4030] p-6 rounded-3xl border border-white/5">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="font-display text-2xl">October 2023</h3>
                    <div className="flex gap-2">
                        <button className="p-2 hover:bg-white/10 rounded-full"><ArrowLeft size={18}/></button>
                        <button className="p-2 hover:bg-white/10 rounded-full"><ArrowRight size={18}/></button>
                    </div>
                </div>
                <div className="grid grid-cols-7 gap-2 mb-2 text-center text-[#8CB59E] text-xs font-bold uppercase tracking-wider">
                    {['Su','Mo','Tu','We','Th','Fr','Sa'].map(d => <div key={d}>{d}</div>)}
                </div>
                <div className="grid grid-cols-7 gap-2">
                    {Array.from({length: 31}).map((_, i) => {
                        const day = i + 1;
                        // Mock disabled/booked days
                        const isBooked = [2, 5, 12, 15, 22].includes(day); 
                        const isSelected = formData.date === `Oct ${day}`;
                        
                        return (
                            <button
                                key={i}
                                disabled={isBooked}
                                onClick={() => updateField('date', `Oct ${day}`)}
                                className={`aspect-square rounded-lg flex items-center justify-center text-sm font-bold transition-all relative
                                    ${isBooked ? 'opacity-20 cursor-not-allowed' : 'hover:bg-white/10'}
                                    ${isSelected ? 'bg-[#CF7696] text-black hover:bg-[#CF7696]' : ''}
                                `}
                            >
                                {day}
                                {!isBooked && !isSelected && (
                                    <div className="absolute bottom-1 w-1 h-1 bg-[#8CB59E] rounded-full" />
                                )}
                            </button>
                        )
                    })}
                </div>
                {formData.date && (
                    <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-6 pt-6 border-t border-white/10"
                    >
                        <h4 className="text-sm text-[#8CB59E] uppercase tracking-widest mb-3">Available Slots</h4>
                        <div className="flex flex-wrap gap-2">
                            {['11:00 AM', '2:00 PM', '5:00 PM'].map(time => (
                                <button key={time} className="px-4 py-2 rounded-full border border-white/20 text-sm hover:border-[#CF7696] hover:text-[#CF7696] transition-colors">
                                    {time}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </div>
        );
      case 3:
        return (
            <div className="space-y-6">
                <div className="space-y-2">
                    <label className="flex items-center gap-2 text-[#8CB59E] text-sm uppercase tracking-widest font-bold">
                        <User size={16} /> Full Name
                    </label>
                    <input 
                        type="text" 
                        value={formData.name}
                        onChange={(e) => updateField('name', e.target.value)}
                        className="w-full bg-transparent border-b-2 border-white/20 py-3 text-xl text-[#f2f0e9] focus:outline-none focus:border-[#CF7696] transition-colors"
                        placeholder="Enter your name"
                    />
                </div>
                <div className="space-y-2">
                    <label className="flex items-center gap-2 text-[#8CB59E] text-sm uppercase tracking-widest font-bold">
                        <Mail size={16} /> Email Address
                    </label>
                    <input 
                        type="email" 
                        value={formData.email}
                        onChange={(e) => updateField('email', e.target.value)}
                        className="w-full bg-transparent border-b-2 border-white/20 py-3 text-xl text-[#f2f0e9] focus:outline-none focus:border-[#CF7696] transition-colors"
                        placeholder="Enter your email"
                    />
                </div>
                
                <div className="bg-[#1F4030]/50 p-6 rounded-xl mt-8 flex gap-4 items-start">
                    <div className="bg-[#CF7696]/20 p-2 rounded-full text-[#CF7696]">
                        <Clock size={20} />
                    </div>
                    <div>
                        <h4 className="font-bold text-[#f2f0e9]">Deposit Policy</h4>
                        <p className="text-sm text-[#a3c9c7] mt-1">
                            A $50 non-refundable deposit is required to secure your appointment. This will be deducted from the final price of your tattoo.
                        </p>
                    </div>
                </div>
            </div>
        );
      case 4: // Success
        return (
            <div className="text-center py-12">
                <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className="w-24 h-24 bg-[#8CB59E] rounded-full flex items-center justify-center mx-auto mb-8"
                >
                    <Check size={48} className="text-[#163023]" />
                </motion.div>
                <h2 className="font-display text-6xl text-[#f2f0e9] mb-4">Request Sent</h2>
                <p className="text-[#a3c9c7] text-lg max-w-md mx-auto mb-8">
                    We've received your booking request. An artist will review your concept and confirm the appointment via email shortly.
                </p>
                <BrutalButton onClick={() => window.location.reload()} variant="bone">Back Home</BrutalButton>
            </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen pt-24 px-4 pb-12 flex flex-col items-center justify-center relative z-20">
       
       {currentStep < 4 && (
        <div className="w-full max-w-5xl mb-12">
             {/* Progress Bar */}
             <div className="flex justify-between items-end mb-4">
                <h1 className="font-display text-5xl md:text-7xl text-[#f2f0e9] leading-none">
                    <span className="text-[#CF7696] mr-4">0{currentStep + 1}</span>
                    {STEPS[currentStep]}
                </h1>
                <div className="hidden md:flex gap-2">
                    {STEPS.map((step, idx) => (
                        <div key={step} className={`h-2 w-12 rounded-full transition-colors duration-500 ${idx <= currentStep ? 'bg-[#8CB59E]' : 'bg-white/10'}`} />
                    ))}
                </div>
             </div>
             <div className="h-[1px] w-full bg-white/10" />
        </div>
       )}

      <div className="w-full max-w-5xl flex flex-col md:flex-row gap-12">
        {/* Left Side: Summary (Hidden on Step 0 or Success) */}
        {currentStep > 0 && currentStep < 4 && (
            <div className="hidden md:block w-1/3">
                <div className="sticky top-32 space-y-8">
                    <div className="space-y-2">
                        <span className="text-xs uppercase tracking-widest text-white/40">Artist</span>
                        <div className="text-2xl font-display text-[#8CB59E]">
                            {ARTISTS.find(a => a.id === formData.artistId)?.name || 'First Available'}
                        </div>
                    </div>
                    {formData.type && (
                        <div className="space-y-2">
                            <span className="text-xs uppercase tracking-widest text-white/40">Service</span>
                            <div className="text-2xl font-display text-[#f2f0e9]">{formData.type}</div>
                        </div>
                    )}
                    {formData.date && (
                         <div className="space-y-2">
                            <span className="text-xs uppercase tracking-widest text-white/40">Date</span>
                            <div className="text-2xl font-display text-[#CF7696]">{formData.date}</div>
                        </div>
                    )}
                </div>
            </div>
        )}

        {/* Right Side: Form Area */}
        <div className={`${currentStep === 0 || currentStep === 4 ? 'w-full' : 'w-full md:w-2/3'}`}>
            <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                    key={currentStep}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.4, ease: "anticipate" }}
                    className="min-h-[400px]"
                >
                    {renderStep()}
                </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            {currentStep < 4 && (
                <div className="flex justify-between items-center mt-12 pt-8 border-t border-white/5">
                    <button 
                        onClick={handleBack}
                        className="flex items-center gap-2 text-[#a3c9c7] hover:text-white transition-colors uppercase tracking-widest text-sm font-bold"
                    >
                        <ArrowLeft size={16} /> {currentStep === 0 ? 'Cancel' : 'Back'}
                    </button>

                    <BrutalButton 
                        onClick={handleNext} 
                        variant={currentStep === 3 ? "orange" : "bone"}
                        className="flex items-center gap-2"
                    >
                        {currentStep === 3 ? 'Confirm Booking' : 'Continue'} <ArrowRight size={18} />
                    </BrutalButton>
                </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
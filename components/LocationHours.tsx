import React from 'react';
import { motion } from 'framer-motion';

const hoursData = [
  { day: 'Sunday', time: '11:00 AM - 8:00 PM' },
  { day: 'Monday', time: 'Closed' },
  { day: 'Tuesday', time: 'Closed' },
  { day: 'Wednesday', time: '11:00 AM - 8:00 PM' },
  { day: 'Thursday', time: '11:00 AM - 8:00 PM' },
  { day: 'Friday', time: '11:00 AM - 8:00 PM' },
  { day: 'Saturday', time: '11:00 AM - 8:00 PM' },
];

const LocationHours: React.FC = () => {
  return (
    <section className="py-24 px-4 relative z-10 bg-[#163023]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Hours Section */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-[#f2f0e9] text-[#163023] p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#CF7696]/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#8CB59E]/20 rounded-full blur-xl translate-y-1/2 -translate-x-1/2" />

          <h2 className="font-display text-5xl md:text-6xl text-center mb-12 tracking-wide text-[#163023]">HOURS</h2>
          
          <div className="space-y-6 font-semibold text-lg md:text-xl">
            {hoursData.map((item, index) => (
              <div key={index} className="flex items-end justify-between gap-4 w-full">
                <span className="shrink-0 font-display tracking-widest text-2xl">{item.day}</span>
                <div className="grow border-b-2 border-dotted border-[#163023]/30 mb-2 mx-2"></div>
                <span className={`shrink-0 ${item.time === 'Closed' ? 'text-[#CF7696]' : ''}`}>
                  {item.time}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Map Section */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="h-full min-h-[500px] w-full relative rounded-[2.5rem] overflow-hidden border-4 border-[#f2f0e9] group"
        >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3247.1293668610615!2d-78.7432240236369!3d35.52580063849569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89ac876f3c728c8f%3A0xc75ad25500e32129!2sWidow&#39;s%20Den%20Tattoo!5e0!3m2!1sen!2sus!4v1765416920433!5m2!1sen!2sus"
              width="100%" 
              height="100%" 
              style={{ border: 0, minHeight: '500px' }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale invert-[0.85] group-hover:invert-0 group-hover:grayscale-0 transition-all duration-500"
            />
            
            <a 
              href="https://maps.app.goo.gl/rP6M8VqxGWtzyTu19" 
              target="_blank" 
              rel="noopener noreferrer"
              className="absolute bottom-6 right-6 bg-[#CF7696] text-black px-6 py-3 rounded-full font-bold uppercase text-sm tracking-wider opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-xl"
            >
              Open in Maps
            </a>
        </motion.div>

      </div>
    </section>
  );
};

export default LocationHours;
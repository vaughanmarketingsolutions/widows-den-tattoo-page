import React from 'react';
import { MapPin, Phone, Mail, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#163023] border-t border-white/10 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between gap-12">
            <div>
                <h2 className="font-display text-5xl text-[#f2f0e9] mb-4">WIDOW'S DEN TATTOO</h2>
                <div className="flex gap-4 text-[#8CB59E]">
                    <a href="#" className="hover:text-[#CF7696] transition-colors"><Instagram /></a>
                    <a href="#" className="hover:text-[#CF7696] transition-colors"><Mail /></a>
                </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[#8CB59E]">
                <div>
                    <h3 className="text-[#f2f0e9] font-bold mb-4 uppercase tracking-wider">Visit Us</h3>
                    <p className="flex items-start gap-2 mb-2">
                        <MapPin size={18} className="mt-1 text-[#CF7696]" />
                        Downtown<br/>Angier, NC 27501
                    </p>
                </div>
                <div>
                    <h3 className="text-[#f2f0e9] font-bold mb-4 uppercase tracking-wider">Contact</h3>
                    <p className="flex items-center gap-2 mb-2">
                        <Phone size={18} className="text-[#8CB59E]" />
                        (704) 555-0198
                    </p>
                    <p className="flex items-center gap-2">
                        <Mail size={18} className="text-[#8CB59E]" />
                        booking@widowsden.com
                    </p>
                </div>
            </div>
        </div>
        <div className="mt-16 text-center text-[#8CB59E]/40 text-sm">
            © {new Date().getFullYear()} Widow's Den Tattoo. All rights reserved.
        </div>
    </footer>
  );
};

export default Footer;
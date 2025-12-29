import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, ChevronDown, Phone, MapPin, Mail, X } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  const [isQRExpanded, setIsQRExpanded] = useState(false);

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-stone-900 text-white py-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/1920/1080?grayscale&blur=2" 
          alt="Background" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/10 via-stone-900/50 to-stone-900"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <div className="inline-block p-3 border border-stone-500 rounded-full mb-6 bg-white/5 backdrop-blur-sm">
            <Camera className="w-6 h-6 text-stone-200" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 font-serif">
            {PERSONAL_INFO.name}
          </h1>
          <p className="text-xl md:text-2xl text-stone-300 font-light tracking-widest uppercase mb-12">
            {PERSONAL_INFO.role} <span className="hidden md:inline mx-2 text-stone-500">|</span> <span className="block md:inline text-base md:text-xl mt-2 md:mt-0">{PERSONAL_INFO.experience_years}工作经验</span>
          </p>
          
          {/* Contact Section Container */}
          <div className="flex flex-col gap-10 justify-center items-center w-full max-w-4xl mt-4">
            
            {/* 1. Contact Cards Group */}
            <div className="flex flex-col md:flex-row gap-4 w-full justify-center">
                {/* Phone */}
                <div className="flex items-center gap-3 bg-stone-800/60 backdrop-blur-md px-5 py-4 rounded-lg border border-stone-700/50 hover:bg-stone-800/80 transition-colors min-w-[240px] text-left">
                    <div className="p-2 bg-stone-700/50 rounded-full">
                        <Phone className="w-4 h-4 text-white" />
                    </div>
                    <div>
                        <p className="text-[10px] text-stone-400 uppercase tracking-wider mb-0.5">Phone / Wechat</p>
                        <p className="text-white font-medium text-sm tracking-wide">{PERSONAL_INFO.phone}</p>
                    </div>
                </div>
                {/* Email */}
                <div className="flex items-center gap-3 bg-stone-800/60 backdrop-blur-md px-5 py-4 rounded-lg border border-stone-700/50 hover:bg-stone-800/80 transition-colors min-w-[240px] text-left">
                    <div className="p-2 bg-stone-700/50 rounded-full">
                        <Mail className="w-4 h-4 text-white" />
                    </div>
                    <div>
                        <p className="text-[10px] text-stone-400 uppercase tracking-wider mb-0.5">Email</p>
                        <p className="text-white font-medium text-sm tracking-wide truncate max-w-[180px]" title={PERSONAL_INFO.email}>{PERSONAL_INFO.email}</p>
                    </div>
                </div>
                {/* Location */}
                <div className="flex items-center gap-3 bg-stone-800/60 backdrop-blur-md px-5 py-4 rounded-lg border border-stone-700/50 hover:bg-stone-800/80 transition-colors min-w-[240px] text-left">
                    <div className="p-2 bg-stone-700/50 rounded-full">
                         <MapPin className="w-4 h-4 text-white" />
                    </div>
                    <div>
                        <p className="text-[10px] text-stone-400 uppercase tracking-wider mb-0.5">Location</p>
                        <p className="text-white font-medium text-sm tracking-wide">{PERSONAL_INFO.location}</p>
                    </div>
                </div>
            </div>

            {/* 2. QR Code (Larger & Clickable) */}
            <div className="flex flex-col items-center">
                <motion.div 
                   whileHover={{ scale: 1.05 }}
                   whileTap={{ scale: 0.95 }}
                   onClick={() => setIsQRExpanded(true)}
                   className="w-32 h-32 bg-white p-2 rounded-xl shadow-2xl cursor-pointer hover:shadow-stone-500/20 transition-all duration-300 group"
                >
                    <div className="w-full h-full bg-stone-100 flex items-center justify-center text-stone-900 text-xs text-center font-bold leading-tight border border-stone-200 rounded-lg group-hover:bg-stone-50 transition-colors relative overflow-hidden">
                        <img src={PERSONAL_INFO.qrCode} alt="Wechat QR" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-stone-900/60 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition-opacity duration-300">
                             <span className="text-white text-xs font-bold">点击放大</span>
                        </div>
                    </div>
                </motion.div>
                <span className="text-[10px] text-stone-400 mt-3 uppercase tracking-wider">Scan to Add Wechat</span>
            </div>
            
          </div>

        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 cursor-pointer z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <ChevronDown className="w-8 h-8 text-stone-500 hover:text-white transition-colors" />
      </motion.div>

      {/* Expanded QR Modal */}
      <AnimatePresence>
        {isQRExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setIsQRExpanded(false)}
          >
             <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-white p-6 rounded-2xl max-w-sm w-full relative shadow-2xl flex flex-col items-center"
                onClick={(e) => e.stopPropagation()}
             >
                <button 
                  onClick={() => setIsQRExpanded(false)}
                  className="absolute -top-12 right-0 md:-right-12 text-white/70 hover:text-white transition-colors p-2"
                >
                    <X className="w-8 h-8" />
                </button>
                
                {/* Real QR Code Image */}
                <div className="aspect-square w-full bg-stone-50 flex items-center justify-center rounded-xl mb-4 overflow-hidden border border-stone-100">
                    <img src={PERSONAL_INFO.qrCode} alt="Wechat QR Full Size" className="w-full h-full object-contain" />
                </div>
                
                <h3 className="text-lg font-bold text-stone-900 mb-1">扫一扫加我微信</h3>
                <p className="text-sm text-stone-500">{PERSONAL_INFO.phone}</p>
             </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default Hero;
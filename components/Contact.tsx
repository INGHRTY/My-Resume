import React from 'react';
import { Phone, MapPin, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

interface ContactProps {
  id?: string;
  simple?: boolean;
}

const Contact: React.FC<ContactProps> = ({ id = "contact", simple = false }) => {
  const Container = simple ? 'section' : 'footer';

  return (
    <Container id={id} className={`bg-stone-900 text-stone-300 ${simple ? 'py-12 border-b border-stone-800' : 'py-16'}`}>
      <div className="container mx-auto px-6">
        <div className={`flex flex-col md:flex-row ${simple ? 'justify-center items-center gap-8 md:gap-20' : 'justify-between items-center md:items-start gap-12'}`}>
          
          {/* Brand Info - Only shown in full footer mode */}
          {!simple && (
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold text-white mb-2">{PERSONAL_INFO.name}</h2>
              <p className="text-stone-500 uppercase tracking-widest text-sm mb-6">{PERSONAL_INFO.role}</p>
              <p className="max-w-xs text-stone-400 text-sm leading-relaxed">
                致力于用影像记录美好，用创意传递价值。期待与您的合作。
              </p>
            </div>
          )}

          {/* Contact Details - Horizontal Row */}
          <div className="flex flex-col lg:flex-row gap-4 w-full md:w-auto justify-center">
            {/* Phone */}
            <div className="flex items-center gap-3 bg-stone-800/50 px-5 py-3 rounded-lg hover:bg-stone-800 transition-colors min-w-[200px]">
              <Phone className="w-5 h-5 text-white" />
              <div>
                <p className="text-[10px] text-stone-500 uppercase tracking-wider">Phone / Wechat</p>
                <p className="text-white font-medium text-sm">{PERSONAL_INFO.phone}</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3 bg-stone-800/50 px-5 py-3 rounded-lg hover:bg-stone-800 transition-colors min-w-[200px]">
              <Mail className="w-5 h-5 text-white" />
              <div>
                <p className="text-[10px] text-stone-500 uppercase tracking-wider">Email</p>
                <p className="text-white font-medium text-sm">{PERSONAL_INFO.email}</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-3 bg-stone-800/50 px-5 py-3 rounded-lg hover:bg-stone-800 transition-colors min-w-[200px]">
              <MapPin className="w-5 h-5 text-white" />
              <div>
                <p className="text-[10px] text-stone-500 uppercase tracking-wider">Location</p>
                <p className="text-white font-medium text-sm">{PERSONAL_INFO.location}</p>
              </div>
            </div>
          </div>
          
          {/* QR Code */}
          <div className={`flex flex-col items-center ${simple ? 'md:items-center' : 'md:items-end'}`}>
            <div className="w-32 h-32 bg-white p-2 rounded-lg mb-2 shadow-lg">
                 <img src={PERSONAL_INFO.qrCode} alt="Wechat QR" className="w-full h-full object-contain" />
            </div>
            <span className="text-xs text-stone-500">扫码添加微信</span>
          </div>

        </div>

        {/* Copyright - Only shown in full footer mode */}
        {!simple && (
          <div className="border-t border-stone-800 mt-16 pt-8 text-center text-xs text-stone-600">
            <p>© {new Date().getFullYear()} {PERSONAL_INFO.name}. All Rights Reserved. Designed based on Resume.</p>
          </div>
        )}
      </div>
    </Container>
  );
};

export default Contact;
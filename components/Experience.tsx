import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE, EDUCATION } from '../constants';
import { Briefcase, GraduationCap, CheckCircle, ChevronRight, ChevronLeft } from 'lucide-react';

const Experience: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Show chronological order (Newest -> Oldest) for Left-to-Right timeline
  const sortedExperience = EXPERIENCE;

  const scroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const cardWidth = 450;
      const gap = 32;
      const scrollAmount = cardWidth + gap;
      
      containerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="experience" className="py-24 bg-white relative">
      <div className="w-full">
        <div className="text-center mb-12 px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">工作经历</h2>
          <div className="w-16 h-1 bg-stone-900 mx-auto"></div>
        </div>

        <div className="relative group">
            {/* Controls */}
            <button 
                onClick={() => scroll('left')}
                className="hidden md:flex absolute left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/90 backdrop-blur shadow-lg rounded-full items-center justify-center text-stone-800 hover:bg-stone-900 hover:text-white transition-all duration-300 border border-stone-200"
                aria-label="Scroll Left"
            >
                <ChevronLeft className="w-6 h-6" />
            </button>

            <button 
                onClick={() => scroll('right')}
                className="hidden md:flex absolute right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/90 backdrop-blur shadow-lg rounded-full items-center justify-center text-stone-800 hover:bg-stone-900 hover:text-white transition-all duration-300 border border-stone-200"
                aria-label="Scroll Right"
            >
                <ChevronRight className="w-6 h-6" />
            </button>

            {/* Horizontal Scroll Container */}
            <div 
                ref={containerRef} 
                className="flex flex-row overflow-x-auto gap-8 pb-12 pt-8 no-scrollbar snap-x snap-mandatory px-6 md:px-12 items-stretch"
            >
                {/* 1. Experience Cards (Newest -> Oldest) */}
                {sortedExperience.map((exp, index) => (
                    <motion.div 
                        key={exp.id}
                        className="relative flex-shrink-0 w-[85vw] md:w-[450px] snap-center flex flex-col"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                    >
                        {/* Connecting Line (Right) - Connects to next card or Education card */}
                        <div className="hidden md:block absolute top-[40px] left-1/2 w-[calc(100%+32px)] h-0.5 bg-stone-200 -z-10" />

                        {/* Timeline Dot (Desktop) */}
                        <div className="hidden md:flex absolute top-[40px] left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-4 border-white bg-stone-900 z-10 shadow-sm" />
                        
                        {/* Date Label */}
                        <div className="hidden md:flex justify-center mb-8 w-full">
                             <span className="inline-block px-4 py-1.5 bg-white text-stone-600 font-bold text-xs rounded-full border border-stone-200 shadow-sm z-10 relative">
                                {exp.period}
                             </span>
                        </div>

                        {/* Content Card */}
                        <div className="bg-stone-50 p-6 md:p-8 rounded-xl border border-stone-100 shadow-sm hover:shadow-xl transition-all duration-300 group h-full relative overflow-hidden flex-1">
                             {/* Mobile Date */}
                             <div className="md:hidden mb-4">
                                <span className="inline-block px-3 py-1 bg-stone-200 text-stone-700 font-bold text-xs rounded-full">
                                    {exp.period}
                                </span>
                            </div>

                            <div className="flex flex-col gap-1 mb-4">
                                <h3 className="text-xl font-bold text-stone-900 group-hover:text-stone-700 transition-colors">{exp.company}</h3>
                                <div className="flex items-center gap-2 text-stone-600 font-medium">
                                    <Briefcase className="w-4 h-4" />
                                    <span>{exp.role}</span>
                                </div>
                            </div>
                            
                            <div className="mb-6 border-t border-stone-200 pt-4">
                                <ul className="space-y-3 text-sm text-stone-600 leading-relaxed">
                                {exp.description.map((desc, i) => {
                                    const parts = desc.split(/(\*\*.*?\*\*)/g);
                                    return (
                                    <li key={i} className="flex items-start gap-2">
                                        <span className="mt-1.5 w-1.5 h-1.5 bg-stone-400 rounded-full flex-shrink-0"></span>
                                        <span>
                                        {parts.map((part, j) => {
                                            if (part.startsWith('**') && part.endsWith('**')) {
                                            return <strong key={j} className="text-stone-800 font-semibold">{part.slice(2, -2)}</strong>;
                                            }
                                            return part;
                                        })}
                                        </span>
                                    </li>
                                    );
                                })}
                                </ul>
                            </div>

                            {exp.achievements && (
                                <div className="bg-white p-4 rounded-lg border border-stone-100 shadow-sm mt-auto">
                                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-3 flex items-center gap-2">
                                    <CheckCircle className="w-3 h-3 text-green-600" />
                                    Key Achievements
                                </h4>
                                <ul className="space-y-2 text-sm text-stone-600">
                                    {exp.achievements.map((ach, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <span className="text-green-600 font-bold text-xs">✓</span>
                                        {ach}
                                    </li>
                                    ))}
                                </ul>
                                </div>
                            )}
                        </div>
                    </motion.div>
                ))}

                 {/* 2. Education Section (End of Timeline - Right) */}
                 <motion.div 
                    className="relative flex-shrink-0 w-[85vw] md:w-[450px] snap-center flex flex-col"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: sortedExperience.length * 0.1 }}
                 >
                     {/* No connecting line to the right for the last item */}
                     {/* Timeline Dot (Desktop) */}
                    <div className="hidden md:flex absolute top-[40px] left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-4 border-white bg-stone-500 z-10 shadow-sm" />
                    
                    {/* Spacer for alignment with job cards which have a date label */}
                    <div className="hidden md:block mb-8 pl-0 opacity-0 h-[30px] w-full">
                        <span className="inline-block px-3 py-1 text-xs">Spacer</span>
                    </div>

                    <div className="bg-stone-900 text-white p-6 md:p-8 rounded-xl shadow-xl h-full flex flex-col justify-center items-center text-center relative overflow-hidden min-h-[300px] flex-1">
                         <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-stone-700 to-stone-800"></div>
                         <div className="p-4 bg-stone-800 rounded-full mb-6">
                            <GraduationCap className="w-8 h-8 text-stone-300" />
                         </div>
                         <h3 className="text-xl font-bold mb-2">{EDUCATION.school}</h3>
                         <p className="text-stone-400 mb-4">{EDUCATION.degree}</p>
                         <div className="inline-block px-4 py-1 border border-stone-700 rounded-full text-xs text-stone-300">
                            {EDUCATION.period}
                         </div>
                         <div className="mt-6 pt-6 border-t border-stone-800 w-full">
                            <p className="text-xs text-stone-500 font-medium uppercase tracking-wider mb-2">Award</p>
                            <p className="text-sm italic text-stone-300">"{EDUCATION.award}"</p>
                         </div>
                    </div>
                 </motion.div>
            </div>
            
             {/* Hint for mobile */}
             <div className="md:hidden flex justify-center mt-2 text-stone-400 text-xs items-center gap-1">
                <ChevronRight className="w-3 h-3" />
                <span>左右滑动查看更多</span>
             </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
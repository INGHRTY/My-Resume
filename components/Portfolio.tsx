import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PORTFOLIO } from '../constants';
import { PortfolioItem } from '../types';
import { ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';
import ProjectModal from './ProjectModal';

type Category = 'All' | 'Commercial' | 'Wedding' | 'Portrait';

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<Category>('All');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const filteredItems = PORTFOLIO.filter(item => 
    filter === 'All' ? true : item.category === filter
  );

  const scroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const cardWidth = 350; // Width of card
      const gap = 24; // gap-6 is 24px
      const scrollAmount = cardWidth + gap;
      
      containerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Reset scroll position when filter changes
  React.useEffect(() => {
    if (containerRef.current) {
        containerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  }, [filter]);

  return (
    <>
      <section id="portfolio" className="py-24 bg-stone-100 relative">
        <div className="w-full">
          <div className="text-center mb-12 px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">平面摄影</h2>
            <p className="text-stone-500 max-w-2xl mx-auto">
              捕捉光影瞬间，定格永恒画面。包含商业广告、婚礼纪实及人像创作。
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 px-6">
            {['All', 'Commercial', 'Wedding', 'Portrait'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat as Category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === cat 
                    ? 'bg-stone-900 text-white shadow-lg scale-105' 
                    : 'bg-white text-stone-600 hover:bg-stone-200'
                }`}
              >
                {cat === 'All' ? '全部' : cat === 'Commercial' ? '商业' : cat === 'Wedding' ? '婚礼' : '人像'}
              </button>
            ))}
          </div>

          {/* Horizontal Scroll Container Wrapper */}
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

            {/* Scroll Area */}
            <div 
                ref={containerRef}
                className="flex flex-row overflow-x-auto gap-6 pb-12 pt-4 no-scrollbar snap-x snap-mandatory px-6 md:px-12 items-stretch"
            >
                <AnimatePresence mode='popLayout'>
                {filteredItems.map((item) => (
                    <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9, width: 0 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => setSelectedItem(item)}
                    className="flex-shrink-0 w-[85vw] md:w-[350px] snap-center group/card relative overflow-hidden rounded-xl shadow-md bg-white cursor-pointer h-[500px]"
                    >
                    <div className="h-full w-full relative">
                        <img 
                            src={item.imageUrl} 
                            alt={item.title} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
                        />
                        
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-stone-900/60 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                            <span className="text-stone-300 text-xs uppercase tracking-wider mb-2">
                                {item.category}
                            </span>
                            <h3 className="text-white text-xl font-bold">{item.title}</h3>
                            <p className="text-stone-300 text-sm mt-2 line-clamp-2">{item.description}</p>
                            
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                <ZoomIn className="w-12 h-12 text-white opacity-80" />
                            </div>
                        </div>
                    </div>
                    </motion.div>
                ))}
                </AnimatePresence>
            </div>

             {/* Hint for mobile */}
             <div className="md:hidden flex justify-center mt-2 text-stone-400 text-xs items-center gap-1">
                <ChevronRight className="w-3 h-3" />
                <span>左右滑动查看更多</span>
             </div>
          </div>
        </div>
      </section>

      <ProjectModal 
        isOpen={!!selectedItem}
        onClose={() => setSelectedItem(null)}
        item={selectedItem}
        type="photo"
      />
    </>
  );
};

export default Portfolio;
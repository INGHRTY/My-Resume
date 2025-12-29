import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { VIDEOS } from '../constants';
import { VideoItem } from '../types';
import { Play, Clock, Eye, ChevronLeft, ChevronRight, Film, Smartphone, CalendarDays } from 'lucide-react';
import ProjectModal from './ProjectModal';

const VideoGallery: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);
  
  const eventsRef = useRef<HTMLDivElement>(null);
  const commercialRef = useRef<HTMLDivElement>(null);
  const shortsRef = useRef<HTMLDivElement>(null);

  const eventVideos = VIDEOS.filter(v => v.category === 'Event');
  const commercialVideos = VIDEOS.filter(v => v.category === 'Commercial');
  const shortVideos = VIDEOS.filter(v => v.category === 'Short Video');

  const scroll = (ref: React.RefObject<HTMLDivElement | null>, direction: 'left' | 'right', scrollOffset: number) => {
    if (ref.current) {
      ref.current.scrollBy({
        left: direction === 'left' ? -scrollOffset : scrollOffset,
        behavior: 'smooth'
      });
    }
  };

  const VideoCard = ({ video, isPortrait }: { video: VideoItem, isPortrait: boolean }) => (
    <motion.div
        layout
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        onClick={() => setSelectedVideo(video)}
        className={`
            flex-shrink-0 snap-center group/card relative overflow-hidden rounded-xl shadow-2xl bg-stone-800 cursor-pointer border border-stone-800 hover:border-stone-500 transition-colors
            ${isPortrait 
                ? 'w-[60vw] md:w-[280px] h-[350px] md:h-[500px]' 
                : 'w-[85vw] md:w-[600px] h-[220px] md:h-[340px]'}
        `}
    >
        <img 
            src={video.thumbnailUrl} 
            alt={video.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105 opacity-70 group-hover/card:opacity-100"
        />

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90" />

        {/* Play Button - Center */}
        <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover/card:bg-white/20 group-hover/card:scale-110 transition-all duration-300">
                <Play className="w-5 h-5 md:w-6 md:h-6 text-white fill-white ml-1" />
                </div>
        </div>

        {/* Content Bottom */}
        <div className="absolute bottom-0 left-0 w-full p-4 md:p-6">
                <div className="flex justify-between items-end mb-2">
                <span className="px-2 py-0.5 md:py-1 rounded bg-white/20 backdrop-blur text-[10px] font-bold uppercase tracking-wider text-white border border-white/10">
                    {video.category}
                </span>
                <div className="flex items-center gap-3 text-[10px] md:text-xs text-stone-300 font-mono">
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {video.duration}</span>
                    <span className="flex items-center gap-1"><Eye className="w-3 h-3" /> {video.views}</span>
                </div>
                </div>
                <h3 className={`font-bold text-white line-clamp-2 leading-tight ${isPortrait ? 'text-base' : 'text-lg md:text-xl'}`}>{video.title}</h3>
        </div>
    </motion.div>
  );

  return (
    <>
      <section id="videos" className="py-24 bg-stone-900 text-white relative">
        <div className="w-full">
           <div className="text-center mb-16 px-6">
            <h2 className="text-3xl md:text-5xl font-bold font-serif mb-4">影像作品</h2>
            <p className="text-stone-400 max-w-2xl mx-auto tracking-widest text-sm uppercase">Cinematography & Short Videos</p>
           </div>

           {/* Section 1: Commercial Events (Added) */}
           <div className="mb-20">
                {/* Header aligned with start of cards on desktop */}
                <div className="px-6 md:px-12 mb-6 flex items-center gap-3">
                    <div className="p-2 bg-stone-800 rounded-lg">
                        <CalendarDays className="w-5 h-5 text-white" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold">商业活动</h3>
                        <p className="text-stone-500 text-xs uppercase tracking-wider">Commercial Events / Conference</p>
                    </div>
                </div>

                <div className="relative group">
                    <button 
                        onClick={() => scroll(eventsRef, 'left', 624)}
                        className="hidden md:flex absolute left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 backdrop-blur shadow-lg rounded-full items-center justify-center text-white hover:bg-white hover:text-stone-900 transition-all duration-300 border border-white/20 opacity-0 group-hover:opacity-100"
                        aria-label="Scroll Left"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button 
                        onClick={() => scroll(eventsRef, 'right', 624)}
                        className="hidden md:flex absolute right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 backdrop-blur shadow-lg rounded-full items-center justify-center text-white hover:bg-white hover:text-stone-900 transition-all duration-300 border border-white/20 opacity-0 group-hover:opacity-100"
                        aria-label="Scroll Right"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* Scroll Container */}
                    <div 
                        ref={eventsRef}
                        className="flex flex-row overflow-x-auto gap-6 no-scrollbar snap-x snap-mandatory items-center px-6 md:px-12"
                    >
                        {eventVideos.map((video) => (
                            <VideoCard key={video.id} video={video} isPortrait={false} />
                        ))}
                         {/* Spacer for right side scrolling feel */}
                        <div className="w-1 h-1 flex-shrink-0" />
                    </div>
                </div>
           </div>

           {/* Section 2: Commercial / Landscape */}
           <div className="mb-20">
                {/* Header aligned with start of cards on desktop */}
                <div className="px-6 md:px-12 mb-6 flex items-center gap-3">
                    <div className="p-2 bg-stone-800 rounded-lg">
                        <Film className="w-5 h-5 text-white" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold">商业广告 & 宣传片</h3>
                        <p className="text-stone-500 text-xs uppercase tracking-wider">Commercial / Landscape</p>
                    </div>
                </div>

                <div className="relative group">
                    <button 
                        onClick={() => scroll(commercialRef, 'left', 624)}
                        className="hidden md:flex absolute left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 backdrop-blur shadow-lg rounded-full items-center justify-center text-white hover:bg-white hover:text-stone-900 transition-all duration-300 border border-white/20 opacity-0 group-hover:opacity-100"
                        aria-label="Scroll Left"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button 
                        onClick={() => scroll(commercialRef, 'right', 624)}
                        className="hidden md:flex absolute right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 backdrop-blur shadow-lg rounded-full items-center justify-center text-white hover:bg-white hover:text-stone-900 transition-all duration-300 border border-white/20 opacity-0 group-hover:opacity-100"
                        aria-label="Scroll Right"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* Scroll Container */}
                    <div 
                        ref={commercialRef}
                        className="flex flex-row overflow-x-auto gap-6 no-scrollbar snap-x snap-mandatory items-center px-6 md:px-12"
                    >
                        {commercialVideos.map((video) => (
                            <VideoCard key={video.id} video={video} isPortrait={false} />
                        ))}
                         {/* Spacer for right side scrolling feel */}
                        <div className="w-1 h-1 flex-shrink-0" />
                    </div>
                </div>
           </div>

           {/* Section 3: Shorts / Portrait */}
           <div>
                {/* Header aligned with start of cards on desktop */}
                <div className="px-6 md:px-12 mb-6 flex items-center gap-3">
                    <div className="p-2 bg-stone-800 rounded-lg">
                        <Smartphone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold">短视频 & Reels</h3>
                        <p className="text-stone-500 text-xs uppercase tracking-wider">Short Video / Portrait</p>
                    </div>
                </div>

                <div className="relative group">
                    <button 
                        onClick={() => scroll(shortsRef, 'left', 304)}
                        className="hidden md:flex absolute left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 backdrop-blur shadow-lg rounded-full items-center justify-center text-white hover:bg-white hover:text-stone-900 transition-all duration-300 border border-white/20 opacity-0 group-hover:opacity-100"
                        aria-label="Scroll Left"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button 
                        onClick={() => scroll(shortsRef, 'right', 304)}
                        className="hidden md:flex absolute right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 backdrop-blur shadow-lg rounded-full items-center justify-center text-white hover:bg-white hover:text-stone-900 transition-all duration-300 border border-white/20 opacity-0 group-hover:opacity-100"
                        aria-label="Scroll Right"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* Scroll Container */}
                    <div 
                        ref={shortsRef}
                        className="flex flex-row overflow-x-auto gap-6 no-scrollbar snap-x snap-mandatory items-center px-6 md:px-12"
                    >
                        {shortVideos.map((video) => (
                            <VideoCard key={video.id} video={video} isPortrait={true} />
                        ))}
                        {/* Spacer for right side scrolling feel */}
                        <div className="w-1 h-1 flex-shrink-0" />
                    </div>
                </div>
           </div>

             {/* Mobile Hint */}
             <div className="md:hidden flex justify-center mt-12 text-stone-500 text-xs items-center gap-1">
                <ChevronRight className="w-3 h-3" />
                <span>左右滑动查看更多</span>
             </div>
        </div>
      </section>

      <ProjectModal 
        isOpen={!!selectedVideo}
        onClose={() => setSelectedVideo(null)}
        item={selectedVideo}
        type="video"
      />
    </>
  );
};

export default VideoGallery;
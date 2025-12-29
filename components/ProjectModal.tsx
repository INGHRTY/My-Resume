import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, User, Film, Play, Pause, Camera, Volume2, VolumeX, Maximize, Minimize, ZoomIn } from 'lucide-react';
import { PortfolioItem, VideoItem } from '../types';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: PortfolioItem | VideoItem | null;
  type: 'photo' | 'video';
}

const ProjectModal: React.FC<ProjectModalProps> = ({ isOpen, onClose, item, type }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const playerContainerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);
  
  // Reset state when item changes or modal opens
  useEffect(() => {
    if (isOpen) {
      setIsPlaying(false);
      setProgress(0);
      setIsMuted(false);
      setVolume(1);
      setIsFullScreen(false);
      setZoomedImage(null);
    }
  }, [isOpen, item]);

  // Handle Fullscreen changes (e.g. user presses Esc)
  useEffect(() => {
    const handleFullScreenChange = () => {
      setIsFullScreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullScreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullScreenChange);
    };
  }, []);

  const togglePlay = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime;
      const duration = videoRef.current.duration || 1;
      setProgress((current / duration) * 100);
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (videoRef.current) {
      const progressBar = e.currentTarget;
      const rect = progressBar.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const percentage = Math.min(Math.max(0, x / rect.width), 1);
      const newTime = percentage * videoRef.current.duration;
      
      videoRef.current.currentTime = newTime;
      setProgress(percentage * 100);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      const newMutedState = !isMuted;
      videoRef.current.muted = newMutedState;
      setIsMuted(newMutedState);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
      setIsMuted(newVolume === 0);
    }
  };

  const toggleFullScreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!playerContainerRef.current) return;

    if (!document.fullscreenElement) {
      playerContainerRef.current.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
      });
    } else {
      document.exitFullscreen();
    }
  };

  if (!item) return null;

  // Use a sample video if videoUrl is missing for demonstration
  const videoSrc = (item as VideoItem).videoUrl || "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";
  
  // Get images for photo gallery, fallback to single imageUrl if images array is missing
  const galleryImages = type === 'photo' 
    ? ((item as PortfolioItem).images || [(item as PortfolioItem).imageUrl]) 
    : [];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center p-0 md:p-6 bg-stone-950/98 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 30 }}
            className="bg-white w-full h-full md:w-[95vw] md:h-[90vh] md:max-w-[1800px] md:rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 z-20 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors backdrop-blur-sm"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Media Area - Larger and Scrollable for Photos */}
            <div className={`relative h-[40vh] md:h-full ${type === 'video' && (item as VideoItem).category === 'Short Video' ? 'md:w-1/3 bg-black flex items-center justify-center' : 'md:w-3/4 bg-stone-100 flex items-center justify-center'}`}>
              
              {type === 'photo' ? (
                <div className="w-full h-full overflow-y-auto no-scrollbar bg-stone-100 p-4">
                  <div className="columns-1 md:columns-3 lg:columns-4 gap-4 w-full mx-auto space-y-4">
                    {galleryImages.map((img, index) => (
                       <div 
                        key={index} 
                        className="break-inside-avoid w-full shadow-lg bg-white p-2 rounded-sm cursor-zoom-in group hover:shadow-2xl transition-all duration-300"
                        onClick={() => setZoomedImage(img)}
                       >
                         <img 
                            src={img} 
                            alt={`${item.title} - ${index + 1}`} 
                            className="w-full h-auto object-contain block group-hover:opacity-95"
                            loading="lazy"
                          />
                       </div>
                    ))}
                  </div>
                  <div className="text-stone-400 text-sm py-8 text-center w-full">End of Gallery</div>
                </div>
              ) : (
                <div 
                  ref={playerContainerRef}
                  className="relative w-full h-full flex items-center justify-center bg-black group" 
                  onClick={togglePlay}
                >
                  <video
                    ref={videoRef}
                    src={videoSrc}
                    poster={(item as VideoItem).thumbnailUrl}
                    className="w-full h-full object-contain"
                    onTimeUpdate={handleTimeUpdate}
                    onEnded={() => setIsPlaying(false)}
                    loop={(item as VideoItem).category === 'Short Video'}
                  />
                  
                  {/* Center Play Button (Overlay) */}
                  <AnimatePresence>
                    {!isPlaying && (
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.5 }}
                            className="absolute inset-0 flex items-center justify-center bg-black/20 pointer-events-none"
                        >
                             <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                                <Play className="w-10 h-10 text-white fill-white ml-1" />
                             </div>
                        </motion.div>
                    )}
                  </AnimatePresence>

                   {/* Custom Controls Bar */}
                   <div 
                     className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col gap-2"
                     onClick={(e) => e.stopPropagation()}
                   >
                        {/* Progress Bar */}
                        <div 
                            className="w-full h-1 bg-white/30 rounded-full cursor-pointer hover:h-1.5 transition-all relative"
                            onClick={handleSeek}
                        >
                             <div 
                                className="absolute top-0 left-0 h-full bg-stone-100 rounded-full" 
                                style={{ width: `${progress}%` }}
                             />
                        </div>

                        <div className="flex items-center justify-between mt-2">
                             <div className="flex items-center gap-4">
                                 <button onClick={togglePlay} className="text-white hover:text-stone-300 transition-colors">
                                     {isPlaying ? <Pause className="w-6 h-6 fill-white" /> : <Play className="w-6 h-6 fill-white" />}
                                 </button>
                                 
                                 <div className="flex items-center gap-2 group/vol">
                                     <button onClick={toggleMute} className="text-white hover:text-stone-300 transition-colors">
                                         {isMuted || volume === 0 ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
                                     </button>
                                     <input 
                                         type="range" 
                                         min="0" max="1" step="0.05" 
                                         value={isMuted ? 0 : volume}
                                         onChange={handleVolumeChange}
                                         className="w-0 group-hover/vol:w-24 transition-all duration-300 h-1 accent-white bg-white/30 rounded-lg appearance-none cursor-pointer"
                                     />
                                 </div>
                             </div>

                             {/* Fullscreen Button */}
                             <button onClick={toggleFullScreen} className="text-white hover:text-stone-300 transition-colors">
                                {isFullScreen ? <Minimize className="w-6 h-6" /> : <Maximize className="w-6 h-6" />}
                             </button>
                        </div>
                   </div>
                </div>
              )}
            </div>

            {/* Content Area - Adjusted Width */}
            <div className={`flex-1 p-8 md:p-12 overflow-y-auto bg-white ${type === 'video' && (item as VideoItem).category === 'Short Video' ? 'md:w-2/3' : 'md:w-1/4 shadow-[-20px_0_40px_rgba(0,0,0,0.05)] z-10'}`}>
              <div className="mb-8">
                <span className="inline-block px-3 py-1 bg-stone-100 text-stone-600 text-xs font-bold uppercase tracking-wider rounded-full mb-4">
                  {item.category}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4 leading-tight">{item.title}</h2>
              </div>

              <div className="space-y-8">
                <div className="prose prose-stone prose-lg text-stone-600 leading-relaxed">
                  <p>{(item as any).description || "暂无详细描述。"}</p>
                </div>

                <div className="flex flex-col gap-6 pt-8 border-t border-stone-100">
                  {(item as any).client && (
                    <div className="flex flex-col">
                      <span className="text-xs text-stone-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                        <User className="w-4 h-4" /> 客户 Client
                      </span>
                      <span className="font-medium text-stone-800 text-lg">{(item as any).client}</span>
                    </div>
                  )}

                  {(item as any).date && (
                    <div className="flex flex-col">
                      <span className="text-xs text-stone-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                         <Calendar className="w-4 h-4" /> 时间 Date
                      </span>
                      <span className="font-medium text-stone-800 text-lg">{(item as any).date}</span>
                    </div>
                  )}

                  {type === 'video' && (
                    <>
                      <div className="flex flex-col">
                        <span className="text-xs text-stone-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                          <Film className="w-4 h-4" /> 角色 Role
                        </span>
                        <span className="font-medium text-stone-800 text-lg">{(item as VideoItem).role || '全案制作'}</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs text-stone-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                          <Camera className="w-4 h-4" /> 规格 Spec
                        </span>
                        <span className="font-medium text-stone-800 text-lg">1080P / {(item as VideoItem).duration}</span>
                      </div>
                    </>
                  )}
                </div>
              </div>
              
              <div className="mt-12 pt-8 border-t border-stone-100">
                 <button className="w-full py-4 bg-stone-900 text-white rounded-xl hover:bg-stone-800 transition-colors font-medium text-base tracking-wide shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-200">
                    联系我合作
                 </button>
              </div>
            </div>
          </motion.div>

          {/* Lightbox / Zoomed Image Overlay */}
          <AnimatePresence>
            {zoomedImage && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[70] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
                onClick={(e) => {
                  e.stopPropagation();
                  setZoomedImage(null);
                }}
              >
                 <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setZoomedImage(null);
                  }}
                  className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-[71]"
                >
                  <X className="w-10 h-10" />
                </button>
                <motion.img 
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.9 }}
                  src={zoomedImage} 
                  alt="Zoomed view"
                  className="max-w-full max-h-full object-contain rounded-sm shadow-2xl"
                  onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
                />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
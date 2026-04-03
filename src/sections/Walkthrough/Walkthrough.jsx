import React, { useState, useRef, useEffect, memo } from 'react';

// LOCAL VS CODE MATE IMPORT INSTRUCTIONS:
// Jyare tame aane tamara project ma use karo, tyare tamara local video clips ahiya import karo.

// TOP HERO VIDEO (Aa fixed raheshe ane change nahi thay)
const heroVideo = {
  title: 'The Masterpiece Collection',
  category: 'Showcase',
  url: 'https://player.vimeo.com/external/3703314.sd.mp4?s=e90dcbea7300c007dc4c1f6c77ba17baf6c1b3f9&profile_id=164&oauth2_token_id=57447761',
  thumbnail: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200'
};

// CANVAS PREVIEW MATE (REMOTE VIDEO URLs & THUMBNAILS):
const sliderVideos = [
  // --- LANDSCAPE VIDEOS ---
  {
    id: 1,
    title: 'Modern Minimalist Villa',
    category: 'Residential',
    duration: '00:08',
    type: 'landscape',
    url: 'https://player.vimeo.com/external/4053229.sd.mp4?s=27fc80e66fbaf5ea6973eeb980dcc113bb35ec44&profile_id=165&oauth2_token_id=57447761',
    thumbnail: 'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  // --- SQUARE VIDEO ---
  {
    id: 3,
    title: 'Serene Bedroom Retreat',
    category: 'Residential',
    duration: '00:10',
    type: 'square',
    url: 'https://player.vimeo.com/external/4114797.sd.mp4?s=4c8dbd0c9f13898f869a2ebf25cd62137171e54c&profile_id=164&oauth2_token_id=57447761',
    thumbnail: 'https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop'
  },
  {
    id: 5,
    title: 'Contemporary Kitchen',
    category: 'Kitchen',
    duration: '00:09',
    type: 'landscape',
    url: 'https://player.vimeo.com/external/4053641.sd.mp4?s=d34dbdfb8d234a5d848ee12ba10d8f370604b32b&profile_id=165&oauth2_token_id=57447761',
    thumbnail: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  
  // --- VERTICAL VIDEOS ---
  {
    id: 2,
    title: 'Elegant Staircase Detail',
    category: 'Architecture',
    duration: '00:06',
    type: 'vertical',
    url: 'https://player.vimeo.com/external/4771415.sd.mp4?s=2f831b14a8e26c6d59cebe65cf54807a0491fb83&profile_id=165&oauth2_token_id=57447761',
    thumbnail: 'https://images.pexels.com/photos/6782567/pexels-photo-6782567.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 4,
    title: 'Boutique Hotel Accent',
    category: 'Commercial',
    duration: '00:15',
    type: 'vertical',
    url: 'https://player.vimeo.com/external/4771415.sd.mp4?s=2f831b14a8e26c6d59cebe65cf54807a0491fb83&profile_id=165&oauth2_token_id=57447761', 
    thumbnail: 'https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

// 1. MEMOIZED VideoCard Sub-Component with Intersection Observer
const VideoCard = memo(({ 
    video, uniqueId, isExpanded, isOtherExpanded, 
    onExpand, onTogglePlay, onToggleMute, onClose,
    expandedVideoRef, isExpandedPlaying, isExpandedMuted 
  }) => {
    
    // Local state for visibility to prevent off-screen autoplay/buffering
    const [isVisible, setIsVisible] = useState(false);
    const cardRef = useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        setIsVisible(entries[0].isIntersecting);
      }, { threshold: 0.1 });

      if (cardRef.current) observer.observe(cardRef.current);
      return () => observer.disconnect();
    }, []);

    let expandedWidthClass = '';
    if (video.type === 'vertical') expandedWidthClass = 'w-[75vw] sm:w-[320px] md:w-[360px]';
    else if (video.type === 'square') expandedWidthClass = 'w-[85vw] sm:w-[450px] md:w-[500px] lg:w-[550px]';
    else expandedWidthClass = 'w-[90vw] md:w-[650px] lg:w-[800px]';
      
    let collapsedWidthClass = '';
    if (video.type === 'vertical') collapsedWidthClass = 'w-[120px] md:w-[140px]';
    else if (video.type === 'square') collapsedWidthClass = 'w-[180px] md:w-[200px]'; 
    else collapsedWidthClass = 'w-[280px] md:w-[360px]';

    let aspectRatioClass = '';
    if (video.type === 'vertical') aspectRatioClass = 'aspect-[9/16] max-h-[60vh]';
    else if (video.type === 'square') aspectRatioClass = 'aspect-square max-h-[65vh]';
    else aspectRatioClass = 'aspect-video';

    return (
      <div ref={cardRef} className="pr-4 md:pr-6 flex-shrink-0">
        <div 
          className={`relative transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] flex-shrink-0 ${
            isExpanded 
              ? `${expandedWidthClass} bg-white rounded-[1.5rem] md:rounded-[2rem] p-2 md:p-3 shadow-2xl border-2 border-[#5F6EF1] z-50 transform scale-100` 
              : collapsedWidthClass
          } ${
            isOtherExpanded ? 'opacity-40 scale-[0.98]' : (!isExpanded ? 'cursor-pointer opacity-80 hover:opacity-100 hover:scale-[1.02]' : '')
          }`}
          onClick={(e) => { if (!isExpanded) onExpand(uniqueId, e); }}
        >
          {isExpanded ? (
            <div className="flex flex-col w-full h-full animate-fade-in">
              <div className={`relative w-full rounded-t-[1rem] md:rounded-[1.5rem] overflow-hidden bg-black flex items-center justify-center ${aspectRatioClass}`}>
                {(video.type === 'vertical' || video.type === 'square') && (
                  <div className="absolute inset-0 bg-cover bg-center opacity-30 blur-2xl scale-110" style={{ backgroundImage: `url(${video.thumbnail})` }}></div>
                )}
                {/* Only render actual expanded video when visible or expanded */}
                <video 
                  ref={expandedVideoRef}
                  src={video.url} 
                  className="relative z-10 w-full h-full object-cover"
                  autoPlay
                  loop
                  muted={isExpandedMuted}
                  playsInline
                />
                <div className="absolute top-3 md:top-4 left-3 md:left-4 z-20 bg-black/60 backdrop-blur-md rounded-2xl py-2 px-2 md:py-3 md:px-2.5 flex flex-col items-center gap-3 md:gap-4 text-white shadow-lg border border-white/10">
                  <button onClick={(e) => onTogglePlay(e)} className="hover:text-blue-400 transition-colors">
                    {isExpandedPlaying ? (
                      <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
                    ) : (
                      <svg className="w-4 h-4 md:w-5 md:h-5 ml-0.5 md:ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                    )}
                  </button>
                  <div className="w-4 md:w-5 h-[1px] bg-white/20"></div>
                  <button onClick={(e) => onToggleMute(e)} className="hover:text-blue-400 transition-colors">
                    {isExpandedMuted ? (
                      <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/></svg>
                    ) : (
                      <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>
                    )}
                  </button>
                </div>
                <div className="absolute top-3 md:top-4 right-3 md:right-4 z-30 flex items-center gap-2">
                  <div className="bg-white text-[#5F6EF1] px-2.5 md:px-3 py-1 md:py-1.5 rounded-sm text-[9px] md:text-xs font-bold shadow-md uppercase tracking-wide">Available Now</div>
                  <button 
                    onClick={(e) => onClose(e)}
                    className="w-7 h-7 md:w-9 md:h-9 bg-black/60 hover:bg-black/90 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white transition-all shadow-lg"
                  ><svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg></button>
                </div>
              </div>
              <div className="p-3 md:p-4 pt-4 md:pt-5 flex flex-col md:flex-row justify-between items-start md:items-center gap-3 md:gap-4 bg-white rounded-b-3xl">
                <div>
                  <h3 className="text-lg md:text-2xl font-bold text-[#1a1a1a] font-serif leading-tight md:leading-none mb-1">{video.title}</h3>
                  <p className="text-[12px] md:text-[14px] text-gray-500 font-medium">{video.category} | {video.duration} clip</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-3 md:gap-4 w-full h-full">
              <div className={`relative w-full h-[180px] md:h-[200px] rounded-2xl overflow-hidden shadow-sm transition-all duration-300`}>
                <img src={video.thumbnail} alt={video.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
                <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-[10px] text-white tracking-wider">{video.duration}</div>
                
                {/* Auto-play thumbnail video ONLY when visible to save CPU */}
                {isVisible && (
                  <video src={video.url} className="absolute inset-0 w-full h-full object-cover opacity-0 hover:opacity-100 transition-opacity duration-500" autoPlay loop muted playsInline />
                )}

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center text-white border border-white/30 shadow-lg group-hover:bg-[#5F6EF1] group-hover:border-[#5F6EF1] transition-all duration-300 group-hover:scale-110">
                    <svg className="w-4 h-4 md:w-5 md:h-5 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <h4 className="text-sm md:text-base font-medium truncate transition-colors duration-300 text-[#6B635E] group-hover:text-[#2D2825]">{video.title}</h4>
                <p className="text-[#A39D98] text-[10px] md:text-xs uppercase tracking-wider mt-1">{video.category}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    );
});

export default function Walkthrough() {
  const [isHeroPlaying, setIsHeroPlaying] = useState(true);
  const [expandedVideoId, setExpandedVideoId] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isSectionVisible, setIsSectionVisible] = useState(false);
  const [isExpandedPlaying, setIsExpandedPlaying] = useState(true);
  const [isExpandedMuted, setIsExpandedMuted] = useState(false);
  
  const heroVideoRef = useRef(null);
  const expandedVideoRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const sectionRef = useRef(null);

  // Monitor total section visibility for smart scroll pausing
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      setIsSectionVisible(entries[0].isIntersecting);
    }, { threshold: 0.05 });

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Carousel mate Smart Auto-Scroll Logic - optimized to pause when not visible
  useEffect(() => {
    let animationFrameId;
    const container = scrollContainerRef.current;

    const scroll = () => {
      const supportsHover = window.matchMedia && window.matchMedia('(hover: hover)').matches;
      const shouldPause = expandedVideoId || (supportsHover && isHovered) || !isSectionVisible;

      if (container && !shouldPause) {
        container.scrollLeft += 0.8; 
        if (container.scrollLeft >= container.scrollWidth / 3) { // Adjusted for 3 Sets
          container.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [expandedVideoId, isHovered, isSectionVisible]);

  const toggleHeroPlayPause = () => {
    if (heroVideoRef.current) {
      if (isHeroPlaying) heroVideoRef.current.pause();
      else heroVideoRef.current.play();
      setIsHeroPlaying(!isHeroPlaying);
    }
  };

  const handleExpandVideo = (uniqueId, e) => {
    if (isHeroPlaying && heroVideoRef.current) {
      heroVideoRef.current.pause();
      setIsHeroPlaying(false);
    }
    setExpandedVideoId(uniqueId);
    setIsExpandedPlaying(true);
    setIsExpandedMuted(false);
    
    if (e && e.currentTarget) {
      const el = e.currentTarget;
      const container = scrollContainerRef.current;
      let start = performance.now();
      const keepCentered = (time) => {
        if (time - start < 600) { 
          if (el && container) {
            const elRect = el.getBoundingClientRect();
            const containerRect = container.getBoundingClientRect();
            const containerCenter = containerRect.left + (containerRect.width / 2);
            const elCenter = elRect.left + (elRect.width / 2);
            container.scrollLeft += (elCenter - containerCenter);
          }
          requestAnimationFrame(keepCentered);
        }
      };
      requestAnimationFrame(keepCentered);
    }
  };

  const closeExpandedVideo = (e) => {
    e.stopPropagation();
    setExpandedVideoId(null);
    setIsHovered(false); 
  };

  const toggleExpandedPlay = (e) => {
    e.stopPropagation();
    if (expandedVideoRef.current) {
      if (isExpandedPlaying) expandedVideoRef.current.pause();
      else expandedVideoRef.current.play();
      setIsExpandedPlaying(!isExpandedPlaying);
    }
  };

  const toggleExpandedMute = (e) => {
    e.stopPropagation();
    setIsExpandedMuted(!isExpandedMuted);
  };

  return (
    <div ref={sectionRef} className="min-h-screen bg-[#FCFAF8] font-sans text-[#4A4441]">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400&family=Inter:wght@300;400;500;600;700&display=swap');
          .font-serif { font-family: 'Playfair Display', serif; }
          .font-sans { font-family: 'Inter', sans-serif; }
          .hide-scroll::-webkit-scrollbar { display: none; }
          .hide-scroll { -ms-overflow-style: none; scrollbar-width: none; }
          .mask-edges {
            mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
            -webkit-mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
          }
          @keyframes fadeIn { from { opacity: 0; transform: scale(0.98); } to { opacity: 1; transform: scale(1); } }
          .animate-fade-in { animation: fadeIn 0.4s ease-out forwards; }
        `}
      </style>

      <section className="py-24 px-6 md:px-16 lg:px-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
          <div className="absolute -top-[10%] -left-[10%] w-[600px] h-[600px] rounded-full border-[1px] border-gray-200/60"></div>
          <div className="absolute bottom-[20%] -right-[10%] w-[500px] h-[500px] rounded-full border-[1px] border-gray-200/60"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col items-center justify-center text-center mb-16 md:mb-20">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white shadow-sm border border-gray-100 mb-6 transition-all duration-300 hover:shadow-md">
              <div className="w-2 h-2 rounded-full bg-[#B89672] animate-pulse"></div>
              <span className="text-[#B89672] text-[10px] md:text-xs uppercase tracking-[0.25em] font-bold">Experience The Space</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#2D2825] mb-6 leading-tight">Project Walkthroughs</h2>
            <p className="text-[#6B635E] text-base md:text-lg leading-relaxed font-light max-w-2xl mx-auto">Take a quick tour of our completed masterpieces. View our landscapes, squares, and vertical details in high definition.</p>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#B89672]/50 to-transparent mt-10"></div>
          </div>

          <div className="relative w-full h-[55vh] md:h-[65vh] lg:h-[75vh] bg-[#1C1A19] rounded-t-[3rem] rounded-b-xl overflow-hidden shadow-2xl group mb-12 flex items-center justify-center mt-4">
            <div className="absolute inset-0 bg-cover bg-center opacity-40 blur-3xl scale-110 transition-all duration-700" style={{ backgroundImage: `url(${heroVideo.thumbnail})` }}></div>
            {isSectionVisible && (
              <video ref={heroVideoRef} src={heroVideo.url} poster={heroVideo.thumbnail} className="relative z-10 w-full h-full object-cover transition-all duration-500 shadow-2xl" autoPlay loop muted playsInline />
            )}
            <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />
            <button onClick={toggleHeroPlayPause} className="absolute z-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white/20 hover:scale-110">
              {isHeroPlaying ? <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M6 4h4v16H6zm8 0h4v16h-4z"/></svg> : <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>}
            </button>
          </div>

          <div 
            ref={scrollContainerRef}
            className={`w-full hide-scroll pt-8 pb-12 flex group ${expandedVideoId ? 'overflow-x-auto [touch-action:pan-y]' : 'overflow-x-auto mask-edges'}`}
            style={{ scrollBehavior: 'auto' }} 
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="flex w-max items-center px-[5vw] md:px-[20vw]">
              {[...Array(3)].map((_, arrayIndex) => ( // Reduced to 3 Sets for less RAM
                <React.Fragment key={arrayIndex}>
                  {sliderVideos.map((video) => (
                    <VideoCard 
                      key={`${arrayIndex}-${video.id}`}
                      video={video}
                      uniqueId={`${arrayIndex}-${video.id}`}
                      isExpanded={expandedVideoId === `${arrayIndex}-${video.id}`}
                      isOtherExpanded={expandedVideoId && expandedVideoId !== `${arrayIndex}-${video.id}`}
                      onExpand={handleExpandVideo}
                      onTogglePlay={toggleExpandedPlay}
                      onToggleMute={toggleExpandedMute}
                      onClose={closeExpandedVideo}
                      expandedVideoRef={expandedVideoRef}
                      isExpandedPlaying={isExpandedPlaying}
                      isExpandedMuted={isExpandedMuted}
                    />
                  ))}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

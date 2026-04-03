import React, { useState, useRef, useEffect } from 'react';

// LOCAL VS CODE KE LIYE IMPORT INSTRUCTIONS:
// Jab aap ise apne project mein use karein, toh apne local video clips yahan import karein.

const heroVideo = {
  title: 'The Masterpiece Collection',
  category: 'Showcase',
  url: 'https://player.vimeo.com/external/3703314.sd.mp4?s=e90dcbea7300c007dc4c1f6c77ba17baf6c1b3f9&profile_id=164&oauth2_token_id=57447761',
  thumbnail: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200'
};

const sliderVideos = [
  {
    id: 1,
    title: 'Modern Minimalist Villa',
    category: 'Residential',
    duration: '00:08',
    type: 'landscape',
    url: 'https://player.vimeo.com/external/4053229.sd.mp4?s=27fc80e66fbaf5ea6973eeb980dcc113bb35ec44&profile_id=165&oauth2_token_id=57447761',
    thumbnail: 'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
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

export default function Walkthrough() {
  const [isHeroPlaying, setIsHeroPlaying] = useState(true);
  
  const [playingVideoId, setPlayingVideoId] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isTouched, setIsTouched] = useState(false); 
  
  const [isInlinePlaying, setIsInlinePlaying] = useState(true);
  const [isInlineMuted, setIsInlineMuted] = useState(false);
  
  // PERFORMANCE FIX: Intersection Observer state
  const [isInViewport, setIsInViewport] = useState(false);
  
  const sectionRef = useRef(null);
  const heroVideoRef = useRef(null);
  const inlineVideoRef = useRef(null);
  const scrollContainerRef = useRef(null);

  // PERFORMANCE FIX: Smart Pause Check (Only active when section is visible)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInViewport(entry.isIntersecting);
      },
      { threshold: 0.1 } // 10% section dikhne par trigger hoga
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  // Handle Hero Video Play/Pause automatically based on viewport
  useEffect(() => {
    if (heroVideoRef.current) {
      if (isInViewport && isHeroPlaying) {
        heroVideoRef.current.play().catch(e => console.log("Autoplay prevented by browser"));
      } else {
        heroVideoRef.current.pause();
      }
    }
  }, [isInViewport, isHeroPlaying]);

  // PERFORMANCE FIX: Auto-scroll logic optimized
  useEffect(() => {
    let animationFrameId;
    const container = scrollContainerRef.current;
    
    // Evaluate matchMedia OUTSIDE the loop
    const supportsHover = window.matchMedia && window.matchMedia('(hover: hover)').matches;

    const scroll = () => {
      // Smart Pause: Section screen par nahi hai, toh scroll loop bhi rok do
      const shouldPause = playingVideoId || (supportsHover && isHovered) || isTouched || !isInViewport;

      if (container && !shouldPause) {
        container.scrollLeft += 0.8; 
        
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [playingVideoId, isHovered, isTouched, isInViewport]); // Added isInViewport to dependencies

  const toggleHeroPlayPause = () => {
    setIsHeroPlaying(!isHeroPlaying);
  };

  const handlePlayInline = (uniqueId, e) => {
    if (isHeroPlaying && heroVideoRef.current) {
      heroVideoRef.current.pause();
      setIsHeroPlaying(false);
    }
    
    setPlayingVideoId(uniqueId);
    setIsInlinePlaying(true);
    setIsInlineMuted(false);
    
    if (e && e.currentTarget) {
      const el = e.currentTarget;
      setTimeout(() => el.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' }), 50);
    }
  };

  const stopInlineVideo = (e) => {
    e.stopPropagation();
    setPlayingVideoId(null);
    setIsHovered(false); 
    setIsTouched(false);
  };

  const toggleInlinePlay = (e) => {
    e.stopPropagation();
    if (inlineVideoRef.current) {
      if (isInlinePlaying) inlineVideoRef.current.pause();
      else inlineVideoRef.current.play();
      setIsInlinePlaying(!isInlinePlaying);
    }
  };

  const toggleInlineMute = (e) => {
    e.stopPropagation();
    setIsInlineMuted(!isInlineMuted);
  };

  return (
    <div className="min-h-screen bg-[#FCFAF8] font-sans text-[#4A4441]">
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

          @keyframes smoothFadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          .animate-smooth-fade {
            animation: smoothFadeIn 0.4s ease-in-out forwards;
          }
        `}
      </style>

      {/* PERFORMANCE FIX: Attach sectionRef for Intersection Observer */}
      <section ref={sectionRef} className="py-24 px-6 md:px-16 lg:px-24 relative overflow-hidden">
        
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
          <div className="absolute -top-[10%] -left-[10%] w-[600px] h-[600px] rounded-full border-[1px] border-gray-200/60"></div>
          <div className="absolute bottom-[20%] -right-[10%] w-[500px] h-[500px] rounded-full border-[1px] border-gray-200/60"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          
          <div className="flex flex-col items-center justify-center text-center mb-16 md:mb-20">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white shadow-sm border border-gray-100 mb-6 transition-all duration-300 hover:shadow-md">
              <div className="w-2 h-2 rounded-full bg-[#B89672] animate-pulse"></div>
              <span className="text-[#B89672] text-[10px] md:text-xs uppercase tracking-[0.25em] font-bold">
                Experience The Space
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#2D2825] mb-6 leading-tight">
              Project Walkthroughs
            </h2>
            
            <p className="text-[#6B635E] text-base md:text-lg leading-relaxed font-light max-w-2xl mx-auto">
              Take a quick tour of our completed masterpieces. View our landscapes, squares, and vertical details in high definition.
            </p>
            
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#B89672]/50 to-transparent mt-10"></div>
          </div>

          <div className="relative w-full h-[55vh] md:h-[65vh] lg:h-[75vh] bg-[#1C1A19] rounded-t-[3rem] rounded-b-xl overflow-hidden shadow-2xl group mb-12 flex items-center justify-center mt-4">
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-40 blur-3xl scale-110 transition-transform duration-700 transform-gpu"
              style={{ backgroundImage: `url(${heroVideo.thumbnail})` }}
            ></div>

            {/* PERFORMANCE FIX: Lazy load hero video URL ONLY when in viewport */}
            <video 
              ref={heroVideoRef}
              src={isInViewport ? heroVideo.url : ""} 
              poster={heroVideo.thumbnail}
              className="relative z-10 w-full h-full object-cover transition-opacity duration-500 shadow-2xl transform-gpu"
              autoPlay
              loop
              muted
              playsInline
            />

            <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />

            <button 
              onClick={toggleHeroPlayPause}
              className="absolute z-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white/20 hover:scale-110 transform-gpu"
            >
              {isHeroPlaying ? (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M6 4h4v16H6zm8 0h4v16h-4z"/></svg>
              ) : (
                <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
              )}
            </button>
          </div>

          <div 
            ref={scrollContainerRef}
            className={`w-full hide-scroll pt-8 pb-16 flex group ${playingVideoId ? 'overflow-x-auto [touch-action:pan-y]' : 'overflow-x-auto mask-edges'}`}
            style={{ scrollBehavior: 'smooth' }} 
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onTouchStart={() => setIsTouched(true)}
            onTouchEnd={() => setIsTouched(false)}
            onTouchCancel={() => setIsTouched(false)}
          >
            <div className="flex w-max items-center px-[5vw] md:px-[20vw]">
              {/* PERFORMANCE FIX: Reduced DOM nodes by creating 3 sets instead of 4 */}
              {[...Array(3)].map((_, arrayIndex) => (
                <React.Fragment key={arrayIndex}>
                  {sliderVideos.map((video) => {
                    const uniqueId = `${arrayIndex}-${video.id}`;
                    const isPlaying = playingVideoId === uniqueId;
                    const isOtherPlaying = playingVideoId && !isPlaying;

                    let sizeClass = '';
                    if (video.type === 'vertical') sizeClass = 'w-[160px] md:w-[200px] h-[240px] md:h-[300px]';
                    else if (video.type === 'square') sizeClass = 'w-[200px] md:w-[260px] h-[200px] md:h-[260px]'; 
                    else sizeClass = 'w-[300px] md:w-[400px] h-[180px] md:h-[240px]';

                    return (
                      <div key={uniqueId} className="pr-5 md:pr-8 flex-shrink-0">
                        
                        {/* PERFORMANCE FIX: Replaced transition-all with specific transitions and added transform-gpu */}
                        <div 
                          className={`flex flex-col gap-3 md:gap-4 w-full transition-[transform,opacity,box-shadow] duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] transform-gpu ${
                            isOtherPlaying ? 'opacity-40 scale-[0.98]' : (!isPlaying ? 'cursor-pointer hover:scale-[1.02]' : 'scale-110 md:scale-[1.15] z-30 relative')
                          }`}
                          onClick={(e) => {
                            if (!isPlaying) handlePlayInline(uniqueId, e);
                          }}
                        >
                          
                          <div className={`relative rounded-2xl overflow-hidden bg-black transition-[box-shadow,opacity] duration-500 transform-gpu ${sizeClass} ${isPlaying ? 'shadow-[0_20px_50px_rgba(0,0,0,0.3)] ring-2 ring-[#B89672]/50 ring-offset-4 ring-offset-[#FCFAF8]' : 'shadow-md opacity-90 hover:opacity-100'}`}>
                            
                            {isPlaying ? (
                              <div className="w-full h-full relative animate-smooth-fade">
                                {/* PERFORMANCE FIX: Video lazy loads automatically via this conditional rendering block */}
                                <video 
                                  ref={inlineVideoRef}
                                  src={video.url} 
                                  className="w-full h-full object-cover"
                                  autoPlay
                                  loop
                                  muted={isInlineMuted}
                                  playsInline
                                  preload="none" // Extra safety against heavy preloading
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none"></div>

                                <div className="absolute bottom-3 left-3 z-20 flex gap-2">
                                  <button onClick={toggleInlinePlay} className="w-8 h-8 bg-black/40 hover:bg-[#B89672] backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors border border-white/20">
                                    {isInlinePlaying ? (
                                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
                                    ) : (
                                      <svg className="w-3.5 h-3.5 ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                                    )}
                                  </button>
                                  <button onClick={toggleInlineMute} className="w-8 h-8 bg-black/40 hover:bg-[#B89672] backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors border border-white/20">
                                    {isInlineMuted ? (
                                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/></svg>
                                    ) : (
                                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>
                                    )}
                                  </button>
                                </div>

                                <button 
                                  onClick={stopInlineVideo}
                                  className="absolute top-3 right-3 z-30 w-8 h-8 bg-black/40 hover:bg-[#B89672] backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white transition-all transform-gpu"
                                >
                                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                                  </svg>
                                </button>

                              </div>
                            ) : (
                              <>
                                {/* PERFORMANCE FIX: Added lazy loading to thumbnail images */}
                                <img 
                                  src={video.thumbnail} 
                                  alt={video.title} 
                                  loading="lazy"
                                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 transform-gpu"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                                
                                <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-md px-2.5 py-1 rounded text-[10px] text-white tracking-widest font-medium border border-white/10">
                                  {video.duration}
                                </div>

                                <div className="absolute inset-0 flex items-center justify-center">
                                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white border border-white/30 shadow-lg transition-[background-color,border-color,transform] duration-300 group-hover:bg-[#B89672] group-hover:border-[#B89672] group-hover:scale-110 transform-gpu">
                                    <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                                  </div>
                                </div>
                              </>
                            )}
                          </div>

                          <div className={`flex flex-col transition-opacity duration-300 ${isPlaying ? 'opacity-100' : ''}`}>
                            <h4 className={`text-base md:text-lg font-serif font-medium truncate transition-colors duration-300 ${isPlaying ? 'text-[#B89672]' : 'text-[#2D2825] group-hover:text-[#B89672]'}`}>
                              {video.title}
                            </h4>
                            <p className="text-[#8C837C] text-[11px] md:text-xs uppercase tracking-wider mt-1 font-medium">
                              {video.category}
                            </p>
                          </div>

                        </div>
                      </div>
                    );
                  })}
                </React.Fragment>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
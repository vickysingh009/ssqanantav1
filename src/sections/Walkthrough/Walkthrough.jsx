import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import imgResVilla from '../../assets/images/portfolio/residential/residential_2.webp';
import imgCommLoft from '../../assets/images/portfolio/commercial/commercial_2.webp';
import imgBed01 from '../../assets/images/portfolio/bedroom/bedroom_1.webp';
import imgCommLobby from '../../assets/images/portfolio/commercial/commercial_1.webp';
import imgKitchen01 from '../../assets/images/portfolio/kitchen/kitchen_1.webp';
import imgArch01 from '../../assets/images/portfolio/architecture/architecture_1.webp';

// Import Local Videos
import video1 from '../../assets/video/video 1.mp4';
import video1Webm from '../../assets/video/video 1.webm';
import video2 from '../../assets/video/video 2.mp4';
import video2Webm from '../../assets/video/video 2.webm';
import video3 from '../../assets/video/video 3.mp4';
import video3Webm from '../../assets/video/video 3.webm';

// Import New Local Thumbnails
import thumb1 from '../../assets/video/video 1.webp';
import thumb2 from '../../assets/video/video 2 .webp'; // Space preserved from filename
import thumb3 from '../../assets/video/video 3.webp';

const projects = [
  {
    id: 1,
    title: "The Glass Pavilion",
    duration: "0:08",
    category: "Architecture",
    thumbnail: thumb1,
    video: video1,
    videoWebm: video1Webm,
    desc: "A perfect blend of light and shadow, redefining the essence of modern living spaces."
  },
  {
    id: 2,
    title: "Urban Zen Loft",
    duration: "0:08",
    category: "Interior",
    thumbnail: thumb2,
    video: video2,
    videoWebm: video2Webm,
    desc: "A unique fusion of contemporary minimalism and timeless comfort."
  },
  {
    id: 3,
    title: "Minimalist Retreat",
    duration: "0:08",
    category: "Residential",
    thumbnail: thumb3,
    video: video3,
    videoWebm: video3Webm,
    desc: "Serenity meets luxury, where every detail evokes a sense of calm and elegance."
  }
];

// Individual Project Card Component
const ProjectCard = ({ project, index }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [hasVisited, setHasVisited] = useState(false);

  // Intersection Observer for lazy loading and pause on scroll out
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasVisited(true);
        } else {
          if (videoRef.current) {
            videoRef.current.pause();
            setIsPlaying(false);
          }
        }
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const togglePlay = (e) => {
    e.stopPropagation();
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div
      ref={containerRef}
      className={`flex flex-col lg:flex-row items-center gap-10 md:gap-16 group ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
    >

      {/* Video Container */}
      <div className="relative w-full lg:w-[60%] aspect-[16/9] bg-[#EAE8E5] rounded-2xl overflow-hidden shadow-2xl border border-white/20">

        {/* Video Element */}
        {hasVisited && (
          <video
            ref={videoRef}
            className={`w-full h-full object-cover transition-opacity duration-500 ${isPlaying ? 'opacity-100' : 'opacity-0'}`}
            poster={project.thumbnail}
            loop
            muted // Required for autoplay
            playsInline
            controls={isPlaying}
            preload="none"
          >
            <source src={project.videoWebm} type="video/webm" />
            <source src={project.video} type="video/mp4" />
          </video>
        )}

        {/* Poster Image (Hidden when playing) */}
        {!isPlaying && (
          <img
            src={project.thumbnail}
            alt={project.title}
            loading="lazy"
            decoding="async"
            width="1920"
            height="1080"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        )}


        {/* Overlay with Center Play Button (Visible when NOT playing) */}
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-all duration-300">
            <button
              onClick={togglePlay}
              className="w-16 h-16 md:w-20 md:h-20 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/50 hover:bg-[#B89672] hover:border-[#B89672] transition-all transform hover:scale-110 shadow-xl"
            >
              <svg className="w-8 h-8 ml-1 fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
            </button>
          </div>
        )}

        {/* Duration Badge */}
        {!isPlaying && (
          <div className="absolute bottom-5 right-5 px-3 py-1 bg-black/40 backdrop-blur-sm border border-white/20 rounded-full text-[10px] text-white tracking-widest font-bold">
            {project.duration}
          </div>
        )}
      </div>

      {/* Content Side */}
      <div className={`w-full lg:w-[40%] flex flex-col ${index % 2 !== 0 ? 'lg:items-end lg:text-right' : ''}`}>
        <span className="text-[#B89672] text-[11px] uppercase tracking-[0.3em] font-bold mb-4">
          {project.category}
        </span>
        <h3 className="text-3xl md:text-5xl lg:text-6xl font-serif text-[#1A1817] mb-6 leading-tight">
          {project.title}
        </h3>
        <p className="text-[#6B635E] font-light leading-relaxed mb-8 max-w-sm text-[15px] md:text-base">
          {project.desc}
        </p>

        <button
          onClick={togglePlay}
          className="flex items-center gap-4 group/btn w-fit"
        >
          <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#1A1817]">
            {isPlaying ? 'Pause Experience' : 'Play Walkthrough'}
          </span>
          <div className={`h-[1px] bg-[#1A1817] transition-all duration-500 ${isPlaying ? 'w-16' : 'w-8 group-hover/btn:w-16'}`}></div>
        </button>
      </div>

    </div>
  );
};

export default function CinematicWalkthrough() {
  return (
    <section className="bg-[#F2F0ED] py-24 md:py-32 overflow-hidden font-sans">
      <style>
        {`

          .font-serif { font-family: 'Playfair Display', serif; }
          .font-sans { font-family: 'Inter', sans-serif; }
        `}
      </style>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">

        {/* Header Section */}
        <div className="flex flex-col mb-20 md:mb-28">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-[#B89672]"></div>
            <span className="text-[#B89672] text-xs uppercase tracking-[0.4em] font-bold">Cinematic Tour</span>
          </div>
          <h2 className="text-4xl md:text-7xl lg:text-8xl font-serif text-[#1A1817] leading-[0.95] tracking-tighter mb-8">
            Walkthroughs <br />
            <span className="italic font-normal text-[#B89672]/80 ml-8 md:ml-24">of Excellence.</span>
          </h2>
          <p className="text-[#6B635E] text-[16px] md:text-lg max-w-xl font-light leading-relaxed">
            Experience our premium projects through a cinematic lens. Our walkthroughs bring the architecture and design details to life right where you are.
          </p>
        </div>

        {/* Vertical Project List */}
        <div className="flex flex-col gap-24 md:gap-36">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-32 md:mt-44 text-center">
          <Link to="/projects">
            <button className="px-10 py-4 md:px-12 md:py-5 bg-[#1A1817] text-white text-xs md:text-sm uppercase tracking-widest font-medium rounded-full hover:bg-[#B89672] transition-all duration-500 shadow-xl inline-flex">
              View All Projects
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}
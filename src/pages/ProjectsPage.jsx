import React, { useState, useRef } from 'react';
// Import Local Videos
import video1 from '../assets/video/video 1.mp4';
import video1Webm from '../assets/video/video 1.webm';
import video2 from '../assets/video/video 2.mp4';
import video2Webm from '../assets/video/video 2.webm';
import video3 from '../assets/video/video 3.mp4';
import video3Webm from '../assets/video/video 3.webm';
import video4 from '../assets/video/video 4.mp4';
import video4Webm from '../assets/video/video 4.webm';
import video5 from '../assets/video/video 5.mp4';
import video5Webm from '../assets/video/video 5.webm';
import video6 from '../assets/video/video 6.mp4';
import video6Webm from '../assets/video/video 6.webm';
import video7 from '../assets/video/video 7.mp4';
import video8 from '../assets/video/video 8.mp4';
import video9 from '../assets/video/video 9.mp4';
import video10 from '../assets/video/video 10.mp4';

// Import New Local Thumbnails
import thumb1 from '../assets/video/video 1.webp';
import thumb2 from '../assets/video/video 2 .webp'; // Space preserved from filename
import thumb3 from '../assets/video/video 3.webp';
import thumb4 from '../assets/video/video 4.webp';
import thumb5 from '../assets/video/video 5.webp';
import thumb6 from '../assets/video/video 6.webp';
import thumb7 from '../assets/video/video 7.webp';
import thumb8 from '../assets/video/video 8.webp';
import thumb9 from '../assets/video/video 9.webp';
import thumb10 from '../assets/video/video 10.webp';

const allProjects = [
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
  },
  {
    id: 4,
    title: "Sky High Office",
    duration: "0:08",
    category: "Commercial",
    thumbnail: thumb4,
    video: video4,
    videoWebm: video4Webm,
    desc: "Designing productivity through open spaces and natural light integration."
  },
  {
    id: 5,
    title: "The Nordic Cabin",
    duration: "0:13",
    category: "Residential",
    thumbnail: thumb5,
    video: video5,
    videoWebm: video5Webm,
    desc: "Rustic charm meets modern engineering in this cozy winter getaway."
  },
  {
    id: 6,
    title: "Desert Oasis Villa",
    duration: "0:05",
    category: "Architecture",
    thumbnail: thumb6,
    video: video6,
    videoWebm: video6Webm,
    desc: "Seamlessly blending indoor luxury with the vast beauty of the arid landscape."
  },
  {
    id: 7,
    title: "Interior Walkthrough",
    duration: "",
    category: "Interior",
    thumbnail: thumb7,
    video: video7,
    videoWebm: null,
    desc: "A curated journey through refined interiors crafted for modern living."
  },
  {
    id: 8,
    title: "Luxury Space Design",
    duration: "",
    category: "Residential",
    thumbnail: thumb8,
    video: video8,
    videoWebm: null,
    desc: "Where comfort meets sophistication in every corner of the home."
  },
  {
    id: 9,
    title: "Contemporary Living",
    duration: "",
    category: "Interior",
    thumbnail: thumb9,
    video: video9,
    videoWebm: null,
    desc: "Clean lines, warm textures, and purposeful design for modern families."
  },
  {
    id: 10,
    title: "Modern Home Tour",
    duration: "",
    category: "Residential",
    thumbnail: thumb10,
    video: video10,
    videoWebm: null,
    desc: "A complete home transformation celebrating light, space, and elegance."
  }
];

// Project Card Component
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

      {/* Video Container — natural aspect ratio, no cropping */}
      <div className="relative w-full lg:w-[60%] bg-[#1A1A1A] rounded-2xl overflow-hidden shadow-2xl border border-white/20">

        {hasVisited && (
          <video
            ref={videoRef}
            className={`w-full h-auto max-h-[70vh] block transition-opacity duration-500 ${isPlaying ? 'opacity-100' : 'opacity-0 absolute inset-0 w-full h-full object-contain'}`}
            poster={project.thumbnail || undefined}
            loop
            muted
            playsInline
            controls={isPlaying}
            preload="none"
          >
            {project.videoWebm && <source src={project.videoWebm} type="video/webm" />}
            <source src={project.video} type="video/mp4" />
          </video>
        )}

        {!isPlaying && project.thumbnail && (
          <div className="relative w-full overflow-hidden" style={{maxHeight: '70vh'}}>
            <img
              src={project.thumbnail}
              alt={project.title}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover block transition-transform duration-700 group-hover:scale-105"
              style={{ objectPosition: 'center center' }}
            />
          </div>
        )}
        {!isPlaying && !project.thumbnail && (
          <div className="aspect-[16/9] w-full bg-[#2A2520] flex items-center justify-center">
            <svg className="w-12 h-12 text-[#B89672]/40" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
          </div>
        )}


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
            {isPlaying ? 'Pause Experience' : 'View Full Walkthrough'}
          </span>
          <div className={`h-[1px] bg-[#1A1817] transition-all duration-500 ${isPlaying ? 'w-16' : 'w-8 group-hover/btn:w-16'}`}></div>
        </button>
      </div>

    </div>
  );
};

import SEO from '../components/seo/SEO';

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#F2F0ED] font-sans text-[#4A4441] pb-20">
      <SEO
        title="Selected Works"
        description="A collection of our most prestigious architectural and interior achievements. Step inside and explore luxury."
      />
      <style>
        {`

          .font-serif { font-family: 'Playfair Display', serif; }
          .font-sans { font-family: 'Inter', sans-serif; }
        `}
      </style>

      {/* Hero Header Section */}
      <header className="pt-24 md:pt-32 pb-16 px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto border-b border-gray-200">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-[1px] bg-[#B89672]"></div>
          <span className="text-[#B89672] text-xs uppercase tracking-[0.4em] font-bold">Archives</span>
        </div>
        <h1 className="text-5xl md:text-8xl font-serif text-[#1A1817] leading-[0.9] tracking-tighter mb-10">
          Selected <br />
          <span className="italic font-normal text-[#B89672]/80 ml-8 md:ml-24">Works.</span>
        </h1>
        <p className="text-[#6B635E] text-lg md:text-xl max-w-2xl font-light leading-relaxed">
          A collection of our most prestigious architectural and interior achievements.
          Step inside and explore the intersection of luxury and functional design.
        </p>
      </header>

      {/* Projects List Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto">
        <div className="flex flex-col gap-24 md:gap-40">
          {allProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
}

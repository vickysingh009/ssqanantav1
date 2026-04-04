// Updated: 2026-04-04 (V2 - Optimized Image Structure)
import React, { useState, useEffect, memo, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import img_bedroom_bedroom_1 from '../assets/images/portfolio/bedroom/bedroom_1.webp';
import img_bedroom_bedroom_2 from '../assets/images/portfolio/bedroom/bedroom_2.webp';
import img_bedroom_bedroom_3 from '../assets/images/portfolio/bedroom/bedroom_3.webp';
import img_bedroom_bedroom_4 from '../assets/images/portfolio/bedroom/bedroom_4.webp';
import img_bedroom_bedroom_5 from '../assets/images/portfolio/bedroom/bedroom_5.webp';
import img_bedroom_bedroom_6 from '../assets/images/portfolio/bedroom/bedroom_6.webp';
import img_bedroom_bedroom_7 from '../assets/images/portfolio/bedroom/bedroom_7.webp';
import img_bedroom_bedroom_8 from '../assets/images/portfolio/bedroom/bedroom_8.webp';
import img_bedroom_bedroom_9 from '../assets/images/portfolio/bedroom/bedroom_9.webp';
import img_commercial_commercial_1 from '../assets/images/portfolio/commercial/commercial_1.webp';
import img_commercial_commercial_2 from '../assets/images/portfolio/commercial/commercial_2.webp';
import img_commercial_commercial_3 from '../assets/images/portfolio/commercial/commercial_3.webp';
import img_commercial_commercial_4 from '../assets/images/portfolio/commercial/commercial_4.webp';
import img_commercial_commercial_5 from '../assets/images/portfolio/commercial/commercial_5.webp';
import img_commercial_commercial_6 from '../assets/images/portfolio/commercial/commercial_6.webp';
import img_commercial_commercial_7 from '../assets/images/portfolio/commercial/commercial_7.webp';
import img_kitchen_kitchen_1 from '../assets/images/portfolio/kitchen/kitchen_1.webp';
import img_kitchen_kitchen_2 from '../assets/images/portfolio/kitchen/kitchen_2.webp';
import img_kitchen_kitchen_3 from '../assets/images/portfolio/kitchen/kitchen_3.webp';
import img_kitchen_kitchen_4 from '../assets/images/portfolio/kitchen/kitchen_4.webp';
import img_kitchen_kitchen_5 from '../assets/images/portfolio/kitchen/kitchen_5.webp';
import img_living_room_living_room_1 from '../assets/images/portfolio/living_room/living_room_1.webp';
import img_living_room_living_room_2 from '../assets/images/portfolio/living_room/living_room_2.webp';
import img_living_room_living_room_3 from '../assets/images/portfolio/living_room/living_room_3.webp';
import img_living_room_living_room_4 from '../assets/images/portfolio/living_room/living_room_4.webp';
import img_living_room_living_room_5 from '../assets/images/portfolio/living_room/living_room_5.webp';
import img_living_room_living_room_6 from '../assets/images/portfolio/living_room/living_room_6.webp';
import img_living_room_living_room_7 from '../assets/images/portfolio/living_room/living_room_7.webp';
import img_living_room_living_room_8 from '../assets/images/portfolio/living_room/living_room_8.webp';
import img_living_room_living_room_9 from '../assets/images/portfolio/living_room/living_room_9.webp';
import img_residential_residential_1 from '../assets/images/portfolio/residential/residential_1.webp';
import img_residential_residential_2 from '../assets/images/portfolio/residential/residential_2.webp';
import img_residential_residential_3 from '../assets/images/portfolio/residential/residential_3.webp';
import img_residential_residential_4 from '../assets/images/portfolio/residential/residential_4.webp';
import img_residential_residential_5 from '../assets/images/portfolio/residential/residential_5.webp';
import img_residential_residential_6 from '../assets/images/portfolio/residential/residential_6.webp';
import img_residential_residential_7 from '../assets/images/portfolio/residential/residential_7.webp';

// PORTFOLIO DATA
const portfolioData = [
  {
    id: 1,
    title: 'Bedroom Design',
    category: 'Bedroom',
    images: [img_bedroom_bedroom_1],
    alt: 'Bedroom - premium interior styling'
  },
  {
    id: 2,
    title: 'Bedroom Design',
    category: 'Bedroom',
    images: [img_bedroom_bedroom_2],
    alt: 'Bedroom - elegant architecture decor'
  },
  {
    id: 3,
    title: 'Bedroom Design',
    category: 'Bedroom',
    images: [img_bedroom_bedroom_3],
    alt: 'Bedroom - functional space utilization'
  },
  {
    id: 4,
    title: 'Bedroom Design',
    category: 'Bedroom',
    images: [img_bedroom_bedroom_4],
    alt: 'Bedroom - luxury aesthetic view'
  },
  {
    id: 5,
    title: 'Bedroom Design',
    category: 'Bedroom',
    images: [img_bedroom_bedroom_5],
    alt: 'Bedroom - minimalist clean finish'
  },
  {
    id: 6,
    title: 'Bedroom Design',
    category: 'Bedroom',
    images: [img_bedroom_bedroom_6],
    alt: 'Bedroom - contemporary lighting and design'
  },
  {
    id: 7,
    title: 'Bedroom Design',
    category: 'Bedroom',
    images: [img_bedroom_bedroom_7],
    alt: 'Bedroom - bespoke furniture integration'
  },
  {
    id: 8,
    title: 'Bedroom Design',
    category: 'Bedroom',
    images: [img_bedroom_bedroom_8],
    alt: 'Bedroom - modern space layout'
  },
  {
    id: 9,
    title: 'Bedroom Design',
    category: 'Bedroom',
    images: [img_bedroom_bedroom_9],
    alt: 'Bedroom - premium interior styling'
  },
  {
    id: 10,
    title: 'Commercial Design',
    category: 'Commercial',
    images: [img_commercial_commercial_1],
    alt: 'Commercial - elegant architecture decor'
  },
  {
    id: 11,
    title: 'Commercial Design',
    category: 'Commercial',
    images: [img_commercial_commercial_2],
    alt: 'Commercial - functional space utilization'
  },
  {
    id: 12,
    title: 'Commercial Design',
    category: 'Commercial',
    images: [img_commercial_commercial_3],
    alt: 'Commercial - luxury aesthetic view'
  },
  {
    id: 13,
    title: 'Commercial Design',
    category: 'Commercial',
    images: [img_commercial_commercial_4],
    alt: 'Commercial - minimalist clean finish'
  },
  {
    id: 14,
    title: 'Commercial Design',
    category: 'Commercial',
    images: [img_commercial_commercial_5],
    alt: 'Commercial - contemporary lighting and design'
  },
  {
    id: 15,
    title: 'Commercial Design',
    category: 'Commercial',
    images: [img_commercial_commercial_6],
    alt: 'Commercial - bespoke furniture integration'
  },
  {
    id: 16,
    title: 'Commercial Design',
    category: 'Commercial',
    images: [img_commercial_commercial_7],
    alt: 'Commercial - modern space layout'
  },
  {
    id: 17,
    title: 'Modular Kitchen Design',
    category: 'Modular Kitchen',
    images: [img_kitchen_kitchen_1],
    alt: 'Modular Kitchen - premium interior styling'
  },
  {
    id: 18,
    title: 'Modular Kitchen Design',
    category: 'Modular Kitchen',
    images: [img_kitchen_kitchen_2],
    alt: 'Modular Kitchen - elegant architecture decor'
  },
  {
    id: 19,
    title: 'Modular Kitchen Design',
    category: 'Modular Kitchen',
    images: [img_kitchen_kitchen_3],
    alt: 'Modular Kitchen - functional space utilization'
  },
  {
    id: 20,
    title: 'Modular Kitchen Design',
    category: 'Modular Kitchen',
    images: [img_kitchen_kitchen_4],
    alt: 'Modular Kitchen - luxury aesthetic view'
  },
  {
    id: 21,
    title: 'Modular Kitchen Design',
    category: 'Modular Kitchen',
    images: [img_kitchen_kitchen_5],
    alt: 'Modular Kitchen - minimalist clean finish'
  },
  {
    id: 22,
    title: 'Living Room Design',
    category: 'Living Room',
    images: [img_living_room_living_room_1],
    alt: 'Living Room - contemporary lighting and design'
  },
  {
    id: 23,
    title: 'Living Room Design',
    category: 'Living Room',
    images: [img_living_room_living_room_2],
    alt: 'Living Room - bespoke furniture integration'
  },
  {
    id: 24,
    title: 'Living Room Design',
    category: 'Living Room',
    images: [img_living_room_living_room_3],
    alt: 'Living Room - modern space layout'
  },
  {
    id: 25,
    title: 'Living Room Design',
    category: 'Living Room',
    images: [img_living_room_living_room_4],
    alt: 'Living Room - premium interior styling'
  },
  {
    id: 26,
    title: 'Living Room Design',
    category: 'Living Room',
    images: [img_living_room_living_room_5],
    alt: 'Living Room - elegant architecture decor'
  },
  {
    id: 27,
    title: 'Living Room Design',
    category: 'Living Room',
    images: [img_living_room_living_room_6],
    alt: 'Living Room - functional space utilization'
  },
  {
    id: 28,
    title: 'Living Room Design',
    category: 'Living Room',
    images: [img_living_room_living_room_7],
    alt: 'Living Room - luxury aesthetic view'
  },
  {
    id: 29,
    title: 'Living Room Design',
    category: 'Living Room',
    images: [img_living_room_living_room_8],
    alt: 'Living Room - minimalist clean finish'
  },
  {
    id: 30,
    title: 'Living Room Design',
    category: 'Living Room',
    images: [img_living_room_living_room_9],
    alt: 'Living Room - contemporary lighting and design'
  },
  {
    id: 31,
    title: 'Residential Design',
    category: 'Residential',
    images: [img_residential_residential_1],
    alt: 'Residential - bespoke furniture integration'
  },
  {
    id: 32,
    title: 'Residential Design',
    category: 'Residential',
    images: [img_residential_residential_2],
    alt: 'Residential - modern space layout'
  },
  {
    id: 33,
    title: 'Residential Design',
    category: 'Residential',
    images: [img_residential_residential_3],
    alt: 'Residential - premium interior styling'
  },
  {
    id: 34,
    title: 'Residential Design',
    category: 'Residential',
    images: [img_residential_residential_4],
    alt: 'Residential - elegant architecture decor'
  },
  {
    id: 35,
    title: 'Residential Design',
    category: 'Residential',
    images: [img_residential_residential_5],
    alt: 'Residential - functional space utilization'
  },
  {
    id: 36,
    title: 'Residential Design',
    category: 'Residential',
    images: [img_residential_residential_6],
    alt: 'Residential - luxury aesthetic view'
  },
  {
    id: 37,
    title: 'Residential Design',
    category: 'Residential',
    images: [img_residential_residential_7],
    alt: 'Residential - minimalist clean finish'
  }
];


const categories = [
  'All', 'Modular Kitchen', 'Living Room', 'Bedroom', 'Commercial', 'Residential', 'Wardrobe', 'Space Saving'
];

// INDIVIDUAL PROJECT CARD COMPONENT
const ProjectCard = memo(({ project }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100 flex flex-col group">

      {/* Image Wrapper */}
      <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100">
        <img
          src={project.images[0]}
          alt={project.alt || project.title}
          width="400"
          height="300"
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      {/* Card Content */}
      <div className="p-4 md:p-5 flex flex-col flex-grow justify-between">
        <h3 className="text-[15px] md:text-[17px] font-semibold font-sans tracking-tight text-[#2D2825] leading-snug mb-4 line-clamp-2">
          {project.title}
        </h3>

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
          <a href="#" className="text-[#B89672] text-xs md:text-sm font-medium hover:text-[#9a7b5c] transition-colors flex items-center gap-1 group/link">
            Explore more
            <svg className="w-3.5 h-3.5 transform group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </a>

          <button className="bg-[#2D2825] hover:bg-[#B89672] text-white px-3 md:px-4 py-2 rounded text-[11px] md:text-sm font-medium transition-colors shadow-sm">
            Get a Quote
          </button>
        </div>
      </div>
    </div>
  );
});

import SEO from '../components/seo/SEO';

export default function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [displayLimit, setDisplayLimit] = useState(9); // Initial 9 items
  const loaderRef = useRef(null);

  const handleTabClick = (category) => {
    if (activeCategory === category) return;
    
    // Force instant scroll by temporarily disabling any global smooth scrolling
    document.documentElement.style.scrollBehavior = 'auto';
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.documentElement.style.scrollBehavior = ''; // Reset
    
    setDisplayLimit(9); // Reset limit on tab change
    setActiveCategory(category);
  };

  useEffect(() => {
    // Start hidden
    setIsAnimating(true);
    
    // Immediately swap the data so there is no layout delay
    if (activeCategory === 'All') {
      setFilteredProjects(portfolioData);
    } else {
      setFilteredProjects(portfolioData.filter(item => item.category === activeCategory));
    }

    // Fade in smoothly after a tiny tick
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 50);

    return () => clearTimeout(timer);
  }, [activeCategory]);

  // Infinite Scroll Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const firstEntry = entries[0];
        if (firstEntry.isIntersecting && displayLimit < filteredProjects.length) {
          // Add small simulated network delay for premium feel
          setTimeout(() => {
            setDisplayLimit((prev) => Math.min(prev + 6, filteredProjects.length));
          }, 300);
        }
      },
      { threshold: 0.1 }
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => observer.disconnect();
  }, [filteredProjects.length, displayLimit]);

  const visibleProjects = filteredProjects.slice(0, displayLimit);

  return (
    <div className="min-h-screen bg-[#F8F9FA] font-sans text-[#4A4441] pb-24 relative">
      <SEO 
        title={`${activeCategory !== 'All' ? activeCategory : 'Our'} Portfolio`} 
        description="Explore our curated collection of premium interior designs including modern kitchens, luxurious living rooms, and bedrooms." 
      />
      <style>
        {`
          .font-sans { font-family: 'Inter', sans-serif; }
          .font-serif { font-family: 'Playfair Display', serif; }
          
          .hide-scroll::-webkit-scrollbar { display: none; }
          .hide-scroll { -ms-overflow-style: none; scrollbar-width: none; }
        `}
      </style>

      {/* ========================================================= */}
      {/* HEADER SECTION (Category Filters)   */}
      {/* ========================================================= */}
      
      {/* HEADER TITLE SECTION (Non-sticky, hides on scroll) */}
      <div className="bg-white w-full">
        <div className="max-w-[1400px] mx-auto px-4 md:px-12 lg:px-24 pt-6 md:pt-8 pb-3">
          <h1 className="text-2xl md:text-4xl font-bold font-sans tracking-tight text-[#1A1A1A] mb-2 md:mb-3">
            {activeCategory === 'All' ? 'Interior Designs' : `${activeCategory} Designs`}
          </h1>
          <p className="text-gray-500 text-[13px] md:text-base font-light">
            Discover stylish {activeCategory.toLowerCase()} designs: Combining functionality with modern, space-saving solutions.
          </p>
        </div>
      </div>

      {/* FILTER PILLS (Sticky, stays on scroll beneath navbar) */}
      <div className="bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-200 sticky top-[62px] md:top-[76px] z-30 w-full transition-all duration-300">
        <div className="max-w-[1400px] mx-auto px-4 md:px-12 lg:px-24 py-3">
          <div className="flex gap-2 md:gap-3 overflow-x-auto hide-scroll">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleTabClick(category)}
                className={`whitespace-nowrap px-4 py-1.5 md:px-5 md:py-2 rounded-md text-[13px] md:text-sm font-medium transition-all duration-200 border ${activeCategory === category
                    ? 'border-[#B89672] bg-[#B89672]/5 text-[#B89672]'
                    : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:bg-gray-50'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* MAIN CONTENT AREA */}
      {/* ========================================================= */}
      <main className="w-full relative z-20">
        {/* Matching Fixed Padding and Max-Width structure */}
        <div className="max-w-[1400px] mx-auto px-4 md:px-12 lg:px-24 pt-6 md:pt-8">

          {/* BREADCRUMBS */}
          <div className="flex items-center flex-wrap gap-1 md:gap-2 text-[11px] md:text-sm text-gray-500 mb-6 md:mb-8">
            <Link to="/" className="hover:text-[#B89672] transition-colors">Home</Link>
            <svg className="w-2.5 h-2.5 md:w-3 md:h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            <a href="#" className="hover:text-[#B89672] transition-colors">Interior Design</a>
            {activeCategory !== 'All' && (
              <>
                <svg className="w-2.5 h-2.5 md:w-3 md:h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                <span className="text-[#B89672] font-medium">{activeCategory} Design</span>
              </>
            )}
          </div>

          {/* PROJECT GRID */}
          <div className={`transition-all duration-500 ease-in-out ${isAnimating ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'}`}>
            {filteredProjects.length > 0 ? (
              activeCategory === 'All' ? (
                <div className="flex flex-col gap-12 md:gap-20">
                  {categories.filter(c => c !== 'All').map(category => {
                    const catProjects = visibleProjects.filter(p => p.category === category);
                    if (catProjects.length === 0) return null;
                    return (
                      <div key={category} className="flex flex-col">
                        <div className="flex items-center gap-4 mb-6 md:mb-8">
                           <h2 className="text-2xl md:text-3xl font-semibold font-sans tracking-tight text-[#1A1A1A]">{category}</h2>
                           <div className="flex-grow h-[1px] bg-gray-200"></div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
                          {catProjects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
                  {visibleProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </div>
              )
            ) : (
              // EMPTY STATE
              <div className="flex flex-col items-center justify-center py-16 md:py-20 px-4 text-center bg-white rounded-xl border border-dashed border-gray-300">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 md:w-8 md:h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                </div>
                <h3 className="text-base md:text-lg font-medium text-gray-900 mb-1">No projects found</h3>
                <p className="text-gray-500 text-xs md:text-sm max-w-md">
                  We are currently updating our portfolio for {activeCategory}. Please check back later or explore other categories.
                </p>
                <button
                  onClick={() => setActiveCategory('All')}
                  className="mt-5 md:mt-6 text-[#B89672] font-medium text-xs md:text-sm hover:underline"
                >
                  View All Projects
                </button>
              </div>
            )}
          </div>
          
          {/* INFINITE SCROLL OBSERVER TARGET */}
          <div ref={loaderRef} className="h-20 flex items-center justify-center mt-8">
            {displayLimit < filteredProjects.length && (
               <div className="flex items-center gap-3 text-[#B89672]">
                 <div className="w-5 h-5 border-2 border-[#B89672]/30 border-t-[#B89672] rounded-full animate-spin"></div>
                 <span className="text-sm font-medium tracking-wide">Loading more designs...</span>
               </div>
            )}
          </div>

        </div>
      </main>

      {/* FLOATING CHAT BUTTON */}
      <button className="fixed bottom-6 right-4 md:right-6 w-12 h-12 md:w-14 md:h-14 bg-[#B89672] text-white rounded-full shadow-[0_8px_30px_rgb(184,150,114,0.4)] flex items-center justify-center hover:scale-110 hover:bg-[#9a7b5c] transition-all z-20">
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
      </button>

    </div>
  );
}

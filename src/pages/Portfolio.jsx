// Updated: 2026-04-04 (V2 - Optimized Image Structure)
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/seo/SEO';
import { portfolioData, categories } from '../data/portfolioData';
import ProjectCard from '../components/cards/ProjectCard';

export default function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(portfolioData);
  const [isAnimating, setIsAnimating] = useState(true);
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

  // For specific categories, we use the display limit for infinite scroll.
  // For "All", we show cat headers, so we should ensure we show enough from each.
  const visibleProjects = activeCategory === 'All'
    ? filteredProjects
    : filteredProjects.slice(0, displayLimit);

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
      <div className="bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-200 sticky top-[62px] md:top-[64px] z-30 w-full transition-all duration-300">
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
            <span className="text-gray-500">Interior Design</span>
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
                    const catProjects = portfolioData.filter(p => p.category === category);
                    if (catProjects.length === 0) return null;

                    // Show a reasonable preview of each category in "All" view
                    return (
                      <div key={category} className="flex flex-col">
                        <div className="flex items-center gap-4 mb-6 md:mb-8">
                          <h2 className="text-2xl md:text-3xl font-semibold font-sans tracking-tight text-[#1A1A1A]">{category}</h2>
                          <div className="flex-grow h-[1px] bg-gray-200"></div>
                        </div>
                        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
                          {catProjects.slice(0, 6).map((project) => (
                            <ProjectCard key={project.id} project={project} />
                          ))}
                        </section>
                        {catProjects.length > 6 && (
                          <button
                            onClick={() => handleTabClick(category)}
                            className="mt-6 text-[#B89672] text-sm font-medium hover:underline self-start"
                          >
                            View all {category} designs +
                          </button>
                        )}
                      </div>
                    );
                  })}
                </div>
              ) : (
                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
                  {visibleProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </section>
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



    </div>
  );
}

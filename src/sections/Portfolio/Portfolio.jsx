import React, { useState, useMemo, memo } from 'react';

import img1 from '../../assets/images/portfolio/residential_villa.webp';
import img2 from '../../assets/images/portfolio/commercial_loft.webp';
import img3 from '../../assets/images/portfolio/bedroom_01.webp';
import img4 from '../../assets/images/portfolio/commercial_lobby.webp';
import img5 from '../../assets/images/portfolio/kitchen_01.webp';
import img7 from '../../assets/images/portfolio/residential_living_room.webp';
import img8 from '../../assets/images/portfolio/commercial_office.webp';
import img9 from '../../assets/images/portfolio/kitchen_02.webp';
import img10 from '../../assets/images/portfolio/kitchen_03.webp';
import img11 from '../../assets/images/portfolio/kitchen_04.webp';
import img12 from '../../assets/images/portfolio/bedroom_02.webp';
import img13 from '../../assets/images/portfolio/bedroom_03.webp';
import img14 from '../../assets/images/portfolio/bedroom_04.webp';
import img16 from '../../assets/images/portfolio/commercial_modern_office.webp';
import verticalImg from '../../assets/images/portfolio/vertical image.webp';

const projects = [
  {
    id: 1,
    title: 'Modern Minimalist Villa',
    category: 'Residential',
    image: img1,
    colSpan: 'md:col-span-3',
    rowSpan: 'md:row-span-2',
    style: 'rounded-tl-[4rem] rounded-br-lg rounded-tr-lg rounded-bl-lg' // Match top-left rounded style
  },
  {
    id: 2,
    title: 'Urban Loft Workspace',
    category: 'Commercial',
    image: img2,
    colSpan: 'md:col-span-1',
    rowSpan: 'md:row-span-1',
    style: 'rounded-lg'
  },
  {
    id: 3,
    title: 'Serene Bedroom Retreat',
    category: 'Bedroom',
    image: img3,
    colSpan: 'md:col-span-1',
    rowSpan: 'md:row-span-1',
    style: 'rounded-lg'
  },
  {
    id: 4,
    title: 'Boutique Hotel Lobby',
    category: 'Commercial',
    image: img4,
    colSpan: 'md:col-span-1',
    rowSpan: 'md:row-span-1',
    style: 'rounded-lg'
  },
  {
    id: 5,
    title: 'Contemporary Kitchen',
    category: 'Kitchen',
    image: img5,
    colSpan: 'md:col-span-3',
    rowSpan: 'md:row-span-1',
    style: 'rounded-br-[4rem] rounded-tl-lg rounded-tr-lg rounded-bl-lg' // Distinctive bottom-right curve
  }
];

const categories = ['All', 'Residential', 'Commercial', 'Kitchen', 'Bedroom'];

// Helper component to render individual project cards with consistent hover effects
const ProjectCard = memo(({ title, category, image, className, isVerticalText }) => (
  <div className={`group relative overflow-hidden shadow-sm bg-[#EFECE8] ${className}`}>
    {isVerticalText ? (
      <>
        <img src={image} alt={title} loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-500 pointer-events-none" />
        <div className="absolute inset-0 flex items-center justify-center p-2 z-10 pointer-events-none">
          <h3 className="text-[#F3EBE1] text-lg lg:text-2xl font-serif tracking-[0.4em] uppercase [writing-mode:vertical-rl] rotate-180 transition-transform duration-500 group-hover:scale-105 group-hover:text-white drop-shadow-md">
            {title}
          </h3>
        </div>
      </>
    ) : (
      <>
        <img src={image} alt={title} loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2D2825]/80 via-[#2D2825]/10 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-full p-6 lg:p-8 z-10 transition-transform duration-500 group-hover:-translate-y-2">
          <span className="text-[#D4C3B3] text-[10px] lg:text-xs uppercase tracking-widest font-medium mb-1 block drop-shadow-md">
            {category}
          </span>
          <h3 className="text-white text-base lg:text-2xl font-serif drop-shadow-md">
            {title}
          </h3>
        </div>
      </>
    )}
  </div>
));

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [displayCategory, setDisplayCategory] = useState('All');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleTabChange = (category) => {
    if (category === activeCategory || isTransitioning) return;
    
    setIsTransitioning(true);
    setActiveCategory(category);
    
    setTimeout(() => {
      setDisplayCategory(category);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 300);
  };

  const filteredProjects = useMemo(() => {
    return projects.filter(project => 
      displayCategory === 'All' || project.category === displayCategory
    );
  }, [displayCategory]);

  // LAYOUT 2: "RESIDENTIAL" TAB (Asymmetric Bento Grid)
  const renderResidentialLayout = () => (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
      <ProjectCard title="Luxury Family Villa" category="Residential" image={img1} className="md:col-span-8 md:row-span-2 h-[400px] md:h-[624px] rounded-tl-[4rem] rounded-bl-[4rem] rounded-r-xl" />
      <ProjectCard title="Cozy Living Space" category="Residential" image={img7} className="md:col-span-4 md:row-span-1 h-[300px] rounded-2xl" />
      <ProjectCard title="Serene Bedroom" category="Residential" image={img3} className="md:col-span-4 md:row-span-1 h-[300px] rounded-2xl" />
    </div>
  );

  // LAYOUT 3: "COMMERCIAL" TAB (Alternating Diagonal Blocks)
  const renderCommercialLayout = () => (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
      <ProjectCard title="Executive Boardroom" category="Commercial" image={img16} className="md:col-span-4 h-[300px] md:h-[350px] rounded-tl-[4rem] rounded-xl" />
      <ProjectCard title="Corporate Headquarters" category="Commercial" image={img8} className="md:col-span-8 h-[300px] md:h-[350px] rounded-tr-[4rem] rounded-xl" />
      <ProjectCard title="Urban Loft Workspace" category="Commercial" image={img2} className="md:col-span-8 h-[300px] md:h-[400px] rounded-bl-[4rem] rounded-xl" />
      <ProjectCard title="Boutique Hotel Lobby" category="Commercial" image={img4} className="md:col-span-4 h-[300px] md:h-[400px] rounded-br-[4rem] rounded-xl" />
    </div>
  );

  // LAYOUT 4: "KITCHEN" TAB (Tall Elegant Pillars)
  const renderKitchenLayout = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <ProjectCard title="Contemporary Kitchen" category="Kitchen" image={img5} className="h-[400px] lg:h-[600px] rounded-tl-[4rem] rounded-xl" />
      <ProjectCard title="Minimalist Open Kitchen" category="Kitchen" image={img9} className="h-[400px] lg:h-[600px] rounded-2xl" />
      <ProjectCard title="Modern Island Kitchen" category="Kitchen" image={img11} className="h-[400px] lg:h-[600px] rounded-2xl" />
      <ProjectCard title="Luxury Marble Kitchen" category="Kitchen" image={img10} className="h-[400px] lg:h-[600px] rounded-br-[4rem] rounded-xl" />
    </div>
  );

  // LAYOUT 5: "BEDROOM" TAB (Alternating Wide / Zig-Zag Grid)
  const renderBedroomLayout = () => (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
      <ProjectCard title="Serene Master Bedroom" category="Bedroom" image={img3} className="md:col-span-8 h-[350px] md:h-[400px] rounded-tl-[4rem] rounded-xl" />
      <ProjectCard title="Minimalist Guest Room" category="Bedroom" image={img12} className="md:col-span-4 h-[350px] md:h-[400px] rounded-tr-[4rem] rounded-xl" />
      <ProjectCard title="Classic Vintage Room" category="Bedroom" image={img13} className="md:col-span-4 h-[350px] md:h-[400px] rounded-bl-[4rem] rounded-xl" />
      <ProjectCard title="Luxury Suite Design" category="Bedroom" image={img14} className="md:col-span-8 h-[350px] md:h-[400px] rounded-br-[4rem] rounded-xl" />
    </div>
  );

  return (
    <div className="min-h-screen w-full font-sans text-[#4A4441]">



      {/* PORTFOLIO SECTION */}
      <section className="py-24 px-[10px] md:px-[60px] relative overflow-hidden">
        
        {/* Subtle Background Decorative Lines (Matched to Why Choose Us gold tint) */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
          <div className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] rounded-full border-[1px] border-[#A67C52]/10"></div>
          <div className="absolute top-[40%] -left-[20%] w-[600px] h-[600px] rounded-full border-[2px] border-[#A67C52]/5"></div>
        </div>

        <div className="max-w-[1660px] w-full mx-auto relative z-10">
          
          {/* Section Header */}
          <div className="flex flex-col items-center text-center mb-12 md:mb-16 gap-6 md:gap-8 max-w-3xl mx-auto">
            <div className="w-full">
              <div className="flex items-center justify-center gap-4 mb-4 md:mb-5">
                <span className="w-8 md:w-12 h-[1px] bg-[#A67C52]/80"></span>
                <span className="font-sans text-[15px] md:text-[17px] font-medium tracking-[0.15em] text-[#A67C52] uppercase">
                  PORTFOLIO
                </span>
                <span className="w-8 md:w-12 h-[1px] bg-[#A67C52]/80"></span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif text-[#2D2825] mb-4 md:mb-6">
                Our Featured Works
              </h2>
              <p className="text-[#6B635E] text-base md:text-lg leading-relaxed font-light">
                Explore a curated selection of our most recent projects. We blend 
                creativity, functionality, and precision to craft spaces that truly 
                feel like yours.
              </p>
            </div>

            {/* Filter Buttons */}
            <div className="flex gap-4 md:gap-8 pb-2 flex-wrap justify-center mt-4 w-full">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleTabChange(category)}
                  aria-pressed={activeCategory === category}
                  aria-label={`Show ${category} projects`}
                  className={`text-sm md:text-base transition-all duration-300 pb-1 border-b-2 ${
                    activeCategory === category
                      ? 'border-[#B89672] text-[#2D2825] font-medium'
                      : 'border-transparent text-[#8C837C] hover:text-[#2D2825]'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Portfolio Grid */}
          <div className={`w-full transition-all duration-300 transform ${
            isTransitioning ? 'opacity-0 scale-[0.98] translate-y-4' : 'opacity-100 scale-100 translate-y-0'
          }`}>
            {displayCategory === 'All' && (
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[300px]">
                {filteredProjects.map((project) => {
                  if (project.id === 1) return (
                <div key={project.id} className={`${project.colSpan} ${project.rowSpan} relative w-full h-full flex justify-between`}>
                  {/* Image Div - Frame size explicitly reduced to make space for the strip */}
                  <div className={`group relative overflow-hidden shadow-sm w-full md:w-[calc(100%-264px)] h-full bg-[#EFECE8] ${project.style}`}>
                    <img 
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      onError={(e) => {
                        e.target.onerror = null; 
                        e.target.src = `https://placehold.co/800x600/2D2825/D4C3B3?text=${encodeURIComponent(project.title)}`;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2D2825]/80 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-full p-8 z-10 transition-transform duration-500 group-hover:-translate-y-2">
                      <span className="text-[#D4C3B3] text-xs uppercase tracking-widest font-medium mb-1 block drop-shadow-md">
                        {project.category}
                      </span>
                      <h3 className="text-white text-lg md:text-xl font-serif drop-shadow-md">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                  {/* The Vertical Featured Image block that takes the remaining space */}
                  <div className="hidden md:block w-[240px] h-full rounded-[12px] overflow-hidden shadow-sm relative group">
                    <img src={verticalImg} alt="Vertical decor" loading="lazy" decoding="async" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px] pointer-events-none group-hover:bg-black/40 transition-colors duration-500" />
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                      <h3 className="[writing-mode:vertical-rl] rotate-180 uppercase tracking-[0.5em] text-sm md:text-base text-[#EFECE8] font-serif drop-shadow-lg transition-transform duration-700 group-hover:scale-[1.03]">
                        Featured Design
                      </h3>
                    </div>
                  </div>
                </div>
              );

              if (project.id === 5) return (
                <div key={project.id} className={`${project.colSpan} ${project.rowSpan} relative w-full h-full flex justify-between`}>
                  {/* The Vertical text block on the LEFT */}
                  <div className="hidden md:flex w-[80px] h-full bg-[#EFECE8] rounded-[12px] items-center justify-center shadow-sm">
                    <h3 className="[writing-mode:vertical-rl] rotate-180 uppercase tracking-[0.4em] text-sm text-[#B89672] font-serif">
                      Modern Spaces
                    </h3>
                  </div>
                  {/* Image Div - Frame size explicitly reduced to make space for the strip */}
                  <div className={`group relative overflow-hidden shadow-sm w-full md:w-[calc(100%-104px)] h-full bg-[#EFECE8] ${project.style}`}>
                    <img 
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      onError={(e) => {
                        e.target.onerror = null; 
                        e.target.src = `https://placehold.co/800x600/2D2825/D4C3B3?text=${encodeURIComponent(project.title)}`;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2D2825]/80 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-full p-8 z-10 transition-transform duration-500 group-hover:-translate-y-2">
                      <span className="text-[#D4C3B3] text-xs uppercase tracking-widest font-medium mb-1 block drop-shadow-md">
                        {project.category}
                      </span>
                      <h3 className="text-white text-lg md:text-xl font-serif drop-shadow-md">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </div>
              );

              return (
                <div 
                  key={project.id} 
                  className={`group relative overflow-hidden shadow-sm bg-[#EFECE8] ${project.colSpan} ${project.rowSpan} ${project.style}`}
                >
                  {/* Image */}
                  <img 
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      e.target.onerror = null; 
                      e.target.src = `https://placehold.co/800x600/2D2825/D4C3B3?text=${encodeURIComponent(project.title)}`;
                    }}
                  />
                  
                  {/* Overlay (Permanent subtle bottom gradient for text readability) */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2D2825]/80 via-transparent to-transparent pointer-events-none" />

                  {/* Content (Hamesha visible rahega with smaller text) */}
                  <div className="absolute bottom-0 left-0 w-full p-8 z-10 transition-transform duration-500 group-hover:-translate-y-2">
                    <span className="text-[#D4C3B3] text-xs uppercase tracking-widest font-medium mb-1 block drop-shadow-md">
                      {project.category}
                    </span>
                    <h3 className="text-white text-lg md:text-xl font-serif drop-shadow-md">
                      {project.title}
                    </h3>
                  </div>
                </div>
              );
            })}
              </div>
            )}
            
            {displayCategory === 'Residential' && renderResidentialLayout()}
            {displayCategory === 'Commercial' && renderCommercialLayout()}
            {displayCategory === 'Kitchen' && renderKitchenLayout()}
            {displayCategory === 'Bedroom' && renderBedroomLayout()}
          </div>

          {/* CTA Button */}
          <div className="mt-16 flex justify-center">
            <button className="bg-[#2D2825] text-white px-8 py-4 rounded-full text-sm font-medium tracking-wide hover:bg-[#403935] transition-colors duration-300 flex items-center gap-3">
              View Complete Portfolio
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

        </div>
      </section>
    </div>
  );
}

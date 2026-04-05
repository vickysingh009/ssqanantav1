import React, { useState, useMemo, memo } from 'react';
import { useNavigate } from 'react-router-dom';

import img1 from '../../assets/images/portfolio/residential/residential_2.webp';
import img2 from '../../assets/images/portfolio/commercial/commercial_2.webp';
import img3 from '../../assets/images/portfolio/bedroom/bedroom_1.webp';
import img4 from '../../assets/images/portfolio/commercial/commercial_1.webp';
import img5 from '../../assets/images/portfolio/kitchen/kitchen_1.webp';
import img7 from '../../assets/images/portfolio/residential/residential_1.webp';
import img8 from '../../assets/images/portfolio/commercial/commercial_4.webp';
import img9 from '../../assets/images/portfolio/kitchen/kitchen_2.webp';
import img10 from '../../assets/images/portfolio/kitchen/kitchen_3.webp';
import img11 from '../../assets/images/portfolio/kitchen/kitchen_4.webp';
import img12 from '../../assets/images/portfolio/bedroom/bedroom_2.webp';
import img13 from '../../assets/images/portfolio/bedroom/bedroom_3.webp';
import img14 from '../../assets/images/portfolio/bedroom/bedroom_4.webp';
import img16 from '../../assets/images/portfolio/commercial/commercial_3.webp';
import verticalImg from '../../assets/images/portfolio/others/others_1.webp';

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
        <img src={image} alt={title} width="600" height="800" loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-500 pointer-events-none" />
        <div className="absolute inset-0 flex items-center justify-center p-2 z-10 pointer-events-none">
          <h3 className="text-[#F3EBE1] text-lg lg:text-2xl font-serif tracking-[0.4em] uppercase [writing-mode:vertical-rl] rotate-180 transition-transform duration-500 group-hover:scale-105 group-hover:text-white drop-shadow-md">
            {title}
          </h3>
        </div>
      </>
    ) : (
      <>
        <img src={image} alt={title} width="600" height="800" loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
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
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('All');
  const [displayCategory, setDisplayCategory] = useState('All');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleTabChange = (category) => {
    if (category === activeCategory || isTransitioning) return;

    setIsTransitioning(true);
    setActiveCategory(category);

    // Immediately swap the display category so there's no layout height snap
    setDisplayCategory(category);

    // Trigger fade-in smoothly
    setTimeout(() => {
      setIsTransitioning(false);
    }, 50);
  };

  const filteredProjects = useMemo(() => {
    return projects.filter(project =>
      displayCategory === 'All' || project.category === displayCategory
    );
  }, [displayCategory]);

  // LAYOUT 2: "RESIDENTIAL" TAB
  const renderResidentialLayout = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
      <ProjectCard title="Luxury Family Villa" category="Residential" image={img1} className="h-[300px] lg:h-[480px] rounded-tl-[4rem] rounded-xl" />
      <ProjectCard title="Cozy Living Space" category="Residential" image={img7} className="h-[300px] lg:h-[480px] rounded-2xl" />
      <ProjectCard title="Serene Bedroom" category="Residential" image={img3} className="h-[300px] lg:h-[480px] rounded-2xl" />
      <ProjectCard title="Classic Vintage Room" category="Residential" image={img13} className="h-[300px] lg:h-[480px] rounded-br-[4rem] rounded-xl" />
    </div>
  );

  // LAYOUT 3: "COMMERCIAL" TAB
  const renderCommercialLayout = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
      <ProjectCard title="Executive Boardroom" category="Commercial" image={img16} className="h-[300px] lg:h-[480px] rounded-tl-[4rem] rounded-xl" />
      <ProjectCard title="Corporate Headquarters" category="Commercial" image={img8} className="h-[300px] lg:h-[480px] rounded-2xl" />
      <ProjectCard title="Urban Loft Workspace" category="Commercial" image={img2} className="h-[300px] lg:h-[480px] rounded-2xl" />
      <ProjectCard title="Boutique Hotel Lobby" category="Commercial" image={img4} className="h-[300px] lg:h-[480px] rounded-br-[4rem] rounded-xl" />
    </div>
  );

  // LAYOUT 1: "ALL" TAB (4 Elegant Pillars - Like old Kitchen)
  const renderAllLayout = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
      <ProjectCard title="Modern Minimalist Villa" category="Residential" image={img1} className="h-[300px] lg:h-[480px] rounded-tl-[4rem] rounded-xl" />
      <ProjectCard title="Urban Loft Workspace" category="Commercial" image={img2} className="h-[300px] lg:h-[480px] rounded-2xl" />
      <ProjectCard title="Serene Bedroom" category="Bedroom" image={img3} className="h-[300px] lg:h-[480px] rounded-2xl" />
      <ProjectCard title="Contemporary Kitchen" category="Kitchen" image={img5} className="h-[300px] lg:h-[480px] rounded-br-[4rem] rounded-xl" />
    </div>
  );

  // LAYOUT 4: "KITCHEN" TAB
  const renderKitchenLayout = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
      <ProjectCard title="Contemporary Style" category="Kitchen" image={img5} className="h-[300px] lg:h-[480px] rounded-tl-[4rem] rounded-xl" />
      <ProjectCard title="Minimalist Open" category="Kitchen" image={img9} className="h-[300px] lg:h-[480px] rounded-2xl" />
      <ProjectCard title="Modern Island" category="Kitchen" image={img11} className="h-[300px] lg:h-[480px] rounded-2xl" />
      <ProjectCard title="Luxury Marble" category="Kitchen" image={img10} className="h-[300px] lg:h-[480px] rounded-br-[4rem] rounded-xl" />
    </div>
  );

  // LAYOUT 5: "BEDROOM" TAB
  const renderBedroomLayout = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
      <ProjectCard title="Serene Master Bedroom" category="Bedroom" image={img3} className="h-[300px] lg:h-[480px] rounded-tl-[4rem] rounded-xl" />
      <ProjectCard title="Minimalist Guest Room" category="Bedroom" image={img12} className="h-[300px] lg:h-[480px] rounded-2xl" />
      <ProjectCard title="Classic Vintage Room" category="Bedroom" image={img13} className="h-[300px] lg:h-[480px] rounded-2xl" />
      <ProjectCard title="Luxury Suite Design" category="Bedroom" image={img14} className="h-[300px] lg:h-[480px] rounded-br-[4rem] rounded-xl" />
    </div>
  );

  return (
    <div className="min-h-screen w-full font-sans text-[#4A4441]">



      {/* PORTFOLIO SECTION */}
      <section className="py-12 md:py-16 lg:py-20 px-[10px] md:px-[60px] relative overflow-hidden">

        {/* Subtle Background Decorative Lines (Matched to Why Choose Us gold tint) */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
          <div className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] rounded-full border-[1px] border-[#A67C52]/10"></div>
          <div className="absolute top-[40%] -left-[20%] w-[600px] h-[600px] rounded-full border-[2px] border-[#A67C52]/5"></div>
        </div>

        <div className="max-w-[1660px] w-full mx-auto relative z-10">

          {/* Section Header */}
          <div className="flex flex-col items-center text-center mb-8 md:mb-10 gap-4 md:gap-5 max-w-3xl mx-auto">
            <div className="w-full">
              <div className="flex items-center justify-center gap-4 mb-3 md:mb-4">
                <span className="w-8 md:w-12 h-[1px] bg-[#A67C52]/80"></span>
                <span className="font-sans text-[13px] md:text-[15px] font-medium tracking-[0.15em] text-[#A67C52] uppercase">
                  PORTFOLIO
                </span>
                <span className="w-8 md:w-12 h-[1px] bg-[#A67C52]/80"></span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#2D2825] mb-2 md:mb-4">
                Our Featured Works
              </h2>
              <p className="text-[#6B635E] text-sm md:text-base leading-relaxed font-light">
                Explore a curated selection of our most recent projects. We blend
                creativity, functionality, and precision.
              </p>
            </div>

            {/* Filter Buttons */}
            <div className="flex gap-3 md:gap-4 flex-wrap justify-center mt-2 md:mt-4 w-full">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleTabChange(category)}
                  aria-pressed={activeCategory === category}
                  aria-label={`Show ${category} projects`}
                  className={`text-[11px] md:text-xs font-semibold uppercase tracking-[0.15em] px-6 py-2.5 md:px-8 md:py-3 rounded-[2rem] transition-all duration-300 border ${activeCategory === category
                      ? 'bg-[#B89672] text-white border-[#B89672] shadow-[0_8px_20px_rgba(184,150,114,0.3)]'
                      : 'bg-transparent text-[#6B635E] border-gray-300 hover:border-[#B89672] hover:text-[#B89672]'
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Portfolio Grid */}
          <div className={`w-full transition-all duration-500 ease-in-out transform ${isTransitioning ? 'opacity-0 scale-[0.98] translate-y-4' : 'opacity-100 scale-100 translate-y-0'
            }`}>
            {displayCategory === 'All' && renderAllLayout()}
            {displayCategory === 'Residential' && renderResidentialLayout()}
            {displayCategory === 'Commercial' && renderCommercialLayout()}
            {displayCategory === 'Kitchen' && renderKitchenLayout()}
            {displayCategory === 'Bedroom' && renderBedroomLayout()}
          </div>

          {/* CTA Button */}
          <div className="mt-10 md:mt-12 flex justify-center">
            <button onClick={() => navigate('/portfolio')} className="bg-[#2D2825] text-white px-8 py-3.5 rounded-full text-sm font-medium tracking-wide hover:bg-[#403935] transition-colors duration-300 flex items-center gap-3">
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

import React, { memo } from 'react';
import { useNavigate } from 'react-router-dom';

// INDIVIDUAL PROJECT CARD COMPONENT
const ProjectCard = memo(({ project }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/project/${project.id}`, {
      state: {
        project: {
          title: project.title,
          category: project.category,
          image: project.images[0],
        }
      }
    });
  };

  return (
    <article
      className="bg-white rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100 flex flex-col group cursor-pointer"
      onClick={handleCardClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && handleCardClick()}
    >

      {/* Image Wrapper (Semantic HTML) */}
      <figure className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100 m-0">
        <img
          src={project.images[0]}
          alt={project.alt || project.title}
          width="400"
          height="300"
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <figcaption className="sr-only">{project.title}</figcaption>
      </figure>

      {/* Card Content */}
      <div className="p-4 md:p-5 flex flex-col flex-grow justify-between">
        <h3 className="text-[15px] md:text-[17px] font-semibold font-sans tracking-tight text-[#2D2825] leading-snug mb-4 line-clamp-2">
          {project.title}
        </h3>

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
          <span className="text-[#B89672] text-xs md:text-sm font-medium flex items-center gap-1 group/link">
            Explore more
            <svg className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </span>

          <button
            onClick={(e) => { e.stopPropagation(); window.dispatchEvent(new Event('open-consult-form')); }}
            className="bg-[#2D2825] hover:bg-[#B89672] text-white px-3 md:px-4 py-2 rounded text-[11px] md:text-sm font-medium transition-colors shadow-sm"
          >
            Get a Quote
          </button>
        </div>
      </div>
    </article>
  );
});

export default ProjectCard;

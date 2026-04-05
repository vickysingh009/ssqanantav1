import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const servicesList = [
  {
    id: '01',
    title: 'Residential Interior',
    subtitle: 'Creating comfortable and stylish homes tailored to your lifestyle.',
    description: 'Hamara manna hai ki aapka ghar aapki shakhsiyat (personality) ka aaina hona chahiye. Hum modern, classic aur minimalist designs ka behtareen mishran banate hain, jisse aapka ghar na sirf khoobsurat dikhe, balki aaramdayak bhi mehsoos ho. Har ek detail ko dhyan se design kiya jata hai.',
    features: ['Space Planning', 'Custom Furniture', 'Lighting Design', 'Material Selection'],
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200'
  },
  {
    id: '02',
    title: 'Modular Kitchens',
    subtitle: 'Smart, modern kitchens designed for efficiency and elegance.',
    description: 'Rasoi (Kitchen) ghar ka dil hota hai. Hum smart aur space-saving modular kitchens design karte hain jo kaam karne mein aasaan aur dikhne mein premium hote hain. High-quality finishes aur modern appliances ke sath hum aapke kitchen ko ek luxury space mein badal dete hain.',
    features: ['Ergonomic Layouts', 'Premium Finishes', 'Smart Storage', 'Appliance Integration'],
    image: 'https://images.pexels.com/photos/3016430/pexels-photo-3016430.jpeg?auto=compress&cs=tinysrgb&w=1200'
  },
  {
    id: '03',
    title: 'Living Room Styling',
    subtitle: 'Designing welcoming spaces that reflect your taste.',
    description: 'Aapka living room wo jagah hai jahan aap apne mehmaanon ka swagat karte hain aur parivaar ke sath waqt bitate hain. Hum warm tones, statement furniture aur perfect lighting ka use karke ek aisa mahaul banate hain jo elegant hone ke sath-sath welcoming bhi ho.',
    features: ['Statement Pieces', 'Color Consultation', 'Soft Furnishings', 'Art & Decor Curation'],
    image: 'https://images.pexels.com/photos/6489083/pexels-photo-6489083.jpeg?auto=compress&cs=tinysrgb&w=1200'
  },
  {
    id: '04',
    title: 'Bedroom Design',
    subtitle: 'Cozy and aesthetic designs for relaxation and comfort.',
    description: 'Din bhar ki thakan ke baad ek sukoon bhari jagah ki zarurat hoti hai. Hum master bedrooms, guest rooms aur kids rooms ko is tarah design karte hain ki wahan shanti aur luxury ka poora ehsaas ho. Soothing colors aur comfortable textures hamari pehchaan hain.',
    features: ['Wardrobe Design', 'Acoustic Treatments', 'Mood Lighting', 'Bespoke Bedding'],
    image: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=1200'
  },
  {
    id: '05',
    title: 'Commercial Spaces',
    subtitle: 'Inspiring workspaces and commercial environments.',
    description: 'Aapka office space aapke brand ki pehchaan hota hai. Hum modern aur functional office interiors banate hain jo productivity badhate hain aur aapke clients par ek sateek impression chhodte hain. Reception se lekar boardroom tak, hum har hisse ko perfection ke sath design karte hain.',
    features: ['Brand Integration', 'Ergonomic Workstations', 'Conference Rooms', 'Reception Areas'],
    image: 'https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg?auto=compress&cs=tinysrgb&w=1200'
  }
];

export default function ServicesPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#FCFAF8] font-sans text-[#2D2825] overflow-hidden">
      <style>
        {`
          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(40px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-up {
            animation: fadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }
        `}
      </style>

      {/* ========================================= */}
      {/* HERO SECTION                              */}
      {/* ========================================= */}
      <header className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-6 md:px-12 lg:px-24 text-center">
        {/* Subtle Background Elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none -translate-y-1/2 translate-x-1/3" style={{ background: 'radial-gradient(circle, rgba(184,150,114,0.08) 0%, transparent 60%)' }}></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] pointer-events-none translate-y-1/3 -translate-x-1/4" style={{ background: 'radial-gradient(circle, rgba(184,150,114,0.06) 0%, transparent 60%)' }}></div>

        <div className={`max-w-4xl mx-auto relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-4 mb-8">
            <div className="w-12 h-[1px] bg-[#B89672]"></div>
            <span className="text-[#B89672] text-xs md:text-sm uppercase tracking-[0.3em] font-bold">
              Our Expertise
            </span>
            <div className="w-12 h-[1px] bg-[#B89672]"></div>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-[#1C1A19] mb-8 leading-[1.1] tracking-tight">
            Design that elevates <br/>
            <span className="italic text-[#8C837C] font-light">everyday living.</span>
          </h1>
          
          <p className="text-[#6B635E] text-base md:text-lg leading-relaxed font-light max-w-2xl mx-auto">
            From modern minimalist aesthetics to rich, luxurious interiors, we bring creativity, 
            impeccable detail, and ultimate comfort into every project we touch.
          </p>
        </div>
      </header>

      {/* ========================================= */}
      {/* SERVICES LIST (Alternating Layout)        */}
      {/* ========================================= */}
      <section className="py-10 pb-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex flex-col gap-24 md:gap-40">
            {servicesList.map((service, index) => (
              <div 
                key={service.id} 
                className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 group animate-fade-up ${
                  index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
                }`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                
                {/* IMAGE SIDE */}
                <div className="w-full lg:w-1/2 relative">
                  {/* Decorative Number Behind Image */}
                  <div className={`absolute top-10 md:top-20 -z-10 text-[150px] md:text-[250px] font-serif font-bold text-[#F0EBE6] leading-none select-none transition-transform duration-700 group-hover:-translate-y-4 ${
                    index % 2 !== 0 ? '-left-10 md:-left-20' : '-right-10 md:-right-20'
                  }`}>
                    {service.id}
                  </div>
                  
                  <div className="relative w-full aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-[2rem] shadow-2xl border border-gray-100">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-700 pointer-events-none"></div>
                  </div>
                </div>

                {/* CONTENT SIDE */}
                <div className="w-full lg:w-1/2 flex flex-col pt-4 md:pt-0">
                  <div className="flex items-baseline gap-4 mb-6">
                    <span className="text-[#B89672] font-serif text-2xl md:text-3xl italic">{service.id}.</span>
                    <h2 className="text-3xl md:text-5xl font-serif text-[#1C1A19] tracking-tight">{service.title}</h2>
                  </div>
                  
                  <h3 className="text-[#8C837C] text-lg md:text-xl font-light leading-relaxed mb-6">
                    {service.subtitle}
                  </h3>
                  
                  <p className="text-[#6B635E] text-sm md:text-base leading-relaxed font-light mb-10">
                    {service.description}
                  </p>

                  {/* Feature Tags */}
                  <div className="flex flex-wrap gap-3 mb-10">
                    {service.features.map((feature, idx) => (
                      <span 
                        key={idx} 
                        className="px-4 py-2 bg-white border border-gray-200 rounded-full text-[11px] md:text-xs uppercase tracking-widest text-[#4A4441] shadow-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Discover More Link */}
                  <div className="mt-auto">
                    <Link to="/portfolio" className="inline-flex items-center gap-3 text-[#1C1A19] font-medium text-xs md:text-sm uppercase tracking-[0.2em] group/btn">
                      Explore Portfolio
                      <div className="w-8 h-[1px] bg-[#1C1A19] group-hover/btn:w-12 transition-all duration-300 relative">
                        <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t border-r border-[#1C1A19] rotate-45 transform translate-x-[1px]"></span>
                      </div>
                    </Link>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* BOTTOM CTA SECTION                        */}
      {/* ========================================= */}
      <section className="relative py-24 md:py-32 bg-[#1C1A19] overflow-hidden">
        <div className="absolute inset-0 z-0">
             <img 
              src="https://images.pexels.com/photos/6489083/pexels-photo-6489083.jpeg?auto=compress&cs=tinysrgb&w=1200" 
              className="w-full h-full object-cover opacity-20 mix-blend-luminosity" 
              alt="Background"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C1A19] via-[#1C1A19]/80 to-[#1C1A19]"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <span className="text-[#B89672] text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold block mb-6">
            Ready to start?
          </span>
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-8 leading-tight">
            Let's create something <br className="hidden md:block" />
            <span className="italic text-[#F5E9DC]">extraordinary</span> together.
          </h2>
          <p className="text-gray-400 font-light text-sm md:text-base mb-12 max-w-xl mx-auto">
            Contact us today to schedule a free consultation and take the first step towards your dream space.
          </p>
          <button 
            onClick={() => window.dispatchEvent(new Event('open-consult-form'))}
            className="bg-[#B89672] hover:bg-white text-white hover:text-[#1C1A19] px-10 py-4 rounded-sm text-xs md:text-sm uppercase tracking-[0.2em] font-bold transition-all duration-500 shadow-xl"
          >
            Book a Consultation
          </button>
        </div>
      </section>

    </div>
  );
}

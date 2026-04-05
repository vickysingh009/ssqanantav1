import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const DetailPage = ({ project, onBack }) => {
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) return null;

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      navigate(-1);
    }
  };

  const handleBookConsultation = () => {
    window.dispatchEvent(new Event('open-consult-form'));
  };

  const providedServices = [
    "Living Room Design",
    "Residential Interior Design",
    "Modular Kitchen Design",
    "Bedroom Interior",
    "Office & Commercial"
  ];

  return (
    <div className="min-h-screen bg-[#FCFAF8] font-sans text-[#1A1817] pb-20 selection:bg-[#B89672] selection:text-white">
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          .detail-fade-in { animation: fadeIn 0.8s ease-out; }
        `}
      </style>

      <div className="detail-fade-in">
        {/* BACK BUTTON */}
        <nav className="p-6 md:p-12 flex justify-start">
          <button
            onClick={handleBack}
            className="flex items-center gap-3 text-gray-400 hover:text-[#B89672] transition-colors text-xs uppercase tracking-[0.25em] font-medium group"
          >
            <div className="w-8 h-[1px] bg-gray-300 group-hover:bg-[#B89672] transition-colors"></div>
            Back to Projects
          </button>
        </nav>

        <main className="max-w-6xl mx-auto px-6">

          {/* HERO CONTENT */}
          <div className="max-w-5xl mx-auto text-center">
            <div className="w-full aspect-[4/5] md:aspect-[16/9] rounded-[2rem] overflow-hidden shadow-2xl mb-14 border border-white bg-gray-100">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="mb-14">
              <span className="text-[#B89672] text-[10px] md:text-xs uppercase tracking-[0.4em] font-bold block mb-5">
                {project.category}
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif leading-[1.1] text-[#1C1A19] tracking-tight">
                {project.title}
              </h1>
              <div className="w-16 h-[1.5px] bg-[#B89672]/40 mx-auto mt-10"></div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-24">
              <button
                onClick={handleBookConsultation}
                className="w-full sm:w-auto bg-[#1C1A19] text-white px-12 py-4 rounded-full text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#B89672] transition-colors duration-300 shadow-xl"
              >
                Book Consultation
              </button>
              <button
                onClick={handleBookConsultation}
                className="w-full sm:w-auto border border-gray-300 bg-white text-[#1C1A19] px-12 py-4 rounded-full text-xs uppercase tracking-[0.2em] font-medium hover:border-[#B89672] hover:text-[#B89672] transition-colors duration-300"
              >
                Get an Estimate
              </button>
            </div>
          </div>

          {/* OUR SERVICES (Project Specific) */}
          {project.services && project.services.length > 0 && (
            <div className="mb-32 text-center max-w-4xl mx-auto">
              <h2 className="text-xl font-serif mb-8 text-gray-400 italic">Our Services for this project</h2>
              <div className="flex flex-wrap justify-center gap-6 md:gap-10">
                {project.services.map((service, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#B89672]"></div>
                    <span className="text-sm md:text-base font-light text-gray-600 tracking-wide">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* WE PROVIDE SECTION */}
          <section className="mb-40">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-serif text-[#1C1A19]">We Provide.</h2>
            </div>

            <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-12 px-6">
              {providedServices.map((service, idx) => (
                <div key={idx} className="flex items-center gap-4 group">
                  <div className="w-7 h-7 rounded-full border border-[#D4C3B3] flex items-center justify-center flex-shrink-0 text-[#B89672] group-hover:bg-[#B89672] group-hover:text-white transition-colors duration-300">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-[#2D2825] font-medium text-[15px] md:text-[17px] tracking-wide">
                    {service}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-20">
              <button
                onClick={() => navigate('/services')}
                className="bg-[#2B2724] hover:bg-[#1A1817] text-[#F3EBE1] px-10 py-4 rounded-full text-sm font-medium tracking-wide transition-colors duration-300 flex items-center gap-4 group shadow-xl"
              >
                Explore Services
                <svg className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </section>

          {/* CONNECT US SECTION */}
          <section className="max-w-5xl mx-auto bg-[#141312] text-[#FCFAF8] rounded-[2rem] md:rounded-[3rem] p-10 md:p-20 shadow-2xl relative overflow-hidden mb-20">
            <div
              className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none -translate-y-1/2 translate-x-1/3"
              style={{ background: 'radial-gradient(circle, rgba(184,150,114,0.15) 0%, transparent 60%)' }}
            ></div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10">
              <div className="lg:col-span-5 flex flex-col justify-between">
                <div>
                  <span className="text-[#B89672] text-[10px] md:text-xs uppercase tracking-[0.4em] font-bold block mb-6">
                    Start Your Journey
                  </span>
                  <h2 className="text-5xl md:text-7xl font-serif leading-[1.1] mb-6">
                    Let's <br /> <span className="italic text-gray-400">Connect.</span>
                  </h2>
                </div>
                <div className="hidden lg:block w-20 h-[1px] bg-[#B89672]/50 mt-12"></div>
              </div>

              <div className="lg:col-span-7 flex flex-col justify-center gap-10 md:gap-12">
                <div className="flex items-start gap-6 border-b border-white/10 pb-10 group">
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-[#B89672] group-hover:bg-[#B89672] group-hover:text-white transition-colors duration-300 shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 uppercase tracking-[0.3em] font-bold mb-2">Interior Designer</p>
                    <h4 className="text-2xl md:text-3xl font-serif text-white group-hover:text-[#B89672] transition-colors">Sneha Soni</h4>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="flex flex-col group">
                    <p className="text-[10px] text-gray-500 uppercase tracking-[0.3em] font-bold mb-3 flex items-center gap-3">
                      <svg className="w-3.5 h-3.5 text-[#B89672]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                      Direct Line
                    </p>
                    <a href="tel:+917878538299" className="text-lg md:text-xl font-light tracking-wide hover:text-[#B89672] transition-colors">+91 78785 38299</a>
                  </div>

                  <div className="flex flex-col group">
                    <p className="text-[10px] text-gray-500 uppercase tracking-[0.3em] font-bold mb-3 flex items-center gap-3">
                      <svg className="w-3.5 h-3.5 text-[#B89672]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                      Email Address
                    </p>
                    <a href="mailto:snehasoni543210@gmail.com" className="text-base md:text-lg font-light hover:text-[#B89672] transition-colors break-all">snehasoni543210@gmail.com</a>
                  </div>

                  <div className="flex flex-col group md:col-span-2 mt-4 md:mt-0">
                    <p className="text-[10px] text-gray-500 uppercase tracking-[0.3em] font-bold mb-3 flex items-center gap-3">
                      <svg className="w-3.5 h-3.5 text-[#B89672]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                      Studio Location
                    </p>
                    <p className="text-lg md:text-xl font-light">K.B.H.B, Jodhpur, Rajasthan</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* FOOTER DECOR */}
        <div className="mt-24 text-center pb-12">
          <div className="flex items-center justify-center gap-6">
            <div className="w-12 h-[1px] bg-[#B89672]/30"></div>
            <span className="font-serif text-lg md:text-2xl tracking-[0.4em] uppercase text-[#1C1A19]">
              S<sup className="text-[12px]">2</sup> Ananta
            </span>
            <div className="w-12 h-[1px] bg-[#B89672]/30"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;

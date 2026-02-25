import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import reactLogo from '../assets/portfolio1.png'
import reactLogo1 from '../assets/portfolio2.png'

const Portfolio = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const projects = [
    {
      id: 1,
      url: 'www.2ndAmendment.com',
      title: 'HATFIELD USA12T',
      subtitle: 'Lorem Ipsum is simply dummy',
      image: reactLogo,
      tagline: '2nd Amendment'
    },
    {
      id: 2,
      url: 'www.kickeez.com',
      title: 'THE MOST COMFORTABLE RECOIL PADS',
      subtitle: 'Lorem Ipsum is simply dummy',
      image: reactLogo1,
      tagline: 'KICK-EEZ'
    }
  ];

  return (
    <div className="min-h-screen bg-[#F6F6F6] font-sans text-[#333] overflow-x-hidden">
      <section className="relative pt-20 md:pt-32 pb-16 md:pb-24 px-4 text-center">
        
        <div className="absolute top-10 md:top-12 left-1/2 -translate-x-1/2 opacity-5 pointer-events-none select-none w-full flex justify-center z-0">
          <h1 className="text-[12vw] md:text-[190px] font-black leading-none whitespace-nowrap uppercase tracking-tighter">
           Our PORTFOLIO
          </h1>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto mt-16 md:mt-32">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-6 tracking-tight uppercase">
            OUR PORTFOLIO
          </h2>
          <div className="w-16 h-0.5 bg-blue-400 mx-auto mb-8 opacity-40"></div>
          <p className="text-gray-500 text-sm md:text-lg max-w-md md:max-w-2xl mx-auto leading-relaxed px-4 font-medium">
            We design projects designed with passion on time, <br className="hidden md:block" /> within budget of full value.
          </p>
        </div>
      </section>

     
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32 relative">
        
        <button className="hidden lg:flex absolute left-0 xl:-left-6 top-[35%] -translate-y-1/2 z-20 w-14 h-14 items-center justify-center rounded-full bg-white shadow-xl text-gray-300 hover:text-blue-500 transition-all hover:scale-110 active:scale-90 border border-gray-50">
          <ChevronLeft size={28} />
        </button>
        <button className="hidden lg:flex absolute right-0 xl:-right-6 top-[35%] -translate-y-1/2 z-20 w-14 h-14 items-center justify-center rounded-full bg-white shadow-xl text-gray-300 hover:text-blue-500 transition-all hover:scale-110 active:scale-90 border border-gray-50">
          <ChevronRight size={28} />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col"
            >
              <div className="relative aspect-4/3 sm:aspect-video md:aspect-16/10 overflow-hidden bg-gray-200">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover  hover:bg-amber-50 transition-all duration-700 ease-in-out group-hover:scale-110 hover:transition-all"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent p-6 sm:p-10 md:p-12 flex flex-col justify-end">
                   <div className="mb-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <span className=" hidden text-white/70 text-[10px] md:text-xs font-bold tracking-widest uppercase border-l-2 border-red-600 pl-3">
                        {project.tagline}
                      </span>
                   </div>
                   <h3 className="hidden text-white text-xl sm:text-2xl md:text-3xl font-bold leading-tight max-w-[95%] md:max-w-[85%] translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                     {project.title}
                   </h3>
                   <div className="mt-8 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                     <button className="bg-red-600 hidden hover:bg-red-700 text-white text-xs font-bold px-8 py-3 rounded-sm tracking-wider transition-colors shadow-lg uppercase">
                       Explore Project
                     </button>
                   </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-8 md:p-10 flex items-center justify-between mt-auto">
                <div className="min-w-0 pr-6">
                  <a 
                    href={`https://${project.url}`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block text-xl md:text-2xl font-bold hover:text-blue-600 transition-colors truncate"
                  >
                    {project.url}
                  </a>
                  <p className="text-gray-400 text-sm md:text-base mt-2 truncate font-medium">
                    {project.subtitle}
                  </p>
                </div>
                <button className="shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#4A90E2] text-white flex items-center justify-center group-hover:bg-blue-600 transition-all duration-300 shadow-xl group-hover:shadow-blue-100 group-hover:rotate-45">
                  <ArrowRight size={28} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center gap-4 mt-16 md:mt-24">
          {[0, 1, 2, 3].map((dot) => (
            <button 
              key={dot}
              onClick={() => setActiveSlide(dot)}
              className={`transition-all duration-300 rounded-full ${
                activeSlide === dot 
                ? 'w-12 h-2.5 bg-blue-500 shadow-sm' 
                : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${dot + 1}`}
            />
          ))}
        </div>

        <div className="mt-16 md:mt-24 text-center">
          <button className="w-full sm:w-auto bg-[#4A90E2] hover:bg-blue-600 text-white px-14 py-5 rounded-lg font-bold text-base md:text-lg flex items-center justify-center gap-3 mx-auto transition-all shadow-2xl hover:shadow-blue-200 active:scale-95 group">
            Let's Get Together
            <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;

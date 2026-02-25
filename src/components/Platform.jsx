import React, { useRef } from 'react'
import reactLogo from '../assets/Group1.png'
import reactLogo1 from '../assets/Group2.png'
import reactLogo2 from '../assets/Group3.png'
import reactLogo3 from '../assets/Group4.png'
import reactLogo4 from '../assets/Group5.png'
import reactLogo5 from '../assets/Group6.png'
import reactLogo6 from '../assets/Group7.png'
import { ChevronRight } from 'lucide-react'
import WorkingProcess from './WorkingProcess'

const platforms = [
  { name: 'React', logo: reactLogo },
  { name: 'Flutter', logo: reactLogo1 },
  { name: 'Kotlin', logo: reactLogo2 },
  { name: 'WordPress', logo: reactLogo3 },
  { name: 'PHP', logo: reactLogo4 },
  { name: 'Laravel', logo: reactLogo5 },
  { name: 'Android', logo: reactLogo6 },
];

const Platform = () => {

  const scrollRef = useRef(null);

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 250,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-slate-50 py-16 px-4 sm:px-8 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 tracking-wider uppercase">
            We Use This Platform
          </h2>
        </div>

        <div className="relative">

          {/* SCROLL CONTAINER */}
          <div
            ref={scrollRef}
            className="flex flex-nowrap items-center gap-4 md:gap-6 lg:gap-8 overflow-x-auto pb-6 px-2 snap-x no-scrollbar"
          >
            {platforms.map((platform) => (
              <div
                key={platform.name}
                className="bg-white rounded-lg shadow-sm p-4 shrink-0 flex items-center justify-center 
                w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 snap-center
                hover:shadow-md transition-shadow duration-300 border border-slate-100"
              >
                <img
                  src={platform.logo}
                  alt={platform.name}
                  className="max-w-full max-h-full object-contain hover:scale-110 transition-transform"
                />
              </div>
            ))}
          </div>

          {/* RIGHT BUTTON */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden md:block">
            <button
              onClick={scrollRight}
              className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg 
              transition-all duration-300 hover:scale-110"
            >
              <ChevronRight size={24} />
            </button>
          </div>

        </div>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { scrollbar-width: none; }
      `}</style>

      <WorkingProcess />
    </section>
  );
};

export default Platform;
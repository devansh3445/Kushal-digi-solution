import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';



const testimonials = [
  {
    id: 1,
    name: "Harriet Mitchell",
    role: "Director of Inbrew",
    text: "Lorem ipsum is simply dummy text of the printing & Typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, an unknown printer took a gallery.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=facearea&facepad=2",
    videoThumbnail: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=1200&h=1200&fit=facearea&facepad=3"
  },
  {
    id: 2,
    name: "Alex Johnson",
    role: "CEO of TechFlow",
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=facearea&facepad=2",
    videoThumbnail: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=1200&h=1200&fit=facearea&facepad=3"
  },
  {
    id: 3,
    name: "Sarah Williams",
    role: "Founder of CreativeCo",
    text: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=facearea&facepad=2",
    videoThumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200&h=1200&fit=facearea&facepad=3"
  }
];

export default function Testimonial() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 500);
    return () => clearTimeout(timer);
  }, [activeIndex]);

  const current = testimonials[activeIndex];

  return (
    <div className="min-h-screen bg-[#F0F7FF] flex items-center justify-center p-4 md:p-8 lg:p-12 font-sans overflow-x-hidden">
      <div className="max-w-7xl w-full">
        <div className="text-center mb-10 md:mb-16 lg:mb-20">
          <p className="text-[#8E9AAF] uppercase tracking-[0.3em] text-[10px] md:text-sm font-bold mb-3">
            Testimonials
          </p>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-[#2D3142] uppercase tracking-tight">
            Our Happy Client Say
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
          
          <div className="lg:col-span-5 flex flex-col space-y-6 md:space-y-10 order-2 lg:order-1">
            <div className="flex items-center gap-6 md:gap-8">
              <div className="relative">
                <div className="w-20 h-20 md:w-28 md:h-28 rounded-full overflow-hidden border-4px md:border-[6px] border-white shadow-2xl transition-transform duration-500 hover:scale-110">
                  <img 
                    src={current.avatar} 
                    alt={current.name}
                    className={`w-full h-full object-cover transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}
                  />
                </div>
              </div>
              
              <div className="flex gap-3 md:gap-4">
                <button 
                  onClick={prevSlide}
                  aria-label="Previous testimonial"
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center text-slate-500 hover:bg-blue-500 hover:text-white transition-all duration-300 shadow-lg"
                >
                  <ChevronLeft size={20} />
                </button>
                <button 
                  onClick={nextSlide}
                  aria-label="Next testimonial"
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#3B82F6] flex items-center justify-center text-white hover:bg-blue-600 transition-all duration-300 shadow-xl"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>

            <div className={`transition-all duration-500 transform ${isAnimating ? 'opacity-0 translate-y-6' : 'opacity-100 translate-y-0'}`}>
              <p className="text-[#4F5D75] text-lg md:text-xl lg:text-2xl leading-relaxed font-medium mb-6 md:mb-8 italic">
                "{current.text}"
              </p>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#2D3142] mb-1">{current.name}</h3>
                <p className="text-[#3B82F6] font-bold text-base md:text-lg">{current.role}</p>
              </div>
            </div>

            <div className="flex gap-3 pt-2 md:pt-4">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-2.5 md:h-3 rounded-full transition-all duration-500 ${
                    activeIndex === idx ? 'w-8 md:w-10 bg-blue-500' : 'w-2.5 md:w-3 bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 relative order-1 lg:order-2 group w-full max-w-2xl mx-auto lg:max-w-none">
            <div className="relative rounded-tr-[80px] md:rounded-tr-[120px] rounded-bl-xl md:rounded-bl-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] transition-all duration-500 group-hover:-translate-y-2">
              
              <div className="aspect-video md:aspect-4/3 relative bg-slate-200">
                <img 
                  src={current.videoThumbnail} 
                  alt="Testimonial Video Preview"
                  className={`w-full h-full object-cover object-center transition-all duration-1000 ${isAnimating ? 'scale-110 blur-md opacity-50' : 'scale-100 blur-0 opacity-100'}`}
                />
                
                <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-60"></div>
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <button 
                    className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-white/95 rounded-full flex items-center justify-center text-blue-600 shadow-2xl transform transition-all duration-500 hover:scale-110 hover:bg-white group-hover:rotate-360"
                    style={{ backdropFilter: 'blur(4px)' }}
                  >
                    <Play fill="currentColor" size={28} className="ml-1 md:size-32" />
                  </button>
                </div>

                <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
                  {testimonials.map((_, idx) => (
                    <div 
                      key={idx}
                      className={`w-2 md:w-2.5 h-2 md:h-2.5 rounded-full transition-all duration-300 ${
                        activeIndex === idx ? 'bg-blue-400 scale-125 shadow-[0_0_8px_rgba(59,130,246,0.6)]' : 'bg-white/80'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
            
            <div className="hidden sm:block absolute -z-10 -bottom-4 md:-bottom-6 -right-4 md:-right-6 w-full h-full border-2 md:border-[3px] border-blue-200/50 rounded-tr-[80px] md:rounded-tr-[120px] rounded-bl-xl md:rounded-bl-2xl"></div>
          </div>

        </div>
      </div>
      
      
    </div>
    
  );
}
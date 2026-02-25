import { ArrowRight, ChevronRight, MonitorSmartphone, Palette, ShoppingBag } from 'lucide-react';
import React from 'react'
import Platform from '../components/Platform';

const services = [
    {
      title: "UI/UX DESIGN",
      description: "An ordinary solution can dominate the Industry with significant design which is why, We at Kushel Digi make sure to provide you with innovative and user-friendly designs. User interface and User Experience design is an integral part of any digital marketing strategy and online enterprise.",
      icon: (
        <div className="w-20 h-20 bg-amber-50 rounded-2xl flex items-center justify-center mb-6 border border-amber-100 shadow-sm group-hover:bg-amber-100 transition-colors">
          <Palette size={40} className="text-amber-500" />
        </div>
      )
    },
    {
      title: "E-COMMERCE DEVELOPMENT",
      description: "The growth of any business requires the use of e-commerce as a channel and instrument. Everything is now easy to reach and merely a click away. E-commerce solutions have made the relationship between the client and the consumer more effective and user-friendly. This is why integrating E-commerce Solutions in a business has become a necessity and is effective.",
      icon: (
        <div className="w-20 h-20 bg-rose-50 rounded-2xl flex items-center justify-center mb-6 border border-rose-100 shadow-sm group-hover:bg-rose-100 transition-colors">
          <ShoppingBag size={40} className="text-rose-500" />
        </div>
      )
    },
    {
      title: "WEBSITE & APP DEVELOPMENT",
      description: "Our team of experts strives to develop the ideal website in accordance with your needs and expectations. Having a website for your business increases your credibility and awareness among the audiences. We have an excellent team dedicated to design and develop a SEO-friendly and E-commerce website. It will help your clients to understand you and your services better.",
      icon: (
        <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 border border-blue-100 shadow-sm group-hover:bg-blue-100 transition-colors">
          <MonitorSmartphone
           size={40} className="text-blue-500" />
        </div>
      )
    }
  ];

const Services = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 selection:bg-blue-100 relative overflow-hidden">
      
      <div className="absolute -top-25 -right-25 w-125 h-125 bg-blue-50/50 rounded-full blur-3xl -z-10" />

      <section className="container mx-auto px-4 py-16 md:py-24">
        
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4 uppercase">
            OUR SERVICES
          </h2>
          <p className="text-2xl md:text-3xl font-light text-slate-600 italic">
            We are expert in
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white border border-slate-200 rounded-lg p-8 hover:bg-amber-50 md:p-10 flex flex-col items-start transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
            >
              {service.icon}

              <h3 className="text-xl md:text-2xl font-bold text-blue-600 mb-6 tracking-wide uppercase leading-tight">
                {service.title}
              </h3>

              <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-10 grow">
                {service.description}
              </p>

              <button className="flex items-center gap-3 text-slate-700 font-medium hover:text-blue-600 transition-colors group/btn">
                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white transition-transform group-hover/btn:scale-110">
                  <ChevronRight size={20} />
                </div>
                <span className="uppercase text-sm tracking-wider">Learn More</span>
              </button>
            </div>
          ))}
        </div>

        {/* Global CTA Button */}
        <div className="flex justify-center">
          <button className="bg-[#4285D4] hover:bg-blue-700 text-white px-10 py-4 rounded-md text-lg font-semibold flex items-center gap-3 transition-all transform hover:scale-105 active:scale-95 shadow-lg">
            Get Started
            <ArrowRight size={20} />
          </button>
        </div>
        
      </section>

      <Platform />
      <div className="h-4 bg-blue-50/30 w-full mt-10" />

      
    </div>
    
  );
};

export default Services;
  
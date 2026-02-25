import React from 'react';
import { 
  FileText, 
  Search, 
  PenTool, 
  Code2, 
  ClipboardCheck, 
  PhoneCall 
} from 'lucide-react';

/**
 * WorkingProcess Component
 * Recreates the "OUR WORKING PROCESS" section with a consistent alternating 
 * layout for both mobile and desktop.
 */
const WorkingProcess = () => {
  // Data structure for the process steps
  const steps = [
    {
      id: "01",
      title: "We Get Your Requirements",
      icon: <FileText className="w-8 h-8 text-white" />,
      color: "bg-[#0B2545]", // Deep Navy
      borderColor: "border-[#0B2545]",
      glowColor: "shadow-[#0B2545]/40",
      position: "top"
    },
    {
      id: "02",
      title: "Market Research & Feasibility Analysis",
      icon: <Search className="w-8 h-8 text-white" />,
      color: "bg-[#F4A261]", // Warm Orange/Sand
      borderColor: "border-[#F4A261]",
      glowColor: "shadow-[#F4A261]/40",
      position: "bottom"
    },
    {
      id: "03",
      title: "Designing & Get Conformation",
      icon: <PenTool className="w-8 h-8 text-white" />,
      color: "bg-[#FF5C00]", // Bright Orange
      borderColor: "border-[#FF5C00]",
      glowColor: "shadow-[#FF5C00]/40",
      position: "top"
    },
    {
      id: "04",
      title: "Coding & Development",
      icon: <Code2 className="w-8 h-8 text-white" />,
      color: "bg-[#007B8C]", // Teal
      borderColor: "border-[#007B8C]",
      glowColor: "shadow-[#007B8C]/40",
      position: "bottom"
    },
    {
      id: "05",
      title: "Testing & Maintenance",
      icon: <ClipboardCheck className="w-8 h-8 text-white" />,
      color: "bg-[#1B4DFF]", // Blue
      borderColor: "border-[#1B4DFF]",
      glowColor: "shadow-[#1B4DFF]/40",
      position: "top"
    }
  ];

  return (
    <div className="min-h-screen bg-white py-16 px-4 font-sans flex flex-col items-center justify-center">
      {/* Section Heading */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-700 tracking-widest text-center mb-16 md:mb-24">
        OUR WORKING PROCESS
      </h2>

      {/* Steps Container */}
      <div className="flex flex-col md:flex-row flex-wrap justify-center items-start gap-12 md:gap-4 lg:gap-8 w-full max-w-7xl">
        {steps.map((step) => (
          <div 
            key={step.id} 
            className={`flex flex-col items-center relative group w-full md:w-50 lg:w-55 ${
              step.position === 'bottom' ? 'md:mt-12' : ''
            }`}
          >
            {/* Label Container - Positioned above or below based on 'position' property */}
            <div className={`text-center flex flex-col items-center w-full transition-transform duration-300 group-hover:scale-105 ${
              step.position === 'bottom' ? 'order-last mt-6' : 'mb-6'
            }`}>
              
              {/* Connector line for labels on bottom (Line is above text) */}
              {step.position === 'bottom' && (
                <div className="w-0.5 h-8 bg-gray-300 relative mb-2 rotate-180">
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-gray-400" />
                </div>
              )}

              <h3 className="text-sm font-bold text-gray-800 mb-1 min-h-10 flex items-center justify-center px-4 leading-tight">
                {step.title}
              </h3>
              <p className={`text-xl font-black uppercase tracking-tighter ${step.color.replace('bg-', 'text-')}`}>
                Step {step.id}
              </p>

             
              {step.position === 'top' && (
                <div className="w-0.5 h-8 bg-gray-300 relative mt-2">
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-gray-400" />
                </div>
              )}
            </div>

            
            <div className="relative flex items-center justify-center w-40 h-40 shrink-0">
              {/* Outer Ring 1 (Segmented Effect) */}
              <div className={`absolute inset-0 border-2 rounded-full opacity-30 ${step.borderColor}`} 
                   style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 35%, 0% 35%, 0% 65%, 100% 65%, 100% 100%, 0% 100%)' }}></div>
              
              {/* Outer Ring 2 (Inner concentric) */}
              <div className={`absolute inset-4 border-2 rounded-full opacity-60 ${step.borderColor}`}></div>
              
              {/* Main Icon Circle */}
              <div className={`relative z-10 w-24 h-24 rounded-full flex items-center justify-center shadow-2xl ${step.color} ${step.glowColor} transition-all duration-500 group-hover:scale-110`}>
                {step.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

     
      <div className="mt-24 flex flex-col sm:flex-row gap-4 w-full max-w-2xl px-4">
        <button className="flex-1 bg-[#2C3E50] text-white py-4 px-8 rounded-md font-bold text-sm tracking-widest hover:bg-[#1a252f] transition-all active:scale-95 shadow-lg">
          QUICK ENQUIRY
        </button>
        <button className="flex-1 bg-[#4A90E2] text-white py-4 px-8 rounded-md font-bold text-lg flex items-center justify-center gap-3 hover:bg-[#357abd] transition-all active:scale-95 shadow-lg">
          <PhoneCall className="w-5 h-5 fill-current" />
          9045301702
        </button>
      </div>
    </div>
  );
};

export default WorkingProcess;
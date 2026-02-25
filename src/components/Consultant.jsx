import React, { useState } from 'react';
import { Calendar, ArrowRight, X } from 'lucide-react';

const Consultant = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <section className="w-full max-w-6xl bg-[#00223D] py-20 md:py-32 px-6 flex flex-col items-center text-center rounded-xl shadow-2xl">
        <h1 className="text-white text-3xl md:text-5xl font-bold mb-4">
          Get Free Consultation
        </h1>
        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
          Book An Appointment With Our Team Through Google Meet / Zoom Call
        </p>
        
        <button 
          onClick={toggleModal}
          className="flex items-center gap-2 bg-[#1E88E5] hover:bg-[#1976D2] text-white font-semibold py-4 px-10 rounded-full transition-all shadow-lg active:scale-95 group"
        >
          Schedule a meeting
          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
        </button>
      </section>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl w-full max-w-md p-8 shadow-2xl transform transition-all scale-100 animate-in zoom-in-95 duration-200">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800">Select a Date</h3>
              <button onClick={toggleModal} className="text-gray-400 hover:text-gray-600 transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 border border-blue-50 bg-blue-50/50 rounded-xl">
                <Calendar className="text-blue-600" />
                <div>
                  <p className="font-semibold text-gray-700">Available: Mon - Fri</p>
                  <p className="text-sm text-gray-500">9:00 AM - 5:00 PM EST</p>
                </div>
              </div>
              
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                <p className="text-sm text-gray-600 mb-2">Selected Platform:</p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-medium">Google Meet</span>
                  <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-medium">Zoom</span>
                </div>
              </div>

              <button 
                onClick={() => {
                  alert("Redirecting to calendar...");
                  setIsModalOpen(false);
                }}
                className="w-full bg-[#1E88E5] text-white py-3 rounded-xl font-bold hover:bg-[#1976D2] transition-colors shadow-lg"
              >
                View Available Slots
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Consultant;
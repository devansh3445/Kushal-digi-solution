import React, { useState } from 'react';
import { MapPin, Mail, Phone, ArrowRight, CheckCircle2 } from 'lucide-react';

const ContactUs = () => {
  const [activeTab, setActiveTab] = useState('address');
  const [formStatus, setFormStatus] = useState('idle'); 

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 font-sans text-slate-800">
      <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-sm overflow-hidden p-6 md:p-12 lg:p-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          <div className="flex flex-col">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Contact Us</h1>
            <p className="text-lg text-slate-500 mb-10">
              Please Complete The Below Form. We Will Get In Touch With You
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Name*"
                  required
                  className="w-full bg-slate-50 border-none rounded-lg p-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                />
                <input
                  type="tel"
                  placeholder="Phone Number*"
                  required
                  className="w-full bg-slate-50 border-none rounded-lg p-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="email"
                  placeholder="Email Address*"
                  required
                  className="w-full bg-slate-50 border-none rounded-lg p-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                />
                <input
                  type="text"
                  placeholder="Location"
                  required
                  className="w-full bg-slate-50 border-none rounded-lg p-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                />
              </div>

              <input
                type="text"
                placeholder="Business Name"
                required
                className="w-full bg-slate-50 border-none rounded-lg p-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              />

              <textarea
                placeholder="Message"
                required
                rows="5"
                className="w-full bg-slate-50 border-none rounded-lg p-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none"
              ></textarea>

              <div className="bg-slate-50 border border-slate-100 rounded-lg p-4 flex items-center justify-between max-w-sm">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 border-2 border-slate-300 rounded bg-white"></div>
                  <span className="text-sm font-medium text-slate-600">I'm Not A Robot</span>
                </div>
                <div className="flex flex-col items-center">
                  <img 
                    src="https://www.gstatic.com/recaptcha/api2/logo_48.png" 
                    alt="reCAPTCHA" 
                    className="w-8 h-8 opacity-70"
                  />
                  <span className="text-[10px] text-slate-400">reCAPTCHA</span>
                </div>
              </div>

              <button
                type="submit"
                disabled={formStatus !== 'idle'}
                className={`mt-6 inline-flex items-center justify-center gap-2 px-10 py-4 rounded-lg font-semibold text-white transition-all transform active:scale-95 ${
                  formStatus === 'success' 
                    ? 'bg-green-500' 
                    : 'bg-blue-600 hover:bg-blue-700'
                }`}
              >
                {formStatus === 'idle' && (
                  <>
                    Submit <ArrowRight size={20} />
                  </>
                )}
                {formStatus === 'submitting' && (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                )}
                {formStatus === 'success' && (
                  <>
                    Sent! <CheckCircle2 size={20} />
                  </>
                )}
              </button>
            </form>
          </div>

          <div className="flex flex-col">
            <div className="flex gap-8 mb-4 border-b border-slate-100">
              <button
                onClick={() => setActiveTab('address')}
                className={`pb-4 text-2xl font-semibold transition-all relative ${
                  activeTab === 'address' ? 'text-blue-600' : 'text-slate-400 hover:text-slate-600'
                }`}
              >
                Address
                {activeTab === 'address' && (
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 rounded-t-full"></div>
                )}
              </button>
              <button
                onClick={() => setActiveTab('map')}
                className={`pb-4 text-2xl font-semibold transition-all relative ${
                  activeTab === 'map' ? 'text-blue-600' : 'text-slate-400 hover:text-slate-600'
                }`}
              >
                Google Maps
                {activeTab === 'map' && (
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 rounded-t-full"></div>
                )}
              </button>
            </div>

            <div className="py-8">
              {activeTab === 'address' ? (
                <div className="space-y-12">
                  <div className="flex items-center gap-6 group">
                    <div className="relative shrink-0">
                      <div className="w-16 h-16 bg-white shadow-lg shadow-slate-200 rounded-4xl rounded-tr-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform">
                        <MapPin className="text-blue-600" size={28} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 tracking-wider uppercase mb-1">Our Location</h3>
                      <p className="text-slate-600 leading-relaxed font-medium">G-9, First Floor, Sector 63, Noida</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 group">
                    <div className="relative shrink-0">
                      <div className="w-16 h-16 bg-white shadow-lg shadow-slate-200 rounded-4xl rounded-tl-lg flex items-center justify-center transform group-hover:-rotate-12 transition-transform">
                        <Mail className="text-blue-600" size={28} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 tracking-wider uppercase mb-1">Send Us Mail</h3>
                      <p className="text-slate-600 leading-relaxed font-medium">Info@Kusheldigi.Com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 group">
                    <div className="relative shrink-0">
                      <div className="w-16 h-16 bg-white shadow-lg shadow-slate-200 rounded-3xl rounded-br-lg flex items-center justify-center transform group-hover:scale-110 transition-transform">
                        <Phone className="text-blue-600" size={28} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 tracking-wider uppercase mb-1">Call Us</h3>
                      <p className="text-slate-600 leading-relaxed font-medium">+91 9045301702</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="w-full h-100 bg-slate-100 rounded-2xl overflow-hidden shadow-inner flex items-center justify-center relative">
                  <iframe 
                    title="location-map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.562064971485!2d77.38711467617462!3d28.6129119851608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce563914e6b5d%3A0x673998e3b56a31f7!2sSector%2063%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                    className="w-full h-full border-0"
                    allowFullScreen="" 
                    loading="lazy" 
                  ></iframe>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>

      
    </div>
  );
};

export default ContactUs;
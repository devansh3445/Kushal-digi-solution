import React from 'react';
import { 
  Mail, 
  MapPin, 
  Phone, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Youtube, 
  Globe, 
  Instagram 
} from 'lucide-react';

import react from '../assets/kds-logo.png'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
  { icon: <Globe size={18} />, href: "https://www.kusheldigi.com/" },

  { icon: <Facebook size={18} />, href: "https://www.facebook.com/kusheldigisolutions/" },

  { icon: <Instagram size={18} />, href: "https://www.instagram.com/kusheldigi/?hl=bn" },

  { icon: <Linkedin size={18} />, href: "https://in.linkedin.com/company/kusheldigisolutions" },

  
  { icon: <span className="text-xs font-bold px-1">P</span>, href: "https://in.pinterest.com/kushaldigisolution" },

  { icon: <Twitter size={18} />, href: "https://twitter.com/KushelDigisoln" },

  { icon: <Youtube size={18} />, href: "https://www.youtube.com/@kushaldigisolution" },
];
  const footerLinks = [
    { name: "About Us", href: "#" },
    { name: "Insights", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Sitemap", href: "#" },
  ];

  return (
    <footer className="relative bg-[#001D3D] text-white pt-10 pb-6 px-4 md:px-8 lg:px-16 overflow-hidden font-sans">
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none select-none"
        style={{
          backgroundImage: `url('https://www.transparenttextures.com/patterns/world-map.png')`,
          backgroundSize: '800px auto',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-center border-b border-blue-900/50 pb-8">
          <div className="flex items-center">
            <img 
              src= {react}
              alt="Kushel Digi Logo" 
              className="h-12 w-auto object-contain "
              onError={(e) => { e.target.src = 'https://placehold.co/200x60/001D3D/white?text=Kushel+Digi'; }}
            />
          </div>

          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 shrink-0 flex items-center justify-center rounded-full border border-white/20 text-blue-400 bg-white/5">
              <MapPin size={18} className="text-white" />
            </div>
            <p className="text-sm text-gray-300">
              G-9, First Floor, Sector 63, Noida
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 shrink-0 flex items-center justify-center rounded-full border border-white/20 text-blue-400 bg-white/5">
              <Mail size={18} className="text-white" />
            </div>
            <p className="text-sm text-gray-300 break-all">
              Shubham@Kusheldigi.Com
            </p>
          </div>

          <div className="flex items-center space-x-3 md:justify-end lg:justify-start">
            <div className="w-9 h-9 shrink-0 flex items-center justify-center rounded-full border border-white/20 text-blue-400 bg-white/5">
              <Phone size={18} className="text-white" />
            </div>
            <p className="text-sm text-gray-300">
              9045301702
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
          <div className="text-center lg:text-left">
            <p className="text-xs text-gray-400 mb-3 font-medium">
              © {currentYear} Kusheldigi. All Rights Reserved.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-x-4 gap-y-2">
              {footerLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs text-gray-300 hover:text-white transition-colors border-r border-gray-600/50 pr-4 last:border-0 last:pr-0"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center lg:items-end space-y-3">
            <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">Follow Us On</span>
            <div className="flex items-center space-x-5">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-all transform hover:-translate-y-0.5"
                  aria-label="Social Link"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
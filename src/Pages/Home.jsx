import React, { useState } from 'react'
import logo from "../assets/kds logo 1 (1).png";
import { Menu, X } from 'lucide-react';
import HomeContent from '../components/homecontent';

const Home = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <div className='min-h-screen font-sans text-gray-900 bg-[#f4f7fa] overflow-x-hidden'>
            <nav className='bg-white py-4 px-6 md:px-12 shadow-sm sticky top-0 z-50 '>
                <div className='max-w-7xl mx-auto flex justify-between item-center ' >
                    <div className='flex items-center '>
                        <img src={logo} alt="Kushal Digi Solution" className='h-12 md:h-14 w-auto object-contain gap-8' />
                    </div>

                    {/* for desktop*/}
                    <div className='hidden lg:flex items-center gap-8 ml-50 text-sm font-bold text-gray-700 '>
                        <a href="#" className="hover:text-blue-600 transition-colors uppercase tracking-tight">About Us</a>
                        <a href="#" className="hover:text-blue-600 transition-colors uppercase tracking-tight">Services</a>
                        <a href="#" className="hover:text-blue-600 transition-colors uppercase tracking-tight">Our Portfolio</a>
                        <a href="#" className="hover:text-blue-600 transition-colors uppercase tracking-tight">Testimonials</a>
                        <a href="#" className="hover:text-blue-600 transition-colors uppercase tracking-tight">Contact Us</a>

                        <a href="tel:9045301702" className="bg-[#4a90e2] text-white px-5 py-2.5 ml-30 rounded hover:bg-blue-600 transition-all flex items-center gap-8 font-bold whitespace-nowrap shadow-sm">
                            CALL NOW : 9045301702
                        </a>
                    </div>

                    <button class="lg:hidden p-2 text-gray-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X size={28}/> : <Menu size={28}/>}
                    </button>
                </div>

                {/*Mobile sidebar */}
                {isMenuOpen && (
                    <div className='lg:hidden absolute top-full left-0 w-full bg-white border-t shadow-xl py-6 flex flex-col items-center gap-6 **:animate-in slide-in-from-top duration-300'>
                        <a href="#" className='font-bold text-gray-700'>ABOUT US</a>
                        <a href="#" className='font-bold text-gray-700'>SERVICES</a>
                        <a href="#" className='font-bold text-gray-700'>OUR PORTFOLIO</a>
                        <a href="#" className='font-bold text-gray-700'>TESTIMONIALS</a>
                        <a href="#" className='font-bold text-gray-700'>CONTACT US</a>
                        <a href="tel:9045301702" className='bg-blue-500 text-white  px-2 py-3 rounded font-bold'>CALL NOW: 9045301702</a>
                    </div>
                )}
            </nav>

            <HomeContent />
        </div>
    )
}

export default Home
import { ChevronDown, Mail, Phone, Smartphone, User } from 'lucide-react'
import React from 'react'

const Homecontent = () => {
    return (
        <section className='relative pt-12 pb-20 px-6 md:px-12 lg:pt-24 lg:pb-32 max-w-7xl mx-auto overflow-visible'>
            <div className='absolute top-1/2 -right-20 -z-10 w-96 h-96 bg-blue-100 rounded-full opacity-50 blur-3xl'></div>
            <div className='absolute bottom-0 -left-20 -z-10 w-80 h-80 bg-blue-50 rounded-full opacity-60 blur-3xl '></div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-start'>
                <div className='flex flex-col gap-6 lg:max-w-xl'>
                    <h4 className='text-lg md:text-xl font-medium text-gray-700'>Welcome to Kushel Digi</h4>
                    <h1 className='text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-[1.15]'>Revolutionising your business <br />throught Technology</h1>
                    <p className='text-lg text-gray-600 leading-relaxed font-medium'>We are a leading company, which has been offering technology solutions across the globe for almost 5 years. </p>

                    <div className='flex flex-wrap gap-4 mt-4'>
                        <button className="bg-slate-800 text-white px-8 py-4 rounded font-bold uppercase tracking-wider 
                        hover:bg-black active:scale-95 active:bg-black 
                          transition-all duration-200 shadow-lg">
                            Quick Enquiry
                        </button>
                        <a
                            href="tel:9045301702"
                            className="bg-[#4a90e2] text-white px-8 py-4 rounded font-bold 
                              flex items-center gap-3 
                              hover:bg-blue-600 active:bg-blue-700 active:scale-95
                                 transition-all duration-200 shadow-lg"
                        >
                            <Phone size={20} fill="currentColor" />
                            9045301702
                        </a>
                    </div>

                    <ul className="mt-8 space-y-3 font-semibold text-gray-700 uppercase tracking-wide">
                        <li className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-gray-800"></div>
                            UI/UX Design
                        </li>
                        <li className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-gray-800"></div>
                            Website & App Development
                        </li>
                        <li className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-gray-800"></div>
                            E-Commerce Development
                        </li>
                    </ul>

                </div>

                <div className="bg-[#2a2d34] text-white p-8 md:p-10 rounded-sm shadow-2xl relative overflow-hidden">
                    <div className="relative z-10">
                        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2 leading-tight">
                            Hire A Top Global Talent To Grow Your Business !
                        </h2>
                        <p className="text-center text-gray-300 text-lg mb-8">Get Free Quote</p>

                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Your Name*"
                                        required
                                        className="w-full bg-white text-gray-800 p-3 pr-10 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-gray-400"
                                    />
                                    <User className="absolute right-3 top-3 text-gray-400" size={20} />
                                </div>
                                <div className="relative">
                                    <input
                                        type="tel"
                                        placeholder="Phone Number*"
                                        required
                                        className="w-full bg-white text-gray-800 p-3 pr-10 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-gray-400"
                                    />
                                    <Smartphone className="absolute right-3 top-3 text-gray-400" size={20} />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="relative">
                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                        required
                                        className="w-full bg-white text-gray-800 p-3 pr-10 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-gray-400"
                                    />
                                    <Mail className="absolute right-3 top-3 text-gray-400" size={20} />
                                </div>
                                <div className="relative">
                                    <select className="w-full bg-white text-gray-500 p-3 pr-10 rounded appearance-none focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer">
                                        <option>Services</option>
                                        <option>Web Development</option>
                                        <option>Mobile App</option>
                                        <option>UI/UX Design</option>
                                    </select>
                                    <ChevronDown className="absolute right-3 top-3 text-gray-400 pointer-events-none" size={20} />
                                </div>
                            </div>

                            <div className="pt-4">
                                <h3 className="text-lg font-semibold mb-3">Additional Details</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        placeholder="Select Budget"
                                        required
                                        className="w-full bg-white text-gray-800 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-gray-400"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Best Start Date"
                                        required
                                        onFocus={(e) => e.target.type = 'date'}
                                        onBlur={(e) => e.target.type = 'text'}
                                        className="w-full bg-white text-gray-800 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-gray-400"
                                    />
                                </div>
                            </div>

                            <button className="w-full bg-[#4a90e2] hover:bg-blue-600 active:bg-blue-700 active:scale-95 
                              text-white font-bold py-4 rounded mt-6 transition-all duration-200 text-lg shadow-lg">
                                Send a Message
                            </button>
                        </form>
                    </div>
                    <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-500/10 rounded-full"></div>
                </div>
            </div>
        </section>


    )
}

export default Homecontent
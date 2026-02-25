import React from 'react'


  const features = [
    {
      title: "Great UI / UX",
      description: "Our designs have great UI which results in great UX as well."
    },
    {
      title: "SEO Friendly",
      description: "Our websites are built with features to help your website rank higher."
    },
    {
      title: "Clean Coding",
      description: "Coding is kept clean and optimised as per industry standard."
    },
    {
      title: "Responsive Design",
      description: "Our Designs are device friendly across all platforms and screen sizes."
    }
  ];




const AboutUs = () => {
  return (
     <section className="relative min-h-screen bg-white flex flex-col items-center py-16 px-6 md:px-12 lg:px-24 overflow-hidden font-sans">
      
      
      <div className="w-full max-w-7xl mb-10 md:mb-16 ">
        <h1 className="text-[14vw] md:text-[10vw] lg:text-[12rem] font-bold text-[#f1f1f1] leading-none tracking-tight select-none pointer-events-none">
          ABOUT US
        </h1>
      </div>


      <div className="absolute -bottom-10 -right-10 w-72 h-72 md:w-150 md:h-150 bg-[#eef5ff] rounded-full z-0 pointer-events-none opacity-80" />

      <div className="relative z-10 max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        
        
        <div className="flex flex-col items-start space-y-6 md:space-y-8">
          <div className="space-y-1">
            <h2 className="text-3xl md:text-4xl lg:text-4xl font-normal text-[#1a1a1a] leading-tight">
              Hire Top Website <br />
              <span className="font-bold">Designers & Developers</span>
            </h2>
          </div>
          <p className="text-slate-600 leading-relaxed max-w-xl text-sm md:text-base">
            If you're looking to hire expert website designers and developers,
            you've come to the right place to construct a website that stands
            out in aesthetics and functionality. We have the ability to offer a
            wide range of services. As we have a comprehensive
            understanding of website design and exposure across sectors all
            over the world, we also build websites that provide customers
            with the best first impression on digital platforms. Here's what we
            look for when hiring web designers to revitalize your company's
            online presence.
          </p>

          <button className="bg-[#2d3b55] text-white px-8 py-4 text-sm font-semibold tracking-widest uppercase transition-all hover:bg-slate-900 active:scale-95 shadow-md">
            Quick Enquiry
          </button>
        </div>

        {/*right side card*/}
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 '>
          {features.map((features, index) => (
            <div key={index} className='bg-white border border-blue-200 rounded-lg p-8 md:p-8 flex flex-col items-center text-center justify-center min-h-55 transition-all hover:shadow-lg hover:border-blue-300 hover:bg-amber-50  active:bg-amber-50'>
              <h3 className='text-blue-500 font-bold text-xl md:text-2xl mb-4'>{features.title}</h3>
              <p className='text-slate-600 text-sm md:text-base leading-relaxed max-w-50'>{features.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutUs


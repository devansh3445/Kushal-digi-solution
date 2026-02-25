import React from 'react';
import logo from "../assets/Vector.png";

const features = [
  {
    text: "99.9% Uptime with web acceleration. Caching and compression enabled High-Traffic Websites & Apps development service to scale up sales and support hundreds of thousands of users in a fast, reliable manner."
  },
  {
    text: "Clear terms and conditions, Robust data security to protect your customers' information. Providing Complete Ownership and Control your project. No Fake Commitment, Delivery on time"
  },
  {
    text: "Free Website Audit, Quick Review, 24x7 tech support. Easy to use complete Website Application end-to-end Analytics With Accelerated Mobile Pages (AMP)"
  },
  {
    text: "Use of Latest technologies like React, Vue JS, NodeJS for web development & Website design service in India."
  },
  {
    text: "Website UX UI Design, Wireframing, Prototyping in Figma before developing webpages."
  }
];

const blobShape = "42% 58% 70% 30% / 45% 45% 55% 55%";

const Tcontent = () => {
  return (
    <section className="min-h-screen bg-white flex items-center justify-center py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* LEFT */}
          <div className="w-full lg:w-[58%] space-y-10">
            <h1 className="text-3xl md:text-[42px] font-black text-[#333] uppercase">
              WE ARE KNOWN FOR
            </h1>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">

                  <div className="mt-1 w-6 h-6 border-2 border-green-500 rounded-full flex items-center justify-center">
                    <div className="w-2 h-1 border-l-2 border-b-2 border-green-500 -rotate-45" />
                  </div>

                  <p className="text-gray-600 text-lg">
                    {feature.text}
                  </p>

                </div>
              ))}
            </div>

            <button className="bg-blue-500 text-white px-10 py-4 hover:bg-blue-800 transition-transform uppercase font-bold">
              Call Now →
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full lg:w-[42%] flex justify-center">
            <div className="relative w-full max-w-md aspect-square">

              <div
                className="absolute inset-0 bg-gray-100 opacity-50"
                style={{ borderRadius: blobShape }}
              />

              <img
                src={logo}
                alt="Professional"
                className="relative z-10 w-full h-full object-cover"
                style={{ borderRadius: blobShape }}
              />

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Tcontent;
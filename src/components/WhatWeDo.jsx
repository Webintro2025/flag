import React from 'react'
import { FaSnowflake, FaVial, FaShieldVirus, FaPumpMedical, FaProcedures, FaBiohazard, FaLightbulb, FaWind, FaTint, FaFlask, FaTemperatureLow } from 'react-icons/fa';


const WhatWeDo = () => {
  return (
    <section className="py-12 px-4 md:px-8 bg-white">
      <div className="max-w-4xl mx-auto text-center animate-fadein">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#23286b] mb-6 tracking-wide">What We Do</h2>
        <p className="text-black text-base md:text-lg mb-8">We specialize in manufacturing and supplying a complete range of military and ceremonial products. Each product is carefully designed using high-quality materials to meet both functional and aesthetic standards.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div className="bg-[#FFF7E6] rounded-xl p-6 shadow">
            <h3 className="text-xl font-bold text-orange-700 mb-2">Military & National Flags</h3>
            <p className="text-black">Premium quality flags of India and other ceremonial flags made with durable fabric for long-lasting use.</p>
          </div>
          <div className="bg-[#E6FFF7] rounded-xl p-6 shadow">
            <h3 className="text-xl font-bold text-green-700 mb-2">Army & NCC Essentials</h3>
            <p className="text-black">Military caps, NCC uniforms, ceremonial sashes, and custom-designed badges for schools, colleges, and institutions.</p>
          </div>
          <div className="bg-[#F0F4FF] rounded-xl p-6 shadow">
            <h3 className="text-xl font-bold text-blue-700 mb-2">Event & Ceremony Products</h3>
            <p className="text-black">Shamiyana tents, flag stands, notice boards, and blazer fabrics for official gatherings, parades, and functions.</p>
          </div>
          <div className="bg-[#FFF0F6] rounded-xl p-6 shadow">
            <h3 className="text-xl font-bold text-pink-700 mb-2">Custom Manufacturing</h3>
            <p className="text-black">Tailor-made solutions as per customer requirements to ensure perfect fit, style, and durability.</p>
          </div>
          <div className="bg-[#F7FFF0] rounded-xl p-6 shadow md:col-span-2">
            <h3 className="text-xl font-bold text-lime-700 mb-2">Wholesale & Retail Supply</h3>
            <p className="text-black">Serving bulk orders for institutions as well as single-unit retail needs.</p>
          </div>
        </div>
        <p className="text-black text-base md:text-lg mt-10">From production to packaging and delivery, every step is monitored to maintain the highest standard of quality. Whether you are looking for a flag manufacturer in Punjab, a trusted army store in Malerkotla, or custom NCC accessories, we provide everything under one roof.</p>
      </div>
      <style>{`
        @keyframes fadein { from { opacity: 0; transform: translateY(30px);} to { opacity: 1; transform: translateY(0);} }
        .animate-fadein { animation: fadein 0.8s cubic-bezier(0.4,0,0.2,1); }
      `}</style>
    </section>
  );
}

export default WhatWeDo
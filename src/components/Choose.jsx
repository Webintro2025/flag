"use client";
import React from 'react'
import { motion } from 'framer-motion'


const Choose = () => {
  return (
    <section className="w-full py-16 px-2 sm:px-8 bg-white">
      <div className="w-full animate-fadein">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-black mb-8 tracking-wide drop-shadow-lg">Why Choose Us</h2>
        <p className="text-black text-lg md:text-xl mb-8 text-center">Choosing the right supplier for military, NCC, and ceremonial products is not just about buying an item – it is about trust, reliability, and long-term value. At Tiranga Army Store, we go beyond just selling products; we build relationships based on quality and commitment. Here’s why hundreds of customers continue to choose us:</p>
        <ul className="list-none space-y-6 mb-8 w-full max-w-5xl mx-auto">
          <li className="rounded-xl p-4 shadow flex flex-col border border-orange-100"><span className="font-bold text-orange-600 text-lg">✅ Established Reputation (Since 2020)</span><span className="text-black mt-2">With more than 15 years of manufacturing and supply experience, we have earned a strong reputation in the market for reliability, consistency, and customer satisfaction.</span></li>
          <li className="rounded-xl p-4 shadow flex flex-col border border-green-100"><span className="font-bold text-orange-600 text-lg">✅ Comprehensive Product Range</span><span className="text-black mt-2">We are a one-stop solution for all military and ceremonial needs. Whether it’s military flags, national flags of India, NCC uniforms, army caps, shamiyana tents, notice boards, or badges, we provide everything under one roof.</span></li>
          <li className="rounded-xl p-4 shadow flex flex-col border border-orange-100"><span className="font-bold text-orange-600 text-lg">✅ Premium Quality Standards</span><span className="text-black mt-2">We believe that quality is non-negotiable. All our products are crafted using top-grade fabrics, metals, and raw materials, ensuring strength, durability, and long service life.</span></li>
          <li className="rounded-xl p-4 shadow flex flex-col border border-green-100"><span className="font-bold text-orange-600 text-lg">✅ Affordable & Competitive Pricing</span><span className="text-black mt-2">Since we are a direct manufacturer, there are no middlemen costs. This allows us to supply both wholesale and retail buyers with the most competitive prices in the industry.</span></li>
          <li className="rounded-xl p-4 shadow flex flex-col border border-orange-100"><span className="font-bold text-orange-600 text-lg">✅ Skilled and Experienced Team</span><span className="text-black mt-2">Our trained workforce understands the importance of precision, design, and detailing in military and ceremonial products. From stitching uniforms to fabricating flags, every step is handled by experts.</span></li>
          <li className="rounded-xl p-4 shadow flex flex-col border border-green-100"><span className="font-bold text-orange-600 text-lg">✅ Customization Facility</span><span className="text-black mt-2">We know that different organizations have different requirements. That’s why we offer tailor-made solutions—whether you need custom sizes for flags, unique blazer fabrics, or personalized badges, we can make it exactly as per your specifications.</span></li>
          <li className="rounded-xl p-4 shadow flex flex-col border border-orange-100"><span className="font-bold text-orange-600 text-lg">✅ Customer-Centric Approach</span><span className="text-black mt-2">Customer satisfaction is our top priority. We believe in building long-term relationships by providing responsive communication, hassle-free service, and timely deliveries.</span></li>
          <li className="rounded-xl p-4 shadow flex flex-col border border-green-100"><span className="font-bold text-orange-600 text-lg">✅ Pan-India Supply Network</span><span className="text-black mt-2">While we are based in Malerkotla, Punjab, our products are shipped to clients all across Punjab, Haryana, Delhi, Uttar Pradesh, and other states in India. Our strong distribution system ensures fast and safe delivery.</span></li>
          <li className="rounded-xl p-4 shadow flex flex-col border border-orange-100"><span className="font-bold text-orange-600 text-lg">✅ Trusted by Institutions & Organizations</span><span className="text-black mt-2">Over the years, we have proudly supplied to government bodies, defense personnel, schools, colleges, NCC groups, wholesalers, and retailers. This wide client base reflects the trust people place in us.</span></li>
        </ul>
      </div>
      <style>{`
        @keyframes fadein { from { opacity: 0; transform: translateY(30px);} to { opacity: 1; transform: translateY(0);} }
        .animate-fadein { animation: fadein 0.8s cubic-bezier(0.4,0,0.2,1); }
      `}</style>
    </section>
  );
}

export default Choose;
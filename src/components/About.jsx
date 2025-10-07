import React from 'react'

const About = () => {
      return (
        <section className=" pt-5  bg-white">
          <div className=" flex flex-col gap-16 animate-fadein">
            {/* About1: Image left, text right */}
            <div className="px-4 py-6 flex flex-col md:flex-row items-center gap-10" style={{ background: '#FFF7E6', borderRadius: '1rem' }}>
              <div className="md:w-1/2 w-full flex justify-center">
                  <img src="/About1.png" alt="MAJID MILITARY STORE - About1" className="rounded-2xl shadow-lg w-full max-w-xs object-cover hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="md:w-1/2 w-full">
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#23286b] mb-4 tracking-wide">About Us</h2>
                <p className="text-black text-base md:text-lg mb-4">Founded in 2020, MAJID MILITARY STORE is a trusted name in the field of military, ceremonial, and institutional supplies. Headquartered at Malerkotla, Sangrur, Punjab, we take pride in being one of the leading manufacturers and suppliers of a wide range of products such as Military Flags, Army Caps, Military Badges, Shamiyana Tents, Flag Stands, NCC Uniforms, Blazer Fabrics, Plastic Crates, Sashes, Horse Bosals, and many more ceremonial essentials.</p>
              </div>
            </div>
            {/* About2: Text left, image right */}
            <div className="flex flex-col md:flex-row-reverse items-center px-10 py-6 gap-8">
              <div className="md:w-1/2 w-full flex justify-center">
                  <img src="/About2.png" alt="MAJID MILITARY STORE - About2" className="rounded-2xl shadow-lg w-full max-w-xs object-cover hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="md:w-1/2 w-full">
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#23286b] mb-4 tracking-wide">Our Journey</h2>
                <p className="text-black text-base md:text-lg mb-4">With more than a decade of industry experience, we have built a reputation for precision, quality craftsmanship, and timely delivery. Our company is driven by the vision of our CEO, Mr. Mazid, whose leadership and dedication have helped us expand from a small manufacturing unit to a recognized brand serving clients across Punjab and all over India.</p>
              </div>
            </div>
            {/* About3: Image left, text right */}
            <div className="w-full flex flex-col md:flex-row items-center px-4 py-6 gap-10" style={{ background: '#E6FFF7', borderRadius: '1rem' }}>
              <div className="md:w-1/2 w-full flex justify-center">
                  <img src="/About1.png" alt="MAJID MILITARY STORE - About3" className="rounded-2xl shadow-lg w-full max-w-xs object-cover hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="md:w-1/2 w-full">
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#23286b] mb-4 tracking-wide">Our Promise</h2>
                <p className="text-black text-base md:text-lg mb-4">At MAJID MILITARY STORE, we believe in delivering not just products, but trust and reliability. Over the years, we have catered to government departments, educational institutions, NCC groups, defense personnel, wholesalers, and retailers. Our growth is built on a simple principle – providing high-quality products at fair and competitive prices while maintaining a customer-first approach.</p>
              </div>
            </div>
          </div>
          <style>{`
            @keyframes fadein { from { opacity: 0; transform: translateY(30px);} to { opacity: 1; transform: translateY(0);} }
            .animate-fadein { animation: fadein 0.8s cubic-bezier(0.4,0,0.2,1); }
          `}</style>
        </section>
      );
    }

export default About
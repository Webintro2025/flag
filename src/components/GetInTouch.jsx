import React from "react";
import ContactForm from "./ContactForm";

const GetInTouch = () => {
  return (
    <section id="get-in-touch" tabIndex={-1} className="max-w-7xl mx-auto px-2 sm:px-4 py-8 sm:py-10 bg-white">
      <div className="flex flex-col lg:flex-row gap-8 sm:gap-10">
        {/* Contact Info Section */}
        <div className="lg:w-1/2 flex flex-col justify-center">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-extrabold text-black mb-5 sm:mb-8 text-left">
            Contact Information
          </h2>
          <div className="bg-[#78B485] border-l-4 sm:border-l-8 border-orange-500 shadow-xl rounded-2xl p-4 sm:p-6 md:p-10 max-w-xl mx-auto flex flex-col gap-4 sm:gap-7 animate-fadein">
            <div className="flex items-center gap-3 sm:gap-4 group">
              <span className="bg-green-700 text-orange-400 rounded-full p-2 sm:p-3 text-base sm:text-xl transition-transform duration-300 group-hover:scale-110 animate-bounce">
                <i className="fas fa-building"></i>
              </span>
              <div>
                <div className="text-black font-semibold text-xs sm:text-sm">
                  Tiranga Army Store
                </div>
                <div className="text-black font-bold text-sm sm:text-base md:text-lg">
                  Near Bharat Model School,Sunami Gate,Malerkotla,Sangrur, Sangrur- 148023, Punjab, India
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 sm:gap-4 group">
              <span className="bg-orange-400 text-green-700 rounded-full p-2 sm:p-3 text-base sm:text-xl transition-transform duration-300 group-hover:scale-110 animate-pulse">
                <i className="fas fa-id-card"></i>
              </span>
              <div>
                <div className="text-black font-semibold text-xs sm:text-sm">
                  GST Number
                </div>
                <div className="text-black font-bold text-sm sm:text-base md:text-lg">
                  3BHOPT0049J1Z5
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 sm:gap-4 group">
              <span className="bg-green-700 text-orange-400 rounded-full p-2 sm:p-3 text-base sm:text-xl transition-transform duration-300 group-hover:scale-110 animate-bounce">
                <i className="fas fa-phone-alt"></i>
              </span>
              <div>
                <div className="text-black font-semibold text-xs sm:text-sm">
                  Call/Whatsapp
                </div>
                <div className="text-black font-bold text-sm sm:text-base md:text-lg transition-colors duration-300 group-hover:text-orange-400">
                  <a href="tel:+91-7888309215" className="hover:underline hover:text-orange-400 transition-colors duration-200">+91-7888309215 / +91-9914511239</a> 
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 sm:gap-4 group">
              <span className="bg-orange-400 text-green-700 rounded-full p-2 sm:p-3 text-base sm:text-xl transition-transform duration-300 group-hover:scale-110 animate-pulse">
                <i className="fas fa-envelope"></i>
              </span>
              <div>
                <div className="text-black font-semibold text-xs sm:text-sm">
                  Mail
                </div>
                <div className="text-black font-bold text-sm sm:text-base md:text-lg transition-colors duration-300 group-hover:text-orange-400">
                  <a href="mailto:Majidmilitarystore@gmail.com" className="hover:underline hover:text-orange-400 transition-colors duration-200">Majidmilitarystore@gmail.com</a>
                </div>
              </div>
            </div>
            <style>{`
              @keyframes fadein { from { opacity: 0; transform: translateY(30px);} to { opacity: 1; transform: translateY(0);} }
              .animate-fadein { animation: fadein 0.8s cubic-bezier(0.4,0,0.2,1); }
            `}</style>
          </div>
        </div>

        {/* Get In Touch Section */}
        <div className="lg:w-1/2">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-extrabold text-gray-900 mb-4 sm:mb-6">
            Get In Touch
          </h2>
          <div className="bg-[#78B485] p-4 sm:p-8 border mt-16 border-orange-200 max-w-lg">
            <ContactForm />
          </div>
        </div>
      </div>

      {/* Bottom Banner */}
  <section className="bg-[#78B485] py-4 sm:py-6 px-2 sm:px-6 mt-8 sm:mt-12">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-black text-sm sm:text-lg font-light max-w-xl text-center sm:text-left">
            If You Need Any Industrial Solution{" "}
            <span className="text-orange-500 font-semibold">
              ... We Are Available For You
            </span>
          </p>
          <button className="bg-orange-400 text-black font-bold px-4 sm:px-6 py-2 sm:py-3 rounded-sm whitespace-nowrap hover:bg-orange-500 transition-colors text-xs sm:text-sm">
            CONTACT US
          </button>
        </div>
      </section>
    </section>
  );
};

export default GetInTouch;
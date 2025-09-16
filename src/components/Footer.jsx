import React from 'react'
import { productDropdownList } from '../data/productList';

const Footer = () => {
  return (
<>
  <div className="bg-orange-100 text-black">
  <footer className="w-full">
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-10 md:py-14 flex flex-col md:flex-row justify-between gap-10 md:gap-0">
      <div className="md:w-1/4 flex flex-col gap-4 items-start">
        <a href="/" className="cursor-pointer">
          <img src="/logo.png" alt="APS Lab Instruments Logo" className="h-16 w-auto mb-2 animate-fadein" />
        </a>
        <a href="/" className="cursor-pointer">
          <h4 className="text-3xl font-extrabold leading-none tracking-wide text-black animate-fadein hover:text-orange-600 transition-colors duration-200">
          TRIANGA ARMY STORE
          </h4>
        </a>
        <p className="text-xs md:text-sm max-w-[280px] text-black">
          Near Bharat Model School,Sunami Gate,Malerkotla,Sangrur, Sangrur- 148023, Punjab, India
        </p>
      </div>
      <div className="md:w-1/5 flex flex-col gap-4">
        <h2 className="text-lg font-serif underline underline-offset-4 decoration-black decoration-1 pb-1 text-black">
          Quick Links :
        </h2>
        <nav className="flex flex-col gap-2 text-sm md:text-base text-black">
          <a href="/" className="hover:text-orange-600">Home</a>
          <a href="/about" className="hover:text-orange-600">About Us</a>
          <a href="#" className="hover:text-orange-600">Product's</a>
          <a href="/contact" className="hover:text-orange-600">Contact Us</a>
        </nav>
      </div>
      <div className="md:w-1/5 flex flex-col gap-4">
        <h2 className="text-lg font-serif underline underline-offset-4 decoration-black decoration-1 pb-1 text-black">
          Services :
        </h2>
        <nav className="grid grid-cols-2 gap-1 sm:flex sm:flex-col sm:gap-2 text-xs sm:text-sm md:text-base text-black max-h-56 overflow-auto custom-scrollbar px-1 sm:px-0">
          {productDropdownList.map((item) => (
            <a key={item.slug} href={item.slug} className="hover:text-orange-600 transition-colors duration-200 py-1 sm:py-0">
              {item.name}
            </a>
          ))}
        </nav>
        <style>{`
          .custom-scrollbar::-webkit-scrollbar {
            width: 8px;
            background: #ff8800;
            border-radius: 8px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: #ff8800;
            border-radius: 8px;
          }
          .custom-scrollbar {
            scrollbar-width: thin;
            scrollbar-color: #ff8800 black;
          }
        `}</style>
      </div>
  <div className="md:w-1/4 flex flex-col gap-2 text-black">
  <h2 className="text-lg font-serif underline underline-offset-4 decoration-black decoration-1 pb-1 mb-2 text-black">
          Reach Us :
        </h2>
        <div className="flex items-center gap-2 mb-1 animate-fadein">
          <i className="fas fa-map-marker-alt" style={{color: 'black'}}></i>
          <span>Near Bharat Model School,Sunami Gate,Malerkotla,Sangrur, Sangrur- 148023, Punjab, India</span>
        </div>
        <div className="flex items-center gap-2 animate-fadein">
          <i className="fas fa-id-card" style={{color: 'black'}}></i>
          <span>GST- 3BHOPT0049J1Z5</span>
        </div>
        <div className="flex items-center gap-2 animate-fadein">
          <i className="fas fa-phone-alt" style={{color: 'black'}}></i>
          <span>Call/Whatsapp: <a href="tel:+917888309215" className="hover:text-orange-600 transition-colors duration-200">+91-7888309215</a> / <a href="tel:+919914511239" className="hover:text-orange-600 transition-colors duration-200">9914511239</a> </span>
        </div>
        <div className="flex items-center gap-2 animate-fadein">
          <i className="fas fa-envelope" style={{color: 'black'}}></i>
          <span>Mail: <a href="mailto:Tirangaarmystore@gmail.com" className="hover:text-orange-600 transition-colors duration-200">Tirangaarmystore@gmail.com</a></span>
        </div>
      
        <style>{`
          @keyframes fadein { from { opacity: 0; transform: translateY(30px);} to { opacity: 1; transform: translateY(0);} }
          .animate-fadein { animation: fadein 0.8s cubic-bezier(0.4,0,0.2,1); }
        `}</style>
      </div>
    </div>
  <div className="border-t border-orange-300 max-w-7xl mx-auto px-6 md:px-12 py-8 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 items-center text-black text-sm md:text-base">
      {/* Phone Section */}
  <div className="flex flex-col items-center md:items-start text-center md:text-left">
        <div className="flex items-center gap-2 mb-1">
          <i className="fas fa-phone-alt" style={{color: 'black'}}></i>
          <span className="font-serif">Phone Number :-</span>
        </div>
        <div className="flex flex-col font-semibold">
          <span><a href="tel:+917888309215" className="hover:text-orange-600 transition-colors duration-200">+91-7888309215</a></span>
          <span><a href="tel:+919914511239" className="hover:text-orange-600 transition-colors duration-200">+91-9914511239</a></span>
        </div>
      </div>
      {/* Address Section */}
      <div className="flex flex-col items-center text-center font-serif font-semibold">
        <div className="flex items-center gap-2 mb-1">
          <i className="fas fa-map-marker-alt" style={{color: 'black'}}></i>
          <span>Address :-</span>
        </div>
        <span>Near Bharat Model School,Sunami Gate,Malerkotla,Sangrur, Sangrur- 148023, Punjab, India</span>
      </div>
      {/* Mail Section */}
      <div className="flex flex-col items-center md:items-end text-center md:text-right">
        <div className="flex items-center gap-2 mb-1">
          <i className="far fa-envelope" style={{color: 'black'}}></i>
          <span className="font-serif">E - Mail :-</span>
        </div>
        <span className="font-semibold"><a href="mailto:Tirangaarmystore@gmail.com" className="hover:text-orange-600 transition-colors duration-200">Tirangaarmystore@gmail.com</a></span>
      </div>
    </div>

    <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 text-center text-black text-xs md:text-sm font-serif">
      © 2025 All Rights Reserved. TRIANGA ARMY STORE. Developed & Managed By With
      <span className="text-orange-600">❤</span>
      <a href="https://webintro.in" target="_blank" className="text-orange-600 hover:underline" rel="noopener noreferrer">Webintro.in</a>,
      <a href="https://webintro.in/delhi/" target="_blank" className="text-orange-600 hover:underline" rel="noopener noreferrer">Google Promotion Services</a>
    </div>
    
  </footer>
  </div>

</>
  )
}

export default Footer
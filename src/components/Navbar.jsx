"use client"
import React, { useEffect, useState } from 'react'

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const dropdownTimeout = React.useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    return () => clearTimeout(dropdownTimeout.current);
  }, []);

  const handleDropdownEnter = () => {
    clearTimeout(dropdownTimeout.current);
    setDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimeout.current = setTimeout(() => setDropdownOpen(false), 300);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Top ticker disclaimer */}
      {isSticky && <div style={{ height: 60 }}></div>}
      <div className="w-full bg-black" style={{ zIndex: 60 }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="text-white text-sm" style={{ height: 32, display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
            <div style={{ width: '100%', position: 'relative' }}>
              <div className="ticker" style={{ display: 'inline-block', whiteSpace: 'nowrap', willChange: 'transform', animation: 'tickerScroll 16s linear infinite' }}>
                <span style={{ paddingRight: '3rem' }}>TIRANGA ARMY STORE GST NO : 03BHOPT0049J1Z5 Legal Name of Business
</span>
                <span style={{ paddingRight: '3rem' }}>•</span>
                <span style={{ paddingRight: '3rem' }}>TIRANGA ARMY STORE GST NO : 03BHOPT0049J1Z5 Legal Name of Business
</span>
                <span style={{ paddingRight: '3rem' }}>•</span>
                <span style={{ paddingRight: '3rem' }}>TIRANGA ARMY STORE GST NO : 03BHOPT0049J1Z5 Legal Name of Business
</span>
                {/* duplicate for seamless loop */}
                <span style={{ paddingRight: '3rem' }}>TIRANGA ARMY STORE GST NO : 03BHOPT0049J1Z5 Legal Name of Business
</span>
                <span style={{ paddingRight: '3rem' }}>•</span>
                <span style={{ paddingRight: '3rem' }}>TIRANGA ARMY STORE GST NO : 03BHOPT0049J1Z5 Legal Name of Business
</span>
              </div>
            </div>
          </div>
        </div>
        <style>{`
          @keyframes tickerScroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .ticker { padding-left: 2rem; }
          @media (max-width: 640px) {
            .ticker { animation-duration: 12s !important; }
          }
        `}</style>
      </div>
      <div className='h-auto'>
  <div className="bg-[#FCC870] text-black text-[11px] lg:text-base flex flex-row flex-wrap items-center px-2 lg:px-10 py-2 gap-x-3 gap-y-1">
          <div className="flex items-center space-x-1 sm:space-x-2 hidden lg:flex">
            <i className="fas fa-home"></i>
            <span className="transition-all duration-300 text-black drop-shadow-md  cursor-pointer">
              GST- 03BHOPT0049J1Z5
            </span>
          </div>
          {/* Show only one number and one email on mobile, both on large screens */}
          <div className="flex items-center space-x-2 sm:space-x-4 md:space-x-6">
            <i className="fas fa-phone-alt"></i>
            <span className="transition-all duration-300 text-black drop-shadow-md  cursor-pointer block lg:hidden">
              Call: +91-7888309215
            </span>
            <span className="transition-all duration-300 text-black drop-shadow-md  cursor-pointer hidden lg:block">
              Call: +91-7888309215 / +91-9914511239 
            </span>
          </div>
          <div className="flex items-center space-x-2 ml-auto">
            <i className="fas fa-envelope"></i>
            <span className="transition-all duration-300 text-black drop-shadow-md  cursor-pointer block lg:hidden">
Majidmilitarystore@gmail.com            </span>
            <span className="transition-all duration-300 text-black drop-shadow-md  cursor-pointer hidden lg:block">
Majidmilitarystore@gmail.com           </span>
          </div>
        </div>
        {/* Navigation bar */}
        <nav
          className={`flex flex-col lg:flex-row items-center lg:items-center justify-between px-4 lg:px-10 py-2 z-50 w-full transition-all duration-500 ${
            isSticky ? 'fixed text-white' : 'relative'
          }`}
          style={{
            top: isSticky ? 0 : 'unset',
            left: 0,
            background: isSticky ? 'white' : 'transparent',
            boxShadow: '0 6px 24px 0 rgba(31,38,135,0.18), 0 4px 16px 0 rgba(0,0,0,0.10)', // Always show bottom shadow
            transform: isSticky ? 'translateY(0)' : 'translateY(0)',
            animation: isSticky ? 'slideDownNav 0.5s cubic-bezier(0.4,0,0.2,1)' : 'none',
          }}
        >
          <style>{`
            @keyframes slideDownNav {
              0% { transform: translateY(-100%); opacity: 0; }
              100% { transform: translateY(0); opacity: 1; }
            }
            .hamburger div {
              transition: all 0.3s ease;
            }
            .hamburger.open .line1 {
              transform: rotate(-45deg) translate(-5px, 6px);
            }
            .hamburger.open .line2 {
              opacity: 0;
            }
            .hamburger.open .line3 {
              transform: rotate(45deg) translate(-5px, -6px);
            }
          `}</style>
          <div className="flex w-full lg:w-auto justify-between">
            <a href="/" className="cursor-pointer">
              <img
                alt="Neelkanth Ortho Dent logo showing a blue stylized tree with text Neelkanth below it and 'Since 1993' above"
                className="h-12 sm:h-14 pb-1"
                src="/logo.png"
              />
            </a>
            {/* Hamburger right on mobile, hidden on desktop */}
            <button
              className={`lg:hidden hamburger flex flex-col justify-center items-center space-y-1.5 w-10 h-10 ${!isSticky ? 'bg-white' : ''}`}
              onClick={toggleMobileMenu}
              style={{ order: 2 }}
            >
              <div className={`line1 w-6 h-0.5 ${!isSticky ? 'bg-black' : 'bg-white'} ${isMobileMenuOpen ? 'open' : ''}`}></div>
              <div className={`line2 w-6 h-0.5 ${!isSticky ? 'bg-black' : 'bg-white'} ${isMobileMenuOpen ? 'open' : ''}`}></div>
              <div className={`line3 w-6 h-0.5 ${!isSticky ? 'bg-black' : 'bg-white'} ${isMobileMenuOpen ? 'open' : ''}`}></div>
            </button>
          </div>
          <div className="flex ml-14 justify-start lg:justify-end">
            <ul
              className={`flex flex-col lg:flex-row lg:space-x-12 xl:space-x-16 text-base font-semibold w-full lg:w-auto lg:justify-center lg:items-center ${
                isMobileMenuOpen ? 'flex text-white' : 'hidden lg:flex' 
              } mt-0 lg:mt-0 bg-white lg:bg-transparent absolute lg:static top-full left-0 lg:transform-none ${
                isSticky ? 'bg-white' : ''
              } lg:flex-row`}>
              {/* ...existing code... */}
              <li className="w-full lg:w-auto flex  justify-start lg:flex-row">
                <a
                  className={`block px-4 py-2 sm:p-0 relative sm:border-b-2 sm:pb-1 transition-all duration-500 text-black`}
                  href="/"
                  style={{ color: 'black' }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </a>
              </li>
              <li className="w-full lg:w-auto flex lg:flex-row">
                <a
                  className={`block px-4 py-2 sm:p-0 relative transition-all duration-500 text-black`}
                  href="/about"
                  style={{ color: 'black' }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About Us
                </a>
              </li>
              <li
                className="relative w-full lg:w-auto"
                onMouseEnter={handleDropdownEnter}
                onMouseLeave={handleDropdownLeave}
              >
                <a
                  className={`block px-4 py-2 sm:p-0 relative transition-all duration-500 cursor-pointer text-black`}
                  href="#"
                  style={{ color: 'black' }}
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  Product
                </a>
                <div
                  className={`absolute sm:left-1/2 sm:-translate-x-1/2 sm:top-full left-0 w-full sm:min-w-[280px] bg-white text-[#23286b] sm:rounded-xl sm:shadow-2xl transition-all duration-300 ease-out z-50 sm:mt-2 sm:drop-shadow-lg ${
                    dropdownOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                  }`}
                  style={{
                    boxShadow: isSticky
                      ? '0 12px 32px 0 rgba(31,38,135,0.18), 0 2px 8px 0 rgba(0,0,0,0.10)'
                      : 'none',
                  }}
                >
                  <style>{`
                    .animate-dropdown {
                      animation: dropdownSlide 0.5s cubic-bezier(0.4,0,0.2,1);
                    }
                    @keyframes dropdownSlide {
                      0% { opacity: 0; transform: translateY(-20px) scaleY(0.95); }
                      100% { opacity: 1; transform: translateY(0) scaleY(1); }
                    }
                    .custom-scrollbar::-webkit-scrollbar {
                      width: 6px;
                      background: transparent;
                    }
                    .custom-scrollbar::-webkit-scrollbar-track {
                      background: #f1f5f9;
                      border-radius: 10px;
                      margin: 8px 0;
                    }
                    .custom-scrollbar::-webkit-scrollbar-thumb {
                      background: linear-gradient(135deg, #3b82f6, #8b5cf6);
                      border-radius: 10px;
                      border: 1px solid #e2e8f0;
                    }
                    .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                      background: linear-gradient(135deg, #2563eb, #7c3aed);
                    }
                    .custom-scrollbar {
                      scrollbar-width: thin;
                      scrollbar-color: #3b82f6 #f1f5f9;
                    }
                    .dropdown-item {
                      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                      transform: translateX(0);
                    }
                    .dropdown-item:hover {
                      transform: translateX(8px);
                      background: linear-gradient(135deg, #23286b, #3b82f6);
                      box-shadow: 0 4px 12px rgba(35, 40, 107, 0.2);
                    }
                    .dropdown-item:nth-child(1) { animation-delay: 0.05s; }
                    .dropdown-item:nth-child(2) { animation-delay: 0.1s; }
                    .dropdown-item:nth-child(3) { animation-delay: 0.15s; }
                    .dropdown-item:nth-child(4) { animation-delay: 0.2s; }
                    .dropdown-item:nth-child(5) { animation-delay: 0.25s; }
                    .dropdown-item:nth-child(6) { animation-delay: 0.3s; }
                    .dropdown-item:nth-child(7) { animation-delay: 0.35s; }
                    .dropdown-item:nth-child(8) { animation-delay: 0.4s; }
                    .dropdown-item:nth-child(9) { animation-delay: 0.45s; }
                    .dropdown-item:nth-child(10) { animation-delay: 0.5s; }
                    .dropdown-item:nth-child(11) { animation-delay: 0.55s; }
                    .dropdown-item:nth-child(12) { animation-delay: 0.6s; }
                    @keyframes slideInLeft {
                      0% { opacity: 0; transform: translateX(-20px); }
                      100% { opacity: 1; transform: translateX(0); }
                    }
                    .animate-slide-in {
                      animation: slideInLeft 0.4s cubic-bezier(0.4,0,0.2,1) forwards;
                    }
                  `}</style>

                  <ul className="flex flex-col py-2 max-h-[300px] overflow-y-auto custom-scrollbar">
                    {[
                      { name: 'National Flags', slug: 'national-flags' },
                      { name: 'Military Flags', slug: 'military-flags' },
                      { name: 'Army Cap', slug: 'army-cap' },
                      { name: 'Military Badges', slug: 'military-badges' },
                      { name: 'Flag Stand', slug: 'flag-stand' },
                      { name: 'Ncc Uniform', slug: 'ncc-uniform' },
                      { name: 'Blazer Fabric', slug: 'blazer-fabric' },
                      { name: 'Plastic Crates', slug: 'plastic-crates' },
                      { name: 'Sash', slug: 'sash' },
                      { name: 'Cane Sticks', slug: 'cane-sticks' },
                      { name: 'Shamiyana Tent', slug: 'shamiyana-tent' },
                      { name: 'Indian Table Flag', slug: 'indian-table-flag' },
                    ].map((service, idx) => (
                      <li
                        key={service.slug}
                        className={`dropdown-item px-6 py-3 hover:bg-[#23286b] hover:text-white cursor-pointer rounded-md mx-2 ${dropdownOpen ? 'animate-slide-in' : ''}`}
                      >
                        <a
                          href={`/${service.slug}`}
                          className="flex items-center space-x-3"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <span>{service.name}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
              <li className="w-full lg:w-auto">
                <a
                  className={`block px-4 py-2 sm:p-0 relative transition-all duration-500 text-black`}
                  href="/contact"
                  style={{ color: 'black' }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  ContactUs
                </a>
              </li>
              <li className="w-full lg:w-auto lg:flex hidden"></li>
              <li className="w-full lg:w-auto flex lg:hidden px-4 py-2"></li>
            </ul>
          </div>


            {/* ...existing code... */}
          {/* Desktop WhatsApp button - right corner with gap */}
          <div className="hidden md:flex items-center justify-end w-auto md:ml-10 lg:ml-16 xl:ml-24">
            <div className="hidden md:block" style={{ minWidth: '32px' }}></div>
            <a
              href="https://wa.me/917888309215"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-6 py-3 rounded-md font-semibold shadow-lg transition-all duration-500 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-400 bg-[length:200%_200%] bg-left hover:bg-right animate-gradient"
              style={{
                backgroundImage: 'linear-gradient(90deg, #FF6F00 0%, #FFFFFF 50%, #1B5E20 100%)',
                backgroundSize: '200% 200%',
                backgroundPosition: 'left',
                boxShadow: '0 2px 8px 0 rgba(255, 111, 0, 0.2)',
                transition: 'background-position 0.5s cubic-bezier(0.4,0,0.2,1), transform 0.3s cubic-bezier(0.4,0,0.2,1)',
                color: 'black'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundPosition = 'right'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundPosition = 'left'}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <i className="fab fa-whatsapp mr-2 text-lg" style={{ color: 'black' }}></i>
              WhatsApp
            </a>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
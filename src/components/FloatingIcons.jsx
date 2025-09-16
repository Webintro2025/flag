import React from "react";
import { FaWhatsapp, FaDownload, FaYoutube } from "react-icons/fa";

const FloatingIcons = () => {
  return (
    <>
    
      {/* WhatsApp Icon - Right Bottom */}
      <a
        href="https://wa.me/917888309215 "
        target="_blank"
        rel="noopener noreferrer"
        className="fixed z-50 right-4 bottom-4 sm:right-6 sm:bottom-6 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 transition-all duration-300"
        aria-label="WhatsApp"
      >
        <FaWhatsapp className="text-3xl sm:text-4xl" />
      </a>
      
    </>
  );
};

export default FloatingIcons;

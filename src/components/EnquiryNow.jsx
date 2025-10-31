"use client";
import React from 'react';

export default function EnquiryNow({ className = '' }) {
  const handleClick = (e) => {
    e.preventDefault();
    try {
      const el = document.getElementById('get-in-touch');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        // focus the first input inside the contact form after scrolling
        setTimeout(() => {
          const input = el.querySelector('input[name="fullName"], input, textarea');
          if (input && typeof input.focus === 'function') input.focus();
        }, 450);
      } else {
        // fallback: jump to top of page
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } catch (err) {
      console.warn('Scroll to contact failed', err);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`mt-3 inline-block bg-orange-400 text-black font-semibold px-3 py-2 rounded-full hover:bg-orange-500 transition ${className}`}
      aria-label="Enquire about this product - open contact form"
    >
      Enquire
    </button>
  );
}

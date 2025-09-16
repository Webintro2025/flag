"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
   { src: '/Army Embroidered Flags.png', title: 'Army Embroidered Flags' },
  { src: '/Big Brass Military Badges.png', title: 'Big Brass Military Badges' },
  { src: '/Black Army Net Cap.png', title: 'Black Army Net Cap' },
  { src: '/Black Nylon Army Cap.png', title: 'Black Nylon Army Cap' },
  { src: '/Brass T Rode Flag Stand.png', title: 'Brass T Rode Flag Stand' },
  { src: '/Brass Table Flag.png', title: 'Brass Table Flag' },
  { src: '/Cotton Military Badges.png', title: 'Cotton Military Badges' },
  { src: '/Cotton Military Flag.png', title: 'Cotton Military Flag' },
  { src: '/Cotton Shamiyana Tent.png', title: 'Cotton Shamiyana Tent' },
  { src: '/Custom Sashes.png', title: 'Custom Sashes' },
  { src: '/Green Polyester Military Flags.png', title: 'Green Polyester Military Flags' },
  { src: '/Grey Cotton Shamiyana Tent.png', title: 'Grey Cotton Shamiyana Tent' },
  { src: '/Indian National Flag.png', title: 'Indian National Flag' },
  { src: '/Metal Military Badges.png', title: 'Metal Military Badges' },
  { src: '/Military Cane Stick.png', title: 'Military Cane Stick' },
  { src: '/Military Clothing Fabrics.png', title: 'Military Clothing Fabrics' },
  { src: '/Multicolor Conical flag.png', title: 'Multicolor Conical flag' },
  { src: '/Multicolor Polyester Army Cap.png', title: 'Multicolor Polyester Army Cap' },
  { src: '/Multicolor Polyester Military Flags.png', title: 'Multicolor Polyester Military Flags' },
  { src: '/National flag cotton.jpg', title: 'National flag cotton' },
  { src: '/national flag knitingh.jpg', title: 'national flag knitingh' },
  { src: '/National flag tericot.jpg', title: 'National flag tericot' },
  { src: '/national flag velvet.webp', title: 'national flag velvet' },
  { src: '/national silk ya satton.jpg', title: 'national silk ya satton' },
  { src: '/Navy Blue Military Badges.png', title: 'Navy Blue Military Badges' },
  { src: '/Navy Blue Military Flags.png', title: 'Navy Blue Military Flags' },
  { src: '/NCC Round Ceremonial Pagri.png', title: 'NCC Round Ceremonial Pagri' },
  { src: '/Polyester Military Flag.png', title: 'Polyester Military Flag' },
  { src: '/T Flag Stand Stainless Steel.png', title: 'T Flag Stand Stainless Steel' },
  { src: '/Table Blazer Cloth.png', title: 'Table Blazer Cloth' },
  { src: '/Unisex Nylon Army Cap.png', title: 'Unisex Nylon Army Cap' },
  { src: '/Unisex Polyester Army Cap.png', title: 'Unisex Polyester Army Cap' }
 
];

const Slides = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  // Responsive check
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => {
        if (isMobile) {
          return (prevIndex + 1) % images.length;
        } else {
          return (prevIndex + 3) % images.length;
        }
      });
    }, 4000);
    return () => clearInterval(timer);
  }, [isMobile]);

  const goToNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => {
      if (isMobile) {
        return (prevIndex + 1) % images.length;
      } else {
        return (prevIndex + 3) % images.length;
      }
    });
  };

  const goToPrevious = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => {
      if (isMobile) {
        return (prevIndex - 1 + images.length) % images.length;
      } else {
        return (prevIndex - 3 + images.length) % images.length;
      }
    });
  };

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Get current images to display
  const getCurrentImages = () => {
    const result = [];
    const count = isMobile ? 1 : 3;
    for (let i = 0; i < count; i++) {
      const imageIndex = (currentIndex + i) % images.length;
      result.push({ ...images[imageIndex], index: imageIndex });
    }
    return result;
  };

  // Animation variants
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const containerVariants = {
    hover: {
      scale: 1.01,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const currentImages = getCurrentImages();

  return (
    <div className="w-full">
      <motion.div 
        className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] bg-white overflow-hidden"
        variants={containerVariants}
        whileHover="hover"
      >
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentIndex}
            className={`absolute inset-0 w-full h-full flex gap-2 p-4 ${isMobile ? 'justify-center' : ''}`}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
          >
            {currentImages.map((image, idx) => (
              <motion.div
                key={`${image.index}-${idx}`}
                className={`relative bg-gray-50 rounded-lg overflow-hidden shadow-md ${isMobile ? 'w-full max-w-xs mx-auto' : 'flex-1'}`}
                whileHover={{ scale: 1.03, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-contain"
                />
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-2 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                >
                  <h4 className="text-sm font-medium">
                    {image.title}
                  </h4>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <motion.button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg z-10 transition-all duration-200"
          whileHover={{ scale: 1.1, x: -5 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Previous slide"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
        </motion.button>

        <motion.button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg z-10 transition-all duration-200"
          whileHover={{ scale: 1.1, x: 5 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Next slide"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 6l6 6-6 6"/>
          </svg>
        </motion.button>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
          {Array.from({ length: Math.ceil(images.length / (isMobile ? 1 : 3)) }).map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToSlide(index * (isMobile ? 1 : 3))}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                Math.floor(currentIndex / (isMobile ? 1 : 3)) === index
                  ? 'bg-blue-600 scale-125' 
                  : 'bg-white/60 hover:bg-white/80'
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`Go to slide group ${index + 1}`}
            />
          ))}
        </div>

        {/* Remove the Image Title Overlay since titles are now on individual images */}
      </motion.div>

      {/* Thumbnail Navigation */}
  <div className="flex justify-center mt-6 space-x-2 overflow-x-auto pb-2 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {images.map((image, index) => (
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
            className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
              index === currentIndex 
                ? 'border-blue-600 scale-110' 
                : 'border-gray-300 hover:border-blue-400'
            }`}
            whileHover={{ scale: index === currentIndex ? 1.1 : 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default Slides;

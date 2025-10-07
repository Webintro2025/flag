"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const galleryImages = [
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

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showAll, setShowAll] = useState(false);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: -60,
      scale: 0.8
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      y: -10,
      scale: 1.05,
      rotateY: 5,
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.4)",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const filterVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2
      }
    }
  };

  const overlayVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const modalVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8,
      y: 50
    },
    visible: { 
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
  <section className="py-16 px-2 sm:px-4 md:px-8 bg-[#2A4D35] min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gray-50">
            OUR GALLERY
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-white max-w-2xl mx-auto">
            Explore our comprehensive range of military and ceremonial products designed for quality, durability, and aesthetic appeal. 
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {(showAll ? galleryImages : galleryImages.slice(0, 16)).map((image, index) => (
            <motion.div
              key={`${image.src}-${index}`}
              className="relative group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 w-full"
              variants={itemVariants}
              whileHover="hover"
              onClick={() => setSelectedImage(image)}
            >
              {/* Image Container */}
              <div className="relative w-full h-[180px] sm:h-[220px] md:h-[260px] lg:h-[300px] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  variants={overlayVariants}
                  initial="hidden"
                  whileHover="visible"
                />
              </div>

              {/* Content */}
              <div className="p-3 sm:p-4 md:p-6">
                <h3 className="text-xs sm:text-sm md:text-base lg:text-xl font-bold text-gray-800 text-center group-hover:text-blue-600 transition-colors duration-300">
                  {image.title}
                </h3>
              </div>

              {/* Hover Effect Icon */}
              <motion.div 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                  <i className="fas fa-search-plus text-blue-600 text-base sm:text-lg"></i>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* More Products Button */}
        {!showAll && galleryImages.length > 15 && (
          <div className="flex justify-center mt-8">
            <button
              className="px-6 py-3 bg-white text-[#23286b] font-bold rounded-full shadow-lg hover:scale-105 transition-transform duration-300 border border-gray-300"
              onClick={() => setShowAll(true)}
            >
              More Products
            </button>
          </div>
        )}

        {/* Modal for Image Preview */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  <img
                    src={selectedImage.src}
                    alt={selectedImage.title}
                    className="w-full h-64 md:h-80 object-cover"
                  />
                  <button
                    className="absolute top-4 right-4 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-colors"
                    onClick={() => setSelectedImage(null)}
                  >
                    <i className="fas fa-times text-gray-600"></i>
                  </button>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3 text-center">
                    {selectedImage.title}
                  </h3>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;

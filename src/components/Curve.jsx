"use client";
import React from 'react';
import { motion } from 'framer-motion';

const Curve = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: -50 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      y: -10,
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const iconVariants = {
    hover: {
      scale: 1.2,
      rotate: 360,
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    }
  };

  return (
  <div className="relative bg-white">
      <div className="flex flex-col md:flex-row items-center justify-center min-h-screen">
        {/* Left side with curved right border */}
        <div
          className="relative w-full md:w-1/2 flex flex-col justify-center rounded-r-full items-center text-center px-4 sm:px-6 py-8 sm:py-12 md:py-24"
          style={{
            background: 'linear-gradient(90deg, #FF9800 0%, #FFFFFF 50%, #1B5E20 100%)',
          }}
        >
          <motion.div 
            className="max-w-md space-y-8 sm:space-y-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* DEEP FREEZER */}
            <motion.div 
              className="flex items-center space-x-6"
              variants={itemVariants}
              whileHover="hover"
            >
              <div>
                <h3 className="text-black font-semibold text-base sm:text-lg leading-6">
                  National Flags
                </h3>
                    <p className="text-black text-xs sm:text-sm leading-6 max-w-xs mx-auto mt-2">
                      High-quality national flags made from premium fabrics, featuring vibrant colors and precise stitching. Perfect for official ceremonies, government offices, schools, and patriotic events.
                </p>
              </div>
              <motion.div 
                className="flex-shrink-0 rounded-full bg-[#1B5E20] w-20 h-20 items-center justify-center xs:flex sm:flex md:flex"
                variants={iconVariants}
                whileHover="hover"
              >
                <i className="fas fa-snowflake text-black text-2xl"></i>
              </motion.div>
            </motion.div>
            {/* AUTOCLAVE (STEAM STERILIZER) */}
            <motion.div 
              className="flex items-center space-x-6"
              variants={itemVariants}
              whileHover="hover"
            >
              <div>
                <h3 className="text-black font-semibold text-base sm:text-lg leading-6">
                  Military Flags
                </h3>
                    <p className="text-black text-xs sm:text-sm leading-6 max-w-xs mx-auto mt-2">
                      Durable military flags designed for regiments, battalions, and ceremonial use. Resistant to weather and wear, these flags uphold tradition and honor in every display.
                </p>
              </div>
              <motion.div 
                className="flex-shrink-0 rounded-full bg-[#1B5E20] w-20 h-20 items-center justify-center xs:flex sm:flex md:flex"
                variants={iconVariants}
                whileHover="hover"
              >
                <i className="fas fa-fire text-black text-2xl"></i>
              </motion.div>
            </motion.div>
            {/* BIO-SAFETY CABINET */}
            <motion.div 
              className="flex items-center space-x-6"
              variants={itemVariants}
              whileHover="hover"
            >
              <div>
                <h3 className="text-black font-semibold text-base sm:text-lg leading-6">
                  Army Cap
                </h3>
                    <p className="text-black text-xs sm:text-sm leading-6 max-w-xs mx-auto mt-2">
                      Comfortable and stylish army caps crafted for both formal and field use. Features include adjustable sizing, robust stitching, and authentic military design.
                </p>
              </div>
              <motion.div 
                className="flex-shrink-0 rounded-full bg-[#1B5E20] w-20 h-20 items-center justify-center xs:flex sm:flex md:flex"
                variants={iconVariants}
                whileHover="hover"
              >
                <i className="fas fa-shield-alt text-black text-2xl"></i>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
        {/* Center image */}
        <motion.div 
          className="relative w-full md:w-auto -mx-20 md:mx-0 z-10 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          whileHover={{ 
            scale: 1.1,
            rotate: 15,
            rotateY: 15,
            rotateX: 10,
            transition: { duration: 0.4 }
          }}
        >
          <img
            alt="Medical equipment and hospital furniture"
            className="object-contain"
            height={500}
            src="/National flag tericot.jpg"
            width={600}
          />
        </motion.div>
        {/* Right side with curved left border */}
        <div
          className="relative w-full rounded-l-full md:w-1/2 flex flex-col justify-center items-center text-center px-4 sm:px-6 py-8 sm:py-12 md:py-24"
          style={{
            background: 'linear-gradient(270deg, #FF9800 0%, #FFFFFF 50%, #1B5E20 100%)',
          }}
        >
          <motion.div 
            className="max-w-md space-y-8 sm:space-y-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* CSSD EQUIPMENTS */}
            <motion.div 
              className="flex items-center space-x-6 justify-end"
              variants={itemVariants}
              whileHover="hover"
            >
              <motion.div 
                className="flex-shrink-0 rounded-full bg-[#FF9800] w-20 h-20 items-center justify-center xs:flex sm:flex md:flex"
                variants={iconVariants}
                whileHover="hover"
              >
                <i className="fas fa-cogs text-black text-2xl"></i>
              </motion.div>
              <div className="text-left">
                <h3 className="text-black font-semibold text-base sm:text-lg leading-6">
                  Military Badges
                </h3>
                    <p className="text-black text-xs sm:text-sm leading-6 max-w-xs mx-auto mt-2">
                      Precision-crafted military badges for recognition and honor. Available in various ranks and insignias, made from high-quality metals and finishes for lasting distinction.
                </p>
              </div>
            </motion.div>
            {/* HOSPITAL FURNITURE */}
            <motion.div 
              className="flex items-center space-x-6 justify-end"
              variants={itemVariants}
              whileHover="hover"
            >
              <motion.div 
                className="flex-shrink-0 rounded-full bg-[#FF9800] w-20 h-20 items-center justify-center xs:flex sm:flex md:flex"
                variants={iconVariants}
                whileHover="hover"
              >
                <i className="fas fa-bed text-black text-2xl"></i>
              </motion.div>
              <div className="text-left">
                <h3 className="text-black font-semibold text-base sm:text-lg leading-6">
                  Flag Stand
                </h3>
                      <p className="text-black text-xs sm:text-sm leading-6 max-w-xs mx-auto mt-2">
                        Premium flag stands crafted for stability and elegance, ideal for displaying national, military, or ceremonial flags in offices, events, and parades. Durable construction ensures long-lasting performance and a professional presentation.
                </p>
              </div>
            </motion.div>
            {/* ETO STERILIZER */}
            <motion.div 
              className="flex items-center space-x-6 justify-end"
              variants={itemVariants}
              whileHover="hover"
            >
              <motion.div 
                className="flex-shrink-0 rounded-full bg-[#FF9800] w-20 h-20 items-center justify-center sm:flex"
                variants={iconVariants}
                whileHover="hover"
              >
                <i className="fas fa-atom text-black text-2xl"></i>
              </motion.div>
              <div className="text-left">
                <h3 className="text-black font-semibold text-base sm:text-lg leading-6">
                  Ncc Uniform
                </h3>
                    <p className="text-black text-xs sm:text-sm leading-6 max-w-xs mx-auto mt-2">
                      Official NCC uniforms tailored for cadets, offering comfort, durability, and a sharp appearance. Ideal for parades, drills, and ceremonial functions, meeting all regulatory standards.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
    </div>
  );
};

export default Curve;
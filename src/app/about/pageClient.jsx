"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaStethoscope, FaPhone, FaBookOpen } from "react-icons/fa";
import About from "../../components/About";
import Slides from "../../components/Slides";
import Curve from "../../components/Curve";
import Count from "../../components/Count";
import Choose from "../../components/Choose";
import WhatWeDo from "../../components/WhatWeDo";

const AboutPageClient = () => {
  const pageVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -50, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 1, ease: "easeOut", delay: 0.2 } },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.4 } },
  };

  const decorativeVariants = {
    hidden: { opacity: 0, scale: 0, rotate: -180 },
    visible: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 1.2, ease: "easeOut", delay: 0.6 } },
  };

  return (
    <motion.div className="min-h-screen bg-gray-50" variants={pageVariants} initial="hidden" animate="visible">
      {/* ===== Hero Section ===== */}
      <section className="relative bg-gradient-to-r from-orange-400 via-white to-green-700 py-20 px-4 overflow-hidden">
        {/* Decorative Background */}
       

        {/* Floating Elements */}
        <motion.div
          className="absolute top-10 left-10 w-20 h-20 bg-orange-400/30 rounded-full blur-xl"
          animate={{ y: [0, -20, 0], scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 right-20 w-16 h-16 bg-white/30 rounded-full blur-xl"
          animate={{ y: [0, 15, 0], x: [0, -10, 0], scale: [1, 0.9, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="absolute bottom-20 left-1/4 w-12 h-12 bg-green-700/30 rounded-full blur-xl"
          animate={{ y: [0, -25, 0], rotate: [0, 180, 360] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />

        {/* Heading */}
        <div className="max-w-6xl mx-auto text-center relative z-10">
         

          <motion.h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-black mb-4 sm:mb-6 leading-tight" variants={headerVariants}>
            TRIANGA ARMY <span className="text-orange-500">STORE</span>
            <br />
           
          </motion.h1>

          <motion.p
            className="text-base sm:text-xl md:text-2xl text-black max-w-4xl mx-auto leading-relaxed mb-6 sm:mb-8"
            variants={subtitleVariants}
          >
            TRIANGA ARMY STORE is a trusted name in the field of national flags, military flags, and related accessories. With years of experience and a commitment to quality, we provide top-notch products that meet the highest standards.
          </motion.p>
        </div>
      </section>

      {/* Rest Sections */}
      <motion.section variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
        <About />
      </motion.section>
      <motion.section variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
        <WhatWeDo />
      </motion.section>
      <motion.section variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="bg-white">
        <Slides />
      </motion.section>
      <motion.section variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
        <Curve />
      </motion.section>
      <motion.section variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="bg-gray-50">
        <Choose />
      </motion.section>
      <motion.section variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
        <Count />
      </motion.section>
    </motion.div>
  );
};

export default AboutPageClient;

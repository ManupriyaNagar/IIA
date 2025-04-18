"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const AboutUs = () => {
  // Animation variants for fade-in effect
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/about.png"
          alt="About Us Background"
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
          className="opacity-50"
          priority
        />
        {/* <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-green-800/80" /> */}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="flex flex-col md:flex-row items-start gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          {/* Left Section: Title */}
          <div className="md:w-1/3 text-white">
            <motion.h2 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-5xl font-extrabold mb-4 tracking-tight"
            >
              About
            </motion.h2>
            <motion.h3 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-3xl font-semibold mb-6 text-green-200"
            >
              Indraprasth Group Of Institutions
            </motion.h3>
          </div>

          {/* Right Section: Content */}
          <motion.div 
  initial={{ x: 20, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ delay: 0.4, duration: 0.5 }}
  className="md:w-2/3 bg-transparent backdrop-blur-sm p-8 rounded-xl shadow-2xl border border-green-100 text-white"
>
  <p className="text-white leading-relaxed mb-6 text-lg">
    Under the aegis of Shree Bhagwan Singh Education Society, a premier
    educational group, Indraprasth Group of Institutions was established
    with the objective of creating world-class skilled professionals. The
    group operates several esteemed organizations, including:
  </p>

  <ul className="space-y-3 mb-8">
    <li className="flex items-center text-gray-100">
      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
      Indraprasth Institute of Aeronautics
    </li>
  </ul>

  <p className="text-white leading-relaxed mb-8 text-lg">
    Indraprasth Institute of Aeronautics (IIA) is approved by the
    Director General of Civil Aviation, Ministry of Civil Aviation, Govt.
    of India, and is dedicated to imparting high-quality Aircraft
    Maintenance Engineering training to its students.
  </p>

  <motion.a
    href="#"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="inline-flex items-center px-8 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition duration-300 shadow-lg hover:shadow-xl"
  >
    Read More
    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  </motion.a>
</motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
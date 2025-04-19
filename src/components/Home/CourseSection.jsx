"use client";

import React from "react";
import { FaBook, FaGraduationCap, FaFlask, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const CourseSection = () => {
  // Animation variants for smooth fade-in and hover effects
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const scaleHover = {
    hover: { scale: 1.03, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
    <section className="py-20 bg-neutral-50">
     {/* Additional Offerings */}
        <motion.div
          className="mt-20 max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h3 className="text-3xl font-semibold text-indigo-900 text-center mb-10">
            Broaden Your Horizons
          </h3>
          <div className="relative w-full">
  {/* Horizontal line */}
  <div className="absolute top-7 left-0 w-full h-px bg-gray-300 z-0" />

  {/* Icon grid */}
  <div className="relative z-10 grid grid-cols-2 md:grid-cols-5 gap-8">
    {[
      { icon: FaBook, text: "Public Course" },
      { icon: FaGraduationCap, text: "Undergraduate Courses" },
      { icon: FaGraduationCap, text: "Master's Courses" },
      { icon: FaFlask, text: "Postgraduate Research" },
      { icon: FaEnvelope, text: "Become a Lecturer" },
    ].map((item, index) => (
      <motion.div
        key={index}
        className="flex flex-col items-center text-center group"
        whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
      >
        <div className="bg-indigo-50 rounded-full w-14 h-14 flex items-center justify-center mb-4 group-hover:bg-indigo-100 transition-colors duration-300">
          <item.icon className="text-indigo-900 text-2xl" />
        </div>
        <p className="text-neutral-600 text-sm font-medium">{item.text}</p>
      </motion.div>
    ))}
  </div>
</div>

        </motion.div>
     
    </section>
  );
};

export default CourseSection;
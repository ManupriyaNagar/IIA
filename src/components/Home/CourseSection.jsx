"use client";

import React from "react";
import { FaBook, FaGraduationCap, FaFlask, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const CourseSection = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  // Add all 5 items here
  const items = [
    { icon: FaBook, text: "Public Course" },
    { icon: FaGraduationCap, text: "Undergraduate Courses" },
    { icon: FaGraduationCap, text: "Master's Courses" },
    { icon: FaFlask, text: "Postgraduate Research" },
    { icon: FaEnvelope, text: "Become a Lecturer" },
  ];

  return (
    <section className="py-12 bg-neutral-50">
      <motion.div
        className=" max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <h3 className="text-3xl font-semibold text-blue text-center mb-10">
          Broaden Your Horizons
        </h3>

        <div className="flex justify-center items-center flex-wrap gap-4 relative z-10">
          {items.map((item, index) => (
            <React.Fragment key={index}>
              <motion.div
                className="flex flex-col items-center text-center group"
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              >
                <div className="bg-indigo-50 rounded-full w-16 h-16 flex items-center justify-center mb-2 group-hover:bg-indigo-100 transition-colors duration-300">
                  <item.icon className="text-blue text-2xl" />
                </div>
                <p className="text-neutral-600 text-sm font-medium">{item.text}</p>
              </motion.div>

              {/* Add animated line between icons (not after the last one) */}
              {index < items.length - 1 && (
                <img
                  src="/Ani.gif" // Your animated line
                  alt="Animated Line"
                  className="w-24 h-6 object-contain"
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default CourseSection;

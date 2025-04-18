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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-5xl font-bold text-neutral-800 tracking-tight">
            Aircraft Maintenance Engineering
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-neutral-500 leading-relaxed">
            Explore our specialized programs designed for excellence in aircraft maintenance.
          </p>
        </motion.div>

        {/* Stream Information */}
        <motion.div
          className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm p-10 border border-neutral-100"
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          viewport={{ once: true }}
          variants={{ ...fadeIn, ...scaleHover }}
        >
          <h3 className="text-3xl font-semibold text-neutral-800 mb-6 text-center">
            Our Programs
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-medium text-neutral-700 mb-4">Mechanical Stream</h4>
              <p className="text-neutral-600 leading-relaxed">
                Focuses on the maintenance of aircraft structures and systems, including engines and mechanical components.
              </p>
              <ul className="list-none text-neutral-600 mt-4 space-y-2">
                {["A1", "A4", "B1.1", "B1.4"].map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-medium text-neutral-700 mb-4">Avionics Stream</h4>
              <p className="text-neutral-600 leading-relaxed">
                Specializes in the maintenance of aircraft electronics and avionics systems.
              </p>
              <ul className="list-none text-neutral-600 mt-4 space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                  B2
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Additional Offerings */}
        <motion.div
          className="mt-20 max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h3 className="text-3xl font-semibold text-neutral-800 text-center mb-10">
            Broaden Your Horizons
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
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
                  <item.icon className="text-indigo-600 text-2xl" />
                </div>
                <p className="text-neutral-600 text-sm font-medium">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CourseSection;
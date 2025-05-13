"use client";

import React from "react";
import { FaPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image"; // For optimized images in Next.js
import Link from "next/link";

const features = [
  "IIAG has a big green lush campus with best in class infrastructure.",
  "The course meets ICAO requirements for working in foreign airlines/countries.",
  "Fully equipped, ventilated, and climate-controlled classrooms with advanced labs.",
  "Smart class technology for modern learning experiences.",
  "World-class training methods to enhance knowledge quickly and efficiently.",
  "Consistently strong results in DGCA examinations.",
  "Scholarships for SC/ST/OBC candidates as per government schemes.",
  "Additional skill certifications approved by NSDC (Govt. of India).",
  "Fee relaxations for children of Defence personnel and Doctors.",
  "Integrated B.Sc Degree Courses in collaboration with Govt. Universities.",
  "In-house training on HS-748 (AVRO) with fully equipped labs.",
  "Large helicopter maintenance facility (Hanger, Heliport, QC, CAMO, Paint Shop).",
];

const WhyChooseSection = () => {
  const mid = Math.ceil(features.length / 2);
  const leftFeatures = features.slice(0, mid);
  const rightFeatures = features.slice(mid);

  // Animation variants for staggered list items
  const listItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5 },
    }),
  };

  return (
    <section className="relative py-24 bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0 opacity-20">
        <motion.div
          className="absolute top-10 left-10 text-blue-200"
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 6 }}
        >
          <FaPlane size={40} />
        </motion.div>
        <motion.div
          className="absolute bottom-20 right-20 text-blue-200"
          animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 8 }}
        >
          <FaPlane size={40} />
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900">
            Why Choose IIAG Gurgaon?
          </h2>
          <p className="text-gray-600 text-lg mt-4 max-w-3xl mx-auto">
            We offer a blend of quality infrastructure, globally recognized training, and exceptional practical exposure.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* Left Feature Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white bg-opacity-90 backdrop-blur-lg rounded-3xl shadow-xl p-8 border border-blue-100 hover:shadow-2xl transition duration-300"
            role="region"
            aria-label="Left feature list"
          >
            <ul className="space-y-6">
              {leftFeatures.map((point, idx) => (
                <motion.li
                  key={idx}
                  custom={idx}
                  variants={listItemVariants}
                  initial="hidden"
                  whileInView="visible"
                  className="flex items-start gap-4 group"
                >
                  <div className="bg-blue-100 text-blue-700 p-2 rounded-full group-hover:scale-110 transition duration-200">
                    <FaPlane size={16} />
                  </div>
                  <p className="text-gray-800 text-base leading-relaxed group-hover:underline">{point}</p>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Center Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
            style={{ perspective: 1000 }}
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl w-full max-w-sm hover:scale-105 transition duration-500">
              <Image
                src="/ame.png"
                alt="IIAG Campus"
                width={400}
                height={520}
                className="w-full h-[560px] object-cover"
                loading="lazy"
                priority={false}
              />
            </div>
          </motion.div>

          {/* Right Feature Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white bg-opacity-90 backdrop-blur-lg rounded-3xl shadow-xl p-8 border border-blue-100 hover:shadow-2xl transition duration-300"
            role="region"
            aria-label="Right feature list"
          >
            <ul className="space-y-6">
              {rightFeatures.map((point, idx) => (
                <motion.li
                  key={idx}
                  custom={idx}
                  variants={listItemVariants}
                  initial="hidden"
                  whileInView="visible"
                  className="flex items-start gap-4 group"
                >
                  <div className="bg-blue-100 text-blue-700 p-2 rounded-full group-hover:scale-110 transition duration-200">
                    <FaPlane size={16} />
                  </div>
                  <p className="text-gray-800 text-base leading-relaxed group-hover:underline">{point}</p>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Learn More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link
            href="/"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Learn more about IIAG Gurgaon"
          >
            Learn More
          </Link>
        </motion.div>
      </div>

      {/* Ensure Tailwind CSS includes focus styles for accessibility */}
      <style jsx global>{`
        button:focus, a:focus {
          outline: 2px solid #2563eb;
          outline-offset: 2px;
        }
      `}</style>
    </section>
  );
};

export default WhyChooseSection;
"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const AboutUs = () => {
  // Scroll-based parallax for background
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 300], [0, -100]);

  // Staggered list animation
  const listVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2, delayChildren: 0.3 } }
  };
  const itemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 120 } }
  };

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Parallax Background */}
      <motion.div className="absolute inset-0 z-0" style={{ y: yBg }}>
        <Image
          src="/about.png"
          alt="About Us Background"
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
          className="opacity-60"
          priority
        />
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title with interactive underline */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
          className="text-center mb-12"
        >
          <h2 className="inline-block text-5xl font-extrabold mb-4 tracking-tight text-white bg-black/50 px-4 py-1 rounded-md drop-shadow-lg">
            About
            <span className="relative ml-2">
              Us
              <motion.span
                layoutId="underline"
                className="absolute left-0 right-0 bottom-0 h-1 bg-indigo-500 origin-left"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6 }}
              />
            </span>
          </h2>
          <h3 className="inline-block text-3xl font-semibold text-white bg-black/40 px-3 py-1 rounded-md">
            Indraprasth Group Of Institutions
          </h3>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delay: 0.5, duration: 0.8 } } }}
          className="md:flex md:gap-12"
        >
          {/* Left Text */}
          <motion.p
            className="md:w-1/3 text-white mb-8 md:mb-0 leading-relaxed text-lg bg-black/30 p-4 rounded-lg"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Under the aegis of Shree Bhagwan Singh Education Society, a premier
            educational group, Indraprasth Group of Institutions was established
            with the objective of creating world-class skilled professionals.
          </motion.p>

          {/* Right List & Button */}
          <motion.div
            className="md:w-2/3 bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-2xl border border-green-100 text-white"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.ul
              variants={listVariants}
              initial="hidden"
              whileInView="visible"
              className="space-y-4 mb-8"
            >
              {[
                "Indraprasth Institute of Aeronautics (IIA)",
                "Indraprasth Engineering College (IEC)",
                "Indraprasth Pharmacy Academy (IPA)",
                "Indraprasth Business School (IBS)"
              ].map((item, idx) => (
                <motion.li
                  key={idx}
                  variants={itemVariants}
                  className="flex items-center"
                >
                  <motion.span
                    className="w-3 h-3 bg-green-500 rounded-full mr-4"
                    whileHover={{ scale: 1.5, backgroundColor: "#34d399" }}
                  />
                  {item}
                </motion.li>
              ))}
            </motion.ul>

            <motion.a
              href="#"
              whileHover={{ scale: 1.1, backgroundColor: "#065f46" }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 bg-green-600 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg"
            >
              Read More
              <motion.svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </motion.svg>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;

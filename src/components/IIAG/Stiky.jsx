"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll, motion } from "motion/react";
import { cn } from "@/lib/utils";

// StickyScroll Component
const StickyScroll = ({ content, contentClassName }) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });

  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce((acc, breakpoint, index) => {
      const distance = Math.abs(latest - breakpoint);
      return distance < Math.abs(latest - cardsBreakpoints[acc]) ? index : acc;
    }, 0);
    setActiveCard(closestBreakpointIndex);
  });

  return (
    <motion.div
      animate={{ backgroundColor: "#ffffff" }}
      className="relative flex h-[40rem] justify-center space-x-30 overflow-y-auto rounded-md p-10"
      ref={ref}
    >
      <div className="relative flex items-start px-4">
        <div className="max-w-6xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                className="text-4xl font-bold text-black"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                className="text-xl mt-10 max-w-2xl text-gray-700"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-80" />
        </div>
      </div>
      <div
        className={cn(
          "sticky top-10 hidden h-80 w-100 overflow-hidden rounded-md bg-white lg:block",
          contentClassName
        )}
      >
        {content[activeCard].content ?? null}
      </div>
    </motion.div>
  );
};

// Demo Component
export const StickyScrollRevealDemo = () => {
  const content = [
    {
      title: "Chairman's Message",
      description:
        "At Indraprasth Institute of Aeronautics (IIA), we are dedicated to shaping the next generation of aviation professionals through industry-aligned, DGCA-approved programs in AME, Aeronautical, and Aerospace Engineering. With hands-on training, modern facilities, and partnerships with top aviation organizations, we ensure our students gain practical, real-world skills. Driven by innovation and excellence, we prepare students not just for careers, but for leadership in aviation. At IIA, education goes beyond the classroom—fostering curiosity, integrity, and a global perspective. Join us, where your aviation dreams take flight",
      content: (
        <img
          src="/Director.png"
          alt="Collaborative Editing"
          className="h-full w-full object-cover"
        />
      ),
    },
    {
      title: "Director's Message",
      description:
        "At IIA, we are committed to providing a world-class education. Our programs are designed to equip students with the skills and knowledge needed to excel in the aviation industry. We believe in a holistic approach to education, combining theoretical knowledge with practical experience. Our faculty members are industry experts who bring real-world insights into the classroom. We are proud of our state-of-the-art facilities and our partnerships with leading aviation organizations. Join us at IIA, where your journey towards a successful aviation career begins.",
      content: (
        <img
          src="/AMEEEAA.png"
          alt="Real time changes"
          className="h-full w-full object-cover"
        />
      ),
    },
    {
      title: "Version control",
      description:
        "At IIA, we take great pride in offering top-notch education...",
      content: (
        <img
          src="/AMEEEA.png"
          alt="Version control"
          className="h-full w-full object-cover"
        />
      ),
    },

  ];

  return (
    <div className="w-full py-4 bg-white">
      <StickyScroll content={content} />
    </div>
  );
};

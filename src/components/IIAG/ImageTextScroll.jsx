"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  { id: 1, src: "/t1.jpg", topText: "Top 1", leftText: "Left 1", rightText: "Right 1" },
  { id: 2, src: "/t2.jpg", topText: "Top 2", leftText: "Left 2", rightText: "Right 2" },
  { id: 3, src: "/t3.jpg", topText: "Top 3", leftText: "Left 3", rightText: "Right 3" },
  { id: 4, src: "/t4.jpg", topText: "Top 4", leftText: "Left 4", rightText: "Right 4" },
  { id: 5, src: "/t4.jpg", topText: "Top 5", leftText: "Left 5", rightText: "Right 5" },
];

const ImageTextScroll = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const sectionHeight = window.innerHeight;
      const index = Math.min(Math.floor(scrollY / sectionHeight), images.length - 1);
      setActiveIndex(index);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative w-full h-[500vh]">
      {/* Sticky viewport for animation */}
      <div className="sticky top-0 w-full h-screen overflow-hidden">
        {images.map((image, i) => (
          <div key={image.id} className="absolute inset-0">
            {i === activeIndex && (
              <AnimatePresence mode="wait">
                <motion.div
                  key={image.id}
                  initial={{
                    width: 50,
                    height: 50,
                    bottom: 20,
                    left: "50%",
                    x: "-50%",
                    y: 0,
                    opacity: 0.8,
                    position: "absolute",
                    borderRadius: "12px",
                  }}
                  animate={{
                    width: "100%",
                    height: "100%",
                    bottom: 0,
                    left: 0,
                    x: 0,
                    y: 0,
                    opacity: 1,
                    borderRadius: "0px",
                    position: "absolute",
                  }}
                  exit={{
                    opacity: 0,
                  }}
                  transition={{ duration: 1 }}
                  className="z-10"
                >
                  <img
                    src={image.src}
                    alt={`Image ${image.id}`}
                    className="w-full h-full object-cover absolute inset-0"
                  />
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-white text-3xl font-bold drop-shadow-lg">
                    {image.topText}
                  </div>
                  <div className="absolute left-4 bottom-1/2 transform -translate-y-1/2 text-white text-xl drop-shadow">
                    {image.leftText}
                  </div>
                  <div className="absolute right-4 bottom-1/2 transform -translate-y-1/2 text-white text-xl drop-shadow">
                    {image.rightText}
                  </div>
                </motion.div>
              </AnimatePresence>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageTextScroll;

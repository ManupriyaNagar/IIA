"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const images = [
  "/4.jpeg",
    "/16.jpeg",  
    "/18.jpeg",
    "/38.jpeg",
    "/39.jpeg",
    "/40.jpeg",
    "/42.jpeg",
    "/46.jpeg",
    "/47.jpeg",
    "/50.jpeg",
    "/63.jpeg",
    "/66.jpeg",
    "/68.jpeg",
    "/78.jpeg",
    "/79.jpeg",
    "/80.jpeg",
    "/81.jpeg",
    "/84.jpeg",
    "/85.jpeg",
    "/92.jpeg",
    "/93.jpeg",
    "/78.jpeg",
    "/96.jpeg",
    "/100.jpeg",
    "/111.jpeg",
    "/4.jpeg",
    "/16.jpeg",  
    "/18.jpeg",
    "/38.jpeg",
    "/39.jpeg",
    "/40.jpeg",
];

export default function ParallaxScrollDemo() {
  return <ParallaxScroll images={images} />;
}

function ParallaxScroll({ images }) {
  const gridRef = useRef(null);
  const { scrollYProgress } = useScroll({
    container: gridRef,
    offset: ["start start", "end start"],
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const third = Math.ceil(images.length / 3);
  const firstPart = images.slice(0, third);
  const secondPart = images.slice(third, 2 * third);
  const thirdPart = images.slice(2 * third);

  return (
    <div className="h-[40rem] overflow-y-auto w-full" ref={gridRef}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto gap-5 py-30 ">
        <div className="grid gap-10">
          {firstPart.map((img, idx) => (
            <motion.div style={{ y: translateFirst }} key={`img-1-${idx}`}>
              <img
                src={img}
                alt="thumbnail"
                className="h-80 w-full object-cover rounded-lg"
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {secondPart.map((img, idx) => (
            <motion.div style={{ y: translateSecond }} key={`img-2-${idx}`}>
              <img
                src={img}
                alt="thumbnail"
                className="h-80 w-full object-cover rounded-lg"
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {thirdPart.map((img, idx) => (
            <motion.div style={{ y: translateThird }} key={`img-3-${idx}`}>
              <img
                src={img}
                alt="thumbnail"
                className="h-90 w-full object-cover rounded-lg"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

"use client";

import { useEffect } from "react";
import { motion, stagger, useAnimate } from "motion/react";
import { cn } from "@/lib/utils";

const words = `At Indraprasth Institute of Aeronautics (IIA), we are committed to shaping the future of the aviation industry by offering top-notch academic programs designed to provide a solid foundation and practical experience. Our courses are DGCA-approved, ensuring that students receive the highest quality of education in compliance with global aviation standards.
`;

const TextGenerateEffect1 = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration,
        delay: stagger(0.2),
      }
    );
  }, [scope, animate, filter, duration]);

  return (
    <div className={cn("leading-loose", className)}>
      <h1 className="text-5xl font-bold text-center text-blue mt-12"> Overview</h1>
      <div className="mt-4 text-lg md:text-xl lg:text-2xl p-12 text-left">
      
        <motion.div ref={scope}>

          {wordsArray.map((word, idx) => (
            <motion.span
              key={word + idx}
              className="dark:text-white text-black opacity-0"
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}
            >
              {word}{" "}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default function MediaPage() {
  return (
    <div
      className="h-[60vh] w-full bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: "url('/Sequence.gif')", // Replace with your image path in public/
      }}
    >
      <TextGenerateEffect1 words={words} />
    </div>
  );
}

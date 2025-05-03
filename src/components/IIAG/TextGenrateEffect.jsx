"use client";

import { useEffect } from "react";
import { motion, stagger, useAnimate } from "motion/react";
import { cn } from "@/lib/utils";

const words = `Indraprasth Institute of Aeronautics (IIA) is a leading institution in the field of aviation and aerospace education, situated in Gurgaon, Haryana. Established with the aim of providing world-class education and hands-on training, IIA is approved by the Directorate General of Civil Aviation (DGCA), Government of India, under CAR-147 (Basic). The institute offers a range of specialized programs that prepare students for successful careers in Aircraft Maintenance Engineering (AME), Aerospace Engineering, Aeronautical Engineering, and more.
`;

const TextGenerateEffect = ({
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
      <h1 className="text-5xl font-bold text-center text-blue mt-12"> About IIAG</h1>
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
      <TextGenerateEffect words={words} />
    </div>
  );
}

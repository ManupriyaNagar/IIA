"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "Indraprasth Institute of Aeronautics, Gurgaon is the best institution for pursuing Aircraft Maintenance Engineering” and other integrated degree courses. The college has its most qualified and experienced faculty that enlighten the path of students. The college has its well-equipped labs, workshops and library. The training programs and placement facilities are excellent. Outdoor hostel are available here. Good place to learn with excellent faculties. Institution provides good education and placement assistance to very student in the college. The college provides wings to dreams of students.",
      name: "Sonakshi Priya",
      designation: "Product Manager at TechFlow",
      src: "/t1.jpg",
    },
    {
      quote:
        "The teaching staff here is well qualified. IIAG One of the most important things is that instead of being a private college it has a lot of reputation among students because of the quality of education and infrastructure they are providing to the students who are studying here. The hostel facilities is also available here.",
      name: "Michael Rodriguez",
      designation: "CTO at InnovateSphere",
      src: "/t2.jpg",
    },
    {
      quote:
        "IIAG is best college. Infrastructure is the best. All  facilities are provide in by institute ... Alumni network  is so big and strong. Culture inside the campus is great. I'm proud to be a part of such wonderful family.",
      name: "Abhishek singh",
      designation: "Operations Director at CloudScale",
      src: "/t3.jpg",
    },
    {
      quote:
        "No 1 AME college. Major feature are discipline, study , result oriented and mostly placement.Nice faculty. Great support for clear modules exam. when we talk for quality and job . Indraprasth Institute Of Aeronautics is best for everything.",
      name: "Viplav Kumar",
      designation: "Engineering Lead at DataPro",
      src: "/t4.jpg",
    },
    {
      quote:
        "If you want to become an Aircraft Maintenance Engineer, IIAG is the perfect place for you. This college has given me a lot of confidence, a lot of friends and a lot of good memories. The faculty, the management, the infrastructure everything is commendable.",
      name: "Lakshmi Narayan",
      designation: "VP of Technology at FutureNet",
      src: "/t5.jpg",
    },
  ];

  return <AnimatedTestimonials testimonials={testimonials} autoplay />;
}

function AnimatedTestimonials({ testimonials = [], autoplay = false }) {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index) => index === active;

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const randomRotateY = () => Math.floor(Math.random() * 21) - 10;

  if (!Array.isArray(testimonials) || testimonials.length === 0) {
    return (
      <div className="py-20 text-center text-gray-500">
        No testimonials available.
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-lg px-4 py-20 font-sans antialiased md:max-w-5xl md:px-8 lg:px-12">
       <h1 className="text-5xl mb-8 text-center">Testimonials</h1>
      <div className="relative grid grid-cols-1 gap-20 md:grid-cols-2">
        {/* Image Section */}
       
        <div>
     
          <div className="relative h-80 w-full">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.src}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotateY(),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    zIndex: isActive(index)
                      ? 40
                      : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotateY(),
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom"
                >
                  <img
                    src={testimonial.src}
                    alt={testimonial.name}
                    width={500}
                    height={500}
                    draggable={false}
                    className="h-full w-full rounded-3xl object-cover object-center"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Text Section */}
        <div className="flex flex-col justify-between py-4">
          <motion.div
            key={active}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            {/* <h3 className="text-2xl font-bold text-black dark:text-white">
              {testimonials[active]?.name || "Anonymous"}
            </h3> */}
            {/* <p className="text-sm text-gray-500 dark:text-neutral-500">
              {testimonials[active]?.designation || ""}
            </p> */}
            <motion.p className="mt-8 text-lg text-gray-500 dark:text-neutral-300">
              {(testimonials[active]?.quote || "")
                .split(" ")
                .map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{ filter: "blur(10px)", opacity: 0, y: 5 }}
                    animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.2,
                      ease: "easeInOut",
                      delay: 0.02 * index,
                    }}
                    className="inline-block"
                  >
                    {word}&nbsp;
                  </motion.span>
                ))}
            </motion.p>
          </motion.div>

          {/* Navigation Buttons */}
          <div className="flex gap-4 pt-12 md:pt-0">
            <button
              onClick={handlePrev}
              className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800"
            >
              <IconArrowLeft className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:rotate-12 dark:text-neutral-400" />
            </button>
            <button
              onClick={handleNext}
              className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800"
            >
              <IconArrowRight className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:-rotate-12 dark:text-neutral-400" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

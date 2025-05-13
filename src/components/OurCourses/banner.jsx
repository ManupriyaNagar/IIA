'use client';

import Image from 'next/image';
import React from 'react';

const Banner = () => {
  return (
    <section className="relative h-[60vh] w-full flex items-center justify-center">
      {/* Background Image */}
      <Image
        src="/banner.jpg" // replace with your image path
        alt="AMEEE Banner Background"
        fill
        className="object-cover"
        priority
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Heading */}
      <h1 className="relative z-20 text-white text-4xl md:text-6xl font-bold text-center">
        Our Courses
      </h1>
    </section>
  );
};

export default Banner;

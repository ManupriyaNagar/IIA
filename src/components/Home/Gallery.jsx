"use client";

import Image from "next/image";
import React from "react";

const images = [
  "/16.jpeg",
  "/68.jpeg",
  "/81.jpeg",
  "/92.jpeg",
  "/50.jpeg",
  "/94.jpeg",
  "/96.jpeg",
  "/c14.png",
  "/47.jpeg",
];

const Gallery = () => {
  return (
    <div className="bg-white text-black p-4">
      <h1 className="text-center text-4xl font-bold py-8">Campus Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((src, idx) => (
          <div
            key={idx}
            className={`relative group overflow-hidden ${
              idx === 1 || idx === 6 ? "row-span-2" : ""
            } ${idx === 7 ? "col-span-2" : ""}`}
          >
            <Image
  src={src}
  alt={`Campus image ${idx + 1}`}
  width={500}
  height={500}
  className={`w-full object-cover ${
    idx === 7 ? "h-64 md:h-96" : "h-full"
  }`}
/>

            <div className="absolute top-0 left-0 w-full h-0 group-hover:h-full bg-gradient-to-b from-orange-500 to-pink-500 opacity-50 transition-all duration-[1000ms] ease-in-out pointer-events-none"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;

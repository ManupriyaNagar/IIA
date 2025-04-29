"use client";

import Image from "next/image";
import React from "react";

const Gallery = () => {
  return (
    <div className="bg-white text-black p-4">
        <h1 className="text-center text-4xl py-8">Campus Gallery</h1>
      <div className="grid grid-cols-4 gap-4">
        {Array.from({ length: 9 }).map((_, idx) => (
          <div
            key={idx}
            className={`relative group overflow-hidden ${
              idx === 1 || idx === 6 ? "row-span-2" : ""
            } ${idx === 7 ? "col-span-2" : ""}`}
          >
            <img src="/16.jpeg" alt="" className="h-full w-full object-cover" />
            <div
              className="absolute top-0 left-0 w-full h-0 group-hover:h-full bg-gradient-to-b from-orange-500 to-pink-500 opacity-50 transition-all duration-[1000ms] ease-in-out pointer-events-none"
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;

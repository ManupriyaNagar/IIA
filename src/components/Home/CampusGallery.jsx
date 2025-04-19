"use client";

import React from "react";

const CampusGallery = () => {
  const images = [
    "/c1.png",
    "/c8.png",
    "/c5.png",
    "/c6.png",
    "/c4.png",
    "/c3.png",
    "/c2.png",
    "/c7.png",
    "/c9.png",
    "/c10.png",
    "/c11.png",
    "/c12.png",
    "/c13.png",
    "/c14.png",
    "/c17.png",
    "/c16.png",
  ];

  return (
    <div className="py-10 bg-gray-100">
      <h2 className="text-3xl font-bold text-indigo-800 text-center mb-8">Campus Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
        {images.map((src, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
            <img src={src} alt={`Campus ${index + 1}`} className="w-full h-48 object-cover" />
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default CampusGallery;
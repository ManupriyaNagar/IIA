"use client";

import React from "react";

const CampusGallery = () => {
  const images = [
    "/next.png",
    "/next.png",
    "/next.png",
    "/next.png",
  ];

  return (
    <div className="py-10 bg-gray-100">
      <h2 className="text-3xl font-bold text-green-800 text-center mb-8">Campus Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
        {images.map((src, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
            <img src={src} alt={`Campus ${index + 1}`} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">Campus {index + 1}</h3>
              <p className="text-gray-600 text-sm">Beautiful view of our campus</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CampusGallery;
"use client";

import React from "react";

const CampusGallery = () => {
  const images = [
    "/68.jpeg",
    "/79.jpeg",
    "/81.jpeg",
    "/84.jpeg",
   
    "/93.jpeg",
    "/94.jpeg",
    "/85.jpeg",
    "/100.jpeg",
    "/111.jpeg",
    "/B1-4.png",
      "/63.jpeg",
        "/78.jpeg",
          "/66.jpeg",
    "/96.jpeg", 
     "/94.jpeg",
     "/93.jpeg",
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
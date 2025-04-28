"use client";

import React from "react";

const Card = () => {
  // Array of different data for each card
  const cardData = [
    {
      title: "WEB DEVELOPMENT",
      code: "HTML",
      image: "/images/web.png",
    },
    {
      title: "APP DEVELOPMENT",
      code: "FLUTTER",
      image: "/images/app.png",
    },
    {
      title: "GAME DESIGN",
      code: "UNITY",
      image: "/images/game.png",
    },
    {
      title: "DATA SCIENCE",
      code: "PYTHON",
      image: "/images/data.png",
    },
    {
      title: "CYBER SECURITY",
      code: "ETHICAL",
      image: "/images/security.png",
    },
  ];

  return (
    <div className="flex flex-wrap gap-6 justify-center items-center min-h-screen bg-white p-10">
      {cardData.map((item, index) => (
        <div
          key={index}
          className="relative group rounded-full border-2 border-dotted border-gray-500 p-6 flex flex-col md:flex-row items-center gap-4 w-64 h-40 md:w-80 md:h-32 overflow-hidden"
        >
          {/* Animated Border */}
          <span className="absolute inset-0 rounded-full border-2 border-red-500 animate-spin-slow pointer-events-none"></span>

          {/* Inner Content */}
          <div className="w-16 h-16 bg-black rounded-full overflow-hidden">
            <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-bold text-lg">{item.title}</h3>
            <button className="mt-2 px-4 py-1 text-sm border-2 border-dotted border-gray-500 rounded-full">
              {item.code}
            </button>
          </div>
        </div>
      ))}

      {/* Custom Animation */}
      <style jsx>{`
        @keyframes spin-slow {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Card;

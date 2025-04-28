"use client";

import React from "react";

const Card = () => {
  const cardData = [
    {
      title: "Maintenance Certifying Technician (Mechanical)",
      code: "B1-1",
      image: "/B1-1.png",
    },
    {
      title: "Maintenance Certifying Technician (Mechanical)",
      code: "B1-4",
      image: "/B1-4.png",
    },
    {
      title: "Maintenance Certifying Mechanic (Aeroplanes Turbine)",
      code: "A1",
      image: "/A1.png",
    },
    {
      title: "Maintenance Certifying Mechanic (Helicopters Piston)",
      code: "A4",
      image: "/A4.png",
    },
    {
      title: "Maintenance Certifying Technician (Avionics)",
      code: "B2",
      image: "/B2.png",
    },
  ];

  return (
    <div className="flex justify-center items-start min-h-screen bg-black text-white py-10 gap-8">
      
      {/* Left Section (4 cards) */}
      <div className="grid grid-cols-2 gap-6">
        {cardData.slice(0, 4).map((item, index) => (
          <div
            key={index}
            className="relative group w-64 h-40 md:w-80 md:h-32 p-[2px] rounded-full overflow-hidden"
          >
            {/* Dotted Border */}
            <div className="absolute inset-0 rounded-full border-2 border-dotted border-gray-500 z-10"></div>

            {/* Moving Trail */}
            <div className="absolute inset-0 rounded-full z-20 pointer-events-none">
              <div className="w-full h-full relative overflow-visible">
                <div className="absolute w-1/5 h-[10px] bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 rounded-full shadow-[0_0_10px_4px_rgba(255,0,255,0.6)] animate-moveTrail"></div>
              </div>
            </div>

            {/* Inner Card Content */}
            <div className="relative z-30 bg-white text-black rounded-full flex flex-col md:flex-row items-center gap-4 w-full h-full p-4">
              <div className="w-16 h-16 bg-black rounded-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col items-center md:items-start">
                <h3 className="font-bold text-sm md:text-base text-center md:text-left">
                  {item.title}
                </h3>
                <button className="mt-2 px-4 py-1 text-xs border-2 border-dotted border-gray-500 rounded-full">
                  {item.code}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Right Section (Vertical Special Card) */}
      <div className="flex flex-col">
        <div className="relative group w-40 h-[300px] p-[2px] rounded-full overflow-hidden">
          {/* Dotted Border */}
          <div className="absolute inset-0 rounded-full border-2 border-dotted border-gray-500 z-10"></div>

          {/* Moving Trail */}
          <div className="absolute inset-0 rounded-full z-20 pointer-events-none">
            <div className="w-full h-full relative overflow-visible">
              <div className="absolute w-1/5 h-[10px] bg-gradient-to-r from-pink-500 via-orange-400 to-pink-500 rounded-full shadow-[0_0_10px_4px_rgba(255,0,255,0.6)] animate-moveTrail"></div>
            </div>
          </div>

          {/* Inner Card Content */}
          <div className="relative z-30 bg-white text-black rounded-full flex flex-col justify-between items-center w-full h-full p-4">
            <div className="w-24 h-24 bg-black rounded-full overflow-hidden mt-4">
              <img
                src={cardData[4].image}
                alt={cardData[4].title}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-bold text-base text-center">
              {cardData[4].title}
            </h3>
            <button className="px-4 py-1 text-xs border-2 border-dotted border-gray-500 rounded-full mt-4">
              {cardData[4].code}
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes moveTrail {
          0% {
            transform: rotate(0deg) translateX(135px) rotate(0deg);
          }
          100% {
            transform: rotate(360deg) translateX(135px) rotate(-360deg);
          }
        }
        .animate-moveTrail {
          animation: moveTrail 30s linear infinite;  /* Continuous slower rotation */
          transform-origin: center center;
        }
      `}</style>

    </div>
  );
};

export default Card;

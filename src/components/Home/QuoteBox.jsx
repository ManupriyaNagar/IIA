"use client";

import React from "react";

const QuoteBox = () => {
  return (
    <section className="p-6 sm:p-8 md:p-16 bg-white text-black">
      <div className="border-b-2 border-t-2 border-r-2 border-dotted border-gray-900 w-full rounded-r-3xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center p-4 sm:p-6 md:p-8">
          {/* Left Box */}
          <div className="border-2 border-blue rounded-2xl p-4 sm:p-6 md:p-8">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 text-center md:text-left">
              OUR MISSION OUR VISION
            </h3>
            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed text-justify">
              Providing global employers and society with skilled manpower that is a fundamental
              requirement for economic success and contribution to the community.
            </p>
            <div className="mt-6 flex justify-center md:justify-start">
              <button className="bg-gradient-to-r from-orange to-pink text-white font-semibold py-2 px-6 rounded-full shadow-lg hover:from-pink hover:to-orange transition-all duration-300">
                Apply Now
              </button>
            </div>
          </div>

          {/* Right Quotes */}
          <div className="relative px-2 sm:px-4">
            {/* Opening quote */}
            <div className="text-[60px] sm:text-[80px] font-black leading-none text-black absolute -top-4 sm:-top-8 -left-2 sm:-left-6">“</div>

            <div className="pl-8 pr-2 sm:pl-10 sm:pr-4 pt-8 sm:pt-0">
              <p className="text-base sm:text-lg md:text-2xl font-bold text-black leading-snug mb-4 text-center md:text-left">
                Our commitment is to serve you worldwide
              </p>
              <div className="border-t-4 border-dashed border-red-500 w-full mb-4" />
              <p className="text-base sm:text-lg md:text-xl font-bold text-black leading-snug text-center md:text-left">
                Empowering knowledge through vision
              </p>
            </div>

            {/* Closing quote */}
            <div className="text-[60px] sm:text-[80px] font-black leading-none text-black absolute -bottom-6 sm:-bottom-8 right-0">”</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteBox;

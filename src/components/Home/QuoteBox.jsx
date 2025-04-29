"use client";

import React from "react";

const QuoteBox = () => {
  return (
    <section className="p-8 md:p-16 max-w-7xl mx-auto bg-white text-black">
            <div className="border-b-2 border-t-2 border-r-2 border-dotted border-gray-900 w-full rounded-r-3xl">
      <div className="grid md:grid-cols-2 gap-12 items-center p-8">
        {/* Left Box */}
        <div className="border-2 border-blue rounded-2xl p-6 md:p-8">
          <h3 className="text-xl md:text-2xl font-bold mb-4">OUR MISSION OUR VISSION</h3>
          <p className="text-sm md:text-base text-neutral-700 leading-relaxed">
          Providing global employers and society with skilled manpower that is a fundamental
          requirement for economic success and contribution to the community.
          </p>
          {/* Placeholder buttons */}
          <div className="mt-8 flex gap-4">
            <button  className="inline-block mt-3 bg-gradient-to-r  from-orange to-pink  text-white font-semibold py-2 px-6 rounded-full shadow-lg hover:from-pink hover:to-orange transition-all duration-300"> Apply Now</button>
            <button
  className="inline-block mt-3 text-white font-semibold py-2 px-6 rounded-full shadow-lg
             bg-gradient-to-r from-orange-400 via-pink-500 to-orange-400 
             bg-[length:200%_200%] animate-gradient-x transition-all duration-300">
  Student Placement Record
</button>

          </div>
        </div>

        {/* Right Quotes */}
        <div className="relative">
          {/* Opening quote */}
          <div className="text-[80px] font-black leading-none text-black absolute -top-8 -left-6">“</div>

          {/* Quote lines */}
          <div className="pl-10">
            <p className="text-lg md:text-xl font-bold text-black leading-snug mb-4">
            Our commitment is to serve you worldwide
            </p>
            <div className="border-t-4 border-dashed border-red-500 w-90 mb-4" />
            <p className="text-lg md:text-xl font-bold text-black leading-snug">
            Empowering knowledge through vision
            </p>
          </div>

          {/* Closing quote */}
          <div className="text-[80px] font-black leading-none text-black absolute -bottom-8 right-0">”</div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default QuoteBox;

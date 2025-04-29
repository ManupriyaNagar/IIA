"use client";

import React from "react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const AboutUs = () => {
  return (
    <div className=" space-y-8 py-12 bg-white text-black px-14 max-w-7xl">
      <div className="border-b-2 border-t-2 border-l-2 ml-9 border-dotted border-gray-900 w-full rounded-l-3xl">
        {/* First Part: Heading and Paragraph */}
        <div className="flex justify-between items-center py-10 bg-blue border rounded-3xl text-white m-8 mr-8">
          {/* Dotted Border at Top, Right, and Bottom */}
          <div className="w-1/3">
            <h2 className="text-3xl font-semibold ml-10">ABOUT US</h2>
          </div>
          <div className="flex-1 max-w-3xl  relative">
        <DotLottieReact
      src="/https://lottie.host/3e03e774-2395-4128-8ba3-e8a7fad3acbc/2azeNAW5Ah.lottie"
      loop
      autoplay
    />


        </div>
          <div className="w-2/3">
            <p className="text-xl mr-7 ">
              Under the aegis of Shree Bhagwan Singh Education Society, a premier
              educational group, Indraprastha Group of Institutions was established
              with the objective of creating world-class skilled professionals.
            </p>
          </div>
        </div>

        {/* Second Part: Image and Paragraph */}
        <div className="flex justify-between items-center m-8">
          <div className="w-1/3">
            <img
              src="/IIA-About-Us.png" // Replace with your image URL
              alt="Placeholder"
              className="w-full h-auto"
            />
          </div>
          <div className="w-2/3">
            <p className="text-sm mr-18 text-justify">
              Indraprastha Institute of Aeronautics (IIA) is a premier aviation training
              institute, approved by the Directorate General of Civil Aviation (DGCA). With
              cutting-edge facilities, IIA offers comprehensive training programs in Aircraft
              Maintenance Engineering (AME) designed to equip students with hands-on experience
              using real, licensed aircraft. Our focus is on producing industry-ready
              professionals with a 99% placement record. Through practical labs, expert faculty,
              and a commitment to excellence, IIA shapes the future of aviation careers, ensuring
              every graduate is fully prepared to meet the demands of the rapidly evolving
              aviation sector.
            </p>
          </div>
        </div>
      </div>
    </div>
 
  );
};

export default AboutUs;

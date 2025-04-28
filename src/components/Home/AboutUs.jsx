"use client";

import React from "react";

const AboutUs = () => {
  return (
    <div className="space-y-8 py-12 bg-white text-black">
      <div className="border-b-2 border-t-2 border-l-2 ml-2 border-rounded  border-dotted border-gray-900 w-full">
      {/* First Part: Heading and Paragraph */}
      <div className="flex justify-between items-center py-10">
        {/* Dotted Border at Top, Right, and Bottom */}
        

        <div className="w-1/3">
          <h2 className="text-xl font-semibold ml-10">ABOUT US</h2>
        </div>
        <div className="w-2/3">
          <p className="text-lg">
            Under the aegis of Shree Bhagwan Singh Education Society, a premier
            educational group, Indraprastha Group of Institutions was established
            with the objective of creating world-class skilled professionals.
          </p>
        </div>
      </div>

      {/* Second Part: Image and Paragraph */}
      <div className="flex justify-between items-center">
        <div className="w-1/3">
          <img
            src="/63.png" // Replace with your image URL
            alt="Placeholder"
            className="w-full h-auto"
          />
        </div>
        <div className="w-2/3">
          <p className="text-lg">
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

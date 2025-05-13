"use client";

import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const AboutUs = () => {
  return (
    <div className="py-10 px-4 sm:px-6 md:px-8 lg:px-14  bg-white text-black space-y-8">
      <div className="border-t-2 border-l-2 border-b-2 border-dotted border-gray-900 rounded-l-3xl ml-2 sm:ml-4 md:ml-9">
        {/* Heading and Lottie Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between py-8 bg-blue text-white m-3 sm:m-4 md:m-8 rounded-3xl space-y-6 lg:space-y-0">
          {/* Heading */}
          <div className="w-full lg:w-1/3 text-center">
            <h2 className="text-2xl sm:text-3xl font-semibold">ABOUT US</h2>
          </div>

          {/* Lottie Animation */}
          <div className="w-52 h-32 sm:w-40 sm:h-40">
            <DotLottieReact
              src="https://lottie.host/d02d21f5-e03e-4db8-aa01-b31dcfb8b4fb/HGkNkRnfD0.lottie"
              loop
              autoplay
            />
          </div>

          {/* Paragraph */}
          <div className="w-full lg:w-2/3 px-4">
            <p className="text-sm sm:text-base text-justify">
              Under the aegis of Shree Bhagwan Singh Education Society, a premier educational
              group, Indraprastha Group of Institutions was established with the objective of
              creating world-class skilled professionals.
            </p>
          </div>
        </div>

        {/* Image and Paragraph Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between m-3 sm:m-4 md:m-8 space-y-6 lg:space-y-0 lg:space-x-8">
          {/* Image */}
          <div className="w-full lg:w-1/3 px-4">
            <img
              src="/IIA-About-Us.png"
              alt="About Us"
              className="w-full h-auto rounded-xl"
            />
          </div>

          {/* Paragraph */}
          <div className="w-full lg:w-2/3 px-4">
            <p className="text-sm sm:text-base text-justify">
              Indraprastha Institute of Aeronautics (IIA) is a premier aviation training institute,
              approved by the Directorate General of Civil Aviation (DGCA). With cutting-edge
              facilities, IIA offers comprehensive training programs in Aircraft Maintenance
              Engineering (AME) designed to equip students with hands-on experience using real,
              licensed aircraft. Our focus is on producing industry-ready professionals with a 99%
              placement record. Through practical labs, expert faculty, and a commitment to
              excellence, IIA shapes the future of aviation careers, ensuring every graduate is
              fully prepared to meet the demands of the rapidly evolving aviation sector.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

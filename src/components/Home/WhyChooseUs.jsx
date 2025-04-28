"use client";

import React from "react";
import { FaPlane } from "react-icons/fa";

const features = [
  "IIAG has a big green lush campus with best in class Infrastructure",
  "The course meets the ICAO requirement for working in foreign airline/ countries",
  "Fully equipped, well ventilated and weather controlled class rooms with well-equipped labs",
  "IIAG provide smart classes for best learning practices",
  "Latest and world class training environment is being used which enhance the knowledge level in multiples in shortest time",
  "Good results in DGCA examinations",
  "IIAG provides scholarships to SC-ST-OBC Candidates as per Govt schemes",
  "Providing additional skill course certification approved by National Skill Development Corporation, Govt. of India.",
  "IIAG provide fee relaxations to candidates with parents from Defense & Doctor background",
  "Integrated B.Sc Degree Courses in Association of Govt. University.",
  "We provide best In-House practical training on HS-748 (AVRO) and fully equipped Labs",
  "We have a big Helicopter maintenance repair organisation facility (including Large spacious Hanger, Licensed Heliport, Functional QC & CAMO department, Paint shops etc within campus for providing environment best practical environment to our students"
];

const WhyChooseSection = () => {
  const mid = Math.ceil(features.length / 2);
  const leftFeatures = features.slice(0, mid);
  const rightFeatures = features.slice(mid);

  return (
    <section className="py-20 bg-gradient-to-r from-white via-blue-50 to-white relative">
      {/* Background image */}
      <div className="absolute inset-0 opacity-30">
        <img
          src="/68.jpeg" // <-- Replace with your actual image
          alt="Background"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-center text-blue-900 mb-12">
          WHY CHOOSE IIAG GURGAON?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch bg-transparent">
          {/* Left Features */}
          <div className="bg-white/60 backdrop-blur-lg rounded-2xl shadow-lg p-6 flex flex-col h-full">
            <ul className="space-y-4 flex-1">
              {leftFeatures.map((point, idx) => (
                <li key={idx} className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 text-blue p-2 rounded-full mr-4 mt-1">
                    <FaPlane />
                  </div>
                  <p className="text-gray-800 text-sm leading-relaxed">{point}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Center Image */}
          <div className="flex justify-center">
            <div className="rounded-2xl overflow-hidden shadow-lg w-full max-w-sm h-full">
              <img
                src="/b.png"
                alt="Air hostess walking near aircraft"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>

          {/* Right Features */}
          <div className="bg-white/60 backdrop-blur-lg rounded-2xl shadow-lg p-6 flex flex-col h-full">
            <ul className="space-y-4 flex-1">
              {rightFeatures.map((point, idx) => (
                <li key={idx} className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 text-blue p-2 rounded-full mr-4 mt-1">
                    <FaPlane />
                  </div>
                  <p className="text-gray-800 text-sm leading-relaxed">{point}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;

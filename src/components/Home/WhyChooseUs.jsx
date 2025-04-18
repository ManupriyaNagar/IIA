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
  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
            WHY CHOOSE IIA GURGAON?
          </h2>
          <ul className="space-y-4">
            {features.map((point, idx) => (
              <li key={idx} className="flex items-start text-gray-800 leading-relaxed">
                <FaPlane className="text-blue-700 mt-1 mr-3 flex-shrink-0" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Image */}
        <div className="rounded-xl overflow-hidden shadow-lg">
          <img
            src="/next.png"
            alt="Air hostess walking near aircraft"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;

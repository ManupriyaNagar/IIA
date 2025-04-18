"use client";

import React from "react";

const ApplySection = () => {
  return (
    <div className="py-20 bg-gradient-to-r from-green-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative group rounded-xl overflow-hidden shadow-2xl">
            <img
              src="next.png"
              alt="Aircraft Maintenance"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute bottom-4 left-4 bg-green-800 bg-opacity-80 text-white text-xl font-semibold px-4 py-2 rounded shadow-lg">
              Indraprasth Institute of Aeronautics
            </div>
          </div>

          {/* Text */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-green-100">
            <h2 className="text-4xl font-extrabold text-green-800 mb-6">
              How to Become an AME?
            </h2>
            <div className="space-y-5 text-gray-700 leading-relaxed">
              <p>
                To become an Aircraft Maintenance Engineer (AME), candidates must complete theoretical and practical training approved by the DGCA at an authorized institute.
              </p>
              <p>
                Our institute offers two streams: <strong>Mechanical</strong> (A1, A4, B1.1, B1.4) and <strong>Avionics</strong> (B2). Practical training is provided under CAR 147 (Basic) standards in partnership with Jet Serve Aviation.
              </p>
              <p>
                After successful completion, students receive a Certificate of Recognition (C of R). To obtain an AME license, additional live maintenance experience and passing of DGCA modules are required.
              </p>
            </div>
            <div className="mt-8">
              <button className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-full font-semibold shadow-md hover:shadow-xl transition-all duration-300">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplySection;

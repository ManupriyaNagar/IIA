"use client";

import React from "react";

const HowToBecomeAME = () => {
  return (
    <section className="bg-white text-black px-4 py-12">
      {/* Outer border container */}
    
        {/* Heading */}
        <div className="max-w-3xl mx-auto mb-40 ml-24">
          <h2 className="text-3xl font-bold mb-4">How to Become an AME?</h2>
          <p className="text-lg">
            To become an Aircraft Maintenance Engineer (AME), candidates must complete theoretical and
            practical training approved by the DGCA at an authorized institute.
          </p>
        </div>

        {/* Content grid with large boxes as base */}
        <div className="relative mx-auto max-w-7xl grid grid-cols-2 gap-4">
          {/* Left large box */}
          <div className="border-2 border-red-500 rounded-3xl h-64 bg-white"></div>
          {/* Right large box */}
          <div className="border-2 border-red-500 rounded-3xl h-64 bg-white"></div>

          {/* Small floating boxes positioned above the large ones */}
          <div className="absolute -top-20 left-[12.9rem] w-1/3 bg-white border-2 border-red-500 rounded-3xl p-4">
            <p>
              Our institute offers two streams: Mechanical (A1, A4, B1.1, B1.4) and Avionics (B2).
              Practical training is provided under CAR 147 (Basic) standards in partnership with
              Jet Serve Aviation.
            </p>
          </div>

          <div className="absolute -top-20 right-[12.9rem] w-1/3 bg-white border-2 border-red-500 rounded-3xl p-4">
            <p>
              After successful completion, students receive a Certificate of Recognition (C of R).
              To obtain an AME license, additional live maintenance experience is required.
            </p>
          </div>
        </div>

    </section>
  );
};

export default HowToBecomeAME;

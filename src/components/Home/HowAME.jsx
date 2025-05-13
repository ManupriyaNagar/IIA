"use client";

import Image from "next/image";
import React from "react";

const HowToBecomeAME = () => {
  return (
    <section className="bg-white text-black px-4 py-12">
      {/* Heading */}
      <div className="max-w-3xl mx-auto mb-24 text-center md:text-left md:ml-24">
        <h2 className="text-3xl font-bold mb-4">How to Become an AME?</h2>
        <p className="text-lg mb-12">
          To become an Aircraft Maintenance Engineer (AME), candidates must complete theoretical and
          practical training approved by the DGCA at an authorized institute.
        </p>
      </div>

      {/* Main content grid */}
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-6 relative mt-12">
        {/* Box 1 and info */}
        <div className="relative">
          <div className="border-2 border-pink rounded-3xl h-64 bg-white overflow-hidden relative">
            <Image
              src="/38.jpeg" // replace with your image path
              alt="AME Training"
              fill
              className="object-cover rounded-3xl"
            />
          </div>
          <div className="bg-white border-2 border-pink rounded-3xl p-4 mt-4 md:absolute md:-top-20 md:left-1/2 md:-translate-x-1/2 md:w-4/5 shadow-lg">
            <p className="text-sm md:text-base">
              Our institute offers two streams: Mechanical (A1, A4, B1.1, B1.4) and Avionics (B2).
              Practical training is provided under CAR 147 (Basic) standards in partnership with
              Jet Serve Aviation.
            </p>
          </div>
        </div>

        {/* Box 2 and info */}
        <div className="relative">
          <div className="border-2 border-pink rounded-3xl h-64 bg-white overflow-hidden relative">
            <Image
              src="/94.jpeg" // replace with your image path
              alt="AME Certification"
              fill
              className="object-cover rounded-3xl"
            />
          </div>
          <div className="bg-white border-2 border-pink rounded-3xl p-4 mt-4 md:absolute md:-top-20 md:left-1/2 md:-translate-x-1/2 md:w-4/5 shadow-lg">
            <p className="text-sm md:text-base">
              After successful completion, students receive a Certificate of Recognition (C of R).
              To obtain an AME license, additional live maintenance experience is required.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToBecomeAME;

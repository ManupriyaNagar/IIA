"use client";

import React from "react";

const HowToBecomeAME = () => {
  return (
    <section className="bg-white text-black px-6 py-12">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl font-bold mb-4">How to Become an AME?</h2>
        <p className="text-lg">
          To become an Aircraft Maintenance Engineer (AME), candidates must complete theoretical and
          practical training approved by the DGCA at an authorized institute.
        </p>
      </div>

    
   
        {/* Floating Boxes */}
        <div className="relative left-1/2 transform -translate-x-1/2 w-full max-w-5xl flex justify-between gap-4 px-4">


        
          <div className="bg-white border-2 border-red-500 rounded-3xl p-10 w-1/2 mb-9 ">
            <p>
              Our institute offers two streams: Mechanical (A1, A4, B1.1, B1.4) and Avionics (B2).
              Practical training is provided under CAR 147 (Basic) standards in partnership with
              Jet Serve Aviation.
            </p>
          </div>

          <div className="border-2 border-red-500 w-[31rem] left-0 container mx-auto absolute h-40 mt-20 -z-20 items-center mr-40 rounded-3xl">

</div>

          <div className="bg-white border-2 border-red-500 rounded-3xl p-6 w-1/2 mb-9">
            <p>
              After successful completion, students receive a Certificate of Recognition (C of R).
              To obtain an AME license, additional live maintenance experience is required.
            </p>
          </div>

           



         
        {/* Empty space below the cards */}
        <div className="mt-40" />
      </div>
    </section>
  );
};

export default HowToBecomeAME;

'use client';

import Image from 'next/image';
import React from 'react';

const AmeeeBanner = () => {
  return (
    <section
      className="bg-white min-h-screen py-8 px-4 relative bg-cover bg-center"
      style={{ backgroundImage: "url('/ban2.png')" }} // Ensure /ban2.png is in the /public folder
    >
      <div className=""> {/* Optional overlay for readability */}
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6 items-center">

          {/* Left Side */}
          <div className="space-y-4">
            <h1 className="text-4xl font-bold mt-40 ml-30">AMEEE</h1>
            <h2 className="text-orange-500 text-xl font-semibold tracking-wide">
              AME ENTRANCE EXAMINATION - 2025
            </h2>
            <div className="border-t-2 border-white w-2/3"></div>

            <p className="mt-4 text-base leading-relaxed">
              The AMEEE Examination is a prestigious National-Level Scholarship Exam that provides aspiring students
              with a unique opportunity to embark on a career in the Aviation Sector.
            </p>

            <div className="flex flex-wrap gap-4 mt-6">
              <div className="bg-orange-500 text-white px-4 py-2 font-bold rounded">
                www.ameee.in
              </div>
              <div className="bg-orange-500 text-white px-4 py-2 font-semibold rounded">
                +91 9212170022 / 33
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex flex-col items-center gap-4">
            <div className="bg-[#00153b] text-orange-500 px-4 py-2 font-bold text-lg rounded-md">
              01 JAN 2025
            </div>

            <div className="border-4 border-white p-2 rounded shadow-lg bg-white">
              <Image
                src="/qr.png"
                alt="QR Code"
                width={150}
                height={150}
                className="object-contain"
              />
            </div>

            <div className="text-center mt-2">
              <div className="text-orange-500 text-sm">UPTO</div>
              <div className="text-white text-2xl font-bold">100%</div>
              <div className="bg-[#00153b] text-white px-3 py-1 mt-1 rounded text-sm font-semibold">
                SCHOLARSHIP
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AmeeeBanner;

'use client';

import Image from 'next/image';
import React from 'react';

const AMEEEComponent = () => {
  return (
    <section className="flex flex-col md:flex-row w-full min-h-[300px]">
      
      {/* Left Panel */}
      <div className="bg-gradient-to-b from-blue-900 to-blue text-white flex flex-col justify-center items-center p-6 md:w-1/3 w-full">
        <h2 className="text-6xl font-bold">AMEEE</h2>
        <p className="text-5xl font-semibold mt-2">2025</p>
        <div className="mt-6">
          <Image
            src="/p.png" // Replace with your actual plane icon
            alt="Airplane Icon"
            width={200}
            height={100}
            className=""
          />
        </div>
      </div>

      {/* Right Panel */}
      <div className="bg-white p-6 md:p-10 md:w-2/3 w-full text-black text-justify text-lg md:text-xl leading-relaxed">
        <p className="mb-4 ">
          The AMEEE Examination is a prestigious <strong>NATIONAL-LEVEL</strong> scholarship exam that provides aspiring students with a unique opportunity to embark on a career in the <strong>AVIATION SECTOR</strong>. It serves as a gateway for students who are passionate about aviation and wish to explore various career options within the field.
        </p>
        <p>
          The examination not only facilitates admission to Aircraft Maintenance Engineering programs but also opens doors to a range of other exciting courses, including <strong>Aerospace Engineering</strong>, <strong>Aeronautical Engineering</strong>, <strong>Commercial Pilot License (CPL)</strong>, <strong>Commercial Helicopter Pilot License (CHPL)</strong>, <strong>Airport Management</strong>, <strong>Airhostess</strong>, <strong>Cabin Crew</strong>, and <strong>Ground Staff</strong> with the possibility of receiving up to <strong>100% SCHOLARSHIP</strong>.
        </p>
      </div>
    </section>
  );
};

export default AMEEEComponent;

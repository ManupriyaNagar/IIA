'use client';

import Image from 'next/image';
import React from 'react';

const CareerProspects = () => {
  return (
    <section className="bg-white py-10 px-4 md:px-10 text-gray-800">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">

        {/* Text Content */}
        <div>
          <h2 className="bg-[#031d4a] text-white text-lg font-semibold px-4 py-2 inline-block rounded-t-md">
            Career Prospect in Aviation :-
          </h2>
          <p className="mt-4 text-sm md:text-base leading-relaxed">
            The aviation sector offers a wide range of career prospects, and the Indian government's "Udaan"
            scheme has contributed to the growth of aviation-related careers in the country. Here are some career
            prospects in the aviation sector, including information about the "Udaan" scheme:
          </p>
          <ul className="list-disc list-inside mt-4 space-y-1 text-sm md:text-base">
            <li>Aircraft Pilot / Helicopter Pilot</li>
            <li>Aircraft Maintenance Engineer (AME)</li>
            <li>Aeronautical & Aerospace Engineering</li>
            <li>Airport and Airline Management</li>
            <li>Air Traffic Control (ATC)</li>
            <li>Aviation Safety Inspector</li>
            <li>Cabin Crew</li>
            <li>Aviation Education and Training</li>
            <li>Aircraft Dispatcher</li>
            <li>Aviation Security</li>
            <li>Aviation Research and Development</li>
          </ul>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <Image
            src="/AMEEEAA.png" // Replace with your actual image path
            alt="Airplane"
            width={400}
            height={300}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default CareerProspects;

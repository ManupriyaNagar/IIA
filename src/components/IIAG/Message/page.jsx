import Image from 'next/image';
import React from 'react';

const DirectorMessage = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-10 bg-gray-100 rounded-lg shadow-md m-5">
      <div className="mb-6 md:mb-0 md:mr-8">
        <Image
          src="/Director.png" // Place image in public/ folder
          alt="Director"
          width={180}
          height={180}
          className="rounded-full object-cover border-4 border-white shadow-lg"
        />
      </div>
      <div className="max-w-xl text-center md:text-left text-gray-800 font-sans">
        <h1 className="text-2xl md:text-3xl font-semibold mb-3 text-gray-900">
          Message from Our Director
        </h1>
        <p className="text-base md:text-lg leading-relaxed">
          At Indraprasth Institute of Aeronautics (IIA), we are dedicated to shaping the next generation of aviation professionals through industry-aligned, DGCA-approved programs in AME, Aeronautical, and Aerospace Engineering. With hands-on training, modern facilities, and partnerships with top aviation organizations, we ensure our students gain practical, real-world skills. Driven by innovation and excellence, we prepare students not just for careers, but for leadership in aviation. At IIA, education goes beyond the classroom—fostering curiosity, integrity, and a global perspective. Join us, where your aviation dreams take flight.
        </p>
      </div>
    </div>
  );
};

export default DirectorMessage;

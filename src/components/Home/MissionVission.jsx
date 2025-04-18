import Image from 'next/image';
import React from 'react';
import { Quote } from 'lucide-react'; // Optional, or use custom SVG

const MissionVision = () => {
  return (
    <section className="bg-indigo-900 text-white py-16 px-6 md:px-12 rounded-2xl flex flex-col lg:flex-row items-center justify-between gap-12">
      {/* Left side */}
      <div className="flex-1 text-center lg:text-left max-w-md">
        <div className="bg-yellow-400 text-[#1C2680] font-bold py-2 px-4 inline-block rounded mb-4">
          Mission and Vision
        </div>
        <p className="text-base md:text-lg leading-relaxed mb-6">
          Providing global employers and society with skilled manpower that is a fundamental
          requirement for economic success and contribution to the community.
        </p>
        <div className="flex flex-col gap-4 items-center lg:items-start">
          <button className="bg-yellow-400 text-[#1C2680] font-semibold py-2 px-6 rounded hover:brightness-90 transition">
            Apply Now
          </button>
          <button className="bg-yellow-400 text-[#1C2680] font-semibold py-2 px-6 rounded hover:brightness-90 transition">
            Student Placement Record
          </button>
        </div>
      </div>

      {/* Center image */}
      <div className="flex-1 max-w-xs mx-auto relative">
        <Image
          src="/next.png"
          alt="Globe with airplane"
          width={400}
          height={400}
          className="mx-auto rounded"
        />
      </div>

      {/* Right side */}
      <div className="flex-1 text-center lg:text-left max-w-sm space-y-4">
        <div className="flex justify-center lg:justify-start text-4xl text-white/30">
          <Quote />
        </div>
        <p className="font-semibold text-lg">
          Our commitment is to serve you worldwide
        </p>
        <div className="h-1 w-20 bg-yellow-400 mx-auto lg:mx-0 my-2" />
        <p className="font-semibold text-lg">
          Empowering knowledge <br /> through vision
        </p>
      </div>
    </section>
  );
};

export default MissionVision;

'use client'
import Image from 'next/image';
import React from 'react';
import { Quote } from 'lucide-react'; 
import { DotLottieReact } from '@lottiefiles/dotlottie-react';


const MissionVision = () => {
  return (
    <section className="relative text-white py-16 px-6 md:px-12 flex flex-col lg:flex-row items-center justify-between gap-12 overflow-hidden bg-indigo-900">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/banner.jpg" // Change this to your desired background image
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="opacity-50"
        />
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 w-full">

        {/* Left Card */}
        <div className="flex-1 backdrop-blur-md bg-white/10 p-8 rounded-2xl shadow-lg text-center lg:text-left max-w-md">
          <div className="bg-gradient-to-r from-orange to-pink hover:from-pink hover:to-orange text-white font-bold py-2 px-4 inline-block rounded mb-6 text-sm md:text-base">
            Mission and Vision
          </div>
          <p className="text-base md:text-lg leading-relaxed mb-8">
            Providing global employers and society with skilled manpower that is a fundamental
            requirement for economic success and contribution to the community.
          </p>
          <div className="flex flex-col gap-4 items-center lg:items-start">
            <button className="bg-gradient-to-r from-orange to-pink hover:from-pink hover:to-orange font-semibold py-3 px-8 rounded-full hover:brightness-90 transition">
              Apply Now
            </button>
            <button className="bg-transparent border-2 border-orange text-orange font-semibold py-3 px-8 rounded-full hover:bg-orange hover:text-white transition">
              Student Placement Record
            </button>
          </div>
        </div>

        {/* Center Image */}
        <div className="flex-1 max-w-3xl  relative">
        <DotLottieReact
      src="https://lottie.host/3e03e774-2395-4128-8ba3-e8a7fad3acbc/2azeNAW5Ah.lottie"
      loop
      autoplay
    />


        </div>

        {/* Right Card */}
        <div className="flex-1 backdrop-blur-md bg-white/10 p-8 rounded-2xl shadow-lg text-center lg:text-left max-w-sm space-y-6">
          <div className="flex justify-center lg:justify-start text-5xl text-white/30">
            <Quote />
          </div>
          <p className="font-bold text-xl">
            Our commitment is to serve you worldwide
          </p>
          <div className="h-1 w-20 bg-yellow-400 mx-auto lg:mx-0" />
          <p className="font-bold text-xl">
            Empowering knowledge <br /> through vision
          </p>
        </div>

      </div>
    </section>
  );
};

export default MissionVision;

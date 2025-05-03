'use client';

import Image from 'next/image';

export default function InfoCard() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden md:flex md:items-center">
        {/* Text Section */}
        <div className="p-8 md:w-1/2">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Empower Your Health Journey</h2>
          <p className="text-gray-600 mb-4">
            Discover personalized care and expert guidance tailored to your unique fitness and wellness goals. We combine innovation with compassion to help you achieve long-term health.
          </p>
          <p className="text-gray-600">
            Whether you're an athlete or just starting your journey, our expert team and modern facilities are here to support you every step of the way.
          </p>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 h-64 md:h-auto relative">
          <Image
            src="/health-journey.jpg" // Make sure this image exists in your /public folder
            alt="Health Journey"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}

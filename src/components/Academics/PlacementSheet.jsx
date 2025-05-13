'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function PlacementSheetHighlight() {
  return (
    <section className="bg-white py-12 px-4 md:px-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-8">
        {/* Left: Text Content */}
        <div>
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            Outstanding Placement Record
          </h2>
          <p className="text-gray-700 text-lg mb-6">
            Our students have secured prestigious positions across top aviation companies.
            View our latest placement record sheet and see where our graduates are soaring.
          </p>
          <Link href="/IIAPR.pdf" target="_blank">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
               className="w-full bg-gradient-to-r from-orange to-pink disabled:opacity-50 text-white p-4 text-sm rounded font-semibold hover:from-pink hover:to-orange transition"
            >
              View Placement Record
            </motion.button>
          </Link>
        </div>

        {/* Right: Image or Preview */}
        <div className="w-full h-[400px] relative rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/record.png"
            alt="Placement Record Sheet"
            fill
            className="object-cover border-2 border-blue-200 rounded-lg hover:scale-105 transition-transform duration-300 "
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute top-0 left-0 w-full h-0 group-hover:h-full bg-gradient-to-b from-orange-500 to-pink-500 opacity-50 transition-all duration-[1000ms] ease-in-out pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}

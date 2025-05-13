'use client';

import Image from 'next/image';
import React from 'react';

const images = [
  '/4.jpeg',
  '/42.jpeg',
  '/47.jpeg',
  '/63.jpeg',
  '/68.jpeg',
  '/78.jpeg',
  '/85.jpeg',
  '/94.jpeg',
  '/111.jpeg',
  '/c4.png',
];

const HexagonGrid = () => {
  const layout = [
    [null, null, 0, null, null],          // Column 1
  [null, 1, null, 6, null],                   // Column 2
  [2, 4, 5, 7, 9],                      // Column 3
];
       // Row 5: 2 images (you can change to [8] if you want only 1)

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 space-y-6">
        {layout.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className={`flex justify-center gap-4 md:gap-6 ${
              row.length === 1 ? 'justify-center' : 'justify-center'
            }`}
          >
            {row.map((imgIndex) => (
              <div
                key={imgIndex}
                className="w-36 h-40 md:w-40 md:h-44 clip-hexagon bg-white shadow-lg overflow-hidden"
              >
                <Image
                  src={images[imgIndex]}
                  alt={`Hexagon image ${imgIndex + 1}`}
                  width={200}
                  height={200}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default HexagonGrid;

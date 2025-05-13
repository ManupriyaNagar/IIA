'use client';
import { useEffect, useRef } from "react";

const cards = [
  { title: "Jet Serve Aviation", icon: "/wing1.jpg" },
  { title: "Air India Engineering", icon: "/wing2.jpg" },
  { title: "IIAG", icon: "/wing3.jpg" },
  { title: "SpiceJet", icon: "/wing4.jpg" },
  { title: "Jet Serve Aviation", icon: "/wing5.jpg" },
  { title: "Flyola", icon: "/wing6.jpg" },
  { title: "Simtech", icon: "/wing7.jpg" },
  { title: "American Royal University", icon: "/wing8.jpg" },
];

export default function CarouselMarquee() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    let animationFrame;
    let scrollAmount = 1;

    const scroll = () => {
      container.scrollLeft += scrollAmount;
      if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
        container.scrollLeft = 0;
      }
      animationFrame = requestAnimationFrame(scroll);
    };

    animationFrame = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className="w-full bg-blue-50 py-10 overflow-hidden">
      <div
  ref={containerRef}
  className="flex gap-6 overflow-x-auto scroll-smooth whitespace-nowrap no-scrollbar px-4"
>

        {cards.concat(cards).map((card, index) => (
          <div
            key={index}
            className="min-w-[300px] md:min-w-[400px] lg:min-w-[500px] h-[300px] relative rounded-xl overflow-hidden shadow-lg group transform transition duration-300 hover:scale-90"
          >
            <img
              src={card.icon}
              alt={card.title}
              className="w-full h-full object-cover"
            />
            {/* <div className="absolute inset-0 bg-transparent bg-gradient-to-b from-pink to-orange bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center text-white px-4">
              <h3 className="text-xl font-semibold">{card.title}</h3>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
}

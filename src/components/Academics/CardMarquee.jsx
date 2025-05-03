const cards = [
    {
      title: "Jet Serve Aviation",
      icon: "/wing1.jpg",
    },
    {
      title: "Air India Engineering",
      icon: "/wing2.jpg",
    },
    {
      title: "IndiGo",
      icon: "/wing3.jpg",
    },
    {
      title: "SpiceJet",
      icon: "/wing4.jpg",
    },
    {
      title: "Boeing",
      icon: "/wing5.jpg",
    },
    {
      title: "Boeing",
      icon: "/wing6.jpg",
    },
    {
      title: "Boeing",
      icon: "/wing7.jpg",
    },
    {
      title: "Boeing",
      icon: "/wing8.jpg",
    },
  ];
  
  export default function CarouselMarquee() {
    return (
      <div className="w-full bg-blue-50 py-10 overflow-hidden">
        <marquee direction="left" scrollamount="8" loop>
          <div className="flex gap-6">
            {cards.map((card, index) => (
              <div
                key={index}
                className="w-[500px] h-[240px] relative rounded-xl overflow-hidden shadow-lg group"
              >
                <img
                  src={card.icon}
                  alt={card.title}
                  className="w-500px h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center text-white px-4">
                  <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </marquee>
      </div>
    );
  }
  
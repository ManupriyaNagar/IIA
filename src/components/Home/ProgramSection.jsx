import React from "react";

const programs = [
  { code: "A1", icon: "/A1.png", title: "Maintenance Certifying Mechanic (Aeroplanes Turbine)" },
  { code: "A4", icon: "/A4.png", title: "Maintenance Certifying Mechanic (Helicopters Piston)" },
  { code: "B1.1", icon: "/B1-1.png", title: "Maintenance Certifying Technician (Mechanical)" },
  { code: "B1.4", icon: "/B1-4.png", title: "Maintenance Certifying Technician (Mechanical)" },
  { code: "B2", icon: "/B2.png", title: "Maintenance Certifying Technician (Avionics)" },
];

const ProgramsSection = () => {
  const firstRow = programs.slice(0, 3);
  const secondRow = programs.slice(3);

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: "url('/38.jpeg')" }}
      />

      {/* Decorative blobs */}
      <span className="absolute top-10 left-10 w-40 h-40 bg-gradient-to-r from-orange-300 to-pink-300 rounded-full opacity-40 animate-ping" />
      <span className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-r from-orange-300 to-pink-300 rounded-full opacity-40 animate-ping" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl sm:text-6xl font-extrabold tracking-tight drop-shadow-md">
            Aircraft Maintenance Engineering
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-lg  leading-relaxed">
            Explore our specialized programs designed for excellence and innovation.
          </p>
        </div>

        {/* First row: three cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 justify-items-center bg-transparent">
          {firstRow.map(({ code, icon, title }) => (
            <div
              key={code}
              className="relative w-72 bg-white/80 backdrop-blur-md rounded-3xl border border-gray-200 shadow-xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:rotate-1 hover:shadow-2xl group"
            >
              {/* Blob accents */}
              <span className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-orange-300 to-pink-300 rounded-full opacity-30 group-hover:bg-pink-300 transition-all" />

              {/* Icon */}
              <div className="flex justify-center mt-10">
                <div className="bg-gradient-to-br from-orange-300 to-pink-300 p-4 rounded-full animate-pulse">
                  <img src={icon} alt={code} className="w-28 h-28 object-contain rounded-full" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent hover:text-blue transition-all duration-300">
                    {title}
                  </h3>
                  <p className="text-sm text-gray-700">
                    Code: <span className="font-medium text-gray-900">{code}</span>
                  </p>
                </div>
                <div className="mt-6">
                  <div className="h-1 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full w-16 mx-auto" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Second row: two cards centered */}
        <div className="mt-20 flex flex-wrap justify-center gap-12">
          {secondRow.map(({ code, icon, title }) => (
            <div
              key={code}
              className="relative w-72 bg-white/80 backdrop-blur-md rounded-3xl border border-gray-200 shadow-xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:rotate-1 hover:shadow-2xl group"
            >
              {/* Blob accents */}
              <span className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-r from-orange-300 to-pink-300 rounded-full opacity-30 group-hover:bg-pink-300 transition-all" />

              {/* Icon */}
              <div className="flex justify-center mt-10">
                <div className="bg-gradient-to-br from-orange-300 to-pink-300 p-4 rounded-full animate-pulse">
                  <img src={icon} alt={code} className="w-28 h-28 object-contain rounded-full" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent hover:text-blue transition-all duration-300">
                    {title}
                  </h3>
                  <p className="text-sm text-gray-700">
                    Code: <span className="font-medium text-gray-900">{code}</span>
                  </p>
                </div>
                <div className="mt-6">
                  <div className="h-1 bg-gradient-to-r from-orange to-pink rounded-full w-16 mx-auto" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;

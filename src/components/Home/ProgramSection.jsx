import React from "react";

// Programs data with icons and titles
const programs = [
  { code: "A1", icon: "/A1.png", title: "Airframe Mastery" },
  { code: "A4", icon: "/A4.png", title: "Engine Excellence" },
  { code: "B1.1", icon: "/B1-1.png", title: "Mechinical Stream" },
  { code: "B1.4", icon: "/B1-4.png", title: "Structural Champs" },
  { code: "B2", icon: "/B2.png", title: "Avionics Innovators" },
];

const ProgramsSection = () => {
  const firstRow = programs.slice(0, 3);
  const secondRow = programs.slice(3);

  return (
    <section className="relative py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Decorative blobs */}
      <span className="absolute top-10 left-10 w-40 h-40 bg-indigo-100 rounded-full opacity-50 animate-pulse" />
      <span className="absolute bottom-10 right-10 w-56 h-56 bg-indigo-100 rounded-full opacity-40 animate-ping" />

      <div className="relative max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-extrabold text-neutral-800 tracking-tight">
            Aircraft Maintenance Engineering
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-neutral-500 leading-relaxed">
            Explore our specialized programs designed for excellence and innovation.
          </p>
        </div>

        {/* First row: three cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 justify-items-center">
          {firstRow.map(({ code, icon, title }) => (
            <div
              key={code}
              className="relative w-72 bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:-rotate-1 hover:shadow-2xl group"
            >
              {/* Blob accents */}
              <span className="absolute -top-5 -right-5 w-20 h-20 bg-indigo-100 rounded-full opacity-50 group-hover:bg-indigo-200 transition-colors" />

              {/* Icon */}
              <div className="flex justify-center mt-10">
                <div className="bg-gradient-to-br from-indigo-100 to-indigo-200 p-4 rounded-full animate-pulse">
                  <img src={icon} alt={code} className="w-32 h-32 object-contain" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                    {title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    Code: <span className="font-medium text-gray-800">{code}</span>
                  </p>
                </div>
                <div className="mt-6">
                  <div className="h-1 bg-indigo-600 rounded-full w-16 mx-auto" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Second row: two cards centered */}
        <div className="mt-16 flex flex-wrap justify-center gap-12">
          {secondRow.map(({ code, icon, title }) => (
            <div
              key={code}
              className="relative w-72 bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:rotate-1 hover:shadow-2xl group"
            >
              {/* Blob accents */}
              <span className="absolute -bottom-5 -left-5 w-24 h-24 bg-indigo-100 rounded-full opacity-40 group-hover:bg-indigo-200 transition-colors" />

              {/* Icon */}
              <div className="flex justify-center mt-10">
                <div className="bg-gradient-to-br from-indigo-100 to-indigo-200 p-4 rounded-full animate-pulse">
                  <img src={icon} alt={code} className="w-32 h-32 object-contain" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                    {title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    Code: <span className="font-medium text-gray-800">{code}</span>
                  </p>
                </div>
                <div className="mt-6">
                  <div className="h-1 bg-indigo-600 rounded-full w-16 mx-auto" />
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

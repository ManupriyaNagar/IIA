import React from 'react';
const placements = [
    {
      id: 1,
      year: 2024,
      selected: 2,
      package: 36.0,
      company: "Autodesk",
      logo: "/autodesk-logo.png",
    },
    {
      id: 2,
      year: 2024,
      selected: 2,
      package: 49.12,
      company: "Microsoft",
      logo: "/microsoft-logo.png",
      highlight: true,
    },
    {
      id: 3,
      year: 2024,
      selected: 5,
      package: 18.0,
      company: "Cisco",
      logo: "/cisco-logo.png",
    },
  ];

const CardSection = () => {
    return (
        <div>
              <section className="bg-black text-white py-12 px-4">
                  <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl font-semibold">Placement Achievements</h2>
                    <p className="text-sm mt-2 text-gray-300">93% placement already achieved</p>
                    <button className="mt-4 inline-flex items-center text-blue-400 hover:underline">
                      <span className="text-xl mr-1">→</span> Learn more about Placements
                    </button>
                    <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-8">
                      {placements.map((p) => (
                        <div
                          key={p.id}
                          className={`bg-white text-black p-6 rounded-xl shadow-lg border-4 ${
                            p.highlight ? "scale-105 border-blue-400" : "border-blue-300"
                          } w-[300px]`}
                        >
                          <div className="text-right text-blue-500 font-bold">{p.year}</div>
                          <hr className="my-2 border-gray-300" />
                          <div className="text-gray-700 text-sm">Placement Achievements</div>
                          <div className="mt-2">
                            <span className="text-orange-500 text-4xl font-bold leading-none">{p.selected.toString().padStart(2, '0')}</span>
                            <span className="ml-2 font-semibold text-gray-800">ABESians selected at</span>
                          </div>
                          <div className="mt-6 text-center">
                            <div className="text-sm text-gray-600">PACKAGE OF</div>
                            <div className="text-blue-600 text-3xl font-bold">₹ {p.package.toFixed(2)}</div>
                            <div className="text-xs text-gray-600">LAKHS PER ANNUM</div>
                          </div>
                          <div className="mt-6 flex justify-center">
                            <Image src={p.logo} alt={p.company} width={120} height={30} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
        </div>
    );
};

export default CardSection;
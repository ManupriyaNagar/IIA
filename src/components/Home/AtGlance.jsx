// components/AbesAtAGlance.tsx
export default function AbesAtAGlance() {
    const stats = [
      { title: 'Est. 2006', subtitle: 'Celebrating 20 Years Of Excellence' },
      { title: '360', subtitle: 'Students in Campus' },
      { title: '3000+', subtitle: 'Alumni Worldwide' },
      { title: '51 LPA', subtitle: 'Highest Package in Placements 2024' },
      { title: '80', subtitle: 'Offers in Placement 2024' },
      { title: '3 Acres', subtitle: 'Campus With All Modern Facilities' },
      { title: '30+', subtitle: 'Recruiters' },
     
    ];
  
    return (
      <section className="bg-gray-50 py-16 px-4 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-semibold text-gray-900">
              <span className="font-bold">IIAG</span> at a Glance
            </h2>
            <p className="mt-4 text-gray-700 text-lg max-w-3xl">
            A Visionary Quest through Aeronautical Engineering's Expanding Universe
            </p>
          </div>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {stats.map((item, index) => (
              <div key={index}>
                <h3 className="text-2xl font-semibold text-[#891C36]">{item.title}</h3>
                <p className="mt-1 text-gray-800 font-medium">{item.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
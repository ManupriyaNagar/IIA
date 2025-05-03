// components/AbesAtAGlance.tsx
export default function AbesAtAGlance() {
    const stats = [
      { title: 'Est. 2000', subtitle: 'Celebrating 25 Years Of Excellence' },
      { title: '7,299', subtitle: 'Students in Campus' },
      { title: '18,000+', subtitle: 'Alumni Worldwide' },
      { title: '35+', subtitle: 'Startups Incubated' },
      { title: '59.91 LPA', subtitle: 'Highest Package in Placements 2024' },
      { title: '1683', subtitle: 'Offers in Placement 2024' },
      { title: '14.16 Acres', subtitle: 'Campus With All Modern Facilities' },
      { title: '500+', subtitle: 'Recruiters' },
      { title: '1672+', subtitle: 'Scopus Publication' },
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
  
"use client";

export default function AcademyInfo() {
  return (
    <section className="relative bg-gradient-to-b from-black to-indigo-900 text-white py-16 px-6 md:px-12 overflow-hidden">
      {/* Optional Background Image */}
      <div className="absolute inset-0 opacity-30">
        <img
          src="/68.jpeg" // <-- Replace with your actual image
          alt="Background"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto text-center space-y-8">
        {/* Welcome badge */}
        <div className="inline-block border border-orange rounded-full px-6 py-2  text-lg font-semibold tracking-wider animate-pulse bg-gradient-to-r from-[var(--orange)] to-[var(--pink)] ">
          Welcome to IIA GRUGOAN
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
          Shaping the Engineers of Tomorrow
        </h2>

        {/* Description */}
        <p className="max-w-3xl mx-auto text-gray-300 text-sm md:text-base leading-relaxed">
          Indraprasth Institute of Aeronautics (IIA) is a premier engineering
          college offering specialized courses in cutting-edge engineering
          programs, approved by DGCA, focused on aeronautical and
          aviation-related fields.With over 15+ years of expertise, our
          curriculum is designed to equip students with both theoretical
          knowledge and practical skills, preparing them for leadership roles in
          the aviation industry.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {/* Feature 1 */}
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="bg-gradient-to-r from-orange to-pink rounded-full p-4">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3135/3135792.png"
                alt="Alumni Icon"
                className="h-8 w-8"
              />
            </div>
            <h3 className=" text-white rounded-full text-xl font-semibold">
              DGCA Approved Programs
            </h3>
            <p className="text-gray-300 text-sm">
              Our DGCA-approved programs deliver top-tier education and industry
              compliance, equipping students with the skills for a successful
              aviation career. Our 100% placement record ensures graduates are
              industry-ready.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="bg-gradient-to-r from-orange to-pink rounded-full p-4">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                alt="Experience Icon"
                className="h-8 w-8"
              />
            </div>
            <h3 className="text-white text-xl font-semibold">
              Experienced Faculty
            </h3>
            <p className="text-gray-300 text-sm">
              Learn from highly experienced faculty who bring both academic
              expertise and real-world industry insights, guiding students
              toward success in aerospace engineering.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="bg-gradient-to-r from-orange to-pink rounded-full p-4">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1046/1046857.png"
                alt="State-of-the-Art Facilities Icon"
                className="h-8 w-8"
              />
            </div>
            <h3 className="text-white text-xl font-semibold">
              State-of-the-Art Facilities
            </h3>
            <p className="text-gray-300 text-sm">
              IIA offers cutting-edge facilities, including modern labs and
              aircraft, providing students with practical, hands-on training
              essential for their careers in aviation engineering.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

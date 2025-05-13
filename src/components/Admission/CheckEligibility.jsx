// components/CheckEligibility.tsx
export default function CheckEligibility() {
    const courses = [
      {
        title: "Aircraft Maintenance Engineering (AME)",
        age: "17 to 30 years",
        qualification: "12th pass with Physics, Chemistry, and Mathematics or a 3-year Engineering Diploma.",
      },
      {
        title: "Aerospace & Aeronautical Engineering",
        age: "17 to 30 years",
        qualification: "12th pass with Physics, Chemistry, and Mathematics or equivalent.",
      },
      {
        title: "B.Sc. in Aircraft Maintenance Engineering",
        age: "17 to 30 years",
        qualification: "12th pass with Physics, Chemistry, and Mathematics.",
      },
      {
        title: "B.Sc. in Aviation",
        age: "17 to 30 years",
        qualification: "12th pass with any stream.",
      },
    ];
  
    return (
      <section className="bg-white py-12 px-4 md:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Step 2: Check Eligibility Criteria</h2>
          <p className="text-gray-700 text-lg mb-10 max-w-3xl">
            Before applying, make sure you meet the eligibility criteria for your chosen course:
          </p>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {courses.map((course, index) => (
              <div
                key={index}
                className="bg-blue-50 border border-blue-100 rounded-2xl shadow-sm hover:shadow-md transition p-6"
              >
                <h3 className="text-xl font-semibold text-blue-800 mb-2">{course.title}</h3>
                <p className="text-gray-700"><span className="font-medium text-blue-700">Age:</span> {course.age}</p>
                <p className="text-gray-700 mt-1"><span className="font-medium text-blue-700">Educational Qualification:</span> {course.qualification}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
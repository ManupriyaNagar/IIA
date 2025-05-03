// components/ChooseCourse.tsx
export default function ChooseCourse() {
    const courses = [
      "Aircraft Maintenance Engineering (AME)",
      "Aeronautical Engineering",
      "Aerospace Engineering",
      "B.Sc. in Aircraft Maintenance Engineering",
      "B.Sc. in Aviation",
    ];
  
    return (
      <section className="bg-gradient-to-br from-white to-blue-50 py-12 px-4 md:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Step 1: Choose Your Course</h2>
          <p className="text-gray-700 text-lg mb-10 max-w-3xl">
            We offer a range of specialized courses in the aviation sector. Before beginning your
            application, we encourage you to explore our course offerings and choose the one that
            aligns with your career goals:
          </p>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <div
                key={index}
                className="bg-white border border-blue-100 rounded-2xl shadow-md hover:shadow-lg transition p-6"
              >
                <h3 className="text-xl font-semibold text-blue-800">{course}</h3>
                <p className="text-gray-600 mt-2 text-sm">
                  This program is designed to provide a strong academic foundation and hands-on
                  training, preparing students for success in the aviation industry.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
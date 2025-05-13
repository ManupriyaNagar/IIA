// components/CheckEligibility.tsx
"use client";
import { GraduationCap, Calendar } from "lucide-react";
import { motion } from "framer-motion";

export default function CheckEligibility() {
  const courses = [
    {
      title: "Aircraft Maintenance Engineering (AME)",
      age: "15 to 30 years",
      qualification:
        "12th pass with Physics, Chemistry, and Mathematics or a 3-year Engineering Diploma.",
    },
    {
      title: "Aerospace & Aeronautical Engineering",
      age: "17 to 30 years",
      qualification:
        "12th pass with Physics, Chemistry, and Mathematics or equivalent.",
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
    <section className="bg-gradient-to-b from-white via-blue-50 to-white py-16 px-4 md:px-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-blue-900 mb-4">
         Eligibility Criteria
        </h2>
        <p className="text-gray-700 text-lg mb-10 max-w-3xl">
          Before applying, make sure you meet the eligibility criteria for your chosen course:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white border border-blue-100 rounded-3xl shadow-md hover:shadow-lg transition-all p-6 space-y-4"
            >
              <h3 className="text-2xl font-semibold text-blue-800">{course.title}</h3>
              <div className="flex items-start gap-3">
                <Calendar className="text-blue-600 mt-1" size={20} />
                <p className="text-gray-700">
                  <span className="font-medium text-blue-700">Age:</span> {course.age}
                </p>
              </div>
              <div className="flex items-start gap-3">
                <GraduationCap className="text-blue-600 mt-1" size={20} />
                <p className="text-gray-700">
                  <span className="font-medium text-blue-700">Educational Qualification:</span>{" "}
                  {course.qualification}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// pages/index.jsx
import React from "react";

const CourseSection = ({ heading, duration, overview, keyHighlights }) => {
  return (
    <section className="bg-white rounded-2xl shadow-md p-6 md:p-10 max-w-4xl mx-auto my-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-2">{heading}</h2>
      <p className="text-sm text-gray-500 mb-4">Duration: {duration}</p>

      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-700 mb-2">Overview</h3>
        <p className="text-gray-600 whitespace-pre-line">{overview}</p>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-gray-700 mb-2">Key Highlights</h3>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          {keyHighlights.map((highlight, index) => (
            <li key={index}>{highlight}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default function Home() {
  const courses = [
    {
      heading: "Aircraft Maintenance Engineering (AME)",
      duration: "3 Years",
      overview: `The AME program at IIA is designed to provide in-depth knowledge of aircraft systems, maintenance protocols, and safety standards. Students will gain both theoretical and practical experience in aircraft maintenance, learning how to troubleshoot, repair, and maintain aircraft engines, electrical systems, and avionics.

Students also get hands-on training with live aircraft systems, offering real-world experience that meets industry standards. This program prepares students for a career as licensed Aircraft Maintenance Engineers (AME).`,
      keyHighlights: [
        "Practical training on live aircraft systems.",
        "Industry-approved curriculum, aligned with DGCA guidelines.",
        "Access to Jet Serve Aviation Pvt. Ltd. for training with real aircraft.",
      ],
    },
  
    {
      heading: "B.Sc. in Aircraft Maintenance Engineering (AME)",
      duration: "3 Years",
      overview: `This undergraduate program offers a combination of academic education and practical training in aircraft maintenance. Students will learn about aircraft systems, electrical and mechanical systems, and maintenance procedures, all while gaining industry experience through live aircraft training at IIA’s in-house fleet.`,
      keyHighlights: [
        "Accredited by DGCA and Gurugram University.",
        "Focused theoretical learning with practical training on live systems.",
        "Prepares students for DGCA licensing exams in Aircraft Maintenance.",
      ],
    },
    
   
  ];

  return (
    <main className="min-h-screen bg-gray-100 py-10 px-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-7.1 mx-auto">
        {courses.map((course, idx) => (
          <div
            key={idx}
            className={` "sm:col-span-2 flex justify-center" : ""`}
          >
            <CourseSection
              heading={course.heading}
              duration={course.duration}
              overview={course.overview}
              keyHighlights={course.keyHighlights}
            />
          </div>
        ))}
      </div>
    </main>
  );
  
}

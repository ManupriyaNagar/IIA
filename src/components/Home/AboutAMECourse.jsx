"use client";

import React from "react";

const AboutAMECourse = () => {
  return (
    <section className="bg-white py-20 relative">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-start">
      <div className="rounded-xl overflow-hidden shadow-lg">
          <img
            src="/ame.png"
            alt="AME course technician working"
            className="w-full h-200 object-cover"
          />
        </div>
        {/* Left Content */}
        <div>
          <h2 className="text-white bg-blue-900 px-6 py-2 rounded-md inline-block font-bold text-lg mb-6">
            ABOUT AME COURSE
          </h2>
          <p className="text-gray-800 mb-6 leading-relaxed">
            Aircraft Maintenance Engineering Course is related to maintenance and repair of aircraft. Candidate requires a lot of passion and skills to do AME Course. Aircraft Maintenance Engineer may make repairs, troubleshoot problem, conduct inspections and make upgrades to aircraft. Before pilot takes off AME has to check the aircraft properly and sign the Certificate then only flight can take- off. AME have very bright future as aircraft passengers are raising very frequently. The golden era has been started who desire to make their career in aviation. Aircraft Maintenance Engineering course that is approved by Director General of Civil Aviation, Govt. of India, Under the latest regulation CAR 147 (Basic), Academy of Aviation & Engineering is dedicated to the pursuit of excellence and committed to all the void of industry-ready and well- trained Aircraft Maintenance Engineers in the aviation industry.
          </p>

          <h3 className="text-indigo-900 text-xl font-bold mb-4">
            ALONG WITH AME COURSE WE OFFER BACHELOR DEGREE IN SCIENCE
          </h3>
          <p className="text-gray-800 leading-relaxed">
            Along AME Course Students are benefited with B.Sc (A.M.E) simultaneously from Gurugram University, Haryana. University registration fee and University exam fee shall be paid separately by the student to the University.
            <br /><br />
            Degree in B.Sc (A.M.E) and Aircraft Maintenance Engineering, in which students can appear for two different examinations for issue of Degree and Licence. At the end of the time student will have both Bachelor of Degree in Science & Aircraft Maintenance Engineering, by making him eligible for both Aircraft Maintenance and other General jobs.
            <br /><br />
            This will also enhance the placement probabilities.
            <br />
            Dual course is a combined course of Bachelor.
          </p>
        </div>

        {/* Right Image */}
       
      </div>
    </section>
  );
};

export default AboutAMECourse;

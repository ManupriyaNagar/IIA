'use client';

import React from 'react';

const AboutAMECourse = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-20 px-6 min-h-screen"
      style={{ backgroundImage: "url('/Ex.gif')" }} // Replace with your image path
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto space-y-10 text-[var(--foreground)]">
        
        {/* Heading */}
        <h2 className="text-white bg-black/80 px-6 py-2 rounded-md inline-block font-bold text-lg">
          ABOUT AME COURSE
        </h2>

        {/* First Paragraph */}
        <p className="leading-relaxed text-white">
          Aircraft Maintenance Engineering Course is related to maintenance and repair of aircraft. Candidate requires a lot of passion and skills to do AME Course. Aircraft Maintenance Engineer may make repairs, troubleshoot problem, conduct inspections and make upgrades to aircraft. Before pilot takes off AME has to check the aircraft properly and sign the Certificate then only flight can take-off. AME have very bright future as aircraft passengers are raising very frequently. The golden era has been started who desire to make their career in aviation. Aircraft Maintenance Engineering course that is approved by Director General of Civil Aviation, Govt. of India, Under the latest regulation CAR 147 (Basic), Academy of Aviation & Engineering is dedicated to the pursuit of excellence and committed to all the void of industry-ready and well-trained Aircraft Maintenance Engineers in the aviation industry.
        </p>

        {/* Image */}
        <div className="flex flex-row rounded-xl overflow-hidden shadow-lg">
          <img
            src="/A1.png"
            alt="AME course technician working"
            className="w-48 h-48 object-cover"
          />
           <img
            src="/A1.png"
            alt="AME course technician working"
            className="w-48 h-48 object-cover"
          />
           <img
            src="/A1.png"
            alt="AME course technician working"
            className="w-48 h-48 object-cover"
          />
           <img
            src="/A1.png"
            alt="AME course technician working"
            className="w-48 h-48 object-cover"
          />
           <img
            src="/A1.png"
            alt="AME course technician working"
            className="w-48 h-48 object-cover"
          />
        </div>

        {/* Second Heading */}
        <h3 className="text-white text-xl font-bold">
          ALONG WITH AME COURSE WE OFFER BACHELOR DEGREE IN SCIENCE
        </h3>

        {/* Second Paragraph */}
        <p className="leading-relaxed text-white">
          Along AME Course Students are benefited with B.Sc (A.M.E) simultaneously from Gurugram University, Haryana. University registration fee and University exam fee shall be paid separately by the student to the University.
          <br /><br />
          Degree in B.Sc (A.M.E) and Aircraft Maintenance Engineering, in which students can appear for two different examinations for issue of Degree and Licence. At the end of the time student will have both Bachelor of Degree in Science & Aircraft Maintenance Engineering, by making him eligible for both Aircraft Maintenance and other General jobs.
          <br /><br />
          This will also enhance the placement probabilities.
          <br />
          Dual course is a combined course of Bachelor.
        </p>
      </div>
    </section>
  );
};

export default AboutAMECourse;

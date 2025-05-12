'use client';

import React from 'react';

const CoursesEligibility = () => {
  return (
    <section className="bg-white py-10 px-4 md:px-10 text-gray-800">
      <div className="max-w-5xl mx-auto space-y-10">

        {/* Courses Offered Table */}
        <div>
          <h2 className="bg-[#031d4a] text-white text-lg font-semibold px-4 py-2 rounded-t-md inline-block">
            Courses offered by AMEEE
          </h2>
          <div className="border border-[#031d4a] rounded-md mt-4">
            <div className="grid grid-cols-2 border-b border-orange-400">
              <div className="font-semibold text-orange-600 px-4 py-2 border-r border-orange-400">
                Pilot Program
              </div>
              <div className="px-4 py-2">
                Commercial Pilot License (CPL) & Commercial Helicopter Pilot License (CHPL)
              </div>
            </div>
            <div className="grid grid-cols-2 border-b border-orange-400">
              <div className="font-semibold text-orange-600 px-4 py-2 border-r border-orange-400">
                Engineering Program
              </div>
              <div className="px-4 py-2">
                Aircraft Maintenance Engineering, Aeronautical Engineering & Aerospace Engineering
              </div>
            </div>
            <div className="grid grid-cols-2 border-b border-orange-400">
              <div className="font-semibold text-orange-600 px-4 py-2 border-r border-orange-400">
                Graduation Program
              </div>
              <div className="px-4 py-2">
                B.Sc. in AME & B.Sc. in Aviation
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="font-semibold text-orange-600 px-4 py-2 border-r border-orange-400">
                Certificates Program
              </div>
              <div className="px-4 py-2">
                Cabin Crew, Airport Ground Staff, Airport Management
              </div>
            </div>
          </div>
        </div>

        {/* Eligibility Criteria */}
        <div>
          <h2 className="bg-[#031d4a] text-white text-lg font-semibold px-4 py-2 rounded-t-md inline-block">
            AMEEE Exam 2025 Eligibility :-
          </h2>
          <ul className="list-disc list-inside mt-3 space-y-2 text-sm md:text-base">
            <li>
              Candidates must be between 17 and 30 years of age at the time of Admission.
            </li>
            <li>
              Candidates who have either appeared for or passed their 12th Grade with Physics, Chemistry &
              Mathematics, or obtained 3-years Engineering Diploma are eligible.
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default CoursesEligibility;

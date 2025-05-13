'use client';

import React from 'react';
import { Briefcase, CalendarDays } from 'lucide-react';

const recruitingCompanies = [
  'Airlines and Charter Companies',
  'Aviation Maintenance, Repair, and Overhaul (MRO) Firms',
  'Aircraft Manufacturers',
  'Defense Contractors',
  'Aerospace Research Organizations',
  'Aviation Consulting Firms',
  'Regulatory Bodies (e.g., DGCA, EASA)',
  'Air Traffic Control Centers',
  'Aviation Training Institutes',
  'Airport Authorities',
  'Aviation Security Firms',
  'Corporate Aviation Departments',
  'Aviation Research and Development',
];

const eventDates = [
  'Release of Application Form',
  'AMEEE Application Form Last Date',
  'AMEEE Admit Card',
  'AMEEE Examination',
  'AMEEE Result',
  'Admission Counseling',
];

const RecruitmentSection = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-10">
      <div className="max-w-7xl mx-auto space-y-12">

        {/* Recruiting Companies */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Briefcase className="w-6 h-6 text-blue" />
            Recruiting Companies in the Aviation Industry
          </h2>
          <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 list-disc list-inside text-gray-700">
            {recruitingCompanies.map((company, idx) => (
              <li key={idx} className="bg-white shadow rounded p-3 border-l-4 border-blue-500">
                {company}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-gray-600">
            These companies hire professionals for various roles such as <strong>pilots</strong>,
            <strong> engineers</strong>, <strong>maintenance personnel</strong>, and
            <strong> management positions</strong>.
          </p>
        </div>

        {/* Event Dates */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <CalendarDays className="w-6 h-6 text-green-600" />
            AMEEE Important Events
          </h2>
          <ol className="space-y-4 border-l-4 border-green-500 pl-4">
            {eventDates.map((event, idx) => (
              <li key={idx} className="relative">
                <span className="absolute -left-3 top-1.5 w-3 h-3 bg-green-500 rounded-full"></span>
                <span className="text-gray-700 font-medium">{event}</span>
              </li>
            ))}
          </ol>
        </div>

      </div>
    </section>
  );
};

export default RecruitmentSection;

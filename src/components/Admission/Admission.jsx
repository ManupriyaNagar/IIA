'use client';

import { CheckCircle } from 'lucide-react';

export default function AdmissionProcedure() {
  const steps = [
    "Create an account or log in to the admission portal on the IIA official website.",
    "Fill out the online application form with accurate personal and academic details.",
    "Upload required documents such as educational certificates and identification proof.",
    "Choose your preferred course and specialization from the available programs.",
    "Pay the application fee through the secure payment gateway.",
    "Wait for confirmation and further communication from the admissions team.",
    "Attend the counseling session or entrance test, if applicable.",
    "Complete the final enrollment process upon selection.",
  ];

  return (
    <section className="bg-gradient-to-b from-blue-50 via-white to-blue-50 py-16 px-4 md:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6 leading-snug">
          Admission Procedure for Indraprasth Institute of Aeronautics (IIA)
          <br />
          <span className="text-xl font-medium text-blue-700">(AME & AME + BSc Programs)</span>
        </h2>

        <p className="text-gray-700 mb-10 text-lg leading-relaxed">
          At Indraprasth Institute of Aeronautics (IIA), we are committed to ensuring a smooth,
          transparent, and hassle-free admission process for all aspiring aviation professionals. Our
          step-by-step procedure is designed to guide candidates through the application journey with
          ease and confidence.
        </p>

        <h3 className="text-2xl font-semibold text-blue-800 mb-6">How to Apply:</h3>

        <div className="space-y-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex items-start gap-4 bg-white p-4 rounded-xl shadow hover:shadow-md transition"
            >
              <div className="min-w-[30px] h-[30px] bg-blue-600 text-white flex items-center justify-center rounded-full font-semibold text-sm">
                {index + 1}
              </div>
              <p className="text-gray-800 leading-relaxed">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

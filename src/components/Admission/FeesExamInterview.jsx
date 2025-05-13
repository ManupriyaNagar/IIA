// components/FeesExamInterview.tsx
export default function FeesExamInterview() {
    return (
      <section className="bg-white py-12 px-4 md:px-20">
        <div className="max-w-6xl mx-auto space-y-16">
  
          {/* Step 5: Pay Registration Fees */}
          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Step 5: Pay Registration Fees</h2>
            <p className="text-gray-700 text-lg mb-4">
              After submitting the application form, candidates need to pay the registration fee to complete the application process. The fee can be paid through:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-800">
              <li><strong>Online Payment:</strong> Via credit/debit card, net banking, or UPI.</li>
              <li><strong>Demand Draft:</strong> Payable to Indraprasth Institute of Aeronautics, Gurgaon.</li>
            </ul>
            <p className="text-blue-800 mt-3 font-medium">The registration fee is ₹500, which is non-refundable.</p>
          </div>
  
          {/* Step 6: Entrance Examination */}
          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Step 6: Entrance Examination (AMEEE)</h2>
            <p className="text-gray-700 text-lg mb-4">
              For programs like Aircraft Maintenance Engineering (AME), students must appear for the AME Entrance Examination (AMEEE), which assesses knowledge in Physics, Chemistry, and Mathematics.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-800">
              <li><strong>Registration Date:</strong> Starting from January 2025.</li>
              <li><strong>Examination Date:</strong> To be announced.</li>
              <li><strong>Mode:</strong> Objective Type Questions (100 questions, no negative marking).</li>
              <li><strong>Exam Language:</strong> Available in Hindi and English.</li>
            </ul>
          </div>
  
          {/* Step 7: Interview and Counseling */}
          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Step 7: Interview and Counseling</h2>
            <p className="text-gray-700 text-lg mb-4">
              Once you clear the entrance exam (if applicable), you’ll attend an interview and counseling session. This helps us understand your aspirations and ensure the best course fit.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-800">
              <li>The interview is conducted by a panel of senior faculty members.</li>
              <li>After the interview, you will be informed about your admission status.</li>
            </ul>
          </div>
  
        </div>
      </section>
    );
  }
  
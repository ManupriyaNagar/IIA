// components/FinalSteps.tsx
export default function FinalSteps() {
    return (
      <section className="bg-blue-50 py-12 px-4 md:px-20">
        <div className="max-w-6xl mx-auto space-y-16">
  
          {/* Step 8: Admission Confirmation */}
          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Step 8: Admission Confirmation</h2>
            <p className="text-gray-700 text-lg mb-4">
              After the interview, selected candidates will receive an admission offer letter from IIA. To confirm your admission:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-800">
              <li>Pay the required fee (as per the fee structure) to secure your seat.</li>
              <li>Submit any additional documents requested by the institution.</li>
              <li>Complete the orientation process to get familiar with the campus and academic guidelines.</li>
            </ul>
          </div>
  
          {/* Step 9: Join the Course */}
          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Step 9: Join the Course</h2>
            <p className="text-gray-700 text-lg mb-4">
              After confirming your admission, attend the orientation session and begin your journey at IIA:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-800">
              <li><strong>Commencement of Classes:</strong> As per the schedule in your admission letter.</li>
              <li>Get access to world-class training facilities and hands-on learning modules from day one.</li>
            </ul>
          </div>
  
          {/* Step 10: Campus Life and Support */}
          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Step 10: Campus Life and Support</h2>
            <p className="text-gray-700 text-lg mb-4">
              At IIA, you'll enjoy a vibrant and supportive campus environment with opportunities to grow:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-800">
              <li><strong>Hostel and Accommodation:</strong> Comfortable housing for national and international students.</li>
              <li><strong>Internships:</strong> Real-world exposure through our aviation industry collaborations.</li>
              <li><strong>Workshops and Seminars:</strong> Regular expert-led events to enhance learning and networking.</li>
            </ul>
          </div>
  
          {/* Contact Information */}
          <div className="bg-white border border-blue-100 rounded-2xl shadow-md p-6">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Contact Information</h3>
            <ul className="text-gray-800 space-y-2">
              <li><strong>Phone:</strong> +91 9212170022 / 33</li>
              <li><strong>Email:</strong> <a href="mailto:admission@iiagurgaon.com" className="text-blue-700 underline">admission@iiagurgaon.com</a></li>
              <li><strong>Website:</strong> <a href="https://www.iiagurgaon.com" target="_blank" className="text-blue-700 underline">www.iiagurgaon.com</a></li>
              <li>
                <strong>Address:</strong><br />
                Indraprasth Aerospace & Knowledge Park,<br />
                Sector – 77, Delhi-Jaipur National Highway (NH-08),<br />
                Gurgaon, Haryana – 122004
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
  
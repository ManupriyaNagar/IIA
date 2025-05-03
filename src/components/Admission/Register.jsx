// components/RegistrationAndDocuments.tsx
export default function RegistrationAndDocuments() {
    const registrationSteps = [
      "Visit the official IIA website: www.iiagurgaon.com",
      "Go to the Admissions section and click on Apply Now.",
      "Fill in the application form with your personal details, educational qualifications, and course preferences.",
    ];
  
    const documents = [
      "Photocopy of 12th Marks Sheet (for Class 12 students).",
      "Aadhar Card (for identity verification).",
      "Passport-size Photograph (6 copies).",
      "Character Certificate from the school/college.",
      "Medical Certificate (for the AMEEE Exam and general health verification).",
      "Proof of Age (Birth Certificate or 10th-grade certificate).",
      "Transfer Certificate from the previous institution (if applicable).",
    ];
  
    return (
      <section className="bg-gradient-to-b from-blue-50 to-white py-12 px-4 md:px-20">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Step 3 */}
          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Step 3: Register Online</h2>
            <p className="text-gray-700 text-lg mb-6">
              To apply for your chosen course at IIA, you need to complete the online registration:
            </p>
            <ul className="list-disc list-inside space-y-3 text-gray-800">
              {registrationSteps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ul>
          </div>
  
          {/* Step 4 */}
          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Step 4: Submit Required Documents</h2>
            <p className="text-gray-700 text-lg mb-6">
              Along with your application form, make sure to upload the following documents:
            </p>
            <ul className="list-disc list-inside space-y-3 text-gray-800">
              {documents.map((doc, index) => (
                <li key={index}>{doc}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    );
  }
  
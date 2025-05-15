import React from 'react';

const Page = () => {
  return (
    <div className="max-w-5xl mx-auto p-8  min-h-screen flex flex-col">
      <h1 className="text-4xl font-extrabold mb-8 uppercase text-center text-gray-800 drop-shadow-md">
        Forms Preview & Download
      </h1>

      {/* PDF Previews */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Medical Form */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-xl font-semibold mb-3 px-6 pt-6 text-blue-700">
            Medical Form Preview
          </h2>
          <embed
            src="/sample1.pdf"
            type="application/pdf"
            width="100%"
            height="550px"
            className="border-t border-gray-200"
          />
        </div>

        {/* Admission Form */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-xl font-semibold mb-3 px-6 pt-6 text-green-700">
            Admission Form Preview
          </h2>
          <embed
            src="/sample2.pdf"
            type="application/pdf"
            width="100%"
            height="550px"
            className="border-t border-gray-200"
          />
        </div>
      </div>

      {/* Download Buttons */}
      <div className="mt-10 flex justify-center gap-8">
        <a
          href="/sample1.pdf"
          download
          className="inline-block bg-blue-600 text-white font-semibold px-8 py-3 rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg transition duration-300"
          aria-label="Download Medical Form"
        >
          Download Medical Form
        </a>
        <a
          href="/sample2.pdf"
          download
          className="inline-block bg-green-600 text-white font-semibold px-8 py-3 rounded-full shadow-md hover:bg-green-700 hover:shadow-lg transition duration-300"
          aria-label="Download Admission Form"
        >
          Download Admission Form
        </a>
      </div>
    </div>
  );
};

export default Page;

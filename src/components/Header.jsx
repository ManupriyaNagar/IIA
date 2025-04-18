import Head from 'next/head';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-indigo-800 text-white shadow-md">
      <nav className="bg-indigo-900 px-6 py-4 overflow-x-auto">
        <ul className="flex items-center space-x-6 text-sm lg:text-base font-medium whitespace-nowrap">
          <li><a href="#" className="hover:text-yellow-400 transition duration-300">Home</a></li>

          {/* IIA Dropdown */}
          <li className="relative group">
            <a href="#" className="hover:text-yellow-400 transition duration-300">IIA</a>
            <ul className="absolute top-full left-0 hidden group-hover:block bg-gray-800 mt-2 rounded shadow-lg z-50 min-w-[200px]">
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-700 rounded">About IIA</a></li>
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-700 rounded">Managing Director Message</a></li>
            </ul>
          </li>

          <li><a href="#" className="hover:text-yellow-400 transition duration-300">Academics</a></li>
          <li><a href="#" className="hover:text-yellow-400 transition duration-300">Approvals</a></li>
          <li><a href="#" className="hover:text-yellow-400 transition duration-300">Mou & Tieups</a></li>

          {/* Courses Dropdown */}
          <li className="relative group">
            <a href="#" className="hover:text-yellow-400 transition duration-300">Our Courses</a>
            <ul className="absolute top-full left-0 hidden group-hover:block bg-gray-800 mt-2 rounded shadow-lg z-50 min-w-[200px]">
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-700 rounded">AME Course</a></li>
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-700 rounded">Fee Structure</a></li>
            </ul>
          </li>

          {/* Campus Life Dropdown */}
          <li className="relative group">
            <a href="#" className="hover:text-yellow-400 transition duration-300">Campus Life</a>
            <ul className="absolute top-full left-0 hidden group-hover:block bg-gray-800 mt-2 rounded shadow-lg z-50 min-w-[220px]">
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-700 rounded">Admission</a></li>
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-700 rounded">Eligibility</a></li>
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-700 rounded">Why Choose IIAG</a></li>
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-700 rounded">Download Medical Certificate</a></li>
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-700 rounded">Offline Admission Form</a></li>
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-700 rounded">AMEEE</a></li>
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-700 rounded">Education Loan</a></li>
            </ul>
          </li>

          <li><a href="#" className="hover:text-yellow-400 transition duration-300">Gallery</a></li>
          <li><a href="#" className="hover:text-yellow-400 transition duration-300">Media</a></li>
          <li><a href="#" className="hover:text-yellow-400 transition duration-300">Testimonials</a></li>
          <li><a href="#" className="hover:text-yellow-400 transition duration-300">Contact Us</a></li>
          <li>
            <a
              href="#"
              className="bg-yellow-500 text-gray-900 px-4 py-2 rounded hover:bg-yellow-600 transition duration-300"
            >
              Enquiry Now
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

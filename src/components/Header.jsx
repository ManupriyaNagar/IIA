'use client';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-indigo-800 text-white shadow-md">
      <nav className="bg-indigo-900 px-4 py-4 relative">
        {/* Mobile Menu Toggle */}
        <div className="flex justify-between items-center md:hidden">
          <span className="text-lg font-semibold">IIA Gurgaon</span>
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Nav Links */}
          <ul
    className={`${
      menuOpen ? 'block' : 'hidden'
    } md:flex w-full md:justify-evenly   /* ← full width + evenly spaced */
       flex-col md:flex-row 
       md:items-center 
       md:space-x-6 space-y-2 md:space-y-0 
       mt-4 md:mt-0 
       text-sm lg:text-base 
       font-medium whitespace-nowrap 
       z-50`}
  >
          <li><a href="/" className="hover:text-yellow-400 transition">Home</a></li>

          {/* IIA Dropdown */}
          <li className="relative group">
            <a href="#" className="hover:text-yellow-400 transition">IIA</a>
            <ul className="md:absolute md:top-full left-0 hidden group-hover:md:block bg-gray-800 rounded shadow-lg min-w-[200px] z-50">
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-700 rounded">About IIA</a></li>
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-700 rounded">Managing Director Message</a></li>
            </ul>
          </li>

          <li><a href="#" className="hover:text-yellow-400 transition">Academics</a></li>
          <li><a href="#" className="hover:text-yellow-400 transition">Approvals</a></li>
          <li><a href="#" className="hover:text-yellow-400 transition">Admission</a></li>

          {/* Courses Dropdown */}
          <li className="relative group">
            <a href="#" className="hover:text-yellow-400 transition">Our Courses</a>
            <ul className="md:absolute md:top-full left-0 hidden group-hover:md:block bg-gray-800 rounded shadow-lg min-w-[200px] z-50">
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-700 rounded">AME Course</a></li>
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-700 rounded">Fee Structure</a></li>
            </ul>
          </li>

          {/* Campus Life Dropdown */}
          <li className="relative group">
            <a href="#" className="hover:text-yellow-400 transition">Campus Life</a>
            <ul className="md:absolute md:top-full left-0 hidden group-hover:md:block bg-gray-800 rounded shadow-lg min-w-[220px] z-50">
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-700 rounded">Admission</a></li>
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-700 rounded">Eligibility</a></li>
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-700 rounded">Why Choose IIAG</a></li>
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-700 rounded">Download Medical Certificate</a></li>
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-700 rounded">Offline Admission Form</a></li>
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-700 rounded">AMEEE</a></li>
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-700 rounded">Education Loan</a></li>
            </ul>
          </li>

          <li><a href="#" className="hover:text-yellow-400 transition">Gallery</a></li>
          <li><a href="#" className="hover:text-yellow-400 transition">Media</a></li>
          <li><a href="#" className="hover:text-yellow-400 transition">Testimonials</a></li>
          <li><a href="#" className="hover:text-yellow-400 transition">Contact Us</a></li>
          <li>
          <a
  href="/enquirynow"
  className="relative inline-block bg-yellow-500 text-gray-900 font-bold px-4 py-2 rounded-full overflow-visible transition-all duration-300 hover:bg-yellow-600"
>
  {/* animated border */}
  <span className="absolute inset-0 border-2 border-yellow-400 rounded-full animate-ping"></span>
  {/* button content */}
  <span className="relative">Direct Admission</span>
</a>


          </li>
        </ul>
      </nav>
    </header>
  );
}

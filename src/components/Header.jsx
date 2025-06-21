'use client';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // NEW

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <header className="bg-blue text-white shadow-md">
      <nav className="bg-blue px-4 py-4 relative">

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
          } md:flex w-full md:justify-evenly flex-col md:flex-row 
            md:items-center md:space-x-6 space-y-2 md:space-y-0 
            mt-4 md:mt-0 text-sm lg:text-base font-medium whitespace-nowrap z-50`}
        >
          <li><a href="/" className="hover:text-orange transition">Home</a></li>

          {/* Click Dropdown - IIA */}
          <li className="relative">
          
            <button onClick={() => toggleDropdown('iia')} className="hover:text-orange transition">
              IIA
            </button>
         
            <ul className={`absolute top-full left-0 bg-gradient-to-r from-orange to-pink rounded shadow-lg min-w-[200px] z-50 transform transition-all duration-300 ease-out mt-6
              ${openDropdown === 'iia' ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0 pointer-events-none'}`}>
              <li><a href="/IIAG" className="block px-4 py-2 hover:bg-blue rounded">About IIA</a></li>
              <li><a href="/IIAG/message" className="block px-4 py-2 hover:bg-blue rounded">Managing Director Message</a></li>
            </ul>
          </li>

          <li><a href="/Academics" className="hover:text-orange transition">Academics</a></li>
          <li><a href="/AMEEE" className="hover:text-orange transition">AMEEE</a></li>
          <li><a href="/Admission" className="hover:text-orange transition">Admission</a></li>

          {/* Click Dropdown - Courses */}
          <li className="relative">
           
            <button onClick={() => toggleDropdown('courses')} className="hover:text-orange transition">
              Our Courses
            </button>
            
            <ul className={`absolute top-full left-0 bg-gradient-to-r from-orange to-pink rounded shadow-lg min-w-[200px] z-50 transform transition-all duration-300 ease-out mt-6
              ${openDropdown === 'courses' ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0 pointer-events-none'}`}>
              <li><a href="/OurCourses" className="block px-4 py-2 hover:bg-blue rounded">AME Course</a></li>
              <li><a href="/OurCourses" className="block px-4 py-2 hover:bg-blue rounded">Fee Structure</a></li>
            </ul>
          </li>

          {/* Click Dropdown - Campus Life */}
          <li className="relative">
          
            <button onClick={() => toggleDropdown('campus')} className="hover:text-orange transition">
              Campus Life
            </button>
            
            <ul className={`absolute top-full left-0 bg-gradient-to-r from-orange to-pink rounded shadow-lg min-w-[220px] z-50 transform transition-all duration-300 ease-out mt-6
              ${openDropdown === 'campus' ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0 pointer-events-none'}`}>
              <li><a href="/CampusLife" className="block px-4 py-2 hover:bg-blue rounded">Admission</a></li>
              <li><a href="/CampusLife/eligibility" className="block px-4 py-2 hover:bg-blue rounded">Eligibility</a></li>
              <li><a href="/CampusLife/whychoose" className="block px-4 py-2 hover:bg-blue rounded">Why Choose IIAG</a></li>
              <li><a href="/certificate" className="block px-4 py-2 hover:bg-blue rounded">Download Medical Certificate</a></li>
              <li><a href="/CampusLife" className="block px-4 py-2 hover:bg-blue rounded">Offline Admission Form</a></li>
              <li><a href="/AMEEE" className="block px-4 py-2 hover:bg-blue rounded">AMEEE</a></li>
              <li><a href="/CampusLife" className="block px-4 py-2 hover:bg-blue rounded">Education Loan</a></li>
            </ul>
          </li>

          <li className="relative">
          
          <button onClick={() => toggleDropdown('news&events')} className="hover:text-orange transition">
            News & Events
          </button>
       
          <ul className={`absolute top-full left-0 bg-gradient-to-r from-orange to-pink rounded shadow-lg min-w-[200px] z-50 transform transition-all duration-300 ease-out mt-6
            ${openDropdown === 'news&events' ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0 pointer-events-none'}`}>
            <li><a href="/news&events/blogs" className="block px-4 py-2 hover:bg-blue rounded">Blogs</a></li>
            <li><a href="/news&events/Gallery" className="block px-4 py-2 hover:bg-blue rounded">Gallery</a></li>
            <li><a href="/news&events/Media" className="block px-4 py-2 hover:bg-blue rounded">Media</a></li>
            <li><a href="/news&events/Testimonials" className="block px-4 py-2 hover:bg-blue rounded">Testimonial</a></li>
          </ul>
        </li>
 


          <li><a href="/ContactUs" className="hover:text-orange transition">Contact Us</a></li>

          <li>
            <a
              href="/enquirynow"
              className="relative inline-block bg-gradient-to-r from-orange to-pink hover:from-pink hover:to-orange text-gray-900 font-bold px-4 py-2 rounded-full overflow-hidden transition-all duration-300 hover:bg-yellow-600"
            >
              <span className="absolute inset-0 rounded-full border-2 border-yellow-400 opacity-50 animate-slow-ping"></span>
              <span className="relative text-white from-yellow-500 to-orange-500">Direct Admission</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

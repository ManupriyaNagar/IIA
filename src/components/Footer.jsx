import Image from 'next/image';
import { FaFacebookF, FaYoutube, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-indigo-950 text-white pt-16 pb-8 px-6">
      {/* Top Section - Newsletter */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start mb-12 text-center md:text-left">
        {/* Logo */}
        <div className="mb-6 md:mb-0">
          <Image src="/5.png" alt="Graduation Cap" width={300} height={250} />
        </div>

        {/* Text */}
        <div className="mb-6 md:mb-0 md:w-1/2">
          <h2 className="text-2xl font-semibold">Get The Latest IIA Gurgoan News</h2>
          <p className="text-gray-300 text-sm mt-1">Delivered To Your Inbox</p>
        </div>

        {/* Input */}
        <div className="flex flex-col sm:flex-row w-full max-w-md gap-2 mt-4 md:mt-0">
          <input
            type="email"
            placeholder="Email"
            className="flex-grow px-4 py-2 rounded bg-white text-black focus:outline-none"
          />
          <button
            type="submit"
            className="bg-green-700 hover:bg-green-600 px-6 py-2 rounded text-white"
          >
            Send
          </button>
        </div>
      </div>

      <div className="border-t border-gray-700 mb-8"></div>

      {/* Footer Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 text-center md:text-left md:grid-cols-5 gap-8 text-sm mb-10">
        {/* Head Office */}
        <div>
          <h4 className="font-semibold text-lg mb-3">Head Office</h4>
          <p className="text-gray-300">
            Indraprasth Aerospace & Knowledge Park, Sector – 77,<br />
            Delhi Jaipur National Highway (NH-8), Gurgaon, HR – 122004
          </p>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold text-lg mb-3">Our Contacts</h4>
          <p className="text-gray-300">Support & Helpdesk</p>
          <p className="text-gray-300 ">admission@iiagurgaon.com</p>
          <p className="text-gray-300 ">9212170033/22</p>
          <p className="text-gray-300 ">1800 309 0503</p>

          
          <button className="inline-block mt-4 bg-gradient-to-r from-orange to-pink text-white font-semibold py-2 px-6 rounded-full shadow-lg hover:from-pink hover:to-orange transition-all duration-300">
            Enquire Now
          </button>
        </div>

        {/* About */}
        <div>
          <h4 className="font-semibold text-lg mb-3">About</h4>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Managing Director Message</a></li>
            <li><a href="#">Campus Life</a></li>
            <li><a href="#">Eligibility</a></li>
            <li><a href="#">Why Choose IIAG</a></li>
          </ul>
        </div>

        {/* Courses */}
        <div>
          <h4 className="font-semibold text-lg mb-3">Our Courses</h4>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#">AME Course</a></li>
            <li><a href="#">Fee Structure</a></li>
            <li><a href="#">Education Loan</a></li>
          </ul>
          <button className="inline-block mt-4 bg-gradient-to-r from-orange to-pink text-white font-semibold py-2 px-6 rounded-full shadow-lg hover:from-pink hover:to-orange transition-all duration-300">
            Student Placement Record
          </button>
        </div>

        {/* Social */}
        <div>
          <h4 className='font-semibold text-lg mb-3'>Follow US:</h4>
       
      <div className="flex justify-center gap-6 text-xl pr-5 mr-19">
       
       
  <a href="https://www.facebook.com/iiagurgoan/" aria-label="Facebook" className="hover:text-blue-500 transition">
    <FaFacebookF />
  </a>
  <a href="https://www.youtube.com/@IndraprasthInstituteOfAeronaut" aria-label="YouTube" className="hover:text-red-600 transition">
    <FaYoutube />
  </a>
  <a href="https://www.instagram.com/iiag.ame?igsh=MWVuaXNsNm9xaTN0dA==" aria-label="Instagram" className="hover:text-pink-500 transition">
    <FaInstagram />
  </a>
</div>
</div>

        </div>
    

      {/* Bottom Text */}
      <div className="text-center text-gray-500 text-sm border-t border-gray-700 pt-6 pb-4 px-4">
  {/* Logo */}


  {/* Horizontal line and text block in center */}
  <div className="flex items-center justify-center w-full">
    {/* Left line */}
    <div className="h-px bg-white flex-1" />

    {/* Centered text column */}
    <div className="px-4 text-white text-sm items-center space-y-1">
     
      <p>Indraprasth Institute of Aeronautics Gurgaon. © 2025. All Rights Reserved.</p>
   
    </div>
        <div className="h-px bg-white flex-1" />
       
      
    

    {/* Right line */}


  </div>
   <p className="font-semibold text-blue-400">
  Powered By{" "}
  <a
    href="https://www.rbshstudio.com" // replace with the actual URL if different
    target="_blank"
    rel="noopener noreferrer"
    className=" hover:text-blue-600"
  >
    RBSH STUDIO
  </a>
</p>

</div>

    </footer>
  );
}

import Image from 'next/image';

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
          <p className="text-white text-xl font-bold mb-4">1800 3090503</p>
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
          <h4 className="font-semibold text-lg mb-3">Follow Us</h4>
          <div className="flex justify-center gap-6 text-xl">
        <a href="#" aria-label="Facebook" className="hover:text-blue-500 transition">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#" aria-label="YouTube" className="hover:text-red-600 transition">
          <i className="fab fa-youtube"></i>
        </a>
        <a href="#" aria-label="Instagram" className="hover:text-pink-500 transition">
          <i className="fab fa-instagram"></i>
        </a>
      </div>

        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center text-gray-500 text-sm border-t border-gray-700 pt-6 pb-4 px-4">
  {/* Logo */}
  <div className="flex justify-center">
    <Image
      src="/u.png" // Replace with actual path
      alt="RBSH Logo"
      width={100}
      height={100}
      className="object-contain"
    />
  </div>

  {/* Horizontal line and text block in center */}
  <div className="flex items-center justify-center w-full">
    {/* Left line */}
    <div className="h-px bg-white flex-1" />

    {/* Centered text column */}
    <div className="px-4 text-white text-sm flex flex-col items-center space-y-1">
      <p className="font-semibold text-blue-400">Powered By RBSH STUDIO</p>
      <p>Indraprasth Institute of Aeronautics Gurgaon. © 2025. All Rights Reserved.</p>
    </div>

    {/* Right line */}
    <div className="h-px bg-white flex-1" />
  </div>
</div>

    </footer>
  );
}

import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-indigo-950 text-white pt-16 pb-8 px-6">
      {/* Top Section - Newsletter */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center mb-12">
        <div className="mb-6 md:mb-0 ">
          <Image src="/5.png" alt="Graduation Cap" width={250} height={250}  />
        </div>
        <div className="text-center md:text-left mb-6 md:mb-0 md:w-1/2">
          <h2 className="text-2xl font-semibold">Get The Latest Unione News</h2>
          <p className="text-gray-300 text-sm mt-1">Delivered To Your Inbox</p>
        </div>
        <div className="flex w-full max-w-md mt-4 md:mt-0">
          <input
            type="email"
            placeholder="Email"
            className="flex-grow px-4 py-2 rounded-l bg-white text-black focus:outline-none"
          />
          <button
            type="submit"
            className="bg-green-700 hover:bg-green-600 px-6 py-2 rounded-r text-white"
          >
            Send
          </button>
        
        </div>
      </div>

      <div className="border-t border-gray-700 mb-8"></div>

      {/* IIAG Style Section from Image */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 text-sm mb-10">
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
          <button className="bg-yellow-500 hover:bg-yellow-400 text-black px-4 py-2 rounded font-semibold">
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
            <li><a href="#">Ame Course</a></li>
            <li><a href="#">Fee Structure</a></li>
            <li><a href="#">Education Loan</a></li>
          </ul>
          <button className="bg-yellow-500 hover:bg-yellow-400 text-black px-4 py-2 rounded mt-4 font-semibold">
            Student Placement Record
          </button>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="font-semibold text-lg mb-3">Follow Us</h4>
          <div className="flex gap-4 text-xl text-white">
            <a href="#"><i className="fab fa-facebook">📘</i></a>
            <a href="#"><i className="fab fa-instagram">📷</i></a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center text-gray-500 text-sm border-t border-gray-700 pt-4">
        Indraprasth Institute of Aeronautics Gurgaon. © 2025. All Rights Reserved.
      </div>
    </footer>
  );
}

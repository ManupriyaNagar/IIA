import { Search } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="bg-white border-b border-gray-200 px-4 py-3">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4">
        
        {/* Left: Contact Info */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <img
              src="https://demo.strongtheme.com/unione/wp-content/uploads/sites/3/2021/05/uniico047.png"
              alt="Support"
              className="h-8 w-8"
            />
            <div className="text-center sm:text-left">
              <div className="font-semibold">Support & Helpdesk</div>
              <div className="text-xs">18003090503 / +91-9212170033</div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <img
              src="https://demo.strongtheme.com/unione/wp-content/uploads/sites/3/2021/05/uniico046.png"
              alt="Email"
              className="h-8 w-8"
            />
            <div className="text-center sm:text-left">
              <div className="font-semibold">Email Center</div>
              <div className="text-xs">admission@iiagurgaon.com</div>
            </div>
          </div>
        </div>

        {/* Center: Logo and Heading Side by Side */}
        <div className="flex items-center gap-3 md:gap-4 text-center md:text-left">
          <img
            src="/5.png"
            alt="IIA Logo"
            className="h-16 md:h-24 object-contain"
          />
          <div className='text-center'>
            <h1 className="text-lg md:text-2xl font-extrabold text-indigo-900 uppercase leading-tight">
              Indraprasth Institute of Aeronautics
            </h1>
            <h3 className="text-xs md:text-sm font-semibold text-indigo-900 uppercase mt-1">
              DGCA Approved Ministry of Civil Aviation
              <br />
              Government of India
            </h3>
          </div>
        </div>

        {/* Right: Search Bar */}
        <div className="w-full sm:w-auto flex items-center border border-gray-300 px-3 py-2 rounded-md">
          <Search className="w-4 h-4 text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full outline-none text-sm text-gray-700 placeholder-gray-400 bg-transparent"
          />
        </div>

      </div>
    </div>
  );
}

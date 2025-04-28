import { Search } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="bg-white border-b border-gray-200 px-4 py-3">
      <div className="flex items-center justify-between gap-6 md:gap-4">

        {/* Left: Logo */}
        <div className="flex items-center gap-3 md:gap-4">
          <img
            src="/Logo.gif"
            alt="IIA Logo"
            className="h-18 md:h-28 object-contain"
          />
          <div className="text-center md:text-left">
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

        {/* Right: Contact Info in a single line */}
        <div className="flex flex-col items-left text-sm text-gray-600 mr-10">
          
          {/* Support & Helpdesk */}
          <a
            href="https://wa.me/919212170033"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <img
              src="https://demo.strongtheme.com/unione/wp-content/uploads/sites/3/2021/05/uniico047.png"
              alt="Support"
              className="h-8 w-8"
            />
            <div className="text-left">
              {/* <div className="font-semibold">Support & Helpdesk</div> */}
              <div className="text-xs">18003090503 / +91-9212170033</div>
            </div>
          </a>

          {/* Email Center */}
          <a
            href="mailto:admission@iiagurgaon.com"
            className="flex items-center"
          >
            <img
              src="https://demo.strongtheme.com/unione/wp-content/uploads/sites/3/2021/05/uniico046.png"
              alt="Email"
              className="h-8 w-8 "
            />
            <div className="text-left">
              {/* <div className="font-semibold">Email Center</div> */}
              <div className="text-xs">admission@iiagurgaon.com</div>
            </div>
          </a>

        </div>

      </div>
    </div>
  );
}

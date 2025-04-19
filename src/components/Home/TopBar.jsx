import { Search } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="bg-white border-b border-gray-200 px-4 py-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left: Contact Info */}
        <div className="flex flex-col md:flex-row md:items-center gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <img
              src="https://demo.strongtheme.com/unione/wp-content/uploads/sites/3/2021/05/uniico047.png"
              alt="Support"
              className="h-8 w-8"
            />
            <div>
              <div className="font-semibold">Support & Helpdesk</div>
              <div className="text-xs">18003090503 / 09212170022/33</div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <img
              src="https://demo.strongtheme.com/unione/wp-content/uploads/sites/3/2021/05/uniico046.png"
              alt="Email"
              className="w-8 h-8"
            />
            <div>
              <div className="font-semibold">Email center</div>
              <div className="text-xs">admission@iiagurgaon.com</div>
            </div>
          </div>
        </div>

        {/* Center: Logo */}
        <div className="flex items-center">
  <img
    src="/5.png"
    alt="IIA Logo"
    className="h-12"
  />
  <span className="text-xl md:text-2xl font-bold text-indigo-900">
    IIA Gurgaon
  </span>
</div>

        {/* Right: Search Bar */}
        <div className="w-full md:w-60 flex items-center border border-gray-300 px-2 py-1 rounded-md">
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

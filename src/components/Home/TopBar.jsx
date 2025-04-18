// components/TopBar.tsx
import { Mail, MessageSquare, Search } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="flex items-center justify-between px-8 py-4 border-b border-gray-200 bg-white">
      {/* Left: Contact Info */}
      <div className="flex items-center space-x-8">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <img src="	https://demo.strongtheme.com/unione/wp-content/uploads/sites/3/2021/05/uniico047.png" alt="" className='h-8 w-8'/>
          <div>
            <div className="font-semibold">Suport & Helpdesk</div>
            <div className="text-xs"> 18003090503 09212170022/33

 </div>
          </div>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-600">
           <img src="https://demo.strongtheme.com/unione/wp-content/uploads/sites/3/2021/05/uniico046.png" alt=""  className='w-8 h-8'/>
          <div>
            <div className="font-semibold">Email center</div>
            <div className="text-xs"> admission@iiagurgaon.com</div>
          </div>
        </div>
      </div>

      {/* Center: Logo */}
      <div className="flex items-center space-x-2">
        <img src="/5.png" alt="Unione Logo" className="w-58 h-18" />
        <span className="text-2xl font-bold text-indigo-900">IIA Guragon</span>
      </div>

      {/* Right: Search Bar */}
      <div className="flex items-center border-b border-gray-300 w-60">
        <Search className="w-4 h-4 text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Search..."
          className="w-full outline-none text-sm text-gray-700 placeholder-gray-400 bg-transparent"
        />
      </div>
    </div>
  );
}

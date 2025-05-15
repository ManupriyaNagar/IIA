'use client';
import { Search } from 'lucide-react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Link from 'next/link';


export default function TopBar() {
  return (
    <div className="bg-white border-gray-200 ">
      <div className="flex items-center justify-between gap-6 md:gap-4">

        {/* Left: Logo */}
        <div className="flex items-center gap-3 md:gap-4">
        <Link href="/">
          <img
       
            src="/Logo.gif"
            alt="IIA Logo"
            className="h-18 md:h-28 object-contain cursor-pointer"
          />
          </Link>
          <div className="text-center md:text-left hidden md:block">
            <h1 className="text-lg md:text-2xl font-extrabold text-blue uppercase  leading-tight">
              Indraprasth Institute of Aeronautics
            </h1>
            <h3 className="text-xs md:text-sm font-semibold text-blue uppercase mt-1">
              DGCA Approved Ministry of Civil Aviation
              <br />
              Government of India
            </h3>
          </div>
        </div>

        {/* Right: Contact Info in a single line */}
        <div className='bg-gradient-to-r from-orange to-pink rounded-l-full md:p-9 p-3'>
        <div className="flex flex-col items-left text-sm text-white">
          
          
          {/* Support & Helpdesk */}
          <a
            href="https://wa.me/919212170033"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
             <img src="/ring.gif" alt="" className='w-7 h-7' />

            <div className="text-left">
              {/* <div className="font-semibold">Support & Helpdesk</div> */}
              <div className="text-xs md:text-sm">18003090503 / +91-9212170033/22
              </div>
            </div>
          </a>

          {/* Email Center */}
          <a
            href="mailto:admission@iiagurgaon.com"
            className="flex items-center"
          >
             <img src="/inbox.gif" alt="" className='w-7 h-7' />

            <div className="text-left">
              {/* <div className="font-semibold">Email Center</div> */}
              <div className="text-xs">admission@iiagurgaon.com</div>
            </div>
          </a>
          </div>

        </div>

      </div>
    </div>
  );
}

import Image from 'next/image';

export default function Hero() {
  return (
    <section>
      <div className="relative w-full min-h-[34rem] bg-gray-700 flex flex-col-reverse md:flex-row items-center justify-between px-4 md:px-8 py-12 overflow-hidden">
        {/* Background Image */}
        <Image
          src="/banner.jpg"
          alt="Hero Banner"
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
          priority
          className="opacity-40"
        />

        {/* Left Text */}
        <div className="relative z-10 text-white max-w-xl text-center md:text-left mt-8 md:mt-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-yellow-500 leading-tight drop-shadow-md">
            BECOME AN
            <br />
            AIRCRAFT MAINTENANCE
            <br />
            ENGINEER
          </h1>
          <p className="text-base sm:text-lg text-gray-200 mt-4 max-w-md mx-auto md:mx-0 drop-shadow-sm">
            Start your journey with a rewarding career in aviation maintenance.
          </p>
        </div>

        {/* Right Form */}
        <div className="relative z-10 w-full max-w-md bg-white bg-opacity-95 p-6 sm:p-8 rounded-2xl shadow-2xl border border-gray-200">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 text-center">Apply Now</h2>
          <form className="space-y-4 sm:space-y-5">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-600"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-600"
            />
            <input
              type="tel"
              placeholder="Mobile (10 digit)"
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-600"
            />
            <select className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-600">
              <option value="">Select State</option>
              <option value="state1">State 1</option>
              <option value="state2">State 2</option>
            </select>
            <button
              type="submit"
              className="w-full bg-yellow-500 text-white p-3 rounded-lg font-semibold hover:bg-yellow-600 transition duration-300 ease-in-out transform hover:-translate-y-0.5">
              Submit
            </button>
          </form>
          <p className="text-xs text-gray-600 mt-4 text-center">
            By clicking Submit, I authorize SAME Admissions Team to call/email me about the Admission Process. This consent will override any registration for DNC/NDNC.
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-black text-white py-6 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
        <div>
          <div className="text-3xl mb-2">📘</div>
          <h3 className="font-semibold text-lg">Best Education</h3>
          <p className="text-gray-400 text-sm mt-1">
            Venenatis netus sagittis curae suspendisse integer habitasse
          </p>
        </div>
        <div>
          <div className="text-3xl mb-2">🎓</div>
          <h3 className="font-semibold text-lg">Top Instructors</h3>
          <p className="text-gray-400 text-sm mt-1">
            Venenatis netus sagittis curae suspendisse integer habitasse
          </p>
        </div>
        <div>
          <div className="text-3xl mb-2">💻</div>
          <h3 className="font-semibold text-lg">Online Education</h3>
          <p className="text-gray-400 text-sm mt-1">
            Venenatis netus sagittis curae suspendisse integer habitasse
          </p>
        </div>
      </div>
    </section>
  );
}

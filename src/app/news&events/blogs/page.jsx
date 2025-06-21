"use client";
import Image from "next/image";
import Link from "next/link";

// import bgimg from '../../../public/herobg.png'; // Assuming you have a separate file for articles data


  
export default function page() {

    const articles = [
        {
          title: "Aircraft Maintenance Engineering — The Silent Force Behind Every Safe Flight",
          description: "While pilots may be the face of aviation, Aircraft Maintenance Engineers (AMEs) are its backbone. Every flight that takes off safely is a result of their precision, expertise, and relentless commitment to safety. AMEs inspect, repair, and certify aircraft for flight-readiness—ensuring every nut, bolt, engine, and wire is airworthy and compliant with global safety standards.",
          image: "/future1.png",
          slug: "aircraft-maintenance-engineering-safe-flight",
        },
        {
          title: "The Future of Aircraft Engineering is Here — and It’s Powered by AI",
          description: "The aviation industry is undergoing a transformation—one where Artificial Intelligence and predictive analytics are taking center stage. Gone are the days when AMEs relied solely on manuals and hand tools. Today, smart aircraft are equipped with sensors that continuously stream health data, allowing AMEs to detect and prevent faults before they happen.",
          image: "/future.png",
          slug: "future-of-aircraft-engineering-ai",
        },
        {
          title: "The Growing Scope of Aircraft Engineering in India and Beyond",
          description: "With India poised to become the world’s third-largest aviation market, the demand for skilled Aircraft Maintenance Engineers (AMEs) is reaching new heights. As new airports open, regional routes expand, and airlines invest in modern fleets, opportunities for qualified engineers are multiplying—across both domestic carriers and global giants.",
          image: "/future2.png",
          slug: "scope-of-aircraft-engineering-india",
        },
        {
          title: "Aviation is Booming — Here’s Why Now is the Best Time to Become an AME",
          description: "There’s never been a better time to build a career in aviation. From budget carriers adding new routes to business jets flying high post-pandemic, the skies are getting busier—and behind every flight is a certified Aircraft Maintenance Engineer (AME), ensuring it’s safe to fly.",
          image: "/future3.png",
          slug: "aviation-booming-best-time-for-ame",
        },
        {
          title: "The Future of Aviation Maintenance — Smarter Planes Need Smarter Engineers",
          description: "As aviation enters the era of smart flying, the role of Aircraft Maintenance Engineers (AMEs) is becoming more advanced and more critical than ever. Modern aircraft aren’t just mechanical—they’re digital ecosystems equipped with advanced sensors, fly-by-wire systems, and predictive maintenance technology.",
          image: "/future4.png",
          slug: "future-of-aviation-maintenance",
        },
        {
          title: "AME Specializations Explained — Mechanical (B1) vs Avionics (B2)",
          description: "Aircraft Maintenance Engineering isn’t a one-size-fits-all career—it offers exciting specialization options depending on your strengths and interests. The two primary paths are Mechanical (B1) and Avionics (B2)—each vital to keeping aircraft safe and airworthy.",
          image: "/future5.png",
          slug: "ame-specializations-mechanical-vs-avionics",
        },
        {
          title: "Aviation Safety Starts with Aircraft Maintenance Engineers",
          description: "When you step onto a flight, the last thing on your mind is whether the engine has been checked, the landing gear tested, or the electronics inspected. That peace of mind exists because of one crucial role — the Aircraft Maintenance Engineer (AME).",
          image: "/future6.png",
          slug: "aviation-safety-ame",
        },
        {
          title: "Career Growth in AME — From Hangars to Global Heights",
          description: "Aircraft Maintenance Engineering is more than just fixing airplanes — it’s a structured, global career path with multiple avenues for growth. Whether you start as a technician or trainee engineer, there’s a clear runway to climb into leadership, regulatory, or even international roles.",
          image: "/future7.png",
          slug: "career-growth-in-ame",
        },
        {
          title: "CPL vs CHPL — Which Pilot License Is Right for You?",
          description: "If you’ve ever dreamed of becoming a commercial pilot, you’ve likely come across two key licenses: CPL (Commercial Pilot License) and CHPL (Commercial Helicopter Pilot License). While both qualify you to fly professionally, the main difference lies in the type of aircraft you operate.",
          image: "/future8.png",
          slug: "cpl-vs-chpl-pilot-license",
        },
        {
          title: "Choosing the Right Flight School — What Future Pilots Should Know",
          description: "Jet Serve Aviation Academy is known for its transparent fee structure, fast-track programs, and mentorship from industry veterans. The academy’s focus isn’t just on getting students licensed, but also airline-ready, with soft skill training and placement guidance built into the curriculum.",
          image: "/future9.png",
          slug: "choosing-the-right-flight-school",
        },
        {
          title: "Career Paths After CPL and CHPL — Where Can Your Wings Take You?",
          description: "Once you earn your CPL (Commercial Pilot License) or CHPL (Commercial Helicopter Pilot License), the sky truly opens up with diverse career paths—each with its own rewards and rhythm.",
          image: "/future10.png",
          slug: "career-after-cpl-chpl",
        },
        {
          title: "Tips Every Aspiring Pilot Should Know Before Starting CPL or CHPL Training",
          description: "Pursuing a career in aviation is exciting—but stepping into pilot training without preparation can make the journey harder than it needs to be. Here are some essential tips to help you get ready for CPL or CHPL training.",
          image: "/future11.png",
          slug: "tips-for-pilot-training",
        },
        {
          title: "Fast-Track to the Cockpit — Can You Complete CPL/CHPL Quicker?",
          description: "Dreaming of becoming a pilot fast? Good news—accelerated CPL and CHPL training programs are designed to help you get licensed and job-ready in the shortest possible time, without compromising on quality.",
          image: "/future12.png",
          slug: "fast-track-cpl-chpl",
        },
        {
          title: "Fast-Track Pilot Training in India: How to Complete CPL in 12 Months",
          description: "If you’re dreaming of becoming a commercial pilot but don’t want to spend years in training, the good news is — it’s absolutely possible to complete your CPL (Commercial Pilot License) in just 12 months with the right academy and dedication.",
          image: "/future13.png",
          slug: "complete-cpl-in-12-months",
        },
        {
          title: "What is DGCA? Why Every Aspiring Pilot in India Should Know This",
          description: "The DGCA is India’s top aviation regulatory body, operating under the Ministry of Civil Aviation. It oversees all aspects of civil aviation safety, including pilot licensing, flight schools (FTOs), aircraft maintenance, airworthiness, and airline regulations.",
          image: "/future14.png",
          slug: "what-is-dgca",
        },
        {
          title: "Private Helicopter Charter in India — Jet Serve Makes Luxury Travel Effortless",
          description: "Imagine skipping traffic, avoiding airports, and arriving right next to your destination — in complete privacy. That’s the power of private helicopter charter services, and Jet Serve Sky Taxi is redefining this luxury for India.",
          image: "/future15.png",
          slug: "private-helicopter-charter-india",
        },
        {
          title: "Helicopter Charter vs Private Jet — Which Suits Your Needs?",
          description: "Luxury in the air comes in many forms—but what’s right for your journey? At Jet Serve Sky Taxi, we understand that choosing between a private helicopter charter and a private jet depends on multiple factors: distance, flexibility, cost, and experience.",
          image: "/future16.png",
          slug: "helicopter-vs-private-jet",
        },
        {
          title: "Twin-Engine Helicopters – The Gold Standard in Safety and Performance",
          description: "In the world of helicopter travel, especially in skies crowded with options, safety isn’t just a checkbox—it’s the foundation of trust. That’s why Jet Serve Sky Taxi emphasizes the use of twin‑engine helicopters like the Bell 429, which bring unmatched reliability and performance to every journey.",
          image: "/future17.png",
          slug: "twin-engine-helicopters",
        },
       
      ];
      


  return (
    <>

    <section
      className="w-full bg-center flex items-center justify-center text-white relative bg-black"
    >
     

      <div className="relative z-10 text-center px-6 md:px-12">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 mt-12">Latest Blogs</h1>
      </div>
    </section>

    <section className="bg-black text-white py-12 px-6 md:px-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
      
        {articles.map((article, index) => (
  <div
    key={index}
    className="bg-white text-black rounded-lg shadow-md overflow-hidden flex flex-col"
  >
    <div className="relative w-full h-63 md:h-72 lg:h-80">
      <Image
        src={article.image}
        alt={article.title}
        layout="fill"
        objectFit="object-cover"
      />
      {index === 0 && (
        <div className="absolute top-2 right-2 bg-yellow-500 text-black text-lg font-bold px-3 py-1 rounded-full shadow-lg">
          Recent
        </div>
      )}
    </div>
    <div className="flex flex-col justify-between flex-grow">
      <div
     
      >
        <h3 className="text-xl font-semibold mb-2 p-4">{article.title}</h3>
        <p className="text-sm text-gray-900 mb-4 px-4">{article.description}</p>
        {/* <Link href={`/news&media/blog/${article.slug}`}>
          <button className="bg-green-800 text-white font-semibold py-2 px-4 rounded hover:bg-white hover:text-black w-fit mx-4 transition duration-300 ease-in-out items-center">
            Learn more
          </button>
        </Link> */}
      </div>
    </div>
  </div>
))}

      </div>
    </section>
    </>
  );
}

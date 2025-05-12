// import { FaInstagram, FaFacebook, FaYoutube, FaLinkedin } from 'react-icons/fa';

// export default function MediaPage() {
//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Hero Section */}
//       <section className="bg-blue-950 text-white py-20 px-6 text-center">
//         <h1 className="text-5xl font-bold mb-4">Connect With Us</h1>
//         <p className="text-lg text-gray-300 max-w-2xl mx-auto">
//           Follow us on your favorite platforms to stay updated with our latest news, events, and content.
//         </p>
//       </section>

//       {/* Social Media Section */}
//       <section className="py-16 px-6 max-w-6xl mx-auto">
//         <h2 className="text-3xl font-semibold text-center mb-10 text-gray-800">Our Social Media Handles</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
//           {/* Instagram */}
//           <a
//             href="https://www.instagram.com/iiagurgaon/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center hover:scale-105 transition-transform"
//           >
//             <FaInstagram className="text-6xl text-pink-500 mb-4" />
//             <span className="text-lg font-medium">Instagram</span>
//           </a>

//           {/* Facebook */}
//           <a
//             href="https://www.facebook.com/iiagurgoan/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center hover:scale-105 transition-transform"
//           >
//             <FaFacebook className="text-6xl text-blue-600 mb-4" />
//             <span className="text-lg font-medium">Facebook</span>
//           </a>

//           {/* YouTube */}
//           <a
//             href="https://www.youtube.com/@IndraprasthInstituteOfAeronaut"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center hover:scale-105 transition-transform"
//           >
//             <FaYoutube className="text-6xl text-red-600 mb-4" />
//             <span className="text-lg font-medium">YouTube</span>
//           </a>

//           {/* LinkedIn */}
//           <a
//             href="https://www.linkedin.com/company/indraprasth-institute-of-aeronautics/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center hover:scale-105 transition-transform"
//           >
//             <FaLinkedin className="text-6xl text-blue-700 mb-4" />
//             <span className="text-lg font-medium">LinkedIn</span>
//           </a>
//         </div>
//       </section>
//     </div>
//   );
// }

'use client';
import { FaInstagram, FaFacebook, FaYoutube, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

export default function MediaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="bg-blue-950 text-white py-20 px-6 text-center"
      >
        <h1 className="text-5xl font-bold mb-4">Connect With Us</h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Follow us on your favorite platforms to stay updated with our latest news, events, and content.
        </p>
      </motion.section>

      {/* Social Media Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-3xl font-semibold text-center mb-10 text-gray-800"
        >
          Our Social Media Handles
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {[
            { icon: FaInstagram, label: 'Instagram', url: 'https://www.instagram.com/iiag.ame?igsh=MWVuaXNsNm9xaTN0dA==', color: 'text-pink-500' },
            { icon: FaFacebook, label: 'Facebook', url: 'https://www.facebook.com/iiagurgoan/', color: 'text-blue-600' },
            { icon: FaYoutube, label: 'YouTube', url: 'https://www.youtube.com/@IndraprasthInstituteOfAeronaut', color: 'text-red-600' },
            { icon: FaLinkedin, label: 'LinkedIn', url: 'https://www.linkedin.com/company/indraprasth-institute-of-aeronautics/', color: 'text-blue-700' },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={item.label}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center hover:scale-105 transition-transform"
                custom={i + 1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <Icon className={`text-6xl mb-4 ${item.color}`} />
                <span className="text-lg font-medium">{item.label}</span>
              </motion.a>
            );
          })}
        </div>
      </section>
    </div>
  );
}

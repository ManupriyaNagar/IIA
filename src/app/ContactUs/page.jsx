"use client";

import { motion } from "framer-motion";

export default function ContactUs() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
  };
  return (
    <section className="relative bg-gray-950 text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Get in Touch
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-300">
            Have questions? Our experts are here to help. Let’s connect!
          </p>
        </motion.div>

        {/* Contact Form & Info Section */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-900/50 backdrop-blur-lg p-8 rounded-xl shadow-lg border border-gray-800"
          >
            <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full p-3 bg-gray-800 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-pink"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full p-3 bg-gray-800 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-pink"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                className="w-full p-3 bg-gray-800 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-pink"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="3"
                required
                className="w-full p-3 bg-gray-800 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-pink"
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-l from-pink to-orange text-white py-3 rounded-lg text-lg font-semibold transition-all"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-900/50 backdrop-blur-lg p-8 rounded-xl shadow-lg border border-gray-800"
          >
            <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
            <p className="text-gray-300 mb-4">
              Have queries? Feel free to contact us anytime!
            </p>
            <div className="space-y-4">
              <p>
                <span className="font-semibold text-pink">📍 Address:</span>Indraprasth Aerospace & Knowledge Park,
Sector – 77, Delhi-Jaipur National Highway (NH-08),
Gurgaon, Haryana – 122004
              </p>
              <p>
                <span className="font-semibold text-pink">📞 Phone:</span> (+91) 9212170022 / 33
              </p>
              <p>
                <span className="font-semibold text-pink">✉️ Email:</span>{" "}
                <a href="mailto:care@gluckscare.com" className="underline hover:text-pink-400">
                admission@iiagurgaon.com
                </a>
              </p>
            </div>

            {/* Additional Info Cards */}
            <div className="mt-6 grid gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="p-4 bg-gray-800 rounded-lg shadow-md border border-gray-700"
              >
                <h3 className="text-lg font-semibold text-pink">Support Team</h3>
                <p className="text-gray-300 text-sm mt-2">
                  Available 24/7 for your assistance.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="p-4 bg-gray-800 rounded-lg shadow-md border border-gray-700"
              >
                <h3 className="text-lg font-semibold text-pink">Live Chat</h3>
                <p className="text-gray-300 text-sm mt-2">
                  Chat with us anytime for quick support.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

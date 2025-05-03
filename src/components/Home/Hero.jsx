"use client";

import React, { useState } from "react";
import Link from "next/link";
import baseURL from "@/baseurl/baseURL";

export default function Hero() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    qualification: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    setSuccess(false);

    try {
      const res = await fetch(`${baseURL()}/api/enquiry`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Submission failed");

      setSuccess(true);
      setFormData({
        name: "",
        email: "",
        mobile: "",
        qualification: "",
        message: "",
      });
    } catch (err) {
      setError(err.message || "Something went wrong.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section>
      {/* Hero Section with Background Video */}
      <div className="relative w-full min-h-[42rem] bg-gradient-to-b from-black to-indigo-900 flex flex-col-reverse md:flex-row items-center justify-center py-10 px-4 sm:px-6 md:px-12 text-black">
        {/* Video Background */}
        <video
          src="/w.mp4"
          className="absolute top-0 left-0 w-full h-full object-cover opacity-30 z-0"
          autoPlay
          muted
          loop
          playsInline
        />

        {/* Hero Text */}
        <div className="relative z-10 text-white text-center md:text-left max-w-lg w-full mt-8 md:mt-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-snug drop-shadow">
            BECOME AN <br />
            AIRCRAFT MAINTENANCE <br />
            ENGINEER
          </h1>
          <p className="text-sm sm:text-base text-gray-200 mt-4 drop-shadow max-w-xs mx-auto md:mx-0">
            Start your journey with a rewarding career in aviation maintenance.
          </p>
          <Link
            href="/applynow"
            className="inline-block mt-4 bg-gradient-to-r from-orange to-pink text-white font-semibold py-2 px-6 rounded-full shadow-lg hover:from-pink hover:to-orange transition-all duration-300"
          >
            Apply Now
          </Link>
          <p className="mt-3 text-sm sm:text-base text-white uppercase font-bold animate-pulse">
            For AMEEE exam
          </p>
        </div>

        {/* Form */}
        <div className="relative z-10 w-full max-w-md bg-white bg-opacity-95 p-5 sm:p-6 rounded-xl shadow-xl border border-gray-200 mb-6 md:mb-0">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 text-center">
            For Any Query
          </h2>
          <p className="text-gray-700 mb-4 text-center text-sm">
            Fill out the form below to get info.
          </p>
          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              required
              className="w-full p-2 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-yellow-600"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
              className="w-full p-2 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-yellow-600"
            />
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Mobile Number"
              pattern="[0-9]{10}"
              required
              className="w-full p-2 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-yellow-600"
            />
            <input
              type="text"
              name="qualification"
              value={formData.qualification}
              onChange={handleChange}
              placeholder="Qualification"
              className="w-full p-2 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-yellow-600"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={3}
              className="w-full p-2 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-yellow-600"
            />
            {error && <p className="text-red-600 text-xs text-center">{error}</p>}
            {success && <p className="text-green-600 text-xs text-center">Enquiry submitted!</p>}
            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-gradient-to-r from-orange to-pink disabled:opacity-50 text-white p-2 text-sm rounded font-semibold hover:from-pink hover:to-orange transition"
            >
              {submitting ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>

      {/* Marquee Notice Section */}
      <div className="relative bg-gradient-to-r from-orange to-pink py-2 overflow-hidden">
        <div className="whitespace-nowrap animate-scroll">
          <span className="text-white text-sm sm:text-base mx-8">
            Admission Open 2025! Indraprastha Institute of Aeronautics AME course — 
            Joining letter will be issued shortly. 
            Please visit the website regularly for the latest updates. 
            Information regarding admission will be shared on your email and mobile.
          </span>
        </div>

        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(100%);
            }
            100% {
              transform: translateX(-100%);
            }
          }
          .animate-scroll {
            display: inline-block;
            animation: scroll 30s linear infinite;
          }
        `}</style>
      </div>
    </section>
  );
}

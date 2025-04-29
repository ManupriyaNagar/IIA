"use client";

import React, { useState } from "react";
import Image from "next/image";
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
      <div className="relative w-full min-h-[39rem] bg-gradient-to-b from-black to-indigo-900 flex flex-col-reverse md:flex-row items-center justify-between px-4 md:px-8 py-8 overflow-hidden text-black">
      <video
  src="/w.mp4"  // Replace with the path to your video file
  alt="Hero Banner"
  className="opacity-30"
  autoPlay
  muted
  loop
  playsInline
  style={{ objectFit: "cover", width: "100%", height: "100%", position: "absolute" }}
  priority
/>


        <div className="relative z-10 text-white max-w-lg text-center md:text-left mt-6 md:mt-0 ml-18">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-snug drop-shadow" >
            BECOME AN
            <br />
            AIRCRAFT MAINTENANCE
            <br />
            ENGINEER
          </h1>
          <p className="text-sm sm:text-base text-gray-200 mt-3 max-w-sm mx-auto md:mx-0 drop-shadow">
            Start your journey with a rewarding career in aviation maintenance.
          </p>
          <Link
            href="/applynow"
            className="inline-block mt-3 bg-gradient-to-r  from-orange to-pink  text-white font-semibold py-2 px-6 rounded-full shadow-lg hover:from-pink hover:to-orange transition-all duration-300"
          >
            Apply Now
          </Link>
          <p className="mt-3 text-lg text-white uppercase font-extrabold animate-pulse ml-2">
            For AMEEE exam
          </p>
        </div>

        <div className="relative z-10 w-full max-w-sm bg-white bg-opacity-95 p-4 sm:p-6 rounded-xl shadow-xl border border-gray-200 mx-auto mr-15">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 text-center">
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
              className="w-full bg-gradient-to-r from-orange to-pink disabled:opacity-50 text-white p-2 text-sm rounded font-semibold hover:from-pink hover:to-orange transition" >
              {submitting ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
      <div className="relative bg-gradient-to-r from-orange to-pink py-2 overflow-hidden">
  <div className="whitespace-nowrap animate-scroll">
    <span className="text-white text-lg md:text-lg mx-8">
      Admission Open 2025! Indraprasth Institute of Aeronautics AME course ( ) — 
      Joining letter will be issued shortly. 
      Please visit the website regularly for the latest updates. 
      Information regarding admission will be shared on your email address and mobile number.
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
      animation-delay: 3s; /* Delay the animation by 5 seconds */
    }
  `}</style>
</div>

    </section>
  );
}
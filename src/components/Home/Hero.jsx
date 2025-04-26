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
      <div className="relative w-full min-h-[39rem] bg-gray-700 flex flex-col-reverse md:flex-row items-center justify-between px-4 md:px-8 py-8 overflow-hidden text-black">
        <Image
          src="/banner.jpg"
          alt="Hero Banner"
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
          className="opacity-30"
          priority
        />

        <div className="relative z-10 text-white max-w-lg text-center md:text-left mt-6 md:mt-0">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-yellow-500 leading-snug drop-shadow">
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
            className="inline-block bg-gradient-to-r mt-3 from-yellow-500 to-orange-500 text-white font-semibold py-2 px-6 rounded-full shadow-lg hover:from-pink-600 hover:to-purple-600 transition-all duration-300"
          >
            Apply Now
          </Link>
          <p className="mt-2 text-xs text-orange-600 uppercase font-extrabold animate-pulse ml-2">
            For AMEEE exam
          </p>
        </div>

        <div className="relative z-10 w-full max-w-sm bg-white bg-opacity-95 p-4 sm:p-6 rounded-xl shadow-xl border border-gray-200 mx-auto">
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
              className="w-full bg-yellow-500 disabled:opacity-50 text-white p-2 text-sm rounded font-semibold hover:bg-yellow-600 transition"
            >
              {submitting ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>

      <div className="bg-yellow-600 py-8">
  <marquee behavior="scroll" direction="left" scrollamount="8" className="text-white font-semibold text-2xl">
    Admission Open 2025! Indraprasth Institute of Aeronautics AME course ( ) Joining letter issue will be shortly. 
    Please visit the website regularly for the latest updates. Information regarding admission will be shared on your email address and mobile number.
  </marquee>
</div>

    </section>
  );
}
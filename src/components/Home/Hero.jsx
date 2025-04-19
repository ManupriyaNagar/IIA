"use client";

import React, { useState, useRef } from "react";
import Image from 'next/image';
import ReCAPTCHA from "react-google-recaptcha";

const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

export default function Hero() {
  const recaptchaRef = useRef(null);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", qualification: "", message: "" });
  const [captchaValue, setCaptchaValue] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCaptcha = (value) => {
    setCaptchaValue(value);
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!captchaValue) return setError("Please verify you're not a robot.");
    setSubmitting(true);
    try {
      const res = await fetch('/api/enquiry', { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify({ ...formData, captcha: captchaValue }) });
      if (!res.ok) throw new Error('Submission failed');
      setSuccess(true);
      setFormData({ name:"", email:"", phone:"", qualification:"", message:"" });
      recaptchaRef.current.reset();
      setCaptchaValue(null);
    } catch (err) {
      setError(err.message || 'Something went wrong.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section>
      <div className="relative w-full min-h-[28rem] bg-gray-700 flex flex-col-reverse md:flex-row items-center justify-between px-4 md:px-8 py-8 overflow-hidden">
        <Image src="/banner.jpg" alt="Hero Banner" fill sizes="100vw" style={{ objectFit:"cover" }} className="opacity-30" priority />

        <div className="relative z-10 text-white max-w-lg text-center md:text-left mt-6 md:mt-0">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-yellow-500 leading-snug drop-shadow">
            BECOME AN<br />AIRCRAFT MAINTENANCE<br />ENGINEER
          </h1>
          <p className="text-sm sm:text-base text-gray-200 mt-3 max-w-sm mx-auto md:mx-0 drop-shadow">
            Start your journey with a rewarding career in aviation maintenance.
          </p>
        </div>

        <div className="relative z-10 w-full max-w-sm bg-white bg-opacity-95 p-4 sm:p-6 rounded-xl shadow-xl border border-gray-200 mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 text-center">Enquire Now</h2>
          <p className="text-gray-700 mb-4 text-center text-sm">Fill out the form below to get info.</p>
          <form onSubmit={handleSubmit} className="space-y-3">
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" required className="w-full p-2 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-yellow-600" />
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" required className="w-full p-2 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-yellow-600" />
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Mobile Number" pattern="[0-9]{10}" required className="w-full p-2 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-yellow-600" />
            <input type="text" name="qualification" value={formData.qualification} onChange={handleChange} placeholder="Qualification" className="w-full p-2 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-yellow-600" />
            <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" rows={3} className="w-full p-2 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-yellow-600" />
            <div className="flex justify-center">
              <ReCAPTCHA ref={recaptchaRef} sitekey="your_actual_site_key_here" onChange={handleCaptcha} />
            </div>
            {error && <p className="text-red-600 text-xs text-center">{error}</p>}
            {success && <p className="text-green-600 text-xs text-center">Enquiry submitted!</p>}
            <button type="submit" disabled={submitting} className="w-full bg-yellow-500 disabled:opacity-50 text-white p-2 text-sm rounded font-semibold hover:bg-yellow-600 transition">
              {submitting ? 'Submitting...' : 'Submit'}
            </button>
          </form>
        </div>
      </div>

      <div className="bg-black text-white py-4 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-center text-xs">
        <div><div className="text-2xl mb-1">📘</div><h3 className="font-semibold">Best Education</h3><p>Venenatis netus sagittis...</p></div>
        <div><div className="text-2xl mb-1">🎓</div><h3 className="font-semibold">Top Instructors</h3><p>Venenatis netus sagittis...</p></div>
        <div><div className="text-2xl mb-1">💻</div><h3 className="font-semibold">Online Education</h3><p>Venenatis netus sagittis...</p></div>
      </div>
    </section>
  );
}
"use client";
import baseURL from "@/baseurl/baseURL";
import { QRCodeCanvas } from "qrcode.react";
import { useState } from "react";

export default function ApplyNowForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    dob: "",
    qualification: "",
    message: "",
  });
  const [screenshot, setScreenshot] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const upiId = "MSJETSERVEAVIATIONPRIVATELIMITED.eazypay@icici";
  const amount = "500";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError(null);
    setSuccess(false);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && ["image/png", "image/jpeg", "image/jpg"].includes(file.type)) {
      setScreenshot(file);
      setError(null);
    } else {
      setScreenshot(null);
      setError("Please upload a PNG, JPG, or JPEG file.");
    }
    setSuccess(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!screenshot) {
      setError("Please upload a payment screenshot.");
      return;
    }

    setIsSubmitting(true);
    setError(null);
    setSuccess(false);

    const formDataToSend = new FormData();
    formDataToSend.append("data", JSON.stringify(formData));
    formDataToSend.append("screenshot", screenshot);

    try {
      const res = await fetch(`${baseURL()}/apply`, {
        method: "POST",
        body: formDataToSend,
      });

      const json = await res.json();
      if (!res.ok) {
        throw new Error(json.error || `Server returned ${res.status}`);
      }

      if (json.success) {
        setSuccess(true);
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          dob: "",
          qualification: "",
          message: "",
        });
        setScreenshot(null);
        e.target.reset();
        alert(json.message || "Application submitted successfully!");
      } else {
        throw new Error(json.error || "Unknown error");
      }
    } catch (err) {
      setError(err.message);
      alert(`Submission failed: ${err.message}`);
      console.error("Submission error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-gradient-to-b from-gray-100 to-gray-200 py-16 min-h-screen flex items-center">
      <div className="w-[40%] mx-auto p-6 bg-white rounded-2xl shadow-2xl smacked-10">
        <h1 className="text-3xl font-extrabold text-center mb-8 text-blue-800 sm:text-4xl">
          Apply Now
        </h1>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {success && (
            <p className="text-center text-green-600 font-medium">
              Application submitted successfully!
            </p>
          )}
          {error && (
            <p className="text-sm text-red-600 text-center">{error}</p>
          )}

          <div className="space-y-2 text-black">
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              placeholder="Enter your full name"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              placeholder="Enter your email"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              required
              pattern="[0-9]{10}"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              placeholder="Enter your phone number"
            />
            <p className="text-xs text-gray-500">Enter a 10-digit phone number</p>
          </div>

          <div className="space-y-2">
            <label htmlFor="dob" className="block text-sm font-medium text-gray-700">
              Date of Birth
            </label>
            <input
              id="dob"
              name="dob"
              type="date"
              value={formData.dob}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="qualification" className="block text-sm font-medium text-gray-700">
              Highest Qualification
            </label>
            <input
              id="qualification"
              name="qualification"
              type="text"
              value={formData.qualification}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              placeholder="Enter your highest qualification"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              placeholder="Any additional information"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="screenshot" className="block text-sm font-medium text-gray-700">
              Payment Screenshot
            </label>
            <input
              id="screenshot"
              name="screenshot"
              type="file"
              accept="image/png,image/jpeg,image/jpg"
              onChange={handleFileChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg"
            />
            <p className="text-xs text-gray-500">
              Upload a PNG, JPG, or JPEG file (max 5MB)
            </p>
          </div>

          <button
            type="submit"
            disabled={isSubmitting || !screenshot}
            className={`w-full py-3 rounded-lg font-semibold text-white transition-all duration-300 ${
              isSubmitting || !screenshot
                ? "bg-blue-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {isSubmitting ? "Submitting..." : "Apply Now"}
          </button>
        </form>

        {/* UPI Payment Section */}
        <div className="mt-10 text-center">
          <h2 className="text-xl font-semibold text-blue-800 mb-4">
            Pay ₹{amount} via UPI
          </h2>
          <div className="flex justify-center">
            <QRCodeCanvas
              value={`upi://pay?pa=${upiId}&pn=MS%20JETSERVE%20AVIATION%20PRIVATE%20LIMITED&mc=500&tid=12345&amount=${amount}`}
              size={200}
              level="H"
              className="p-4 bg-white rounded-lg shadow-md"
            />
          </div>
          <p className="mt-4 text-sm text-gray-600">
            Scan the QR code to complete the payment
          </p>
        </div>
      </div>
    </section>
  );
}
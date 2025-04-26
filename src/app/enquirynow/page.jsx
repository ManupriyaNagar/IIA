"use client";
import baseURL from "@/baseurl/baseURL";
import { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";

export default function ApplicationForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    dob: "",
    qualification: "",
    message: "",
  });
  const [screenshot, setScreenshot] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const upiId = "MSJETSERVEAVIATIONPRIVATELIMITED.eazypay@icici";
  const amount = 25000;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError("");
    setSuccess(false);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && ["image/png", "image/jpeg", "image/jpg"].includes(file.type)) {
      setScreenshot(file);
      setError("");
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

    setSubmitting(true);
    setError("");
    setSuccess(false);

    const formDataToSend = new FormData();
    formDataToSend.append("data", JSON.stringify(formData));
    formDataToSend.append("screenshot", screenshot);

    try {
      const res = await fetch(`${baseURL()}/api/direct-admission`, {
        method: "POST",
        body: formDataToSend,
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Submission failed");
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
    } catch (err) {
      setError(err.message);
      alert(`Submission failed: ${err.message}`);
      console.error("Submission error:", err);
    } finally {
      setSubmitting(false);
    }
  };

  const fields = [
    {
      name: "fullName",
      label: "Full Name",
      type: "text",
      required: true,
      placeholder: "Enter your full name",
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      required: true,
      placeholder: "Enter your email",
    },
    {
      name: "phone",
      label: "Phone Number",
      type: "tel",
      required: true,
      pattern: "[0-9]{10}",
      placeholder: "Enter your 10-digit phone number",
    },
    {
      name: "dob",
      label: "Date of Birth",
      type: "date",
      required: false,
      placeholder: "Select your date of birth",
    },
    {
      name: "qualification",
      label: "Highest Qualification",
      type: "text",
      required: false,
      placeholder: "Enter your highest qualification",
    },
  ];

  const formattedAmount = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 0,
  }).format(amount);

  return (
    <section className="py-16 bg-gradient-to-b from-gray-100 to-gray-200 min-h-screen flex items-center">
      <div className="w-[40%] mx-auto p-6 bg-white rounded-2xl shadow-2xl sm:p-10 text-black">
        <h1 className="text-3xl font-extrabold text-center mb-8 text-blue-800 sm:text-4xl">
          Application Form
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {success && (
            <p className="text-center text-green-600 font-medium">
              Application submitted successfully!
            </p>
          )}
          {error && (
            <p className="text-center text-red-600 font-medium">{error}</p>
          )}

          {fields.map((field) => (
            <div key={field.name} className="space-y-2">
              <label
                htmlFor={field.name}
                className="block text-sm font-medium text-gray-700"
              >
                {field.label}
              </label>
              <input
                id={field.name}
                name={field.name}
                type={field.type}
                required={field.required}
                pattern={field.pattern}
                value={formData[field.name]}
                onChange={handleChange}
                placeholder={field.placeholder}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              />
              {field.name === "phone" && (
                <p className="text-xs text-gray-500">
                  Enter a valid 10-digit phone number
                </p>
              )}
            </div>
          ))}

          <div className="space-y-2">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Any additional information"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="screenshot"
              className="block text-sm font-medium text-gray-700"
            >
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
            disabled={submitting || !screenshot}
            className={`w-full py-3 rounded-lg font-semibold text-white transition-all duration-300 ${
              submitting || !screenshot
                ? "bg-blue-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {submitting ? "Submitting..." : "Submit Application"}
          </button>
        </form>

        <div className="mt-10 text-center">
          <h2 className="text-xl font-semibold text-blue-800 mb-4 sm:text-2xl">
            Pay {formattedAmount} via UPI
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
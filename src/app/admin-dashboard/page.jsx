"use client";

import { useState, useEffect } from "react";
 // New child component for authentication
import baseURL from "@/baseurl/baseURL";
import AuthRedirect from "@/components/Auth/AuthRedirect";

export default function DashboardPage() {
  const [counts, setCounts] = useState({ admissions: 0, enquiries: 0, applications: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchCounts = async () => {
    try {
      const [admissionsRes, enquiriesRes, applicationsRes] = await Promise.all([
        fetch(`${baseURL()}/api/direct-admission`),
        fetch(`${baseURL()}/api/enquiry`),
        fetch(`${baseURL()}/apply`),
      ]);

      if (!admissionsRes.ok || !enquiriesRes.ok || !applicationsRes.ok) {
        throw new Error("Failed to fetch counts");
      }

      const [admissionsData, enquiriesData, applicationsData] = await Promise.all([
        admissionsRes.json(),
        enquiriesRes.json(),
        applicationsRes.json(),
      ]);

      setCounts({
        admissions: Array.isArray(admissionsData) ? admissionsData.length : 0,
        enquiries: Array.isArray(enquiriesData) ? enquiriesData.length : 0,
        applications: Array.isArray(applicationsData) ? applicationsData.length : 0,
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCounts(); // Fetch counts on mount
  }, []);

  if (loading) return <p className="text-center">Loading dashboard...</p>;
  if (error) return <p className="text-center text-red-600">{error}</p>;

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Welcome to the Admin Dashboard</h2>
      <p className="text-gray-600 mb-6">Use the sidebar to manage admissions, enquiries, and applications.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-blue-50 p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-blue-900">Admissions</h3>
          <p className="text-4xl font-bold text-blue-700 mt-2">{counts.admissions}</p>
          <p className="text-gray-600">Total admission requests</p>
        </div>
        <div className="bg-blue-50 p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-blue-900">Enquiries</h3>
          <p className="text-4xl font-bold text-blue-700 mt-2">{counts.enquiries}</p>
          <p className="text-gray-600">Total enquiry submissions</p>
        </div>
        <div className="bg-blue-50 p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-blue-900">Applications</h3>
          <p className="text-4xl font-bold text-blue-700 mt-2">{counts.applications}</p>
          <p className="text-gray-600">Total full applications</p>
        </div>
      </div>
      <AuthRedirect /> {/* Handle authentication redirect */}
    </div>
  );
}
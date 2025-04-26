"use client";
import baseURL from "@/baseurl/baseURL";
import { useState, useEffect } from "react";

export default function ApplicationsPage() {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchApplications() {
      try {
        const res = await fetch(`${baseURL()}/apply`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!res.ok) throw new Error(`Error ${res.status}: ${res.statusText}`);
        const data = await res.json();
        setApplications(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchApplications();
  }, []);

  if (loading) return <p className="text-center">Loading applications...</p>;
  if (error) return <p className="text-center text-red-600">{error}</p>;

  return (
    <div className="bg-white p-6 rounded-lg shadow text-black">
      <h2 className="text-2xl font-semibold mb-4">Applications</h2>
      {applications.length === 0 ? (
        <p>No applications found.</p>
      ) : (
        <div className="overflow-x-auto text-black">
          <table className="table-auto w-full border-collapse">
            <thead>
              <tr>
                <th className="border px-4 py-2">ID</th>
                <th className="border px-4 py-2">Name</th>
                <th className="border px-4 py-2">Email</th>
                <th className="border px-4 py-2">Phone</th>
                <th className="border px-4 py-2">Date of Birth</th>
                <th className="border px-4 py-2">Qualification</th>
                <th className="border px-4 py-2">Message</th>
                <th className="border px-4 py-2"> Payment Screenshot</th>
                <th className="border px-4 py-2">Submitted At</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((app) => (
                <tr key={app.id}>
                  <td className="border px-4 py-2">{app.id}</td>
                  <td className="border px-4 py-2">{app.full_name}</td>
                  <td className="border px-4 py-2">{app.email}</td>
                  <td className="border px-4 py-2">{app.phone || "-"}</td>
                  <td className="border px-4 py-2">
                    {app.dob ? new Date(app.dob).toLocaleDateString() : "-"}
                  </td>
                  <td className="border px-4 py-2">{app.qualification || "-"}</td>
                  <td className="border px-4 py-2">{app.message || "-"}</td>
                  <td className="border px-4 py-2">
                    {app.screenshot ? (
                      <a
                        href={`${baseURL()}/public/${app.screenshot}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline"
                      >
                        View
                      </a>
                    ) : (
                      "-"
                    )}
                  </td>
                  <td className="border px-4 py-2">
                    {new Date(app.created_at).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
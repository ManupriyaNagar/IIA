"use client";
import baseURL from "@/baseurl/baseURL";
import { useState, useEffect } from "react";

export default function AdmissionPage() {
  const [admissions, setAdmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchAdmissions() {
      try {
        const res = await fetch(`${baseURL()}/api/direct-admission`);
        if (!res.ok) throw new Error(`Error ${res.status}: ${res.statusText}`);
        const data = await res.json();
        setAdmissions(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchAdmissions();
  }, []);

  if (loading) return <p className="text-center">Loading admissions...</p>;
  if (error) return <p className="text-center text-red-600">{error}</p>;

  return (
    <div className="bg-white p-6 rounded-lg shadow text-black">
      <h2 className="text-2xl font-semibold mb-4">Admissions</h2>
      {admissions.length === 0 ? (
        <p>No admissions found.</p>
      ) : (
        <div className="overflow-x-auto text-black">
          <table className="table-auto w-full border-collapse">
            <thead>
              <tr>
                <th className="border px-4 py-2">ID</th>
                <th className="border px-4 py-2">Name</th>
                <th className="border px-4 py-2">Email</th>
                <th className="border px-4 py-2">Phone</th>
                <th className="border px-4 py-2">Qualification</th>
                <th className="border px-4 py-2">Message</th>
                <th className="border px-4 py-2">Payment Screenshot</th>
                <th className="border px-4 py-2">Submitted At</th>
              </tr>
            </thead>
            <tbody>
              {admissions.map((adm) => (
                <tr key={adm.id}>
                  <td className="border px-4 py-2">{adm.id}</td>
                  <td className="border px-4 py-2">{adm.name}</td>
                  <td className="border px-4 py-2">{adm.email}</td>
                  <td className="border px-4 py-2">{adm.phone || '-'}</td>
                  <td className="border px-4 py-2">{adm.qualification || '-'}</td>
                  <td className="border px-4 py-2">{adm.message}</td>
                  <td className="border px-4 py-2">
                    {adm.screenshot ? (
                      <a
                        href={`${baseURL()}/public/${adm.screenshot}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline"
                      >
                        View
                      </a>
                    ) : (
                      '-'
                    )}
                  </td>
                  <td className="border px-4 py-2">{new Date(adm.created_at).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
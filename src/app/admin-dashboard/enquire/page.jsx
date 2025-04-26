"use client";

import baseURL from "@/baseurl/baseURL";
import { useState, useEffect } from "react";

export default function QueryPage() {
  const [queries, setQueries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchQueries() {
      try {
        const res = await fetch(`${baseURL()}/api/enquiry`);
        if (!res.ok) throw new Error(`Error ${res.status}: ${res.statusText}`);
        const data = await res.json();
        setQueries(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchQueries();
  }, []);

  if (loading) return <p className="text-center">Loading enquiries...</p>;
  if (error) return <p className="text-center text-red-600">{error}</p>;

  return (
    <div className="bg-white p-6 rounded-lg shadow text-black">
      <h2 className="text-2xl font-semibold mb-4">Enquiries</h2>
      {queries.length === 0 ? (
        <p>No enquiries found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse text-black" >
            <thead>
              <tr>
                <th className="border px-4 py-2">ID</th>
                <th className="border px-4 py-2">Name</th>
                <th className="border px-4 py-2">Email</th>
                <th className="border px-4 py-2">Mobile</th>
                <th className="border px-4 py-2">Qualification</th>
                <th className="border px-4 py-2">Message</th>
                <th className="border px-4 py-2">Submitted At</th>
              </tr>
            </thead>
            <tbody>
              {queries.map((q) => (
                <tr key={q.id}>
                  <td className="border px-4 py-2">{q.id}</td>
                  <td className="border px-4 py-2">{q.name}</td>
                  <td className="border px-4 py-2">{q.email}</td>
                  <td className="border px-4 py-2">{q.mobile || '-'}</td>
                  <td className="border px-4 py-2">{q.qualification || '-'}</td>
                  <td className="border px-4 py-2">{q.message}</td>
                  <td className="border px-4 py-2">{new Date(q.created_at).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

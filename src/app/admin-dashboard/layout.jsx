import Link from "next/link";
import AuthCheck from "@/components/Auth/AuthCheck";

// Metadata for the layout (Next.js handles this automatically)
export const metadata = {
  title: "IIA Gurgaon Admin Panel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>IIA Gurgaon Admin Panel</title>
      </head>
      <body className="">
        <AuthCheck />
        <div className="flex flex-1 h-[80vh] overflow-hidden">
          {/* Sidebar */}
          <aside className="w-64 bg-blue-900 text-white shadow-md">
            <div className="px-6 py-4">
              <h2 className="text-lg font-semibold">Admin Dashboard</h2>
            </div>
            <nav className="px-6 py-4 space-y-2">
              <Link href="/admin-dashboard" className="block px-4 py-2 rounded-lg hover:bg-blue-800 transition">
                Home
              </Link>
              <Link href="/admin-dashboard/admission" className="block px-4 py-2 rounded-lg hover:bg-blue-800 transition">
                Admissions
              </Link>
              <Link href="/admin-dashboard/enquire" className="block px-4 py-2 rounded-lg hover:bg-blue-800 transition">
                Enquire
              </Link>
              <Link href="/admin-dashboard/ieee-exam" className="block px-4 py-2 rounded-lg hover:bg-blue-800 transition">
                AMEEE Applications
              </Link>
            </nav>
          </aside>

          {/* Main content area */}
          <main className="flex-1 p-6 overflow-auto">{children}</main>
        </div>
      </body>
    </html>
  );
}
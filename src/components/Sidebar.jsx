// import Link from "next/link";

// export default function Sidebar() {
//   return (
//     <nav>
//       <ul>
//         <li><Link href="/dashboard">Dashboard</Link></li>
//         <li><Link href="/dashboard/create-post">Create Post</Link></li>
//         <li><Link href="/dashboard/schedule">Schedule Post</Link></li>
//       </ul>
//     </nav>
//   );
// }
 "use client";
import { useState } from "react";
import { UserButton } from "@clerk/nextjs";
import { FiMenu, FiX } from "react-icons/fi"; // Import icons

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* ✅ Hamburger Button - Visible on Small Screens */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="absolute top-4 left-4 text-white bg-gray-800 p-2 rounded-md md:hidden z-50"
      >
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* ✅ Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-gray-900 text-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:translate-x-0 md:w-72 md:block`}
      >
        <div className="p-6">
          <h2 className="text-xl font-semibold">Dashboard</h2>
          <nav className="mt-6">
            <a href="/dashboard" className="block py-2 px-4 hover:bg-gray-700">🏠 Home</a>
            <a href="/posts" className="block py-2 px-4 hover:bg-gray-700">📝 Create Post</a>
            <a href="/analytics" className="block py-2 px-4 hover:bg-gray-700">📊 Analytics</a>
            <a href="/settings" className="block py-2 px-4 hover:bg-gray-700">⚙️ Settings</a>
          </nav>
        </div>

        {/* ✅ User Profile & Logout */}
        <div className="p-5 border-t border-gray-700">
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>

      {/* ✅ Overlay to Close Sidebar on Mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </div>
  );
}

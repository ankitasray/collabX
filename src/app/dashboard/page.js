// "use client"; 
// import { SignedIn, SignedOut, RedirectToSignIn, UserButton, useUser, SignOutButton } from "@clerk/nextjs";

// export default function Dashboard() {
//   const { user } = useUser(); // Get user details

//   return (

//     <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
//       <SignedIn>
//         <h1>Welcome, {user?.firstName} 👋</h1>
//         <p>Email: {user?.emailAddresses[0]?.emailAddress}</p>

//         {/* User Profile Picture */}
//         <UserButton afterSignOutUrl="/home" /> {/* Redirects to home page */}

//         {/* Logout Button */}
//         <div style={{ marginTop: "20px" }}>
//           <SignOutButton signOutCallback={() => window.location.href = "/home"}>
//             <button style={{ padding: "10px 20px", backgroundColor: "red", color: "white", border: "none", cursor: "pointer" }}>
//               Logout
//             </button>
//           </SignOutButton>
//         </div>

//         <h2>📌 Dashboard Features</h2>
//         <ul>
//           <li><a href="/dashboard/create-post">➕ Create Post</a></li>
//           <li><a href="/dashboard/schedule">📅 Schedule Post</a></li>
//         </ul>
//       </SignedIn>

//       <SignedOut>
//         <RedirectToSignIn />
//       </SignedOut>
//     </div>
//   );
// }
// import Sidebar from "@/components/Sidebar";
// import Header from "@/components/Header";
// import DashboardContent from "@/components/DashboardContent";

// export default function Dashboard() {
//   return (
//     <div className="flex">
//       {/* Sidebar */}
//       <Sidebar />

//       {/* Main Content */}
//       <div className="flex flex-row flex-1">
//         <Header />
//         <DashboardContent />
//       </div>
//     </div>
//   );
// }
"use client"
import { useState } from "react";
import { UserButton } from "@clerk/nextjs";
import { FiMenu, FiX } from "react-icons/fi";

export default function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex h-screen w-screen bg-gray-100">
      {/* Sidebar (Full Height & Fixed for Desktop) */}
      <div
        className={`fixed md:relative inset-y-0 left-0 h-full w-64 bg-gray-900 text-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:translate-x-0 md:w-72 md:block`}
      >
        <div className="p-6">
          <h2 className="text-2xl font-semibold">CollabX</h2>
          <nav className="mt-6 space-y-2">
            <a href="/dashboard" className="block py-3 px-5 hover:bg-gray-800 rounded-lg">
              🏠 Dashboard
            </a>
            <a href="/post" className="block py-3 px-5 hover:bg-gray-800 rounded-lg">
              📝 Create Post
            </a>
            <a href="/analytics" className="block py-3 px-5 hover:bg-gray-800 rounded-lg">
              📊 Analytics
            </a>
            <a href="/settings" className="block py-3 px-5 hover:bg-gray-800 rounded-lg">
              ⚙️ Settings
            </a>
          </nav>
        </div>
        <div className="p-5 border-t border-gray-700">
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>

      {/* Main Content (Full Width) */}
      <div className="flex-1 flex flex-col w-full">
        {/* Header (Fixed Top Bar) */}
        <header className="bg-white shadow-md flex justify-between items-center px-8 py-4 w-full">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 md:hidden"
          >
            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
          <h2 className="text-2xl font-semibold">📊 Dashboard</h2>
          <UserButton />
        </header>

        {/* Dashboard Content (Takes Full Height & Width) */}
        <div className="flex-1 p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full h-full">
          {/* Widget 1 */}
          <div className="bg-white shadow-lg p-8 rounded-lg border border-gray-200 w-full h-48 flex flex-col justify-center">
            <h3 className="text-xl font-semibold text-gray-700">Total Posts</h3>
            <p className="text-4xl font-bold text-blue-600 mt-2">120</p>
          </div>

          {/* Widget 2 */}
          <div className="bg-white shadow-lg p-8 rounded-lg border border-gray-200 w-full h-48 flex flex-col justify-center">
            <h3 className="text-xl font-semibold text-gray-700">Scheduled Posts</h3>
            <p className="text-4xl font-bold text-green-500 mt-2">45</p>
          </div>

          {/* Widget 3 */}
          <div className="bg-white shadow-lg p-8 rounded-lg border border-gray-200 w-full h-48 flex flex-col justify-center">
            <h3 className="text-xl font-semibold text-gray-700">Followers Gained</h3>
            <p className="text-4xl font-bold text-purple-500 mt-2">3,500</p>
          </div>
        </div>
      </div>

      {/* Overlay for Mobile Sidebar */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </div>
  );
}

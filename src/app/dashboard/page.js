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
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation"; 
import { UserButton } from "@clerk/nextjs";
import { FiMenu, FiX } from "react-icons/fi";

export default function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  // 🔹 Navigate to different pages WITHOUT closing sidebar
  const handleNavigation = (path) => {
    router.push(path);
  };

  return (
    <div className="flex h-screen w-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`fixed md:relative inset-y-0 left-0 h-full w-64 bg-gray-900 text-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:translate-x-0 md:w-72 md:block`}
      >
        <div className="p-6 flex justify-between items-center">
          <h2 className="text-2xl font-semibold">🚀 CollabX</h2>
          {/* Cross Button (Only for Mobile) */}
          <button
            className="text-white md:hidden"
            onClick={() => setIsOpen(false)}
          >
            <FiX size={28} />
          </button>
        </div>
        <nav className="mt-6 space-y-2">
          <button
            onClick={() => handleNavigation("/dashboard")}
            className="block w-full text-left py-3 px-5 hover:bg-gray-800 rounded-lg"
          >
            🏠 Dashboard
          </button>
          <button
            onClick={() => handleNavigation("/post")}
            className="block w-full text-left py-3 px-5 hover:bg-gray-800 rounded-lg"
          >
            📝 Create Post
          </button>
          <button
            onClick={() => handleNavigation("/analytics")}
            className="block w-full text-left py-3 px-5 hover:bg-gray-800 rounded-lg"
          >
            📊 Analytics
          </button>
          <button
            onClick={() => handleNavigation("/settings")}
            className="block w-full text-left py-3 px-5 hover:bg-gray-800 rounded-lg"
          >
            ⚙️ Settings
          </button>
        </nav>
        <div className="p-5 border-t border-gray-700">
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col w-full">
        {/* Header */}
        <header className="bg-white shadow-md flex justify-between items-center px-8 py-4 w-full">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="text-gray-700 md:hidden"
          >
            <FiMenu size={28} />
          </button>
          <h2 className="text-2xl font-semibold">📊 Dashboard</h2>
          <UserButton />
        </header>

        {/* Dashboard Content */}
        <div className="flex-1 p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full h-full">
          <div className="bg-white shadow-lg p-8 rounded-lg border border-gray-200 flex flex-col justify-center">
            <h3 className="text-xl font-semibold text-gray-700">Total Posts</h3>
            <p className="text-4xl font-bold text-blue-600 mt-2">120</p>
          </div>
          <div className="bg-white shadow-lg p-8 rounded-lg border border-gray-200 flex flex-col justify-center">
            <h3 className="text-xl font-semibold text-gray-700">Scheduled Posts</h3>
            <p className="text-4xl font-bold text-green-500 mt-2">45</p>
          </div>
          <div className="bg-white shadow-lg p-8 rounded-lg border border-gray-200 flex flex-col justify-center">
            <h3 className="text-xl font-semibold text-gray-700">Followers Gained</h3>
            <p className="text-4xl font-bold text-purple-500 mt-2">3,500</p>
          </div>
        </div>
      </div>
    </div>
  );
}

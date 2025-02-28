// import Link from 'next/link';
// import { SignInButton, SignedIn,SignedOut,UserButton } from '@clerk/nextjs';
// import Dashboard from '@/app/dashboard/page';

// export default function Header() {
//   return (
//     <header className="bg-gray-50 w-full flex justify-between items-center px-12 py-6">
//     <h1 className="text-2xl font-semibold">CollabX</h1>
//     <nav className="hidden md:flex space-x-10 items-center">
//       <a href="#" className="text-gray-600 hover:text-black">Features</a>
//       <a href="#" className="text-gray-600 hover:text-black">Solutions</a>
//       <a href="#" className="text-gray-600 hover:text-black">Resources</a>
//       <a href="#" className="text-gray-600 hover:text-black">Pricing</a>
//     </nav>
//     <div className="flex items-center space-x-4">
//       <SignedIn>
//         <UserButton />
//       </SignedIn>
//       <SignedOut>
//         <SignInButton className="text-gray-600 hover:text-black hover:font-semibold px-4 py-2 " />
//       </SignedOut>
//       <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">Get demo</button>
//     </div>
//   </header>
  
    
//   );
// }
"use client";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
} from "@clerk/nextjs";

export default function Header() {
  const { isSignedIn } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isSignedIn) {
      router.push("/dashboard"); // Redirect to dashboard if logged in
    }
  }, [isSignedIn]);

  return (
    <header className="bg-gray-50 w-full flex justify-between items-center px-12 py-6">
      <h1 className="text-2xl font-semibold">
        <Link href="/">CollabX</Link>
      </h1>
      <nav className="hidden md:flex space-x-10 items-center">
        <Link href="#" className="text-gray-600 hover:text-black">
          Features
        </Link>
        <Link href="#" className="text-gray-600 hover:text-black">
          Solutions
        </Link>
        <Link href="#" className="text-gray-600 hover:text-black">
          Resources
        </Link>
        <Link href="#" className="text-gray-600 hover:text-black">
          Pricing
        </Link>
      </nav>
      <div className="flex items-center space-x-4">
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
        <SignedOut>
          <button
            onClick={() => router.push("/sign-in")}
            className="text-gray-600 hover:text-black hover:font-semibold px-4 py-2"
          >
            Sign In
          </button>
        </SignedOut>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
          Get demo
        </button>
      </div>
    </header>
  );
}

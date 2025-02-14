import Link from 'next/link';
import { SignInButton, SignedIn,SignedOut,UserButton } from '@clerk/nextjs';

export default function Header() {
  return (
    <header className="bg-gray-50 w-full flex justify-between items-center px-12 py-6">
    <h1 className="text-2xl font-semibold">CollabX</h1>
    <nav className="hidden md:flex space-x-10 items-center">
      <a href="#" className="text-gray-600 hover:text-black">Features</a>
      <a href="#" className="text-gray-600 hover:text-black">Solutions</a>
      <a href="#" className="text-gray-600 hover:text-black">Resources</a>
      <a href="#" className="text-gray-600 hover:text-black">Pricing</a>
    </nav>
    <div className="flex items-center space-x-4">
      <SignedIn>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <SignInButton className="text-gray-600 hover:text-black hover:font-semibold px-4 py-2 " />
      </SignedOut>
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">Get demo</button>
    </div>
  </header>
  
    
  );
}

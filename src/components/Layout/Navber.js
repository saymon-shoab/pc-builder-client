import React, { useState } from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="sticky top-0 overflow-hidden bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <span className="text-white text-xl font-bold">Hello Computer</span>
        </Link>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <button className="text-white">
            <svg
              className="h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4">
          <Link href="/">
            <span className="text-white cursor-pointer">Home</span>
          </Link>
          <Link href="/processor">
            <span className="text-white cursor-pointer">CPU / Processor</span>
          </Link>
          <Link href="/motherboard">
            <span className="text-white cursor-pointer">Motherboard</span>
          </Link>
          <Link href="/ram">
            <span className="text-white cursor-pointer">RAM</span>
          </Link>
          <Link href="/powerSypply">
            <span className="text-white cursor-pointer">Power Supply Unit</span>
          </Link>
          <Link href="/storage">
            <span className="text-white cursor-pointer">Storage Device</span>
          </Link>
          <Link href="/monitor">
            <span className="text-white cursor-pointer">Monitor</span>
          </Link>
        </div>

        {/* Login Button */}
        <div className="flex gap-3">
          {session?.user ? (
            <button
              onClick={() => signOut()}
              className="hidden md:block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            >
              logout
            </button>
          ) : (
            <button className="hidden md:block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
              <Link href="/login">Login</Link>
            </button>
          )}

          <button className="hidden md:block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
            pc builder
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

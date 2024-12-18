import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md w-full fixed top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-gray-800">
          GlamGenie
        </Link>

        {/* Navigation Items */}
        <div className="space-x-8 hidden md:flex">
          <Link to="/generate" className="text-gray-600 hover:text-gray-900">
            Generate
          </Link>
          <Link to="/community" className="text-gray-600 hover:text-gray-900">
            Community
          </Link>
          <Link to="/profile" className="text-gray-600 hover:text-gray-900">
            Profile
          </Link>
        </div>

        {/* Sign Up and Login */}
        <div className="space-x-4 flex items-center">
          <Link to="/signup" className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700">
            Sign Up
          </Link>
          <Link to="/login" className="border border-gray-800 text-gray-800 px-4 py-2 rounded hover:bg-gray-800 hover:text-white">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

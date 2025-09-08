import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header className="bg-white shadow-md text-black">
      <div className="max-w-screen-xl mx-auto px-4 py-4 flex items-center justify-between relative">
        
 {/* LEFT SIDE - Logo + Tagline */}
    <div>
      <h1 className="text-2xl font-bold text-gray-800">QuickLoot</h1>
      <p className="text-sm text-gray-500">Grab Fast. Shop Smart - by VinCloudOps</p>
    </div>

        {/* CENTER: Big Search Bar */}
        <div className="flex-grow flex justify-center mx-auto max-w-lg">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search QuickLoot.in"
              className="w-full pl-4 pr-10 py-2 border-2 border-blue-500 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="absolute top-1/2 -translate-y-1/2 right-3 text-blue-600">
              <FaSearch />
            </button>
          </div>
        </div>

        {/* RIGHT: Buttons */}
        <div className="flex space-x-4 ml-8 flex-shrink-0">
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Login
          </button>
          <Link to="/orders" className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 text-black">
            Orders
            </Link>
          <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 text-black">
            Address
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

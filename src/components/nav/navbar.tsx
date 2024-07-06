"use client";
import React, { useState } from "react";
import { FaBell, FaUserCircle } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { IoCloseCircle, IoReorderThreeOutline } from "react-icons/io5";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex flex-col text-gray-700 md:flex-row justify-between shadow-md border border-b-gray-300 items-center p-4">
      <div className="flex items-center justify-between w-full md:w-auto">
          <div className="flex justify-center items-center gap-4">
          <span 
           className="w-6 h-6 text-5xl text-gray-600 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center"
           onClick={() => setIsMenuOpen(!isMenuOpen)}
           >
            <IoReorderThreeOutline className="w-8 h-8 rounded-full" />
          </span>
          <h1 className="text-xl font-bold pr-8">Constructor</h1>
        </div>
        <div className="flex items-center md:hidden">
          <FaBell className="w-6 h-6 text-gray-600 mr-4" />
          <FaUserCircle className="w-6 h-6 text-gray-600" />
        </div>
      </div>

      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } md:flex flex-col md:flex-row items-center w-full md:w-auto mt-4 md:mt-0`}
      >
        <ul className="flex flex-col md:flex-row text-sm space-y-2 md:space-y-0 md:space-x-4 lg:space-x-8">
          <li className="hidden lg:block">Dashboard</li>
          <li className="hidden lg:block">About Us</li>
          <li className="hidden lg:block">News</li>
          <li className="hidden lg:block">User Policy</li>
          <li className="hidden lg:block">Contacts</li>
          <li className="hidden lg:block">...</li>
        </ul>
      </div>
      <div className="relative w-full md:w-64 lg:w-96 mb-4 md:mb-0 md:mr-4 hidden lg:block">
        <input
          type="text"
          placeholder="Search Company and Stock"
          className="w-full pl-10 pr-4 py-2 rounded-full border"
        />
        <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      </div>
      <div className="hidden md:flex items-center text-gray-600 space-x-4">
        <div className="flex items-center">
          <FaUserCircle className="w-8 h-8 rounded-full mr-2" />
          <span className="text-sm">Clayton Santos</span>
        </div>
        <div className="flex justify-between items-center space-x-4">
          <div className="relative w-8 h-8 text-5xl text-gray-600 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center">
            <FaBell className="w-6 h-6 rounded-full" />
            <span className="absolute -top-1.5 -right-1 bg-red-500 rounded-full w-3 h-3"></span>
          </div>
          <div className="w-8 h-8 text-5xl text-gray-600 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center">
            <IoCloseCircle className="w-6 h-6 rounded-full" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

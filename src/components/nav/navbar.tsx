"use client";

import React, { useState } from "react";
import { FaBell, FaUserCircle } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { IoCloseCircle, IoReorderThreeOutline } from "react-icons/io5";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className=" shadow-md">

      <div className="flex items-center justify-between px-4 py-2 md:hidden">
        <IoReorderThreeOutline className="text-2xl text-gray-600" />
        <h1 className="text-xl font-bold text-gray-700">Constructor</h1>
        <FaUserCircle className="text-2xl text-gray-600" />
      </div>

     
      <div className="hidden md:flex lg:hidden items-center justify-between px-4 py-2">
        <div className="flex items-center space-x-4">
          <IoReorderThreeOutline className="text-2xl text-gray-600" />
          <h1 className="text-xl font-bold text-gray-700">Constructor</h1>
        </div>
        <div className="flex items-center space-x-4">
          <FaUserCircle className="text-2xl text-gray-600" />
        </div>
      </div>

      <div className="hidden lg:flex items-center justify-between px-4 py-2">
        <div className="flex items-center space-x-4">
          <IoReorderThreeOutline className="text-2xl text-gray-600" />
          <h1 className="text-xl font-bold text-gray-700">Constructor</h1>
          <ul className="flex space-x-4 text-sm text-gray-600">
            <li>Dashboard</li>
            <li>About Us</li>
            <li>News</li>
            <li>User Policy</li>
            <li>Contacts</li>
            <li>...</li>
          </ul>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search Company and Stock"
              className="pl-8 pr-2 py-1 rounded-full border text-sm"
            />
            <FiSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">Clayton Santos</span>
            <FaUserCircle className="text-2xl text-gray-600" />
          </div>
          <div className="relative">
            <FaBell className="text-2xl text-gray-600" />
            <span className="absolute -top-1 -right-1 bg-red-500 rounded-full w-2 h-2"></span>
          </div>
          <IoCloseCircle className="text-2xl text-gray-600" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

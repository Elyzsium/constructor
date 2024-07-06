
import React from 'react';
import { FaBell, FaUserCircle } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
import { IoCloseCircle, IoReorderThreeOutline } from 'react-icons/io5';

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between shadow-md border border-b-gray-300 items-center bg-slate-200">
      <div className="flex items-center justify-between gap-16 text-gray-600">
        <div className="flex justify-center items-center gap-10">
          <span className="w-12 h-12 text-5xl text-gray-600 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center">
            <IoReorderThreeOutline />
          </span>
          <h1 className="text-4xl font-bold pr-8">Constructor</h1>
        </div>
        <div className="flex-1 flex justify-center">
          <ul className="flex text-xl space-x-8">
            <li>Dashboard</li>
            <li>About Us</li>
            <li>News</li>
            <li>User Policy</li>
            <li>Contacts</li>
            <li>...</li>
          </ul>
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="Search Transactions and Documents"
            className="pl-12 pr-4 py-8 rounded-full border h-12 w-[400px]"
          />
          <FiSearch className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>
      <div className="flex items-center text-gray-600 space-x-4">
        <div className="text-5xl text-gray-600 gap-5 flex items-center justify-between">
          <FaUserCircle className="w-8 h-8 rounded-full" />
          <span className="text-sm">Clyton Santos</span>
        </div>
        <div className="flex justify-between items-center space-x-4">
          <div className="relative w-8 h-8 text-5xl text-gray-600 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center">
            <FaBell className="w-6 h-6 rounded-full" />
            <span className="absolute -top-1 -right-[-10px] bg-red-500 rounded-full w-4 h-4"></span>
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

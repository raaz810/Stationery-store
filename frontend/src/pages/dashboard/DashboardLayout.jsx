import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { HiViewGridAdd } from "react-icons/hi";
import { MdOutlineManageHistory } from "react-icons/md";
import { FaBook, FaPlusCircle, FaBoxOpen } from 'react-icons/fa';
import { FaHome } from "react-icons/fa";
//import avatarImg from "../../r4.jpg";

const DashboardLayout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <section className="flex min-h-screen overflow-hidden bg-gray-100">
      <div className="flex-grow text-gray-800">
        <header className="flex items-center justify-between h-16 px-6 sm:px-10 bg-white shadow-md">

          <div className="flex items-center space-x-3">
            <span className="font-semibold text-lg">Raj Kumar</span>
            <span className="text-sm text-gray-600">Owner</span>
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <img src="./r4.jpg" alt="User Profile" className="w-full h-full object-cover" />
            </div>
            <button onClick={handleLogout} className="text-gray-400 hover:text-gray-600 p-2">
              <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
            </button>
          </div> 
        </header>

        <main className="p-6 sm:p-10 space-y-6">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-6 md:mb-0">
              <Link to="/dashboard" className="flex items-center space-x-2"> {/* Added flex and space */}
                <FaHome className="w-6 h-6 text-purple-600" /> {/* Icon size and color */}
                <h1 className="text-2xl sm:text-3xl font-semibold mb-2">Dashboard</h1>
              </Link>
              <h2 className="text-gray-600">Store Inventory</h2>
            </div>
            <div className="flex flex-col md:flex-row items-start md:items-center space-y-3 md:space-y-0">
              <Link
                to="/dashboard/manage-books"
                className="inline-flex items-center  mt-4 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 hover:shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 mr-4 mb-4"
              >
                <FaBook className="mr-3 text-lg" /> Manage Items
              </Link>

              <Link
                to="/dashboard/add-new-book"
                className="inline-flex items-center  px-6 py-3 bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 text-white rounded-lg hover:bg-indigo-700 hover:shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mr-4 mb-4"
              >
                <FaPlusCircle className="mr-3 text-lg" /> Add New Item
              </Link>

              <Link
                to="/dashboard/view-orders"
                className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 hover:shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 mr-4 mb-4"
              >
                <FaBoxOpen className="mr-3 text-lg" /> View Orders
              </Link>

            </div>
          </div>
          <Outlet />
        </main>
      </div >
    </section >
  );
};

export default DashboardLayout;
import React, { useState } from 'react';
import {
  FaBars,
  FaBell,
  FaDesktop,
  FaNewspaper,
  FaRegSun,
  FaRegWindowClose,
  FaSearch,
  FaSignOutAlt
} from 'react-icons/fa';
import { MdClose } from 'react-icons/md';
const Sidebar = () => {
  // hamburger menu (menu button)
  const [navbarOpen, setNavbarOpen] = useState(false);

  const SideLinks = [
    { title: 'Home', icon: <FaDesktop />, url: '/' },
    { title: 'About', icon: <FaBell />, url: '/about' },
    { title: 'Projects', icon: <FaRegSun />, url: '/projects' },
    { title: 'Blogs', icon: <FaNewspaper />, url: '/blogs' },
    { title: 'Logout', icon: <FaSignOutAlt />, url: '/signup' }
  ];

  return (
    <>
      {/* Sidebar starts */}
      <div className="w-full h-full bg-gray-200">
        <nav className="relative">
          <button
            type="button"
            className="fixed z-40 cursor-pointer bg-transparent border-none left-8 right-8"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            {navbarOpen ? (
              <MdClose className="text-color-gray w-10 h-10" />
            ) : (
              <FaBars className="text-color-gray w-10 h-10" />
            )}
          </button>

          <ul
            className={`space-y-2 text-sm fixed top-0 bg-slate-300 list-none overflow-y-scroll h-full overflow-hidden max-w-[200px] ${
              navbarOpen ? 'w-full' : 'hidden'
            }`}
          >
            {SideLinks.map(({ title, url, icon }, i) => (
              <li key={i}>
                <a
                  href={url}
                  onClick={() => setNavbarOpen(false)}
                  className="flex items-center space-x-3 text-gray-700 p-2
                rounded-md font-medium hover:bg-gray-200 bg-gray-200
                focus:shadow-outline"
                >
                  <span className="text-gray-600 h-6 w-6 ">{icon}</span>
                  <span>{title}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      {/* Sidebar ends */}

      {/* Navigation starts */}
      <div className="w-full">
        <nav className="h-16 flex items-center lg:items-stretch justify-end lg:justify-between bg-white shadow relative z-20">
          <div className="hidden lg:flex w-full pr-6">
            <div className="flex flex-col justify-between h-full w-full">
              <div className="relative w-full">
                <div className="text-gray-500 absolute ml-4 inset-0 m-auto w-4 h-4">
                  <FaSearch className="w-4 h-4" />
                </div>
                <input
                  className="border border-gray-100 focus:outline-none focus:border-indigo-700 rounded w-full text-sm text-gray-500 bg-gray-100 pl-12 py-2"
                  type="text"
                  placeholder="Search"
                />
              </div>
            </div>

            <div className="w-1/2 hidden lg:flex">
              <div className="w-full flex items-center pl-8 justify-end">
                <div className="h-full w-20 flex items-center justify-center border-r border-l">
                  <div className="relative cursor-pointer text-gray-600">
                    <span className="text-sm ml-2">My Profile</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;

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
import { NavLink } from 'react-router-dom';
const Sidebar = () => {
  // hamburger menu (menu button)
  const [navbarOpen, setNavbarOpen] = useState(false);

  const SideLinks = [
    { title: 'Home', icon: <FaDesktop />, url: '/' },
    { title: 'About', icon: <FaBell />, url: '/about' },
    { title: 'Projects', icon: <FaRegSun />, url: '/projects' },
    { title: 'Reports', icon: <FaNewspaper />, url: '/reports' },
    { title: 'Logout', icon: <FaSignOutAlt />, url: '/signup' }
  ];

  return (
    <>
      {/* Sidebar starts */}
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
      {/* Sidebar ends */}
    </>
  );
};

export default Sidebar;

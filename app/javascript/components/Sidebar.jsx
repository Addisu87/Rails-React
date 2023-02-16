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
    { title: 'Home', icon: <FaDesktop />, url: '/home' },
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
          <li>
            <NavLink to="/" onClick={() => setNavbarOpen(false)}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={() => setNavbarOpen(false)}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" onClick={() => setNavbarOpen(false)}>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/reports" onClick={() => setNavbarOpen(false)}>
              Reports
            </NavLink>
          </li>
          <li>
            <NavLink to="/home" onClick={() => setNavbarOpen(false)}>
              Logout
            </NavLink>
          </li>
        </ul>
      </nav>
      {/* Sidebar ends */}
    </>
  );
};

export default Sidebar;

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
      <div className="w-full h-full bg-gray-200">
        <div className="flex flex-no-wrap">
          {/* Sidebar starts */}
          <nav className="absolute lg:relative w-64 h-screen shadow bg-gray-100 hidden lg:block">
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
            <div className="h-16 w-full flex items-center px-8">
              <h1 className="uppercase">Sidebar</h1>
            </div>

            <ul
              aria-orientation="vertical"
              className={`py-6 ${navbarOpen ? 'w-full' : 'hidden'}`}
            >
              {SideLinks.map(({ title, url, icon }, i) => (
                <li
                  key={i}
                  className="pl-6 cursor-pointer text-slate-700 text-sm leading-3 tracking-normal pb-4 pt-5 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none"
                >
                  <a
                    href={url}
                    onClick={() => setNavbarOpen(false)}
                    className="flex items-center "
                  >
                    <span className="text-gray-600 h-6 w-6 ">{icon}</span>
                    <span className="ml-2">{title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          {/* Sidebar ends */}
        </div>
      </div>
    </>
  );
};

export default Sidebar;

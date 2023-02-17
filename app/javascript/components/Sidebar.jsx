import React, { useState } from 'react';
import {
  FaBars,
  FaBell,
  FaDesktop,
  FaNewspaper,
  FaRegSun,
  FaSearch,
  FaSignOutAlt
} from 'react-icons/fa';
import { MdClose } from 'react-icons/md';

const Sidebar = () => {
  const [show, setShow] = useState(false);

  const SideLinks = [
    { title: 'Home', icon: <FaDesktop />, url: '/' },
    { title: 'About', icon: <FaBell />, url: '/about' },
    { title: 'Projects', icon: <FaRegSun />, url: '/projects' },
    { title: 'Blogs', icon: <FaNewspaper />, url: '/blogs' },
    { title: 'Logout', icon: <FaSignOutAlt />, url: '/signup' }
  ];

  return (
    <>
      <div className="bg-gray-200">
        <div className="bg-white xl-hidden flex text-gray-800 hover:text-black focus:outline-none focus:text-black justify-between items-center p-6">
          <button className="flex justify-between items-center span-x-3">
            <FaDesktop />
          </button>
          {/* Sidebar starts */}
          <nav className="w-48 absolute h-screen z-40 md:w-64 drop-shadow-md pb-4 bg-gray-200 sm:hidden lg:block transition duration-150 ease-in-out opacity-50">
            <ul
              aria-orientation="vertical"
              className={`py-6 ${show ? 'w-full' : 'hidden'}`}
            >
              {SideLinks.map(({ title, url, icon }, i) => (
                <li
                  key={i}
                  className="pl-6 cursor-pointer text-slate-700 text-sm leading-3 tracking-normal pb-4 pt-5 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none"
                >
                  <div className="flex items-center">
                    <a href={url} className="w-6 h-6 md:w-8 md:h-8 ">
                      <span className="text-gray-600 h-6 w-6 ">{icon}</span>
                      <span className="ml-2 xl:text-base md:text-2xl text-base">
                        {title}
                      </span>
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

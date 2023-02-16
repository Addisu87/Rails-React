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
      <div className="w-full h-full bg-gray-200">
        <div className="flex flex-no-wrap">
          {/* Sidebar starts */}

          <nav className="absolute h-screen z-40 sm:relative w-64 md:w-96 shadow pb-4 bg-gray-100 sm:hidden transition duration-150 ease-in-out">
            <div className="flex flex-col justify-between h-full w-full">
              <button
                type="button"
                className="fixed z-40 cursor-pointer bg-transparent border-none left-8 right-8"
                onClick={() => setShow(!show)}
              >
                {show ? (
                  <MdClose className="text-color-gray w-10 h-10" />
                ) : (
                  <FaBars className="text-color-gray w-10 h-10" />
                )}
              </button>

              <div className="h-16 w-full flex items-center px-8">
                <span>
                  <FaSearch />
                </span>
                <h1 className="uppercase">Sidebar</h1>
              </div>

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
            </div>
          </nav>
          {/* Sidebar ends */}
        </div>
      </div>
    </>
  );
};

export default Sidebar;

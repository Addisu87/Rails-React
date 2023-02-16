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
          <nav
            className={`absolute h-screen z-40 lg:relative w-64 md:w-96 drop-shadow-md pb-4 bg-gray-100 sm:hidden lg:block transition duration-150 ease-in-out ${
              show
                ? 'w-full h-full absolute z-40  transform  translate-x-full'
                : 'w-full h-full absolute z-40  transform translate-x-0'
            }`}
          >
            <button
              type="button"
              className="fixed z-40 cursor-pointer border-none left-8 right-8"
              onClick={() => setShow(!show)}
            >
              {show ? (
                <MdClose className="text-color-gray w-10 h-10" />
              ) : (
                <FaBars className="text-color-gray w-10 h-10" />
              )}
            </button>

            <div className="bg-gray-200 opacity-50 absolute h-full w-full sm:hidden">
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

          {/* Navigation starts */}
          <div className="w-full">
            <nav className="h-16 flex items-center lg:items-stretch justify-end lg:justify-between bg-white shadow relative z-10">
              <div className="hidden lg:flex w-full pr-6">
                <div className="w-1/2 h-full hidden lg:flex items-center pl-6 pr-24">
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
                        My profile
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
            {/* Navigation ends */}
            {/* Remove class [ h-64 ] when adding a card block */}
            <div className="container mx-auto py-10 h-64 md:w-4/5 w-11/12 px-6">
              <div className="w-full h-full">Hello</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

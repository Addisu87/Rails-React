import React, { useState } from 'react';
import {
  FaArrowCircleRight,
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
          <div
            aria-label="toggler"
            className="flex justify-center items-center"
          >
            <button
              id="open"
              onClick={() => setShow(!show)}
              aria-label="open"
              className={`${
                show ? '' : 'hidden'
              } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800`}
            >
              <FaBars className="text-gray-800 h-8 w-8" />
            </button>
            <button
              id="close"
              onClick={() => setShow(!show)}
              aria-label="close"
              className={`${
                show ? 'hidden' : ''
              } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800`}
            >
              <MdClose className="text-gray-800 h-8 w-8" />
            </button>
          </div>
        </div>
        {/* Sidebar starts */}
        <nav
          id="main"
          className={`${
            show ? '-translate-x-full' : 'translate-x-0'
          }bg-white transform xl:translate-x-0 ease-in-out transition duration-500 flex flex-col justify-start items-start sm:w-72 w-full h-full`}
        >
          <button className="hidden xl:flex text-gray-800 hover:text-black focus:outline-none focus:text-black justify-start px-6 pt-6 items-center space-x-3 w-full">
            <FaDesktop />
            <p className="text-gray-900">Side Bar</p>
          </button>
          <div className="relative focus:outline-none flex justify-start w-full text-gray-800 rounded items-center border border-gray-300 focus:border-gray-400">
            <input
              type="text"
              placeholder="Search"
              className="placeholder-gray-800 text-base placeholder-text-base leading-4 py-3 px-8 w-full pl-16 rounded focus:outline-none focus:ring-offset-2 focus:ring-gray-600"
            />
            <FaSearch className="absolute left-4 w-5 h-5" />
          </div>

          <ul className="xl:mt-6 flex flex-col justify-start items-center px-4 w-full space-y-3 pb-5">
            {SideLinks.map(({ title, url, icon }, i) => (
              <li
                key={i}
                className="focus:outline-none flex justify-start hover:text-white focus:bg-indigo-700 focus:text-white hover:bg-indigo-700 text-gray-600 rounded py-3 pl-4 items-center space-x-6 w-full"
              >
                <a href={url}>
                  <span className="">{icon}</span>
                  <span className="text-base leading-4">{title}</span>
                </a>
              </li>
            ))}
          </ul>
          <div className="w-full px-4">
            <hr className=" border-gray-100 w-full" />
          </div>
          <div
            className="mt-36 flex bg-indigo-700 justify-start space-x-2
            items-center h-full py-4 px-3.5 w-full "
          >
            <div>
              <img
                src="https://e7.pngegg.com/pngimages/211/502/png-clipart-lionel-messi-art-lionel-messi-wpap-desktop-lionel-messi-face-poster.png"
                alt="avatar"
                className="rounded-full w-10 h-10"
              />
            </div>
            <div className="flex flex-col justify-start items-start space-y-2">
              <p className="cursor-pointer text-base leading-4 text-white">
                Addisu Haile
              </p>
              <p className="cursor-pointer text-xs leading-3 text-gray-200">
                addisu.haile@yahoo.com
              </p>
            </div>
            <button
              aria-label="visit"
              className=" focus:ring-2 focus:outline-none hover:bg-indigo-600 p-2.5 bg-indigo-400 rounded-full"
            >
              <FaArrowCircleRight />
            </button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;

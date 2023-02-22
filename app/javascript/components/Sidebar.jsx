import React, { useState } from 'react';
import {
  FaArrowRight,
  FaBars,
  FaBell,
  FaDesktop,
  FaNewspaper,
  FaRegSun,
  FaSearch,
  FaSignInAlt,
  FaSignOutAlt
} from 'react-icons/fa';
import { MdClose, MdPerson } from 'react-icons/md';

const Sidebar = () => {
  const [show, setShow] = useState(false);

  const SideLinks = [
    { title: 'Home', icon: <FaDesktop />, url: '/' },
    { title: 'About', icon: <MdPerson />, url: '/about' },
    { title: 'Projects', icon: <FaRegSun />, url: '/projects' },
    { title: 'Blogs', icon: <FaBell />, url: '/blogs' }
  ];

  const Profiles = [
    { title: 'SignIn', icon: <FaSignInAlt />, url: '/login' },
    { title: 'LogOut', icon: <FaSignOutAlt />, url: '/signup' }
  ];

  return (
    <div className="bg-gray-50">
      {/* Navigation start */}
      <nav className="sticky top-0 bg-white flex text-gray-800  hover:text-black focus:outline-none focus:text-black justify-between w-full p-6 items-center space-x-3 drop-shadow-md">
        <button className="flex justify-between items-center space-x-3">
          <FaDesktop />
          <p className="text-2xl leading-6 ">SideBar</p>
        </button>

        <div className="relative flex justify-start w-72 text-gray-800 rounded items-center border border-gray-300 focus:outline-none focus:border-gray-400">
          <input
            type="text"
            placeholder="Search"
            className="placeholder-gray-800 text-base placeholder-text-base leading-4 py-3 w-72 pl-12 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded "
          />
          <FaSearch className="absolute left-4 w-4 h-4" />
        </div>
      </nav>
      {/* Navigation end */}
      <div className=" bg-white xl:hidden flex text-gray-800  hover:text-black focus:outline-none focus:text-black justify-between w-full p-6 items-center sm:w-72">
        <div aria-label="toggler" className="flex justify-center items-center">
          <button
            id="open"
            onClick={() => setShow(!show)}
            aria-label="open"
            className={`${
              show ? '' : 'hidden'
            } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800`}
          >
            <FaBars />
          </button>
          <button
            id="close"
            onClick={() => setShow(!show)}
            aria-label="close"
            className={`${
              show ? 'hidden' : ''
            } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800`}
          >
            <MdClose />
          </button>
        </div>
      </div>
      {/* Sidebar start */}
      <nav
        id="Main"
        className={`${
          show ? '-translate-x-full' : 'translate-x-0'
        }  bg-white transform  xl:translate-x-0 ease-in-out transition duration-500 flex justify-start items-start w-full sm:w-72 flex-col h-full absolute drop-shadow-lg`}
      >
        <div className="mt-6 flex flex-col justify-start items-start  px-4 w-full space-y-3 pb-5 ">
          <ul className="xl:mt-6 flex flex-col justify-start items-start px-4 w-full space-y-3 pb-5 ">
            {SideLinks.map(({ icon, title, url }, index) => (
              <li
                key={index}
                className="focus:outline-none flex justify-start hover:text-white focus:bg-blue-500 focus:text-white hover:bg-blue-500 text-gray-600 rounded py-3 pl-4 items-center space-x-6 w-full"
              >
                <span>{icon}</span>
                <a href={url}>
                  <p className="text-base leading-4">{title}</p>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Horizontal ruler start */}
        <div className="w-full px-4">
          <hr className=" border-gray-100 w-full" />
        </div>
        {/* Horizontal ruler end */}

        {/* User profile's start */}
        <div className="mt-6 flex flex-col justify-start items-start px-4 w-full space-y-3 pb-5">
          <ul className="xl:mt-6 flex flex-col justify-start items-start px-4 w-full space-y-3 pb-5 ">
            {Profiles.map(({ icon, title, url }, index) => (
              <li
                key={index}
                className="focus:outline-none flex justify-start hover:text-white focus:bg-blue-500 focus:text-white hover:bg-blue-500 text-gray-600 rounded py-3 pl-4 items-center space-x-6 w-full"
              >
                <span>{icon}</span>
                <a href={url}>
                  <p className="text-base leading-4">{title}</p>
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* User profile's end */}

        {/* Footer start */}
        <div className=" w-full flex bg-blue-500 justify-start space-x-2 items-center h-24 py-2 px-3.5">
          <div>
            <img
              src="https://e7.pngegg.com/pngimages/211/502/png-clipart-lionel-messi-art-lionel-messi-wpap-desktop-lionel-messi-face-poster.png"
              alt="avatar"
              className="w-12 h-12 rounded-full"
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
            className=" focus:ring-2 focus:outline-none hover:bg-zinc-800 p-2.5 bg-zinc-500 rounded-full"
          >
            <FaArrowRight className="text-white" />
          </button>
        </div>
        {/* Footer start */}
      </nav>
      {/* Sidebar end */}
    </div>
  );
};

export default Sidebar;

import React, { useState } from 'react';
import {
  FaArrowRight,
  FaBars,
  FaBell,
  FaDesktop,
  FaNewspaper,
  FaRegSun,
  FaSearch,
  FaSignOutAlt
} from 'react-icons/fa';
import { MdClose } from 'react-icons/md';

const Navbar = () => {
  const [show, setShow] = useState(false);

  const SideLinks = [
    { title: 'Home', icon: <FaDesktop />, url: '/' },
    { title: 'About', icon: <FaBell />, url: '/about' },
    { title: 'Projects', icon: <FaRegSun />, url: '/projects' },
    { title: 'Blogs', icon: <FaNewspaper />, url: '/blogs' },
    { title: 'Logout', icon: <FaSignOutAlt />, url: '/signup' }
  ];

  return (
    <div className="bg-gray-50">
      <div className="bg-white xl:hidden flex text-gray-800  hover:text-black focus:outline-none focus:text-black justify-between w-full p-6 items-center ">
        <button className="flex justify-between  items-center space-x-3 mx-auto">
          <FaDesktop />
          <p className="text-2xl leading-6 ">SideBar</p>
        </button>
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
      <div
        id="Main"
        className={`${
          show ? '-translate-x-full' : 'translate-x-0'
        } bg-white transform  xl:translate-x-0 ease-in-out transition duration-500 flex justify-start items-start w-full sm:w-72   flex-col h-full`}
      >
        <button className="hidden xl:flex text-gray-800 hover:text-black focus:outline-none focus:text-black justify-start px-6 pt-6 items-center space-x-3 w-full">
          <FaDesktop />
          <p className="text-2xl leading-6 ">SideBar</p>
        </button>
        <div className="xl:mt-6 flex flex-col justify-start items-start  px-4 w-full space-y-3 pb-5 ">
          <div className=" relative focus:outline-none flex justify-start w-full   text-gray-800 rounded  items-center border-gray-300 focus:border-gray-400 border  ">
            <input
              type="text"
              placeholder="Search"
              className="placeholder-gray-800 text-base placeholder-text-base leading-4 py-3 w-full pl-12 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded "
            />
            <FaSearch className="absolute left-4 w-4 h-4" />
          </div>
          {SideLinks.map(({ icon, title, url }, index) => (
            <a href={url} key={index}>
              <button className="focus:outline-none flex justify-start hover:text-white focus:bg-blue-500 focus:text-white hover:bg-blue-500 text-gray-600 rounded py-3 pl-4 items-center space-x-6 w-full">
                <span className="">{icon}</span>
                <p className="text-base leading-4">{title}</p>
              </button>
            </a>
          ))}
        </div>
        <div className="w-full px-4">
          <hr className=" border-gray-100 w-full" />
        </div>

        <div className=" w-full mt-36 flex bg-blue-500 justify-start space-x-2 items-center h-full py-4 px-3.5">
          <div>
            <img src="https://i.ibb.co/fxrbS6p/Ellipse-2-2.png" alt="avatar" />
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
      </div>
    </div>
  );
};

export default Navbar;

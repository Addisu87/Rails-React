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

export default function Index() {
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
        <button className="flex justify-between  items-center space-x-3">
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
          <div className=" relative focus:outline-none flex jusitfy-start w-full   text-gray-800 rounded  items-center border-gray-300 focus:border-gray-400 border  ">
            <input
              type="text"
              placeholder="Search"
              className="placeholder-gray-800 text-base placeholder-text-base leading-4 py-3 w-full pl-16 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded "
            />
            <svg
              className="absolute left-4"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17Z"
                stroke="#1F2937"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21 21L15 15"
                stroke="#1F2937"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          {SideLinks.map(({ icon, title, url }, index) => (
            <button
              key={index}
              to={url}
              className="focus:outline-none flex jusitfy-start hover:text-white focus:bg-indigo-700 focus:text-white hover:bg-indigo-700 text-gray-600 rounded py-3 pl-4 items-center space-x-6 w-full "
            >
              <span>{icon}</span>
              <p className="text-base leading-4 ">{title}</p>
            </button>
          ))}
        </div>
        <div className="w-full px-4">
          <hr className=" border-gray-100 w-full" />
        </div>
        <div className="mt-6 flex flex-col justify-start items-start  px-4 w-full space-y-3 pb-5 ">
          <button className="focus:outline-none flex justify-start items-center  hover:text-white focus:bg-indigo-700 focus:text-white hover:bg-indigo-700 text-gray-600 rounded py-3 pl-4  w-full ">
            <div className="flex justify-between items-center  w-full">
              <div className="flex justify-start items-center">
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 10L11 14L17 20L21 4L3 11L7 13L9 19L12 15"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="text-base leading-4  ml-6">Chat</p>
              </div>
              <div className="ml-28 p-1 bg-indigo-700 rounded-full"></div>
            </div>
          </button>
          <button className="focus:outline-none flex justify-start items-center space-x-6 hover:text-white focus:bg-indigo-700 focus:text-white hover:bg-indigo-700 text-gray-600 rounded  py-3 pl-4  w-full ">
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 8C15.1046 8 16 7.10457 16 6C16 4.89543 15.1046 4 14 4C12.8954 4 12 4.89543 12 6C12 7.10457 12.8954 8 14 8Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 6H12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16 6H20"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 14C9.10457 14 10 13.1046 10 12C10 10.8954 9.10457 10 8 10C6.89543 10 6 10.8954 6 12C6 13.1046 6.89543 14 8 14Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 12H6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10 12H20"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17 20C18.1046 20 19 19.1046 19 18C19 16.8954 18.1046 16 17 16C15.8954 16 15 16.8954 15 18C15 19.1046 15.8954 20 17 20Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 18H15"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M19 18H20"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="text-base leading-4  ">Settings</p>
          </button>
        </div>
        <div className="w-full px-4">
          <hr className=" border-gray-100 w-full" />
        </div>
        <div className="mt-6 flex flex-col justify-start items-start  px-4 w-full space-y-3 pb-5 ">
          <button className="focus:outline-none flex justify-start items-center space-x-6 hover:text-white focus:bg-indigo-700 focus:text-white hover:bg-indigo-700 text-gray-600 rounded  py-3 pl-4  w-full ">
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 6H7C6.46957 6 5.96086 6.21071 5.58579 6.58579C5.21071 6.96086 5 7.46957 5 8V17C5 17.5304 5.21071 18.0391 5.58579 18.4142C5.96086 18.7893 6.46957 19 7 19H16C16.5304 19 17.0391 18.7893 17.4142 18.4142C17.7893 18.0391 18 17.5304 18 17V14"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17 10C18.6569 10 20 8.65685 20 7C20 5.34315 18.6569 4 17 4C15.3431 4 14 5.34315 14 7C14 8.65685 15.3431 10 17 10Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="text-base leading-4  ">Notifications</p>
          </button>
        </div>
        <div className="mt-36 flex  bg-indigo-700 justify-start space-x-2 items-center h-full py-4 px-3.5    w-full  ">
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
            className=" focus:ring-2 focus:outline-none hover:bg-indigo-800 p-2.5 bg-indigo-600 rounded-full"
          >
            <svg
              width={20}
              height={20}
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.16666 10H15.8333"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.8333 15L15.8333 10"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.8333 5L15.8333 10"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

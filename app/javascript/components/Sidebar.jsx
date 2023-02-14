import React from 'react';
import {
  FaBell,
  FaDesktop,
  FaListAlt,
  FaNewspaper,
  FaRegSun,
  FaSearch,
  FaSignOutAlt
} from 'react-icons/fa';

const Sidebar = () => {
  const Sidebars = [
    { title: 'Dashboard', icon: <FaDesktop />, href: '#' },
    { title: 'Notifications', icon: <FaBell />, href: '#' },
    { title: 'messages', icon: <FaNewspaper />, href: '#' },
    { title: 'settings', icon: <FaRegSun />, href: '#' },
    { title: 'wishlists', icon: <FaListAlt />, href: '#' },
    { title: 'Logout', icon: <FaSignOutAlt />, href: '#' }
  ];

  return (
    <>
      <div className="w-full h-full bg-gray-200">
        <div className="flex flex-no-wrap">
          {/* Sidebar starts */}
          <div className="w-3/12 bg-white rounded p-3 shadow-lg">
            <div className="flex flex-col md:flex-row items-center justify-center space-x-4 p-2 mb-5">
              <img
                className="h-12 rounded-full"
                src="https://i.pinimg.com/474x/6f/c9/3c/6fc93c67a3402366748358ed08719418.jpg"
                alt="Addisu Haile"
              />
              <div>
                <h4 className="font-semibold text-lg text-gray-700 capitalize font-poppins tracking-wide">
                  Addisu Haile
                </h4>
              </div>
            </div>
            <ul className="space-y-2 text-sm">
              {Sidebars.map((bar, i) => (
                <li key={i}>
                  <a
                    href={bar.href}
                    className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 bg-gray-200 focus:shadow-outline"
                  >
                    <span className="text-gray-600 h-6 w-6 ">{bar.icon}</span>
                    <span>{bar.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Sidebar ends */}

          {/* Navigation starts */}
          <div className="w-full">
            <nav className="h-16 flex items-center lg:items-stretch justify-end lg:justify-between bg-white shadow relative z-10">
              <div className="hidden lg:flex w-full pr-6">
                <div className="flex flex-col justify-between h-full w-full">
                  <div className="relative w-full">
                    <div className="text-gray-500 absolute ml-4 inset-0 m-auto w-4 h-4">
                      <FaSearch className=" icon icon-tabler icon-tabler-search w-4 h-4" />
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
                        <span className="text-sm ml-2">My Profile</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

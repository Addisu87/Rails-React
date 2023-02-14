import React from 'react';
import {
  FaBell,
  FaDesktop,
  FaListAlt,
  FaNewspaper,
  FaRegShareSquare,
  FaRegSun
} from 'react-icons/fa';
import Home from '../pages/Home';

const Sidebar = () => {
  const Sidebars = [
    { title: 'Dashboard', icon: <FaDesktop />, href: '#' },
    { title: 'Notifications', icon: <FaBell />, href: '#' },
    { title: 'messages', icon: <FaNewspaper />, href: '#' },
    { title: 'settings', icon: <FaRegSun />, href: '#' },
    { title: 'wishlists', icon: <FaListAlt />, href: '#' },
    { title: 'Logout', icon: <FaRegShareSquare />, href: '#' }
  ];

  return (
    <>
      <div className="flex bg-gray-100 w-full h-screen">
        <div className="w-3.5/12 bg-white rounded p-3 shadow-lg">
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

        <div class="w-9/12">
          <div class="p-4 text-gray-500">
            <Home />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

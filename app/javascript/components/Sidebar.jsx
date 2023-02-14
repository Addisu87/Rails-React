import React from 'react';
import { FaDesktop } from 'react-icons/fa';

const Sidebar = () => {
  const Sidebars = [
    { title: 'Dashboard', icon: <FaDesktop />, href: '#' },
    { title: 'Notifications', icon: <FaDesktop />, href: '#' },
    { title: 'messages', icon: <FaDesktop />, href: '#' },
    { title: 'settings', icon: <FaDesktop />, href: '#' },
    { title: 'wishlists', icon: <FaDesktop />, href: '#' },
    { title: 'Logout', icon: <FaDesktop />, href: '#' }
  ];

  return (
    <>
      <div className="flex flex-wrap bg-gray-100 w-full h-screen">
        <div className="w-3/12 bg-white rounded p-3 shadow-lg">
          <div className="flex items-center space-x-4 p-2 mb-5">
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
        </div>
      </div>
    </>
  );
};

export default Sidebar;

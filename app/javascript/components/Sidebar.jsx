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
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: 'Dashboard', src: <FaDesktop /> },
    { title: 'Inbox', src: <FaBell /> },
    { title: 'Accounts', src: <FaRegSun />, gap: true },
    { title: 'Schedule ', src: <FaNewspaper /> },
    { title: 'Search', src: <FaDesktop /> },
    { title: 'Analytics', src: <FaRegSun /> },
    { title: 'Files ', src: <FaNewspaper />, gap: true },
    { title: 'Setting', src: <FaSignOutAlt /> }
  ];

  return (
    <div className="flex">
      <div
        className={` ${
          open ? 'w-72' : 'w-20 '
        } bg-dark-purple h-screen p-5  pt-8 relative duration-300`}
      >
        <FaBars
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && 'rotate-180'}`}
          onClick={() => setOpen(!open)}
        />

        <div className="flex gap-x-4 items-center">
          <MdClose
            className={`cursor-pointer duration-500 ${
              open && 'rotate-[360deg]'
            }`}
          />

          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && 'scale-0'
            }`}
          >
            Designer
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? 'mt-9' : 'mt-2'} ${
                index === 0 && 'bg-light-white'
              } `}
            >
              <span>{Menu.src}</span>
              <span className={`${!open && 'hidden'} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-screen flex-1 p-7">
        <h1 className="text-2xl font-semibold ">Home Page</h1>
      </div>
    </div>
  );
};

export default Sidebar;

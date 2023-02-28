import React, { useEffect, useState } from 'react';
import {
  FaArrowRight,
  FaBars,
  FaBell,
  FaDesktop,
  FaRegSun,
  FaSearch,
  FaSignInAlt,
  FaSignOutAlt
} from 'react-icons/fa';
import { MdClose, MdPerson } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navigation = [
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' },
    { name: 'Projects', url: '/projects' },
    { name: 'Blogs', url: '/blogs' },
    { name: 'SignIn', url: '/login' },
    { name: 'SignUp', url: '/signup' }
  ];

  return (
    <div className="mx-auto max-w-7xl py-2 px-4 lg:px-8 lg:py-4">
      <nav className="flex h-16 items-center justify-between">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <img
              className="h-8 w-8"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
              alt="Your Company"
            />
          </div>

          <ul className={`${openNav ? 'flex flex-col' : 'hidden'}`}>
            {navigation.map((item, index) => (
              <li
                key={index}
                className="ml-10 flex items-baseline"
                onClick={() => setOpenNav(!openNav)}
              >
                <NavLink
                  to={item.url}
                  className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="-mr-2 flex md:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            onClick={() => setOpenNav(!openNav)}
          >
            <span className="sr-only">Open main menu</span>
            {openNav ? (
              <MdClose className="block h-6 w-6" aria-hidden="true" />
            ) : (
              <FaBars className="block h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

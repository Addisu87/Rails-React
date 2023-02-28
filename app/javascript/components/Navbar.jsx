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

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navigation = [
    { title: 'Home', icon: <FaDesktop />, url: '/' },
    { title: 'About', icon: <MdPerson />, url: '/about' },
    { title: 'Projects', icon: <FaRegSun />, url: '/projects' },
    { title: 'Blogs', icon: <FaBell />, url: '/blogs' },
    { title: 'SignIn', icon: <FaSignInAlt />, url: '/login' },
    { title: 'LogOut', icon: <FaSignOutAlt />, url: '/signup' }
  ];

  return (
    <nav className="mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4">
      <div className="bg-gray-50 container flex h-16 items-center justify-between">
        <div className="-mr-2 md:hidden">
          <button className="inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
            <span className="sr-only">Addisu</span>
            {openNav ? (
              <MdClose className="block h-6 w-6" aria-hidden="true" />
            ) : (
              <FaBars className="block h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        <ul className="hidden md:flex">
          {navigation.map(({ icon, title, url }, index) => (
            <li
              key={index}
              className="ml-10 flex items-baseline space-x-4"
              onClick={() => setOpenNav(!openNav)}
            >
              <span>{icon}</span>
              <a
                href={url}
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                <span>{title}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

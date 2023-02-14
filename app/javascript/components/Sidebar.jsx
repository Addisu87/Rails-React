import React from 'react';

const Sidebar = () => {
  const sidebars = [{},{}]
  return (
    <>
      <div class="flex flex-wrap bg-gray-100 w-full h-screen">
        <div class="w-3/12 bg-white rounded p-3 shadow-lg">
          <div class="flex items-center space-x-4 p-2 mb-5">
            <img
              class="h-12 rounded-full"
              src="https://i.pinimg.com/474x/6f/c9/3c/6fc93c67a3402366748358ed08719418.jpg"
              alt="Addisu Haile"
            />
            <div>
              <h4 class="font-semibold text-lg text-gray-700 capitalize font-poppins tracking-wide">
                Addisu Haile
              </h4>
              <span class="text-sm tracking-wide flex items-center space-x-1">
                <svg
                  class="h-4 text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
                <span class="text-gray-600">Verified</span>
              </span>
            </div>
            <ul class="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  class="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 bg-gray-200 focus:shadow-outline"
                >
                  <span class="text-gray-600">
                    <svg
                      class="h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </span>
                  <span>Dashboard</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

import React, { useState } from 'react';
import SignUpScreen from './SignUpScreen';

const LogInScreen = () => {
  const [signIn, setSignIn] = useState(false);

  return (
    <div className="flex relative flex-col md:text-left md:flex-row  max-w-7xl px-10 justify-evenly mx-auto items-center">
      <div className="mt-20 mb-12 md:col-span-2 md:mt-24 space-y-8">
        <div className="px-4 sm:px-0">
          <button
            onClick={() => setSignIn(true)}
            className="text-xl text-center font-medium leading-6 text-gray-900"
          >
            Sign In
          </button>
        </div>
        {signIn ? (
          <SignUpScreen />
        ) : (
          <form>
            <div className="overflow-hidden drop-shadow-2xl sm:rounded-md">
              <div className="bg-white px-4 py-5 sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6">
                    <input
                      type="email"
                      name="email-address"
                      placeholder="Email Address"
                      id="email-address"
                      autoComplete="email"
                      className="mt-1 block w-full border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div className="col-span-6">
                    <input
                      type="password"
                      name="password"
                      placeholder="password"
                      id="password"
                      autoComplete="password"
                      className="mt-1 block w-full  border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 text-center md:text-left sm:px-6">
                <button
                  onClick={() => setSignIn(true)}
                  type="submit"
                  className="inline-flex justify-center rounded-2xl border border-transparent bg-zinc-900 px-16 py-3 md:py-2 md:px-8 text-base font-medium text-white shadow-sm hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2"
                >
                  Sign In
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default LogInScreen;

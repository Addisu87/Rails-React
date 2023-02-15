import React from 'react';
import { useForm } from 'react-hook-form';

const SignUp = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    window.location.href = `mailto:madhurexports11@gmail.com?body=${data.name}. &body=${data.message}`;
  };

  return (
    <div className="flex relative flex-col md:text-left md:flex-row  max-w-7xl px-10 justify-evenly mx-auto items-center">
      <div className="mt-20 mb-12 md:col-span-2 md:mt-24 space-y-8">
        <div className="px-4 sm:px-0">
          <h3 className="text-xl text-center font-medium leading-6 text-gray-900">
            Sign Up
          </h3>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="overflow-hidden shadow sm:rounded-md">
            <div className="bg-white px-4 py-5 sm:p-6">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <input
                    type="text"
                    name="first-name"
                    {...register('FirstName', {
                      required: true,
                      maxLength: 20
                    })}
                    placeholder="First Name"
                    id="first-name"
                    autoComplete="first-name"
                    className="mt-1 block w-full border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <input
                    type="text"
                    name="lastName"
                    {...register('lastName', { pattern: /^[A-Za-z]+$/i })}
                    placeholder="lastName"
                    id="lastName"
                    autoComplete="lastName"
                    className="mt-1 block w-full border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <input
                    type="text"
                    name="email-address"
                    {...register('EmailAddress', { required: true })}
                    placeholder="Email Address"
                    id="email-address"
                    autoComplete="email"
                    className="mt-1 block w-full border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <input
                    type="text"
                    name="password"
                    {...register('password')}
                    placeholder="password"
                    id="password"
                    autoComplete="password"
                    className="mt-1 block w-full  border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <input
                    type="text"
                    name="quality"
                    {...register('quality')}
                    placeholder="Quality"
                    id="quality"
                    autoComplete="text"
                    className="mt-1 block w-full border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <input
                    id="file-upload"
                    name="file-upload"
                    {...register('FileUpload')}
                    type="file"
                    autoComplete="text"
                    className="mt-1 block w-full border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  />
                </div>

                <div className="col-span-6">
                  <input
                    id="date"
                    name="date"
                    {...register('date', { required: true })}
                    type="date"
                    autoComplete="date"
                    className="mt-1 block w-full border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>

                <div className="col-span-6">
                  <textarea
                    id="message"
                    name="message"
                    {...register('message', { required: true })}
                    placeholder="Message"
                    rows={4}
                    className="mt-1 block w-full border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 text-center md:text-left sm:px-6">
              <button
                type="submit"
                className="inline-flex justify-center rounded-2xl border border-transparent bg-zinc-900 px-16 py-3 md:py-2 md:px-8 text-base font-medium text-white shadow-sm hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2"
              >
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

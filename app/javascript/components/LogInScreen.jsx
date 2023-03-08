import React, { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { clearMessage } from '../redux/slices/message';

const LogInScreen = ({ setCurrUser, setShow }) => {
  const formRef = useRef();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm();

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  const login = async (userInfo, setCurrUser) => {
    await client
      .post('/login', { userInfo })
      .then((response) => {
        localStorage.setItem('token', response.headers.get('Authorization'));
        setCurrUser(response.data);
        console.log(response.headers.get('Authorization'));
      })
      .catch((error) => {
        console.log('error', error);
      });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData);
    const userInfo = {
      user: {
        email: data.email,
        password: data.password
      }
    };

    login(userInfo, setCurrUser);
    e.target.reset();
  };

  const handleClick = (e) => {
    e.preventDefault();
    setShow(false);
  };

  return (
    <div className="flex relative flex-col md:text-left md:flex-row  max-w-7xl px-10 justify-evenly mx-auto items-center">
      <div className="mt-20 mb-12 md:col-span-2 md:mt-24 space-y-8">
        <div className="px-4 sm:px-0">
          <h3 className="text-xl text-center font-medium leading-6 text-gray-900">
            Sign In
          </h3>
        </div>

        <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
          <div className="overflow-hidden drop-shadow-2xl sm:rounded-md">
            <div className="bg-white px-4 py-5 sm:p-6">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6">
                  <input
                    type="email"
                    name="email-address"
                    {...register('EmailAddress', { required: true })}
                    placeholder="Email Address"
                    id="email-address"
                    autoComplete="email"
                    className="mt-1 block w-full border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="col-span-6">
                  <input
                    type="password"
                    name="password"
                    {...register('password', {
                      required: true,
                      pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
                    })}
                    placeholder="password"
                    id="password"
                    autoComplete="password"
                    className="mt-1 block w-full  border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 text-center md:text-left sm:px-6">
              <button
                type="submit"
                className="inline-flex justify-center rounded-2xl border border-transparent bg-zinc-900 px-16 py-3 md:py-2 md:px-8 text-base font-medium text-white shadow-sm hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2"
              >
                <span>Login</span>
              </button>
            </div>
          </div>
        </form>

        <br />

        <div>
          Not registered yet,
          <a href="#signup" onClick={handleClick}>
            Signup
          </a>
        </div>
      </div>
    </div>
  );
};

export default LogInScreen;

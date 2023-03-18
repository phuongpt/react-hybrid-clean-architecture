import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hook';
import { signOutAction } from 'core';

import logo from '../../../assets/logo.svg';
import './App.css';

function Home() {
  const user = useAppSelector(s => s.user).data;
  const dispatch = useAppDispatch();

  const onSignOut = () => {
    dispatch(signOutAction());
  }

  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 bg-gradient-to-r from-gray-800 to-blue-500 h-screen">

      <p className="font-bold text-4xl text-white">
        Hello {user?.name}!
      </p>
      <img src={logo} className="App-logo" alt="logo" />

      <button type="button" onClick={onSignOut} className=" text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 mt-5">Sign out</button>

    </div>

  );
}

export default Home;

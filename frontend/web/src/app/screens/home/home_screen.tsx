import { signOutAction } from 'core';
import React from 'react';
import logo from '../../../logo.svg';
import { useAppDispatch, useAppSelector } from '../../hook';
import './App.css';

function Home() {
  const user = useAppSelector(s => s.user).data;
  const dispatch = useAppDispatch();

  const onSignOut = () => {
    dispatch(signOutAction());
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome {user?.name}!
        </p>

        <button type="button" onClick={onSignOut} className=" text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 mt-5">Sign out</button>

      </header>
    </div>
  );
}

export default Home;

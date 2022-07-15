import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';

const App = () => {
  return (
    <div>
      <Header text="Movie Search APP" />
      <nav className='home-navigator'>
        <Link className='home-link' to='/home'>Home</Link>
      </nav>
      <nav className='search-movie-navigator'>
        <Link className='search-condition-link' to='/search'>Search</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default App;

import React from 'react';
import './NavBar.scss';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <header className='header'>
      <h1>News Room</h1>
      <NavLink to={'/'} className='home-btn'>
        Home
      </NavLink>
    </header>
  );
}

export default NavBar;

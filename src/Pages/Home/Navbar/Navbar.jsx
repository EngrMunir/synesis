import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../../assets/logo.png';

const Navbar = () => {
    const navlinks =
    <>
         <li><NavLink to="/">Home</NavLink></li>
         <li><NavLink to="/register">Register</NavLink></li>
         <li><NavLink to="/login">Login</NavLink></li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
        <div className="flex-1 relative">
        <a className="flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="h-12 w-auto sm:h-16" // Set height, width adjusts automatically
          />
        </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
           {navlinks}
          </ul>
        </div>
      </div>
      <div className="h-[2px] bg-gray-300"></div>
        </div>

    );
};

export default Navbar;
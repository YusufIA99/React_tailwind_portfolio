import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="bg-black text-gray-400 p-4 flex justify-center items-center">
      <div className="bg-gray-800 rounded-full px-1 py-2">
        <NavLink 
          to="/" 
          className={({ isActive }) => isActive ? "text-white px-3" : "hover:text-gray-400 px-3"}
        >
          Home
        </NavLink>
        <NavLink 
          to="/projects" 
          className={({ isActive }) => isActive ? "text-white px-3" : "hover:text-gray-400 px-3"}
        >
          Projects
        </NavLink>
        <NavLink 
          to="/contact" 
          className={({ isActive }) => isActive ? "text-white px-3" : "hover:text-gray-400 px-3"}
        >
          Contact
        </NavLink>
      </div>
    </nav>
  );
}

export default Navigation;
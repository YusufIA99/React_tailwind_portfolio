import React from 'react';
import { NavLink } from 'react-router-dom';
import {FaLinkedin } from 'react-icons/fa'; // Import GitHub and LinkedIn icons

function Navigation() {
  return (
    <nav className="bg-black text-gray-400 p-4 flex justify-center items-center relative">
      <div className="bg-gray-800 rounded-full px-1 py-2 flex items-center space-x-4">
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
      <div className="absolute right-4">
        <a 
          href="https://www.linkedin.com/in/yusuf-issa-ahmed-61b903255/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="px-3"
        >
          <FaLinkedin className="text-2xl" style={{ color: '#0077B5' }} />
        </a>
      </div>
    </nav>
  );
}

export default Navigation;
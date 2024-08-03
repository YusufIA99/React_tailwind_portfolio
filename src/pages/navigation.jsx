import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FaLinkedin, FaSun, FaMoon } from 'react-icons/fa'; // Import GitHub, LinkedIn, Sun, and Moon icons

function Navigation() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark-gradient');

  useEffect(() => {
    document.body.classList.remove('bg-gradient-to-r', 'from-gray-900', 'via-gray-800', 'to-black', 'bg-gradient-to-r', 'from-gray-200', 'via-gray-300', 'to-gray-400');
    if (theme === 'dark-gradient') {
      document.body.classList.add('bg-gradient-to-r', 'from-gray-900', 'via-gray-800', 'to-black');
    } else {
      document.body.classList.add('bg-gradient-to-r', 'from-gray-200', 'via-gray-300', 'to-gray-400');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark-gradient' ? 'light-gradient' : 'dark-gradient'));
  };

  return (
    <nav className={`p-4 flex justify-center items-center relative ${theme === 'dark-gradient' ? 'bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white' : 'bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 text-white'}`}>
      <div className={`rounded-full px-1 py-2 flex items-center space-x-4 ${theme === 'dark-gradient' ? 'bg-gray-700' : 'bg-gray-500'}`}>
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
      <div className="absolute right-4 flex items-center space-x-4">
        <button
          id="theme-toggle"
          onClick={toggleTheme}
          className="p-2 bg-blue-500 text-white rounded-full shadow-md hover:shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {theme === 'dark-gradient' ? <FaSun className="text-xl" /> : <FaMoon className="text-xl" />}
        </button>
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
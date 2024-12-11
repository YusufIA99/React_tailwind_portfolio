import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaLinkedin, FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from './themecontext.jsx';

function Navigation() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav
      className={`relative flex flex-col items-center justify-center p-4 md:flex-row ${
        theme === "dark-gradient"
          ? "bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white"
          : "bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 text-white"
      }`}
    >
      <div
        className={`flex items-center space-x-4 rounded-full px-1 py-2 ${
          theme === "dark-gradient" ? "bg-gray-700" : "bg-gray-500"
        }`}
      >
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "px-3 text-white" : "px-3 hover:text-gray-400"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "px-3 text-white" : "px-3 hover:text-gray-400"
          }
        >
          Projects
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "px-3 text-white" : "px-3 hover:text-gray-400"
          }
        >
          Contact
        </NavLink>
      </div>
      <div className="mt-4 flex items-center space-x-4 md:absolute md:right-4 md:mt-0">
        <button
          id="theme-toggle"
          onClick={toggleTheme}
          className="transform rounded-full bg-blue-500 p-2 text-white shadow-md transition-transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {theme === "dark-gradient" ? (
            <FaSun className="text-xl" />
          ) : (
            <FaMoon className="text-xl" />
          )}
        </button>
        <a
          href="https://www.linkedin.com/in/yusuf-issa-61b903255/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-3"
        >
          <FaLinkedin className="text-2xl" style={{ color: "#0077B5" }} />
        </a>
      </div>
    </nav>
  );
}

export default Navigation;
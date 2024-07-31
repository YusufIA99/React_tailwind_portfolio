import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="bg-black text-white p-4 flex justify-center items-center">
      <div className="bg-gray-800 rounded-full px-1 py-2">
        <Link to="/" className="hover:text-gray-400 px-3">Home</Link>
        <Link to="/projects" className="hover:text-gray-400 px-3">Projects</Link>
        <Link to="/contact" className="hover:text-gray-400 px-3">Contact</Link>
      </div>
    </nav>
  );
}

export default Navigation;
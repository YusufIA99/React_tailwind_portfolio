import React from 'react';

function Navigation() {
  return (
    <nav className="bg-black text-white p-4 flex justify-center items-center">
      <div className="bg-gray-800 rounded-full px-1 py-2">
        <a href="#home" className="hover:text-gray-400 px-3">Home</a>
        <a href="#projects" className="hover:text-gray-400 px-3">Projects</a>
        <a href="#contact" className="hover:text-gray-400 px-3">Contact</a>
      </div>
    </nav>
  );
}

export default Navigation;

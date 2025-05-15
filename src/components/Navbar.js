import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // install via: npm install lucide-react

const Navbar = ({ toggleDarkMode, darkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-800 text-white dark:bg-gray-900 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <NavLink 
          to="/" 
         className={({ isActive }) =>
                isActive
                  ? 'text-yellow-400 text-2xl font-bold transition-colors'
                  : 'hover:text-yellow-300 transition-colors text-2xl font-bold'
              }
        >
          JGD Portfolio
        </NavLink>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6">
          <div className="space-x-6 hidden md:flex">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? 'text-yellow-400 font-semibold border-b-2 border-yellow-400 transition-colors'
                  : 'hover:text-yellow-300 transition-colors'
              }
            >
              About
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive
                  ? 'text-yellow-400 font-semibold border-b-2 border-yellow-400 transition-colors'
                  : 'hover:text-yellow-300 transition-colors'
              }
            >
              Projects
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? 'text-yellow-400 font-semibold border-b-2 border-yellow-400 transition-colors'
                  : 'hover:text-yellow-300 transition-colors'
              }
            >
              Contact
            </NavLink>
          </div>
        </div>

        {/* Right-side buttons (visible always) */}
        <div className="flex items-center space-x-4">
          {/* Theme Toggle - Always Visible */}
          <div
            onClick={toggleDarkMode}
            className="w-14 h-7 flex items-center bg-gray-300 dark:bg-gray-600 rounded-full p-1 cursor-pointer relative transition-colors duration-300"
          >
            <div
              className={`w-5 h-5 rounded-full shadow-md flex items-center justify-center text-lg transition-transform duration-300 ${
                darkMode ? 'translate-x-7' : ''
              }`}
            >
              {darkMode ? '🌙' : '🌞'}
            </div>
          </div>

          {/* Hamburger Menu - Mobile Only */}
          <button onClick={toggleMenu} className="md:hidden focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-16 left-0 w-full bg-gray-800 dark:bg-gray-900 shadow-md transform transition-transform duration-700 ease-in-out ${
          isOpen ? 'translate-y-0 opacity-80' : '-translate-y-10 opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center py-4 space-y-4">
          <NavLink to="/about" onClick={toggleMenu} className="hover:text-yellow-400">About</NavLink>
          <NavLink to="/projects" onClick={toggleMenu} className="hover:text-yellow-400">Projects</NavLink>
          <NavLink to="/contact" onClick={toggleMenu} className="hover:text-yellow-400">Contact</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

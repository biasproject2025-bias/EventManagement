// src/components/Navbar.jsx

import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white/70 backdrop-blur-md shadow-md fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center h-16">
        {/* Logo + Brand */}
        <div className="flex items-center space-x-4">
          <img
            src="/src/assets/EventHive-logo.png"
            alt="Logo"
            className="h-10 w-10 rounded-xl"
          />
          <span className="text-2xl font-semibold text-gray-900">EventHive</span>
        </div>

        {/* Hamburger button for mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 focus:outline-none"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Nav Links */}
        <div className={`${isOpen ? "block" : "hidden"} md:flex md:items-center md:space-x-6`}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-3 py-2 rounded-md text-gray-800 hover:bg-indigo-100 ${
                isActive ? "font-bold" : ""
              }`
            }
            onClick={() => setIsOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              `px-3 py-2 rounded-md text-gray-800 hover:bg-indigo-100 ${
                isActive ? "font-bold" : ""
              }`
            }
            onClick={() => setIsOpen(false)}
          >
            Login
          </NavLink>
          <NavLink
            to="/register"
            className={({ isActive }) =>
              `px-3 py-2 rounded-md text-gray-800 hover:bg-indigo-100 ${
                isActive ? "font-bold" : ""
              }`
            }
            onClick={() => setIsOpen(false)}
          >
            Register
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

import React, { useState } from "react";
import { NavLink } from "react-router";
import '../input.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-blue-600">
              ShopMate
              
              
            </h1>
          </div>

          {/* Search Bar (Hidden on mobile) */}
          <div className="hidden md:flex flex-1 mx-4">
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Search for products..."
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
          <NavLink to="/" end>
            Home
         </NavLink>
            <NavLink to="/shop" className=" hover:text-blue-600">
              Shop
            </NavLink>
            <NavLink to="/contact" className=" hover:text-blue-600">
              Contact
            </NavLink>
            <NavLink to="/about" className=" hover:text-blue-600">
              About
            </NavLink>

            {/* Cart Icon with Badge */}
            <div className="relative">
              <NavLink to="#cart" className="text-gray-700 hover:text-blue-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.8 9M17 13l1.8 9M9 21h6"
                  />
                </svg>
              </NavLink>
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
                {}
              </span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-100">
          <NavLink
            to="#home"
            className="block px-4 py-2 text-gray-700 hover:bg-blue-500 hover:text-white"
          >
            Home
          </NavLink>
          <NavLink
            to="#shop"
            className="block px-4 py-2 text-gray-700 hover:bg-blue-500 hover:text-white"
          >
            Shop
          </NavLink>
          <NavLink
            to="#contact"
            className="block px-4 py-2 text-gray-700 hover:bg-blue-500 hover:text-white"
          >
            Contact
          </NavLink>
          <NavLink
            to="#about"
            className="block px-4 py-2 text-gray-700 hover:bg-blue-500 hover:text-white"
          >
            About
          </NavLink>

          {/* Mobile Search Bar */}
          <div className="px-4 py-2">
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Search for products..."
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

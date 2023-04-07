import React from "react";
// import { a } from "react-router-dom";
import { FaBars, FaSearch } from "react-icons/fa";
import Logo from "../assets/Logo.svg";

function Header() {
  return (
    <header className="bg-white shadow-sm ">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <a href="/">
          <img src={Logo} alt="Logo" className="h-24" />
        </a>
        <nav className="hidden sm:block">
          <ul className="flex items-center space-x-4">
            <li>
              <a to="/">Home</a>
            </li>
            <li>
              <a to="/news">News</a>
            </li>
            <li>
              <a to="/sports">Sports</a>
            </li>
            <li>
              <a to="/entertainment">Entertainment</a>
            </li>
            <li>
              <a to="/about-us">About Us</a>
            </li>
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <button className="text-gray-600 hover:text-gray-800">
            <FaSearch />
          </button>
          <button className="text-gray-600 hover:text-gray-800">
            <FaBars />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;

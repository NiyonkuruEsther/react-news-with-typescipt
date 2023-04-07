import React from "react";
// import { a } from "react-router-dom";
import { FaBars, FaSearch } from "react-icons/fa";
import Logo from "../assets/Logo.svg";
import { RxCross1 } from "react-icons/rx";
import { BsSearch } from "react-icons/bs";
import { useState } from "react";
import { useEffect } from "react";
function Header() {
  const [tabValue, setTabValue] = useState(0);
  const [scrolled, setScrolled] = useState(0);

  useEffect(() => {
    const changescrolled = () => {
      window.scrollY >= 6
        ? setScrolled(window.scrollY)
        : setScrolled(window.scrollY);
    };
    window.addEventListener("scroll", changescrolled);
    return () => {
      window.removeEventListener("scroll", changescrolled);
    };
  }, [scrolled]);
  return (
    <header
      className={`bg-white shadow-sm relative  w-full ${tabValue && "pb-20"}`}
    >
      <div className="max-w-7xl 2xl:px-0 xl:px-5 md:px-8 px-10 mx-auto py-2 flex items-center justify-between">
        <a href="/">
          <img src={Logo} alt="Logo" className="h-16" />
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
        <div className="flex items-center gap-5">
          <button className="text-gray-600 hover:text-gray-800">
            <FaSearch onClick={() => setTabValue(1)} />
          </button>
          <button className="text-gray-600 hover:text-gray-800">
            <FaBars />
          </button>
        </div>
      </div>

      <div
        className={` bg-white fixed top-0  ${
          tabValue
            ? `w-screen mx-auto h-fit transition-all ease-in-out duration-300 inset-x-0 z-[10000000] overflow-hidden ${
                scrolled < 10
                  ? "pb-8 pt-2 transition-all duration-700 delay-200 top-auto"
                  : "py-5 transition-all duration-700 top-0"
              }`
            : " h-0 bottom-0 overflow-hidden mx-auto"
        }`}
      >
        <div className="max-w-3xl items-center mx-auto flex w-full justify-between pl-2">
          <div className="border flex justify-between items-center w-full border-neutral-300 rounded-md ring ring-black p-2 flex-1">
            <input
              type="text"
              placeholder="Search..."
              className="outline-none flex-1"
            />
            <BsSearch className="text-black" />
          </div>

          <div className="flex justify-end px-2">
            <div className="p-2">
              <RxCross1
                className={`self-end hover:border w-6 h-6  rounded-full ${
                  tabValue === 1 ? " " : ""
                }`}
                onClick={() => {
                  setTabValue(0);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

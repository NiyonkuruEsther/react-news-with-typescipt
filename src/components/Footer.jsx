import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Logo from "../assets/Logo2.svg";

function Footer() {
  return (
    <footer className="bg-gray-800">
      <div className="container mx-auto px-4 py-12 flex flex-col sm:flex-row justify-between items-center">
        <div className="text-center sm:text-left">
          <a href={1}>
            <img src={Logo} alt="Logo" className="h-24" />
          </a>
        </div>
        <div className="flex items-center sm:mt-0 mt-4">
          <span className="text-gray-400">Follow Us:</span>
          <a
            href="#"
            className="ml-6 text-gray-400 hover:text-gray-300"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebook />{" "}
          </a>
          <a
            href="#"
            className="ml-6 text-gray-400 hover:text-gray-300"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter />{" "}
          </a>
          <a
            href="#"
            className="ml-6 text-gray-400 hover:text-gray-300"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />{" "}
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

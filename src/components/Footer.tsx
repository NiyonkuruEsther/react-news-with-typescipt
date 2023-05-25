import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Logo from "../assets/Logo2.svg";

function Footer() {
  return (
    <footer className="bg-gray-800">
      <div className="max-w-7xl 2xl:px-0 xl:px-5 md:px-8 px-10 mx-auto py-2 flex flex-col sm:flex-row justify-between items-center">
        <div className="text-center sm:text-left">
          {/* <a href={1}> */}
          <img src={Logo} alt="Logo" className="h-24" />
          {/* </a> */}
        </div>
        <div className="flex items-center sm:mt-0 mt-4">
          <span className="text-gray-400">Follow Us:</span>
          <a
            href="#"
            className="ml-6 text-gray-400 hover:text-gray-300"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="#"
            className="ml-6 text-gray-400 hover:text-gray-300"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            className="ml-6 text-gray-400 hover:text-gray-300"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

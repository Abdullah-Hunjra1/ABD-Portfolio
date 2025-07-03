import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import Navbar from "./Navbar";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full h-20 flex items-center z-50 text-white">
      <div className="max-w-screen-2xl w-full mx-auto px-4 md:px-6 grid grid-cols-[1fr,auto,1fr] items-center">

        {/* Logo */}
        <h1>
          <a href="/" className="logo">
            <img src="/images/logo.svg" width={40} height={40} alt="ABD" />
          </a>
        </h1>

        {/* Navbar - Desktop Only */}
        <div className="hidden md:flex justify-center">
          <Navbar navOpen={navOpen} />
        </div>

        {/* Contact Button - Desktop Only */}
        <div className="justify-self-end hidden md:block mr-6">
          <a href="#contact" className="btn btn-secondary">
            Contact
          </a>
        </div>

        {/* Hamburger Button - Mobile Only */}
        <div className="md:hidden absolute right-5 top-5 z-[999]">
          <button
            onClick={() => setNavOpen(prev => !prev)}
            className="menu-btn"
          >
            {navOpen ? (
              <IoCloseSharp className="text-2xl" />
            ) : (
              <GiHamburgerMenu className="text-2xl" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav - Mobile Only */}
      {navOpen && (
        <div className="absolute top-20 left-0 w-full bg-[#150F2F] flex flex-col items-center gap-4 py-4 md:hidden z-40">
          <a href="#home" className="hover:text-gray-300">Home</a>
          <a href="#about" className="hover:text-gray-300">About</a>
          <a href="#work" className="hover:text-gray-300">Work</a>
          <a href="#contact" className="hover:text-gray-300">Contact</a>
        </div>
      )}
    </header>
  );
};

export default Header;

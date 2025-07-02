import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full  text-white h-20 flex items-center z-50 shadow-lg">
      <div className="container mx-auto px-4 flex justify-between items-center w-full">
        {/* Logo */}
        <h1>
          <a href="/" className="logo">
            <img src="/images/logo.svg" width={40} height={40} alt="ABD" />
          </a>
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6">
          <a href="#home" className="hover:text-gray-300">
            Home
          </a>
          <a href="#about" className="hover:text-gray-300">
            About
          </a>
          <a href="#work" className="hover:text-gray-300">
            Work
          </a>
          <a href="#contact" className="hover:text-gray-300">
            Contact
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden z-[999] text-3xl"
          onClick={() => setNavOpen(!navOpen)}
        >
          {navOpen ? <IoCloseSharp /> : <GiHamburgerMenu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {navOpen && (
        <div className="absolute top-20 left-0 w-full bg-[#150F2F] flex flex-col items-center gap-4 py-4 md:hidden z-40">
          <a href="#home" className="hover:text-gray-300">
            Home
          </a>
          <a href="#about" className="hover:text-gray-300">
            About
          </a>
          <a href="#work" className="hover:text-gray-300">
            Work
          </a>
          <a href="#contact" className="hover:text-gray-300">
            Contact
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;

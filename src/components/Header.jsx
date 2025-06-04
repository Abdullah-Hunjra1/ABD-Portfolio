// //Node Modules

// import { useState } from "react"

// // Components

// import Navbar from "./Navbar"
// import { GiHamburgerMenu } from "react-icons/gi";
// import { IoCloseSharp } from "react-icons/io5";

// const Header = () => {
//     const [navOpen, setNavOpen] = useState(false);

//     return (
//         <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 ">
//             <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]">

//                 <h1>
//                     <a
//                         href="/"
//                         className="logo"
//                     >
//                         <img
//                             src="/images/logo.svg"
//                             width={40}
//                             height={40}
//                             alt="ABD"
//                         />
//                     </a>
//                 </h1>

//                 <div className="relative md:justify-self-center">
//                     <button className="menu-btn md:hidden" onClick={() => setNavOpen((prev) => !prev)}>
//                         <span className="material-symbols-rounded">{navOpen ? <IoCloseSharp /> :  <GiHamburgerMenu />}</span>
//                     </button>

//                     <Navbar navOpen={navOpen}/>
//                 </div>

//                 <a href="#contact" className="btn btn-secondary max-md:hidden md:justify-self-end">Contact Me</a>

//             </div>

//         </header>
//     )
// }

// export default Header

// Node Modules
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";

// Components
import Navbar from "./Navbar";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full h-20 flex items-center z-50 ">
      <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]">
        {/* Logo */}
        <h1>
          <a href="/" className="logo">
            <img src="/images/logo.svg" width={40} height={40} alt="ABD" />
          </a>
        </h1>

        {/* Menu Button & Navbar */}
        <div className="relative justify-self-center md:justify-self-center z-50">
          {/* ✅ THIS BUTTON IS THE FIX */}
          <button
            onClick={() => setNavOpen((prev) => !prev)}
            className="menu-btn md:hidden text-white"
          >
            {navOpen ? (
              <IoCloseSharp className="text-2xl" />
            ) : (
              <GiHamburgerMenu className="text-2xl" />
            )}
          </button>

          {/* Nav */}
          <Navbar navOpen={navOpen} />
        </div>

        {/* Contact Button */}
        <a
          href="#contact"
          className="btn btn-secondary max-md:hidden md:justify-self-end"
        >
          Contact Me
        </a>
      </div>
    </header>
  );
};

export default Header;

import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Logo from "../assets/logo/RaijinLogo.png";

const MenuItemData = [
  { title: "Home", path: "/" },
  { title: "Company", path: "/company" },
  { title: "Discover Our Expertise", path: "/discover" },
  { title: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full h-[10vh] lg:h-[12vh] fixed z-10 top-0 flex items-center justify-between px-4 lg:px-[5%] shadow-md bg-white">
      {/* Logo Section */}
      <div className="flex items-center z-20"> {/* Added z-index for logo */}
        <Link to="/">
          <img
            src={Logo}
            alt="Raijin Tech Hub Logo"
            className="h-12 md:h-16 lg:h-20 cursor-pointer"
          />
        </Link>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex items-center space-x-8 text-sm md:text-base xl:text-lg font-medium text-neutral-800">
        {MenuItemData.map((item, index) => (
          <li key={index}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "relative text-teal-500 after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] after:bg-teal-500"
                  : "relative text-neutral-800 after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-teal-500 hover:after:w-full hover:text-teal-400 transition-all duration-300 ease-in-out"
              }
            >
              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Request Quote Button */}
      <div className="hidden lg:flex">
        <Link
          to="/request-quote"
          className="bg-gradient-to-r from-teal-500 to-purple-600 text-white py-3 px-6 rounded-md text-base font-semibold transition duration-300 ease-in-out transform hover:scale-105 inline-block"
        >
          Request Quote
        </Link>
      </div>

      {/* Burger Menu */}
      <div className="lg:hidden">
        <button
          onClick={toggleMenu}
          className="text-neutral-800 focus:outline-none text-2xl"
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-[10vh] left-0 w-full bg-transparent backdrop-blur-2xl bg-opacity-40 bg-white shadow-md z-10"> {/* Lowered z-index */}
          <ul className="flex flex-col items-center space-y-2 py-4 text-neutral-800">
            {MenuItemData.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.path}
                  onClick={toggleMenu}
                  className={({ isActive }) =>
                    isActive
                      ? "relative text-teal-500 after:absolute after:left-0 after:bottom-[-1px] after:w-full after:h-[2px] after:bg-teal-500"
                      : "relative text-neutral-800 after:absolute after:left-0 after:bottom-[-1px] after:w-0 after:h-[2px] after:bg-teal-500 hover:after:w-full hover:text-teal-400 transition-all duration-300 ease-in-out"
                  }
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
            <div className="mt-4">
              <Link
                to="/request-quote"
                className="bg-gradient-to-r from-teal-500 to-purple-600 text-white py-2 px-4 rounded-md text-sm font-semibold transition duration-300 ease-in-out transform hover:scale-105 inline-block"
              >
                Request Quote
              </Link>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

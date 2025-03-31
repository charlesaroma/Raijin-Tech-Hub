import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Logo from "../assets/logo/RaijinTech.png";

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
    <nav className="w-full h-[10vh] lg:h-[10vh] fixed z-10 top-0 flex items-center justify-between px-4 lg:px-[5%] shadow-md bg-[var(--color-accent-500)]">
      {/* Logo Section */}
      <div className="flex items-center z-20">
        <Link to="/">
          <img
            src={Logo}
            alt="Raijin Tech Hub Logo"
            className="h-12 md:h-16 lg:h-20 cursor-pointer"
          />
        </Link>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex items-center space-x-8 text-sm md:text-base xl:text-lg font-medium text-[var(--color-primary-500)]">
        {MenuItemData.map((item, index) => (
          <li key={index}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "relative text-[var(--color-primary-800)] font-semibold after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] after:bg-[var(--color-primary-700)]"
                  : "relative text-[var(--color-primary-500)] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-[var(--color-primary-500)] hover:after:w-full hover:text-[var(--color-primary-500)] transition-all duration-300 ease-in-out"
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
          className="bg-gradient-to-r from-[var(--color-primary-500)] to-[var(--color-primary-700)] text-white py-3 px-6 rounded-md text-base font-semibold transition duration-300 ease-in-out transform hover:scale-105"
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
        <div className="absolute top-[10vh] left-0 w-full bg-white bg-opacity-90 backdrop-blur-md shadow-md z-10">
          <ul className="flex flex-col items-center space-y-2 py-4 text-[var(--color-primary-500)]">
            {MenuItemData.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.path}
                  onClick={toggleMenu}
                  className={({ isActive }) =>
                    isActive
                      ? "relative text-[var(--color-primary-800)] font-semibold after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[2px] after:bg-[var(--color-primary-700)]"
                      : "relative text-[var(--color-primary-500)] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-[var(--color-primary-400)] hover:after:w-full hover:text-[var(--color-primary-300)] transition-all duration-300 ease-in-out"
                  }
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
            <div className="mt-4">
              <Link
                to="/request-quote"
                className="bg-gradient-to-r from-[var(--color-primary-500)] to-[var(--color-primary-700)] text-white py-2 px-4 rounded-md text-sm font-semibold transition duration-300 ease-in-out transform hover:scale-105"
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

import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Logo from "../assets/logo/RaijinTech.png";

const MenuItemData = [
  { title: "Home", path: "/" },
  { title: "About Us", path: "/about" },
  { title: "Services", path: "/service" },
  { title: "Portfolio", path: "/portfolio" },
  { title: "Gallery", path: "/gallery" },
  { title: "FAQ", path: "/faq" },
  { title: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full h-[60px] fixed z-50 top-0 flex items-center justify-between px-4 md:px-6 lg:px-8 bg-[var(--color-bg-primary)]/80 backdrop-blur-xl border-b border-[var(--color-border)] shadow-[0_2px_20px_rgba(0,0,0,0.04)] overflow">
      {/* Logo Section */}
      <div className="flex items-center z-20">
        <Link to="/" className="cursor-pointer">
          <img
            src={Logo}
            alt="Raijin Tech Hub Logo"
            width="124"
            height="48"
            className="h-9 w-auto"
            loading="eager"
          />
        </Link>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex items-center space-x-6 text-sm font-medium text-[var(--color-primary-500)]">
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
          className="bg-[var(--color-bg-primary)] text-[var(--color-primary-600)] py-2 px-5 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer shadow-[8px_8px_16px_var(--shadow-dark),-8px_-8px_16px_var(--shadow-light)] hover:shadow-[4px_4px_8px_var(--shadow-dark),-4px_-4px_8px_var(--shadow-light)] active:shadow-[inset_4px_4px_8px_var(--shadow-dark),inset_-4px_-4px_8px_var(--shadow-light)]"
        >
          Request Quote
        </Link>
      </div>

      {/* Burger Menu */}
      <div className="lg:hidden">
        <button
          onClick={toggleMenu}
          className="text-neutral-800 focus:outline-none text-2xl cursor-pointer"
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-[60px] left-0 w-full bg-[var(--color-bg-primary)]/98 backdrop-blur-xl shadow-xl z-50 border-b border-[var(--color-border)]">
          <ul className="flex flex-col items-center space-y-3 py-4 text-[var(--color-primary-500)]">
            {MenuItemData.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.path}
                  onClick={toggleMenu}
                  className={({ isActive }) =>
                    isActive
                      ? "relative text-[var(--color-primary-600)] font-bold text-sm after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[2px] after:bg-[var(--color-primary-500)] cursor-pointer"
                      : "relative text-[var(--color-primary-500)] font-medium text-sm after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-[var(--color-primary-500)] hover:after:w-full hover:text-[var(--color-primary-600)] transition-all duration-300 ease-in-out cursor-pointer"
                  }
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
            <div className="mt-2">
              <Link
                to="/request-quote"
                onClick={toggleMenu}
                className="bg-[var(--color-bg-primary)] text-[var(--color-primary-600)] py-2 px-5 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer shadow-[8px_8px_16px_var(--shadow-dark),-8px_-8px_16px_var(--shadow-light)] hover:shadow-[4px_4px_8px_var(--shadow-dark),-4px_-4px_8px_var(--shadow-light)] active:shadow-[inset_4px_4px_8px_var(--shadow-dark),inset_-4px_-4px_8px_var(--shadow-light)]"
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

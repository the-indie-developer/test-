import React, { useState, useEffect } from "react";
import { Heart, Menu, X, User, LogOut } from "lucide-react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const user = null;
  const logout = () => console.log("Logged out");

  const handleToggleMenu = () => {
    if (!isMenuOpen) {
      setIsMenuOpen(true);
      setIsScrolled(true);
    } else {
      setIsMenuOpen(false);
      // Only set isScrolled to false if the user isn't scrolled down
      if (window.scrollY <= 20) {
        setIsScrolled(false);
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else if (!isMenuOpen) { // Only remove styles if menu is not open
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMenuOpen]); // Rerun effect if isMenuOpen changes

  const navItems = [
    { key: "home", label: "Home", to: "/" },
    { key: "about", label: "About", to: "/about" },
    { key: "programs", label: "Programs", to: "/programs" },
    { key: "impact", label: "Impact", to: "/impact" },
    { key: "team", label: "Team", to: "/team" },
    { key: "contact", label: "Contact", to: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 box-border px-3 ${
        isScrolled ? "bg-white shadow-lg" : "bg-black/40"
      } `}
    >
      <div className="container mx-auto sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <NavLink className="flex items-center space-x-2 group" to="/">
            <Heart
              className={`h-8 w-8 transition-colors duration-300 ${
                isScrolled ? "text-emerald-600" : "text-white"
              } group-hover:text-emerald-500`}
            />
            <span
              className={`text-xl font-bold transition-colors duration-300 ${
                isScrolled ? "text-gray-900" : "text-white"
              }`}
            >
              MeriPehchaan
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <NavLink
                key={item.key}
                to={item.to}
                className={({ isActive }) =>
                  [
                    "text-sm font-medium transition-colors duration-300 hover:text-emerald-500",
                    isActive
                      ? "text-emerald-600"
                      : isScrolled
                      ? "text-gray-700"
                      : "text-white",
                  ].join(" ")
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* User Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-3">
                {/* User logged in view */}
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                {/* DONATE BUTTON - DESKTOP */}
                <NavLink
                  to="/donate"
                  className="bg-yellow-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-yellow-600 transition-colors duration-300"
                >
                  Donate Now
                </NavLink>
                <NavLink
                  to="/login"
                  className={`px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-md ${
                    isScrolled
                      ? "text-gray-700 hover:text-emerald-600 hover:bg-gray-100"
                      : "text-white hover:text-emerald-300 hover:bg-white/10"
                  }`}
                >
                  Login
                </NavLink>
                <NavLink
                  to="/signup"
                  className="bg-emerald-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-emerald-700 transition-colors duration-300"
                >
                  Sign Up
                </NavLink>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={handleToggleMenu}
              className={`p-2 rounded-md transition-colors duration-300 ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden bg-white shadow-lg rounded-lg mt-2`}
        >
          <div className="px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <NavLink
                key={item.key}
                to={item.to}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
                    isActive
                      ? "text-emerald-600 bg-emerald-50"
                      : "text-gray-700 hover:text-emerald-600 hover:bg-gray-50"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <div className="border-t pt-3 mt-3">
              {user ? (
                <div className="space-y-2">
                  {/* User logged in view for mobile */}
                </div>
              ) : (
                <div className="space-y-2">
                  {/* DONATE BUTTON - MOBILE */}
                  <NavLink
                    to="/donate"
                    onClick={() => setIsMenuOpen(false)}
                    className="block w-full text-center px-3 py-2 rounded-md text-base font-medium bg-yellow-500 text-white hover:bg-yellow-600"
                  >
                    Donate Now
                  </NavLink>
                  <NavLink
                    to="/login"
                    onClick={() => setIsMenuOpen(false)}
                    className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-emerald-600 hover:bg-gray-50"
                  >
                    Login
                  </NavLink>
                  <NavLink
                    to="/signup"
                    onClick={() => setIsMenuOpen(false)}
                    className="block w-full text-center px-3 py-2 rounded-md text-base font-medium bg-emerald-600 text-white hover:bg-emerald-700"
                  >
                    Sign Up
                  </NavLink>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
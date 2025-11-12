"use client";

import React, { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, Download } from "lucide-react";
import { assets } from "../../assets/assets";
import Image from "next/image";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const navItems = [
    { text: "Home", path: "/" },
    { text: "Services", path: "/services" },
    { text: "Training", path: "/training" },
    { text: "Software", path: "/software" },
    { text: "How We Work", path: "/how-we-work" },
  ];

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === path;
    }
    return pathname.startsWith(path);
  };

  const handleNavigation = (path: string) => {
    setMenuOpen(false);
    router.push(path);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuOpen &&
        !(event.target as Element).closest(".mobile-menu-container")
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <>
      {/* Sticky Navigation Bar */}
      <header className="fixed top-0 w-full z-50">
        {/* Top border */}
        <div className="h-1 bg-primary" />

        <div
          className={`w-full transition-all duration-300 ${
            scrolled ? "bg-white shadow-md" : "bg-transparent"
          }`}
        >
          {/* Main Navigation Content */}
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 md:h-20">
              {/* Logo Section */}
              <div
                className="flex items-center cursor-pointer gap-2"
                onClick={() => handleNavigation("/")}
              >
                <Image
                  src={assets.logo}
                  alt="Emerge Social Care Logo"
                  width={40}
                  height={40}
                  className="h-10 w-auto"
                />
              </div>

              {/* Right Side Container */}
              <div className="flex items-center space-x-6">
                {/* Desktop Navigation Links */}
                <nav
                  className="hidden lg:flex items-center space-x-6"
                  aria-label="Main Navigation"
                >
                  <ul className="flex items-center space-x-1">
                    {navItems.map((item, index) => (
                      <li key={index}>
                        <button
                          onClick={() => handleNavigation(item.path)}
                          className={`relative flex items-center text-sm px-4 rounded-md font-light transition-all duration-300
                              ${
                                isActive(item.path)
                                  ? "text-primary uppercase font-semibold after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-[2px] after:h-[2px] after:w-[20%] after:bg-primary after:rounded-full"
                                  : "text-primary uppercase hover:text-primary/80"
                              }`}
                          aria-current={
                            isActive(item.path) ? "page" : undefined
                          }
                        >
                          <span>{item.text}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </nav>

                {/* Desktop Contact Button */}
                <div className="hidden lg:block">
                  <button className="w-full uppercase border-2 border-primary rounded-full text-primary text-xs font-light px-5 py-2 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300">
                    <span className="flex items-center">Contact Us</span>
                  </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                  className="lg:hidden text-primary hover:text-primary/80 focus:outline-none bg-white/20 rounded-full p-2"
                  onClick={() => setMenuOpen(!menuOpen)}
                  aria-expanded={menuOpen}
                  aria-controls="mobile-menu"
                  aria-label={menuOpen ? "Close menu" : "Open menu"}
                >
                  {menuOpen ? (
                    <X className="h-5 w-5" />
                  ) : (
                    <Menu className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div
              id="mobile-menu"
              className="lg:hidden overflow-hidden mobile-menu-container bg-white shadow-lg border-t border-gray-200 z-50"
            >
              <div className="container mx-auto px-4 py-4 space-y-2">
                {navItems.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => handleNavigation(item.path)}
                    className={`block text-sm px-4 py-3 rounded-lg font-medium w-full text-left transition-all duration-300 ${
                      isActive(item.path)
                        ? "text-primary bg-primary/10 border-l-4 border-primary"
                        : "text-gray-700 hover:text-primary hover:bg-gray-50"
                    }`}
                    aria-current={isActive(item.path) ? "page" : undefined}
                  >
                    {item.text}
                  </button>
                ))}

                {/* Mobile Contact Button */}
                <div className="pt-4 mt-4 border-t border-gray-200">
                  <button className="w-full bg-primary uppercase text-white text-xs font-light rounded-lg px-4 py-3 flex items-center justify-center hover:bg-primary/90 transition-all duration-300">
                    <Download size={18} className="mr-2" />
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Mobile Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40 lg:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;
import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 w-full" id="site-header">
      {/* Announcement Bar */}
      <div className="w-full bg-[#0F6E56] text-white text-center py-1.5 px-4 text-xs tracking-wider font-sans font-medium select-none" id="announcement-bar">
        ✨ SECURE CHECKOUT ENABLED VIA PAYHIP • INSTANT PDF DOWNLOADS DIRECT TO YOUR INBOX
      </div>

      {/* Main Header */}
      <nav className="w-full bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm" id="main-nav">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex flex-col items-start group" id="logo-link">
                <span className="font-heading font-extrabold text-lg sm:text-xl tracking-wider text-[#0F6E56] group-hover:text-[#1D9E75] transition-colors leading-none">
                  SLIMDOWN
                </span>
                <span className="font-sans font-medium text-[10px] tracking-[0.25em] text-[#F5C96A] uppercase mt-0.5 leading-none">
                  Blueprint
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8" id="desktop-menu">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  id={`nav-item-${item.name.toLowerCase()}`}
                  className={({ isActive }) =>
                    `font-sans text-sm font-medium tracking-wide transition-all py-1 border-b-2 hover:text-[#0F6E56] ${
                      isActive
                        ? 'text-[#0F6E56] border-[#1D9E75]'
                        : 'text-gray-500 border-transparent hover:border-gray-200'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
              <Link
                to="/shop"
                id="header-cta-button"
                className="bg-[#1D9E75] text-white font-sans text-xs font-semibold uppercase tracking-widest px-5 py-2.5 rounded-full hover:bg-[#0F6E56] transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-1.5"
              >
                Buy Now
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden" id="mobile-menu-trigger">
              <button
                onClick={toggleMenu}
                className="p-2 rounded-md text-gray-500 hover:text-[#0F6E56] hover:bg-gray-50 focus:outline-none"
                aria-label="Toggle menu"
                id="toggle-menu-btn"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-100" id="mobile-menu">
            <div className="px-4 pt-3 pb-6 space-y-3 shadow-inner">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  id={`mobile-nav-item-${item.name.toLowerCase()}`}
                  className={`block px-4 py-3 rounded-lg font-sans text-base font-medium transition-colors ${
                    isActive(item.path)
                      ? 'bg-[#1D9E75]/10 text-[#0F6E56]'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-[#0F6E56]'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-2 px-4">
                <Link
                  to="/shop"
                  onClick={() => setIsOpen(false)}
                  id="mobile-header-cta-button"
                  className="w-full text-center bg-[#1D9E75] text-white block py-3 rounded-xl font-sans font-semibold text-sm uppercase tracking-widest hover:bg-[#0F6E56] transition-colors"
                >
                  View Digital Products
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

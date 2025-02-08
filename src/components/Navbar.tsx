import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Brain } from 'lucide-react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path ? 'text-orange-500' : 'text-gray-600 hover:text-orange-500';
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Brain className="h-8 w-8 text-orange-500" />
              <span className="ml-2 text-xl font-bold text-gray-800">HollandAI</span>
            </Link>
          </div>
          <div className="flex items-center">
            {/* Desktop menu */}
            <div className="hidden md:flex space-x-8">
              <Link to="/" className={`${isActive('/')} transition-colors duration-200 font-medium`}>
                Home
              </Link>
              <Link to="/products" className={`${isActive('/products')} transition-colors duration-200 font-medium`}>
                Producten
              </Link>
              <Link to="/contact" className={`${isActive('/contact')} transition-colors duration-200 font-medium`}>
                Contact
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                className="p-2 rounded-md text-gray-600 hover:text-orange-500 focus:outline-none"
                onClick={toggleMobileMenu}
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} transition-all duration-300 ease-in-out`}
        >
          <div className="space-y-4 py-4">
            <Link
              to="/"
              className={`${isActive('/')} block text-gray-600 hover:text-orange-500 font-medium`}
              onClick={() => setIsMobileMenuOpen(false)} // Close menu after click
            >
              Home
            </Link>
            <Link
              to="/products"
              className={`${isActive('/products')} block text-gray-600 hover:text-orange-500 font-medium`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Producten
            </Link>
            <Link
              to="/contact"
              className={`${isActive('/contact')} block text-gray-600 hover:text-orange-500 font-medium`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

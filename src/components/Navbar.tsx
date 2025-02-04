import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Brain } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path ? 'text-orange-500' : 'text-gray-600 hover:text-orange-500';
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
            <div className="md:hidden">
              {/* Mobile menu button */}
              <button className="p-2 rounded-md text-gray-600 hover:text-orange-500 focus:outline-none">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
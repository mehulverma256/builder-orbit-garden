import { Search, ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-brand-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-brand-red">Vutto</span>
            </Link>
          </div>

          {/* Desktop Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-brand-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search by brand or model"
                className="block w-full pl-10 pr-3 py-2 border border-brand-gray-200 rounded-lg leading-5 bg-white placeholder-brand-gray-400 focus:outline-none focus:placeholder-brand-gray-300 focus:ring-1 focus:ring-brand-red focus:border-brand-red"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/buy"
              className="text-brand-gray-700 hover:text-brand-red font-medium transition-colors"
            >
              Buy
            </Link>
            <Link
              to="/sell"
              className="text-brand-gray-700 hover:text-brand-red font-medium transition-colors"
            >
              Sell
            </Link>
            <Link
              to="/shortlists"
              className="text-brand-gray-700 hover:text-brand-red font-medium transition-colors"
            >
              Shortlists
            </Link>
            <Link
              to="/profile"
              className="text-brand-gray-700 hover:text-brand-red font-medium transition-colors"
            >
              Profile
            </Link>
            
            {/* Location Dropdown */}
            <div className="flex items-center text-brand-gray-700 hover:text-brand-red font-medium cursor-pointer transition-colors">
              <span>Bangalore</span>
              <ChevronDown className="ml-1 h-4 w-4" />
            </div>

            {/* Phone Number */}
            <div className="text-brand-gray-700 font-medium">
              +91 9784423548
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-brand-gray-700 hover:text-brand-red"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="md:hidden pb-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-brand-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search by brand or model"
              className="block w-full pl-10 pr-3 py-2 border border-brand-gray-200 rounded-lg leading-5 bg-white placeholder-brand-gray-400 focus:outline-none focus:placeholder-brand-gray-300 focus:ring-1 focus:ring-brand-red focus:border-brand-red"
            />
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-brand-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/buy"
                className="block px-3 py-2 text-brand-gray-700 hover:text-brand-red font-medium transition-colors"
              >
                Buy
              </Link>
              <Link
                to="/sell"
                className="block px-3 py-2 text-brand-gray-700 hover:text-brand-red font-medium transition-colors"
              >
                Sell
              </Link>
              <Link
                to="/shortlists"
                className="block px-3 py-2 text-brand-gray-700 hover:text-brand-red font-medium transition-colors"
              >
                Shortlists
              </Link>
              <Link
                to="/profile"
                className="block px-3 py-2 text-brand-gray-700 hover:text-brand-red font-medium transition-colors"
              >
                Profile
              </Link>
              <div className="block px-3 py-2 text-brand-gray-700 font-medium">
                Location: Bangalore
              </div>
              <div className="block px-3 py-2 text-brand-gray-700 font-medium">
                +91 9784423548
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

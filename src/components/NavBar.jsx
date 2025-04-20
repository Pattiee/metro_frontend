import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // Lucide icons

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // Scrolling down
        setShowNavbar(false);
      } else {
        // Scrolling up
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Cleanup event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`bg-orange-500 text-white px-6 py-4 shadow-md transition-all duration-200 ease-in-out fixed top-0 left-0 right-0 z-50 ${
        showNavbar ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[-100%]'
      }`}
    >
      <div className="flex justify-between items-center">
        {/* Left Section: Logo */}
        <div className="flex items-center space-x-8">
          <h1 className="text-xl font-bold">Metro</h1>
        </div>

        {/* Center Section: Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link to="/" className="hover:underline cursor-pointer">Home</Link>
          <Link to="/favourites" className="hover:underline cursor-pointer">Favourites</Link>
          <Link to="/cart" className="hover:underline cursor-pointer">Cart</Link>
        </div>

        {/* Right Section: Login Button */}
        <div>
          <Link to="/auth" className="bg-white text-orange-600 px-4 py-2 rounded-full font-semibold hover:bg-orange-100 transition">
            Login
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white text-black p-4 space-y-4">
          <Link to="/" className="block py-2">Home</Link>
          <Link to="/products" className="block py-2">Products</Link>
          <Link to="/favourites" className="block py-2">Favourites</Link>
          <Link to="/categories" className="block py-2">Categories</Link>
          <Link to="/cart" className="block py-2">Cart</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

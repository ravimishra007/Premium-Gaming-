
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-casino-black/90 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <span className="text-2xl font-bold font-serif gold-text">GAMES</span>
            </a>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#featured" className="text-white hover:text-casino-gold transition-colors">Featured</a>
            {/* <a href="#popular" className="text-white hover:text-casino-gold transition-colors">Popular</a>
            <a href="#new" className="text-white hover:text-casino-gold transition-colors">New Games</a> */}
            <a href="#about" className="text-white hover:text-casino-gold transition-colors">About</a>
            <Button variant="outline" className="border-casino-gold text-casino-gold hover:bg-casino-gold hover:text-casino-black">
              Sign In
            </Button>
            <Button className="bg-casino-red hover:bg-casino-darkRed text-white">
              Sign Up
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="text-white p-2"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-casino-black/95 backdrop-blur-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a href="#featured" className="text-white hover:text-casino-gold transition-colors py-2">Featured</a>
            {/* <a href="#popular" className="text-white hover:text-casino-gold transition-colors py-2">Popular</a>
            <a href="#new" className="text-white hover:text-casino-gold transition-colors py-2">New Games</a> */}
            <a href="#about" className="text-white hover:text-casino-gold transition-colors py-2">About</a>
            <div className="flex space-x-4 pt-2">
              <Button variant="outline" className="border-casino-gold text-casino-gold hover:bg-casino-gold hover:text-casino-black w-1/2">
                Sign In
              </Button>
              <Button className="bg-casino-red hover:bg-casino-darkRed text-white w-1/2">
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

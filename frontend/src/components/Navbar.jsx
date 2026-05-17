import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User, Search, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'Categories', path: '/categories' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl md:text-3xl font-heading font-bold text-primary tracking-wider">
          AVORAN<span className="text-accent">.</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className="text-dark font-medium hover:text-primary transition-colors uppercase text-sm tracking-widest relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Icons */}
        <div className="hidden md:flex items-center space-x-5">
          <button className="text-dark hover:text-primary transition-colors">
            <Search size={20} />
          </button>
          <Link to="/login" className="text-dark hover:text-primary transition-colors">
            <User size={20} />
          </Link>
          <Link to="/cart" className="text-dark hover:text-primary transition-colors relative">
            <ShoppingCart size={20} />
            <span className="absolute -top-2 -right-2 bg-primary text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
              0
            </span>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <Link to="/cart" className="text-dark relative">
            <ShoppingCart size={22} />
            <span className="absolute -top-2 -right-2 bg-primary text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">0</span>
          </Link>
          <button onClick={() => setMobileMenuOpen(true)} className="text-dark">
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 bg-light z-50 flex flex-col p-6"
          >
            <div className="flex justify-between items-center mb-10">
              <span className="text-2xl font-heading font-bold text-primary">AVORAN.</span>
              <button onClick={() => setMobileMenuOpen(false)} className="text-dark">
                <X size={28} />
              </button>
            </div>
            
            <nav className="flex flex-col space-y-6 flex-grow">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-heading font-semibold text-dark hover:text-primary"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="flex justify-center space-x-8 mt-auto pb-10">
              <Link to="/login" className="flex flex-col items-center text-dark" onClick={() => setMobileMenuOpen(false)}>
                <User size={24} className="mb-2"/>
                <span className="text-xs uppercase tracking-wider">Account</span>
              </Link>
              <button className="flex flex-col items-center text-dark">
                <Search size={24} className="mb-2" />
                <span className="text-xs uppercase tracking-wider">Search</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;

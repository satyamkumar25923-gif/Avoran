import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div>
            <Link to="/" className="text-3xl font-heading font-bold text-primary tracking-wider inline-block mb-6">
              AVORAN<span className="text-accent">.</span>
            </Link>
            <p className="text-light text-opacity-70 mb-6 font-light leading-relaxed">
              Crafted Traditions, Modern Elegance. Elevating spaces with premium handcrafted Indian art and decor, supporting rural artisans and preserving heritage.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white bg-opacity-5 flex items-center justify-center hover:bg-primary transition-colors text-white">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white bg-opacity-5 flex items-center justify-center hover:bg-primary transition-colors text-white">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white bg-opacity-5 flex items-center justify-center hover:bg-primary transition-colors text-white">
                <FaTwitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-xl mb-6 tracking-wide">Quick Links</h4>
            <ul className="space-y-4 font-light text-opacity-80 text-light">
              <li><Link to="/about" className="hover:text-primary transition-colors">Our Story</Link></li>
              <li><Link to="/shop" className="hover:text-primary transition-colors">Shop All</Link></li>
              <li><Link to="/categories" className="hover:text-primary transition-colors">Categories</Link></li>
              <li><Link to="/artisans" className="hover:text-primary transition-colors">Meet the Artisans</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-heading font-bold text-xl mb-6 tracking-wide">Customer Service</h4>
            <ul className="space-y-4 font-light text-opacity-80 text-light">
              <li><Link to="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link to="/shipping" className="hover:text-primary transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/terms" className="hover:text-primary transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/track-order" className="hover:text-primary transition-colors">Track Order</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-xl mb-6 tracking-wide">Get in Touch</h4>
            <ul className="space-y-4 font-light text-opacity-80 text-light mb-8">
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 text-primary shrink-0 mt-1" />
                <span>123 Heritage Lane, Jaipur, Rajasthan, India 302001</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-3 text-primary shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-3 text-primary shrink-0" />
                <span>support@avoran.com</span>
              </li>
            </ul>
            
            <h5 className="font-medium mb-3 text-sm tracking-wider uppercase">Subscribe to Newsletter</h5>
            <form className="flex">
              <input type="email" placeholder="Your email address" className="bg-white bg-opacity-10 border border-white border-opacity-20 px-4 py-2 w-full focus:outline-none focus:border-primary text-light" />
              <button type="submit" className="bg-primary px-4 py-2 hover:bg-maroon transition-colors">
                <Mail size={20} />
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white border-opacity-10 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-sm font-light text-light text-opacity-60">
          <p>&copy; {new Date().getFullYear()} Avoran Indian Crafts. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex items-center space-x-2">
            <span>Made with</span>
            <span className="text-primary">♥</span>
            <span>in India</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

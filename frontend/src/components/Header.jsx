import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, Menu, X } from 'lucide-react';
import { companyInfo } from '../mockData';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Why Choose Us', path: '/why-choose-us' },
    { name: 'Quality', path: '/quality' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-700 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-6">
              <a href={`tel:${companyInfo.phone}`} className="flex items-center gap-2 hover:text-orange-400 transition-colors">
                <Phone size={14} />
                <span className="hidden sm:inline">{companyInfo.phone}</span>
              </a>
              <a href={`mailto:${companyInfo.email}`} className="flex items-center gap-2 hover:text-orange-400 transition-colors">
                <Mail size={14} />
                <span className="hidden md:inline">{companyInfo.email}</span>
              </a>
            </div>
            <div className="text-xs sm:text-sm">
              <span className="hidden sm:inline">GST: </span>{companyInfo.gst}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-2 rounded-lg">
              <span className="text-white font-bold text-xl">VIS</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-800">Vividh India Solutions</h1>
              <p className="text-xs text-slate-600">Since {companyInfo.established}</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  isActive(link.path)
                    ? 'text-orange-600 bg-orange-50'
                    : 'text-slate-700 hover:text-orange-600 hover:bg-slate-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <a
            href="#contact"
            className="hidden lg:block bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all shadow-md hover:shadow-lg"
          >
            Get Quote
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-slate-200">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg font-medium transition-all ${
                    isActive(link.path)
                      ? 'text-orange-600 bg-orange-50'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-3 rounded-lg font-semibold text-center hover:from-orange-600 hover:to-orange-700 transition-all"
              >
                Get Quote
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;

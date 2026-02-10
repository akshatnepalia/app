import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Linkedin, Twitter } from 'lucide-react';
import { companyInfo } from '../mockData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Why Choose Us', path: '/why-choose-us' },
    { name: 'Quality Assurance', path: '/quality' },
    { name: 'Contact Us', path: '/contact' }
  ];

  const productCategories = [
    'Sharp Containers',
    'Paper Rolls',
    'Paper Towels',
    'Wet & Dry Mops',
    'Liquid Soap',
    'Patient ID Bands'
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="https://customer-assets.emergentagent.com/job_sharp-containers/artifacts/dha3es3z_image.png" 
                alt="Vividh India Solutions Logo"
                className="h-12 w-auto bg-white p-1 rounded"
              />
              <div>
                <h3 className="text-lg font-bold">Vividh India Solutions</h3>
                <p className="text-xs text-slate-400">Since {companyInfo.established}</p>
              </div>
            </div>
            <p className="text-slate-300 text-sm mb-4 leading-relaxed">
              Trusted manufacturer and distributor of medical, hygiene, and cleaning products for bulk buyers across India.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 bg-slate-700 hover:bg-orange-600 rounded-lg flex items-center justify-center transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-9 h-9 bg-slate-700 hover:bg-orange-600 rounded-lg flex items-center justify-center transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-9 h-9 bg-slate-700 hover:bg-orange-600 rounded-lg flex items-center justify-center transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-400">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-slate-300 hover:text-orange-400 transition-colors text-sm flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-400">Our Products</h4>
            <ul className="space-y-2">
              {productCategories.map((product) => (
                <li key={product}>
                  <Link
                    to="/products"
                    className="text-slate-300 hover:text-orange-400 transition-colors text-sm flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                    {product}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-400">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-orange-500 mt-1 flex-shrink-0" />
                <p className="text-slate-300 text-sm leading-relaxed">
                  {companyInfo.address}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-orange-500 flex-shrink-0" />
                <a href={`tel:${companyInfo.phone}`} className="text-slate-300 hover:text-orange-400 transition-colors text-sm">
                  {companyInfo.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-orange-500 flex-shrink-0" />
                <a href={`mailto:${companyInfo.email}`} className="text-slate-300 hover:text-orange-400 transition-colors text-sm break-all">
                  {companyInfo.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
            <p>
              © {currentYear} Vividh India Solutions. All rights reserved. | GST: {companyInfo.gst}
            </p>
            <div className="flex gap-6">
              <Link to="#" className="hover:text-orange-400 transition-colors">Privacy Policy</Link>
              <Link to="#" className="hover:text-orange-400 transition-colors">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

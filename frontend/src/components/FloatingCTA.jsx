import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, X } from 'lucide-react';
import { companyInfo } from '../mockData';

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Show tooltip after 3 seconds for first-time visitors
    const timer = setTimeout(() => setShowTooltip(true), 3000);
    const hideTimer = setTimeout(() => setShowTooltip(false), 8000);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, []);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi, I'm interested in bulk orders. Please share details about your products and pricing.");
    window.open(`https://wa.me/${companyInfo.whatsapp}?text=${message}`, '_blank');
  };

  const handleCallClick = () => {
    window.location.href = `tel:${companyInfo.phone}`;
  };

  return (
    <>
      {/* WhatsApp Button */}
      <div className={`fixed bottom-6 right-6 z-40 transition-all duration-500 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}>
        <div className="relative">
          {showTooltip && (
            <div className="absolute bottom-full right-0 mb-3 bg-slate-800 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap shadow-lg animate-bounce">
              Need help? Chat with us!
              <button 
                onClick={() => setShowTooltip(false)}
                className="ml-2 hover:text-orange-400"
              >
                <X size={14} />
              </button>
            </div>
          )}
          <button
            onClick={handleWhatsAppClick}
            className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-110 flex items-center justify-center"
            aria-label="WhatsApp"
          >
            <MessageCircle size={28} />
          </button>
        </div>
      </div>

      {/* Call Button */}
      <div className={`fixed bottom-6 right-24 z-40 transition-all duration-500 delay-100 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}>
        <button
          onClick={handleCallClick}
          className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-110 flex items-center justify-center"
          aria-label="Call Now"
        >
          <Phone size={28} />
        </button>
      </div>

      {/* Mobile Sticky Bottom Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 shadow-lg z-50 safe-area-bottom">
        <div className="grid grid-cols-2 gap-2 p-3">
          <button
            onClick={handleCallClick}
            className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:from-orange-600 hover:to-orange-700 transition-all shadow-md"
          >
            <Phone size={20} />
            <span>Call Now</span>
          </button>
          <button
            onClick={handleWhatsAppClick}
            className="bg-gradient-to-r from-green-500 to-green-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:from-green-600 hover:to-green-700 transition-all shadow-md"
          >
            <MessageCircle size={20} />
            <span>WhatsApp</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default FloatingCTA;

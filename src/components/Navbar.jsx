import { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

const WHATSAPP_CHAT_URL = 'https://wa.me/923126721731?text=Hi%20Huma%2C%20I%27d%20like%20to%20collaborate.';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-[1000] bg-white/95 backdrop-blur-xl border-b border-[#FFB6C1]/20 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 md:h-20 flex items-center justify-between">
        <a href="#" className="flex items-center gap-1.5 text-xl md:text-2xl font-bold tracking-tight text-[#4A2831] hover:opacity-80 whitespace-nowrap">
          <span className="inline-block h-2.5 w-2.5 animate-pulse rounded-full bg-[#FF85A2]"></span>
          Huma Arif
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-3.5 lg:gap-6 xl:gap-8">
          <a href="#about" className="text-xs lg:text-sm font-medium text-[#6B444E] hover:text-[#FF85A2] transition-colors">About</a>
          <a href="#featured-work" className="text-xs lg:text-sm font-medium text-[#6B444E] hover:text-[#FF85A2] transition-colors">Portfolio</a>
          <a href="#services" className="text-xs lg:text-sm font-medium text-[#6B444E] hover:text-[#FF85A2] transition-colors">Services</a>
          <a href="#discount-codes" className="text-xs lg:text-sm font-medium text-[#6B444E] hover:text-[#FF85A2] transition-colors whitespace-nowrap">
            <span className="hidden xl:inline">Discount </span>Codes
          </a>
          <a href="#testimonials" className="text-xs lg:text-sm font-medium text-[#6B444E] hover:text-[#FF85A2] transition-colors">Reviews</a>
          <a href="#contact" className="text-xs lg:text-sm font-medium text-[#6B444E] hover:text-[#FF85A2] transition-colors">Contact</a>
          <a 
            href={WHATSAPP_CHAT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-[#FF85A2] hover:bg-[#FF6B8B] text-white text-xs lg:text-sm font-semibold px-3.5 py-2 lg:px-5 lg:py-2.5 rounded-full shadow-sm whitespace-nowrap"
          >
            Let's Collaborate
            <ArrowUpRight className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#4A2831] hover:text-[#FF85A2] p-2 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF85A2]"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-[#FFB6C1]/20 shadow-lg px-6 py-6">
          <div className="flex flex-col gap-4">
            <a 
              href="#about" 
              onClick={() => setIsOpen(false)}
              className="text-base font-semibold text-[#6B444E] hover:text-[#FF85A2] py-1 transition-colors"
            >
              About
            </a>
            <a 
              href="#featured-work" 
              onClick={() => setIsOpen(false)}
              className="text-base font-semibold text-[#6B444E] hover:text-[#FF85A2] py-1 transition-colors"
            >
              Portfolio
            </a>
            <a 
              href="#services" 
              onClick={() => setIsOpen(false)}
              className="text-base font-semibold text-[#6B444E] hover:text-[#FF85A2] py-1 transition-colors"
            >
              Services
            </a>
            <a 
              href="#discount-codes" 
              onClick={() => setIsOpen(false)}
              className="text-base font-semibold text-[#FF85A2] hover:text-[#FF6B8B] py-1 transition-colors flex items-center justify-between"
            >
              <span>Discount Codes</span>
              <span className="text-[10px] font-bold uppercase tracking-wider bg-[#FFE3E8] text-[#FF6B8B] px-2.5 py-0.5 rounded-full border border-[#FFB6C1]/40">
                Offers
              </span>
            </a>
            <a 
              href="#testimonials" 
              onClick={() => setIsOpen(false)}
              className="text-base font-semibold text-[#6B444E] hover:text-[#FF85A2] py-1 transition-colors"
            >
              Reviews
            </a>
            <a 
              href="#contact" 
              onClick={() => setIsOpen(false)}
              className="text-base font-semibold text-[#6B444E] hover:text-[#FF85A2] py-1 transition-colors"
            >
              Contact
            </a>
            <a 
              href={WHATSAPP_CHAT_URL}
              onClick={() => setIsOpen(false)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-1.5 bg-[#FF85A2] hover:bg-[#FF6B8B] text-white text-base font-semibold py-3 rounded-full shadow-md transition-colors"
            >
              Let's Collaborate
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

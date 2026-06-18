import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const WHATSAPP_CHAT_URL = 'https://wa.me/923126721731?text=Hi%20Huma%2C%20I%27d%20like%20to%20collaborate.';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-[60] transition-all duration-300 bg-white/70 backdrop-blur-xl ${
      isScrolled 
        ? 'py-4 glass-panel border-b border-[#FFB6C1]/20 shadow-sm' 
        : 'py-6 border-b border-[#FFB6C1]/15 shadow-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-xl md:text-2xl font-bold tracking-tight text-[#4A2831] flex items-center gap-1.5 hover:opacity-80">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF85A2] inline-block animate-pulse"></span>
          ugcbyhuma
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-sm font-medium text-[#6B444E] hover:text-[#FF85A2]">About</a>
          <a href="#portfolio" className="text-sm font-medium text-[#6B444E] hover:text-[#FF85A2]">Portfolio</a>
          <a href="#services" className="text-sm font-medium text-[#6B444E] hover:text-[#FF85A2]">Services</a>
          <a href="#testimonials" className="text-sm font-medium text-[#6B444E] hover:text-[#FF85A2]">Reviews</a>
          <a href="#contact" className="text-sm font-medium text-[#6B444E] hover:text-[#FF85A2]">Contact</a>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a 
            href={WHATSAPP_CHAT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-[#FF85A2] hover:bg-[#FF6B8B] text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-sm"
          >
            Let's Collaborate
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#4A2831] hover:text-[#FF85A2] p-1.5 focus:outline-none"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed top-[73px] left-0 w-full glass-panel border-b border-[#FFB6C1]/20 shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${
        isOpen ? 'max-h-80 opacity-100 py-6' : 'max-h-0 opacity-0 pointer-events-none'
      }`}>
        <div className="flex flex-col items-center gap-5 px-6">
          <a 
            href="#about" 
            onClick={() => setIsOpen(false)}
            className="text-base font-semibold text-[#6B444E] hover:text-[#FF85A2] w-full text-center py-1"
          >
            About
          </a>
          <a 
            href="#portfolio" 
            onClick={() => setIsOpen(false)}
            className="text-base font-semibold text-[#6B444E] hover:text-[#FF85A2] w-full text-center py-1"
          >
            Portfolio
          </a>
          <a 
            href="#services" 
            onClick={() => setIsOpen(false)}
            className="text-base font-semibold text-[#6B444E] hover:text-[#FF85A2] w-full text-center py-1"
          >
            Services
          </a>
          <a 
            href="#testimonials" 
            onClick={() => setIsOpen(false)}
            className="text-base font-semibold text-[#6B444E] hover:text-[#FF85A2] w-full text-center py-1"
          >
            Reviews
          </a>
          <a 
            href="#contact" 
            onClick={() => setIsOpen(false)}
            className="text-base font-semibold text-[#6B444E] hover:text-[#FF85A2] w-full text-center py-1 mb-2"
          >
            Contact
          </a>
          <a 
            href={WHATSAPP_CHAT_URL}
            onClick={() => setIsOpen(false)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center bg-[#FF85A2] hover:bg-[#FF6B8B] text-white text-base font-semibold py-3 rounded-full shadow-md"
          >
            Let's Collaborate
          </a>
        </div>
      </div>
    </nav>
  );
}

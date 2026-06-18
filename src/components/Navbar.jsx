import { ArrowUpRight } from 'lucide-react';

const WHATSAPP_CHAT_URL = 'https://wa.me/923126721731?text=Hi%20Huma%2C%20I%27d%20like%20to%20collaborate.';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-[1000] bg-white/95 backdrop-blur-xl border-b border-[#FFB6C1]/20 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 md:h-auto flex items-center justify-between md:justify-between">
        <a href="#" className="flex items-center gap-1.5 text-xl md:text-2xl font-bold tracking-tight text-[#4A2831] hover:opacity-80">
          <span className="inline-block h-2.5 w-2.5 animate-pulse rounded-full bg-[#FF85A2]"></span>
          ugcbyhuma
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-sm font-medium text-[#6B444E] hover:text-[#FF85A2]">About</a>
          <a href="#portfolio" className="text-sm font-medium text-[#6B444E] hover:text-[#FF85A2]">Portfolio</a>
          <a href="#services" className="text-sm font-medium text-[#6B444E] hover:text-[#FF85A2]">Services</a>
          <a href="#testimonials" className="text-sm font-medium text-[#6B444E] hover:text-[#FF85A2]">Reviews</a>
          <a href="#contact" className="text-sm font-medium text-[#6B444E] hover:text-[#FF85A2]">Contact</a>
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
      </div>
    </nav>
  );
}


import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onNavigate: (path: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "Início", href: "/#home" },
    { label: "Funcionalidades", href: "/#standards" },
    { label: "Planos", href: "/#pricing" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    const targetId = href.replace('/#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${isScrolled ? 'bg-white border-black py-1 md:py-2' : 'bg-white/80 backdrop-blur-md border-transparent py-1.5 md:py-4'}`}>
      <div className="max-w-[95%] 2xl:max-w-[1400px] mx-auto px-4 md:px-8 flex justify-between items-center h-12 md:h-16">
        <a 
          href="/" 
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="flex items-center gap-3 cursor-pointer select-none group"
        >
          {/* LOGO ADAPTADO */}
          <div className="font-display font-black text-lg md:text-2xl tracking-tighter flex items-center gap-1">
            ELEVVA<span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-brand-neon rounded-full border border-black block translate-y-1 md:translate-y-2"></span>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.href} 
              href={link.href} 
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-brand-black font-medium hover:bg-brand-neon hover:px-2 hover:-mx-2 rounded transition-all text-sm uppercase tracking-wide cursor-pointer"
            >
              {link.label}
            </a>
          ))}
          <button 
            onClick={() => onNavigate('/login')}
            className="bg-brand-black text-white px-6 py-2.5 rounded-lg font-bold hover:bg-brand-neon hover:text-black hover:shadow-neo transition-all border border-black text-sm cursor-pointer"
          >
            Entrar
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-brand-black p-1.5 border border-black rounded bg-brand-neon shadow-neo-sm active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-black p-6 flex flex-col gap-6 shadow-xl h-screen z-50">
          {navLinks.map((link) => (
            <a 
              key={link.href} 
              href={link.href} 
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-2xl font-bold text-brand-black py-2 border-b border-gray-100" 
            >
              {link.label}
            </a>
          ))}
          <button 
            onClick={() => { setMobileMenuOpen(false); onNavigate('/login'); }}
            className="w-full bg-brand-neon text-black border border-black py-4 rounded-xl font-bold mt-4 text-lg shadow-neo active:shadow-none active:translate-x-[2px] active:translate-y-[2px] transition-all text-center cursor-pointer"
          >
            Login
          </button>
        </div>
      )}
    </nav>
  );
};

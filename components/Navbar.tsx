
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

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
    { 
      label: "Funcionalidades", 
      href: "/#features",
      subLinks: [
        { label: "Potência máxima", href: "/#features" },
        { label: "O fim do achismo", href: "/#showcase" },
        { label: "Veja como funciona", href: "/#demo" },
        { label: "Quem usa recomenda", href: "/#social-proof" },
      ]
    },
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${isScrolled ? 'bg-white border-gray-100 py-1' : 'bg-white/80 backdrop-blur-md border-transparent py-2'}`}>
      <div className="max-w-[95%] 2xl:max-w-[1400px] mx-auto px-4 md:px-8 flex justify-between items-center h-12 md:h-14">
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
            <div key={link.label} className="relative group">
              <a 
                href={link.href} 
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-gray-600 font-semibold hover:text-brand-black transition-colors text-sm uppercase tracking-wider cursor-pointer relative py-2 flex items-center gap-1"
              >
                {link.label}
                {link.subLinks && <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-neon transition-all duration-300 group-hover:w-full"></span>
              </a>
              
              {link.subLinks && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-white border border-gray-100 shadow-xl rounded-2xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0">
                  {link.subLinks.map(sub => (
                    <a 
                      key={sub.label}
                      href={sub.href}
                      onClick={(e) => handleLinkClick(e, sub.href)}
                      className="block px-5 py-2.5 text-sm font-medium text-gray-600 hover:text-brand-black hover:bg-gray-50 transition-colors"
                    >
                      {sub.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <a 
            href="https://app.elevva.net.br"
            className="bg-brand-black text-white px-6 py-2.5 rounded-xl font-bold hover:bg-brand-neon hover:text-black transition-all text-sm cursor-pointer shadow-md hover:shadow-lg"
          >
            Entrar
          </a>
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
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-black p-6 flex flex-col gap-4 shadow-xl h-screen z-50 overflow-y-auto pb-32">
          {navLinks.map((link) => (
            <div key={link.label} className="flex flex-col border-b border-gray-100 pb-4">
              <a 
                href={link.href} 
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-2xl font-bold text-brand-black py-2" 
              >
                {link.label}
              </a>
              {link.subLinks && (
                <div className="flex flex-col gap-3 mt-2 pl-4 border-l-2 border-brand-neon/50 ml-2">
                  {link.subLinks.map(sub => (
                    <a 
                      key={sub.label}
                      href={sub.href}
                      onClick={(e) => handleLinkClick(e, sub.href)}
                      className="text-lg font-medium text-gray-500 hover:text-brand-black"
                    >
                      {sub.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <a 
            href="https://app.elevva.net.br"
            className="w-full bg-brand-neon text-black border border-black py-4 rounded-xl font-bold mt-4 text-lg shadow-neo active:shadow-none active:translate-x-[2px] active:translate-y-[2px] transition-all text-center cursor-pointer block"
          >
            Login
          </a>
        </div>
      )}
    </nav>
  );
};

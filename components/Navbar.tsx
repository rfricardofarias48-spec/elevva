
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Sparkles } from 'lucide-react';

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
      label: "Plataforma", 
      href: "/#bento",
      subLinks: [
        { label: "Funcionalidades", href: "/#bento" },
        { label: "Como Funciona", href: "/#how-it-works" },
        { label: "Segurança", href: "/#security" },
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#111827]/95 backdrop-blur-md border-b border-gray-700 py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center">
        <a 
          href="/" 
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="flex items-center gap-2 cursor-pointer select-none group"
        >
          <span className="text-2xl font-black tracking-tighter text-white">
            Elevva<span className="text-brand-green">.</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <div key={link.label} className="relative group">
              <a 
                href={link.href} 
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-gray-400 font-medium hover:text-white transition-colors text-sm cursor-pointer relative py-2 flex items-center gap-1"
              >
                {link.label}
                {link.subLinks && <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />}
              </a>
              
              {link.subLinks && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-[#111827] border border-gray-800 shadow-xl rounded-2xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0">
                  {link.subLinks.map(sub => (
                    <a 
                      key={sub.label}
                      href={sub.href}
                      onClick={(e) => handleLinkClick(e, sub.href)}
                      className="block px-5 py-2.5 text-sm font-medium text-gray-400 hover:text-white hover:bg-gray-900 transition-colors"
                    >
                      {sub.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a 
            href="https://app.elevva.net.br"
            className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
          >
            Entrar
          </a>
          <a 
            href="https://app.elevva.net.br"
            className="bg-brand-green text-[#111827] px-5 py-2.5 rounded-full text-sm font-bold hover:bg-gray-800 transition-colors"
          >
            Teste grátis
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[#111827] border-b border-gray-700 p-6 flex flex-col gap-4 shadow-xl h-screen z-50 overflow-y-auto pb-32">
          {navLinks.map((link) => (
            <div key={link.label} className="flex flex-col border-b border-gray-800 pb-4">
              <a 
                href={link.href} 
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-xl font-semibold text-white py-2" 
              >
                {link.label}
              </a>
              {link.subLinks && (
                <div className="flex flex-col gap-3 mt-2 pl-4 border-l-2 border-gray-800 ml-2">
                  {link.subLinks.map(sub => (
                    <a 
                      key={sub.label}
                      href={sub.href}
                      onClick={(e) => handleLinkClick(e, sub.href)}
                      className="text-base font-medium text-gray-500 hover:text-white"
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
            className="w-full bg-brand-green text-[#111827] py-4 rounded-full font-bold mt-4 text-center cursor-pointer block"
          >
            Teste grátis
          </a>
        </div>
      )}
    </nav>
  );
};

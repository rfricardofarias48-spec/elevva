
import React from 'react';

interface FooterProps {
  onOpenPolicy: () => void;
  onOpenTerms: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPolicy, onOpenTerms }) => {
  
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer className="bg-black text-white pt-12 pb-8 border-t border-gray-800">
      <div className="max-w-[95%] 2xl:max-w-[1400px] mx-auto px-6">
        
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          <div className="col-span-1 md:col-span-2">
             <a href="#" onClick={scrollToTop} className="inline-block mb-6 hover:opacity-80 transition-opacity">
                {/* LOGO VISUAL: TEXTO + PONTO VERDE AJUSTADO (w-2 h-2, translate-y-2) */}
                <div className="font-display font-black text-2xl tracking-tighter flex items-center gap-1 text-white">
                  ELEVVA<span className="w-2 h-2 bg-brand-neon rounded-full block translate-y-2"></span>
                </div>
             </a>
             <p className="text-gray-400 max-w-sm mb-8">
               A plataforma de inteligência artificial que está redefinindo como empresas encontram talentos. Rápido, preciso e sem viés.
             </p>
          </div>

          <div>
             <h4 className="font-bold text-lg mb-6">Produto</h4>
             <ul className="space-y-4 text-gray-400">
                <li>
                  <a 
                    href="#standards" 
                    onClick={(e) => scrollToSection(e, 'standards')}
                    className="hover:text-brand-neon transition-colors cursor-pointer"
                  >
                    Funcionalidades
                  </a>
                </li>
                <li>
                  <a 
                    href="#pricing" 
                    onClick={(e) => scrollToSection(e, 'pricing')}
                    className="hover:text-brand-neon transition-colors cursor-pointer"
                  >
                    Preços
                  </a>
                </li>
             </ul>
          </div>

          <div>
             <h4 className="font-bold text-lg mb-6">Legal</h4>
             <ul className="space-y-4 text-gray-400">
                <li>
                  <button onClick={onOpenTerms} className="hover:text-brand-neon transition-colors text-left">
                    Termos de Uso
                  </button>
                </li>
                <li>
                  <button onClick={onOpenPolicy} className="hover:text-brand-neon transition-colors text-left">
                    Privacidade
                  </button>
                </li>
                <li>
                  <button onClick={onOpenPolicy} className="hover:text-brand-neon transition-colors text-left">
                    Cookies
                  </button>
                </li>
             </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-10 flex flex-col md:flex-row justify-between items-center gap-4">
           <p className="text-gray-500 text-sm">© 2025 Elevva Tecnologia. Todos os direitos reservados.</p>
           <div className="flex items-center gap-2 text-sm font-bold">
              <span>Feito no Brasil</span>
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
           </div>
        </div>

      </div>
    </footer>
  );
};

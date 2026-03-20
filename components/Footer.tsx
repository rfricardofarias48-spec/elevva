
import React from 'react';
import { Sparkles, Download } from 'lucide-react';

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

  const downloadLogo = (e: React.MouseEvent) => {
    e.preventDefault();
    const canvas = document.createElement('canvas');
    canvas.width = 3840;
    canvas.height = 2160;
    const ctx = canvas.getContext('2d');
    
    if (ctx) {
      // Clear background (transparent)
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Setup font (matching the site's font-black tracking-tighter)
      const fontSize = 800;
      ctx.font = `900 ${fontSize}px Inter, system-ui, sans-serif`;
      ctx.textBaseline = 'middle';
      ctx.textAlign = 'left';
      
      // Handle letter spacing (tracking-tighter is -0.05em)
      if ('letterSpacing' in ctx) {
        (ctx as any).letterSpacing = '-40px';
      }

      const text = 'Elevva';
      const dot = '.';
      
      // Measure widths to center the whole logo
      const textWidth = ctx.measureText(text).width;
      const dotWidth = ctx.measureText(dot).width;
      const totalWidth = textWidth + dotWidth;
      
      const startX = (canvas.width - totalWidth) / 2;
      const startY = canvas.height / 2;

      // Draw "Elevva" in White
      ctx.fillStyle = '#FFFFFF';
      ctx.fillText(text, startX, startY);
      
      // Draw "." in Brand Green
      ctx.fillStyle = '#22c55e';
      ctx.fillText(dot, startX + textWidth, startY);

      // Trigger download
      const dataUrl = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = dataUrl;
      link.download = 'Elevva_Logo_White.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <footer className="bg-[#111827] text-white pt-20 pb-10 border-t border-gray-700">
      <div className="max-w-[95%] 2xl:max-w-[1200px] mx-auto px-6">
        
        <div className="grid md:grid-cols-4 gap-12 lg:gap-8 mb-20">
          <div className="col-span-1 md:col-span-2">
             <a href="#" onClick={scrollToTop} className="inline-block mb-6 hover:opacity-80 transition-opacity">
                <span className="text-2xl font-black tracking-tighter text-white">
                  Elevva<span className="text-brand-green">.</span>
                </span>
             </a>
             <p className="text-gray-500 max-w-sm mb-6 leading-relaxed font-medium">
               Plataforma de Recrutamento e Seleção Autogerida por IA. Escale suas contratações e recupere seu tempo.
             </p>

          </div>

          <div>
             <h4 className="font-bold text-gray-400 uppercase tracking-wider text-xs mb-6">Plataforma</h4>
             <ul className="space-y-4 text-gray-400 text-sm font-medium">
                <li>
                  <a 
                    href="#bento" 
                    onClick={(e) => scrollToSection(e, 'bento')}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Funcionalidades
                  </a>
                </li>
                <li>
                  <a 
                    href="#how-it-works" 
                    onClick={(e) => scrollToSection(e, 'how-it-works')}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Como Funciona
                  </a>
                </li>
                <li>
                  <a 
                    href="#security" 
                    onClick={(e) => scrollToSection(e, 'security')}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Segurança
                  </a>
                </li>
                <li>
                  <a 
                    href="#pricing" 
                    onClick={(e) => scrollToSection(e, 'pricing')}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Planos
                  </a>
                </li>
             </ul>
          </div>

          <div>
             <h4 className="font-bold text-gray-400 uppercase tracking-wider text-xs mb-6">Legal</h4>
             <ul className="space-y-4 text-gray-400 text-sm font-medium">
                <li>
                  <button onClick={onOpenTerms} className="hover:text-white transition-colors text-left">
                    Termos de Uso
                  </button>
                </li>
                <li>
                  <button onClick={onOpenPolicy} className="hover:text-white transition-colors text-left">
                    Privacidade
                  </button>
                </li>
                <li>
                  <button onClick={onOpenPolicy} className="hover:text-white transition-colors text-left">
                    Cookies
                  </button>
                </li>
             </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
           <p className="text-gray-500 text-sm font-medium">© {new Date().getFullYear()} Elevva. Todos os direitos reservados.</p>
           <div className="flex items-center gap-2 text-sm font-bold">
              <span className="text-gray-500">Feito no Brasil</span>
              <span className="w-2 h-2 bg-brand-green rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]"></span>
           </div>
        </div>

      </div>
    </footer>
  );
};

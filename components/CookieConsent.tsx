import React, { useState, useEffect } from 'react';
import { Cookie, X, Check, FileText } from 'lucide-react';

interface CookieConsentProps {
  onOpenPolicy: () => void;
}

export const CookieConsent: React.FC<CookieConsentProps> = ({ onOpenPolicy }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Verifica se já existe o consentimento no localStorage
    const consent = localStorage.getItem('elevva-cookie-consent');
    if (!consent) {
      // Pequeno delay para a animação de entrada ficar mais agradável
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('elevva-cookie-consent', 'true');
    setIsVisible(false);
  };

  const handleDecline = () => {
    // Em um cenário real, aqui você desativaria cookies não essenciais.
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] p-2 md:p-6 pointer-events-none flex justify-center">
      <div className="bg-[#0f172a]/95 backdrop-blur-md border border-white/10 p-4 md:p-6 rounded-2xl shadow-2xl max-w-4xl w-full flex flex-col md:flex-row items-center gap-4 md:gap-6 pointer-events-auto animate-[float_1s_ease-out]">
        
        {/* Ícone e Texto */}
        <div className="flex items-start gap-3 flex-1">
          <div className="p-2 md:p-3 bg-brand-900/50 rounded-xl border border-brand-500/20 text-brand-400 shrink-0">
            <Cookie size={20} className="md:w-6 md:h-6" />
          </div>
          <div>
            <h4 className="text-white font-bold text-sm md:text-base mb-1">Nós valorizamos sua privacidade</h4>
            <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
              Utilizamos cookies para melhorar sua experiência, analisar o tráfego e personalizar o conteúdo.
            </p>
          </div>
        </div>

        {/* Botões */}
        <div className="flex items-center gap-2 md:gap-3 w-full md:w-auto shrink-0">
          <button 
            onClick={onOpenPolicy}
            className="flex-1 md:flex-none px-3 py-2 md:px-4 md:py-2.5 text-xs md:text-sm font-medium text-gray-300 hover:text-white transition-colors rounded-lg border border-white/10 hover:bg-white/5 flex items-center justify-center gap-2 whitespace-nowrap"
          >
            <FileText size={14} className="md:w-4 md:h-4" />
            <span className="hidden sm:inline">Política de Privacidade</span>
            <span className="sm:hidden">Política</span>
          </button>
          <button 
            onClick={handleAccept}
            className="flex-1 md:flex-none px-4 py-2 md:px-6 md:py-2.5 text-xs md:text-sm font-bold text-white bg-brand-600 hover:bg-brand-500 transition-all rounded-lg shadow-lg shadow-brand-600/20 flex items-center justify-center gap-2 group whitespace-nowrap"
          >
            Aceitar
            <Check size={14} className="md:w-4 md:h-4 group-hover:scale-110 transition-transform" />
          </button>
        </div>

        {/* Botão Fechar (X) Mobile */}
        <button 
          onClick={handleDecline}
          className="absolute top-2 right-2 p-2 text-gray-500 hover:text-white md:hidden"
        >
          <X size={16} />
        </button>

      </div>
    </div>
  );
};
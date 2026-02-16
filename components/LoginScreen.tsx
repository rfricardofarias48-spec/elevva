
import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface LoginScreenProps {
  onNavigate: (path: string) => void;
  onClose?: () => void;
  onShowTerms?: () => void;
  onShowPrivacy?: () => void;
}

export const LoginScreen: React.FC<LoginScreenProps> = ({ onNavigate }) => {
  return (
    <div className="fixed inset-0 z-[100] bg-white flex flex-col">
      {/* Simple Header for Login Page */}
      <div className="bg-black text-white px-6 py-3 flex justify-between items-center border-b border-gray-800 shrink-0">
        <a 
          href="/" 
          onClick={(e) => { e.preventDefault(); onNavigate('/'); }}
          className="flex items-center gap-2 text-sm font-bold hover:text-brand-neon transition-colors cursor-pointer"
        >
          <ArrowLeft size={16} /> Voltar para o Site
        </a>
        <div className="font-display font-black text-lg tracking-tighter flex items-center gap-1">
            ELEVVA<span className="w-1.5 h-1.5 bg-brand-neon rounded-full block translate-y-1.5"></span>
        </div>
      </div>

      {/* The Bridge: Full Screen Iframe */}
      <div className="flex-grow w-full h-full bg-gray-50 relative">
        <iframe 
          src="https://graceful-daifuku-a439d4.netlify.app/" 
          title="Elevva App Login"
          className="w-full h-full border-0 absolute inset-0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      </div>
    </div>
  );
};

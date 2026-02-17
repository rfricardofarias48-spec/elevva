
import React, { useEffect } from 'react';

interface LoginScreenProps {
  onNavigate?: (path: string) => void;
}

export const LoginScreen: React.FC<LoginScreenProps> = () => {
  useEffect(() => {
    // Redireciona para o subdomínio da aplicação após 1.5s
    const timer = setTimeout(() => {
      window.location.href = "https://app.elevva.net.br";
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center">
      <div className="flex flex-col items-center animate-pulse">
        {/* LOGO */}
        <div className="font-display font-black text-4xl md:text-5xl tracking-tighter flex items-center gap-2 mb-8">
            ELEVVA<span className="w-3 h-3 md:w-4 md:h-4 bg-brand-neon rounded-full border border-black block translate-y-2"></span>
        </div>
        
        {/* SPINNER */}
        <div className="w-12 h-12 border-4 border-gray-200 border-t-brand-neon rounded-full animate-spin mb-6"></div>
        
        <p className="text-gray-500 font-bold text-sm tracking-wide uppercase">Acessando ambiente seguro...</p>
      </div>
    </div>
  );
};

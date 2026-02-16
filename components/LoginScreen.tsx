
import React from 'react';

interface LoginScreenProps {
  onNavigate: (path: string) => void;
  onClose?: () => void;
  onShowTerms?: () => void;
  onShowPrivacy?: () => void;
}

export const LoginScreen: React.FC<LoginScreenProps> = () => {
  return (
    <div className="fixed inset-0 z-[100] bg-white">
      {/* The Bridge: Full Screen Iframe */}
      <iframe 
        src="https://graceful-daifuku-a439d4.netlify.app/" 
        title="Elevva App Login"
        className="w-full h-full border-0 block"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      />
    </div>
  );
};


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
        src="https://elevva-recrutamento-com-ia-800878068774.us-west1.run.app/" 
        title="Elevva App Login"
        className="w-full h-full border-0 block"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      />
    </div>
  );
};

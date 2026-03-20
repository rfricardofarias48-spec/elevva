
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BentoSection } from './components/BentoSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { SecuritySection } from './components/SecuritySection';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';
import { CookieConsent } from './components/CookieConsent';
import { PrivacyPolicyModal } from './components/PrivacyPolicyModal';
import { TermsOfUseModal } from './components/TermsOfUseModal';
import { LoginScreen } from './components/LoginScreen';
import { BackgroundSquares } from './components/BackgroundSquares';
import { WhatsAppButton } from './components/WhatsAppButton';

const App: React.FC = () => {
  const [isPrivacyPolicyOpen, setIsPrivacyPolicyOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  const navigate = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo(0, 0);
  };

  const openPrivacyPolicy = () => setIsPrivacyPolicyOpen(true);
  const closePrivacyPolicy = () => setIsPrivacyPolicyOpen(false);

  const openTerms = () => setIsTermsOpen(true);
  const closeTerms = () => setIsTermsOpen(false);

  // ROTA DE LOGIN (REDIRECIONAMENTO)
  if (currentPath === '/login') {
    return <LoginScreen />;
  }

  return (
    <div className="min-h-screen flex flex-col font-sans relative bg-[#111827] text-white selection:bg-brand-green selection:text-white overflow-hidden">
      
      {/* Subtle Animated Background */}
      <BackgroundSquares />

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar onNavigate={navigate} />
        <main className="flex-grow">
          <Hero />
          <BentoSection />
          <HowItWorksSection />
          <SecuritySection />
          <Pricing />
        </main>
        
        <Footer onOpenPolicy={openPrivacyPolicy} onOpenTerms={openTerms} />
        <CookieConsent onOpenPolicy={openPrivacyPolicy} />
        
        <PrivacyPolicyModal isOpen={isPrivacyPolicyOpen} onClose={closePrivacyPolicy} />
        <TermsOfUseModal isOpen={isTermsOpen} onClose={closeTerms} />
        <WhatsAppButton />
      </div>
    </div>
  );
};

export default App;

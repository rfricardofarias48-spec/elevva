
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { SocialProofSection } from './components/SocialProofSection';
import { ProductShowcase } from './components/ProductShowcase';
import { DemoSection } from './components/DemoSection';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';
import { CookieConsent } from './components/CookieConsent';
import { PrivacyPolicyModal } from './components/PrivacyPolicyModal';
import { TermsOfUseModal } from './components/TermsOfUseModal';
import { LoginScreen } from './components/LoginScreen';
import { BackgroundSquares } from './components/BackgroundSquares';
import { WhatsAppButton } from './components/WhatsAppButton';
import { IntegrationsSection } from './components/IntegrationsSection';

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
    <div className="min-h-screen flex flex-col font-sans relative bg-white text-brand-black selection:bg-brand-neon selection:text-black overflow-hidden">
      
      {/* Subtle Animated Background */}
      <BackgroundSquares />

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar onNavigate={navigate} />
        <main className="flex-grow">
          <Hero />
          <IntegrationsSection />
          <ProductShowcase />
          <DemoSection />
          <Features />
          <SocialProofSection />
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

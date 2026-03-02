
import React, { useState } from 'react';
import { ArrowRight, Star, Lock, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const tabs = [
    "Triagem de Currículos",
    "Ranking Automático",
    "Análise de Perfil",
    "Exportação em PDF"
  ];

  return (
    <section id="home" className="relative pt-32 pb-8 lg:pt-40 lg:pb-12 overflow-hidden bg-transparent">
      
      <div className="max-w-[95%] 2xl:max-w-[1400px] mx-auto px-6 relative z-10">
        
        <div className="flex flex-col items-center gap-6 lg:gap-8">
          
          {/* Centered Content */}
          <div className="w-full max-w-4xl text-center flex flex-col items-center">
            
            <h1 className="text-[11.5vw] sm:text-7xl md:text-8xl font-bold text-brand-black mb-6 leading-[1.05] tracking-tight max-sm:whitespace-nowrap">
              Recrute melhor <br />
              <span className="text-brand-neon">E mais rápido</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-500 font-medium max-w-xl mb-4 leading-relaxed">
              Você define os critérios, a Elevva encontra o candidato perfeito. <span className="hidden sm:inline">Infraestrutura completa para seu RH.</span>
            </p>
            
            <div className="mt-4 flex items-center gap-4 text-sm font-medium text-gray-500 justify-center">
               <div className="flex -space-x-2">
                  {[
                    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&q=80",
                    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=64&q=80",
                    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=64&q=80",
                    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=64&q=80"
                  ].map((src, i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-[10px] font-bold overflow-hidden">
                       <img src={src} alt="User" className="w-full h-full object-cover" />
                    </div>
                  ))}
               </div>
               <p className="hidden sm:block">Escolhido por + 150 Recrutadores</p>
               <p className="sm:hidden">+ 150 Recrutadores</p>
            </div>

          </div>
        </div>
      </div>

      {/* Infinite Marquee */}
      <div className="w-full overflow-hidden bg-white border-y border-gray-100 py-6 my-6 flex relative z-10">
        <div className="animate-marquee whitespace-nowrap flex flex-shrink-0 items-center">
          <span className="text-3xl md:text-4xl font-bold text-gray-200 mx-8 uppercase tracking-tighter">Built for high performance recruiting</span>
          <span className="text-3xl md:text-4xl font-bold text-gray-200 mx-8 uppercase tracking-tighter">•</span>
          <span className="text-3xl md:text-4xl font-bold text-gray-200 mx-8 uppercase tracking-tighter">Powered by Advanced AI</span>
          <span className="text-3xl md:text-4xl font-bold text-gray-200 mx-8 uppercase tracking-tighter">•</span>
          <span className="text-3xl md:text-4xl font-bold text-gray-200 mx-8 uppercase tracking-tighter">Data Driven Decisions</span>
          <span className="text-3xl md:text-4xl font-bold text-gray-200 mx-8 uppercase tracking-tighter">•</span>
          <span className="text-3xl md:text-4xl font-bold text-gray-200 mx-8 uppercase tracking-tighter">Eliminate Bias</span>
          <span className="text-3xl md:text-4xl font-bold text-gray-200 mx-8 uppercase tracking-tighter">•</span>
        </div>
        <div className="animate-marquee whitespace-nowrap flex flex-shrink-0 items-center">
          <span className="text-3xl md:text-4xl font-bold text-gray-200 mx-8 uppercase tracking-tighter">Built for high performance recruiting</span>
          <span className="text-3xl md:text-4xl font-bold text-gray-200 mx-8 uppercase tracking-tighter">•</span>
          <span className="text-3xl md:text-4xl font-bold text-gray-200 mx-8 uppercase tracking-tighter">Powered by Advanced AI</span>
          <span className="text-3xl md:text-4xl font-bold text-gray-200 mx-8 uppercase tracking-tighter">•</span>
          <span className="text-3xl md:text-4xl font-bold text-gray-200 mx-8 uppercase tracking-tighter">Data Driven Decisions</span>
          <span className="text-3xl md:text-4xl font-bold text-gray-200 mx-8 uppercase tracking-tighter">•</span>
          <span className="text-3xl md:text-4xl font-bold text-gray-200 mx-8 uppercase tracking-tighter">Eliminate Bias</span>
          <span className="text-3xl md:text-4xl font-bold text-gray-200 mx-8 uppercase tracking-tighter">•</span>
        </div>
      </div>

      <div className="max-w-[95%] 2xl:max-w-[1400px] mx-auto px-6 relative z-10 pt-12 pb-6 lg:pt-24 lg:pb-12">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-4">
          
          {/* Left Side: Title (Mobile) / Title & Button (Desktop) */}
          <div className="w-full lg:w-[30%] text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-black tracking-tight mb-8 leading-tight">
              Simples. <br />
              Intuitivo. <br />
              <span className="text-brand-neon">Inteligente.</span>
            </h2>
            
            {/* Botão visível apenas no Desktop */}
            <a 
              href="https://app.elevva.net.br/register" 
              className="hidden lg:inline-flex items-center justify-center px-8 py-4 bg-brand-black text-white rounded-full font-bold text-lg transition-all hover:bg-gray-800 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
            >
              Teste Grátis
              <ArrowRight size={20} className="ml-2" />
            </a>
          </div>

          {/* Right Side: Image */}
          <div className="w-[120%] -ml-[2%] sm:w-full sm:ml-0 lg:w-[70%] relative mt-0 lg:mt-0">
             <div className="relative mx-auto bg-white rounded-[1.5rem] md:rounded-[2rem] p-1.5 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] ring-1 ring-black/5">
                <div className="bg-white rounded-[1rem] md:rounded-[1.5rem] overflow-hidden relative border border-gray-100 shadow-inner">
                    <div className="relative aspect-[16/9] bg-white overflow-hidden p-1 md:p-2">
                      <img 
                        src="https://ik.imagekit.io/xsbrdnr0y/2tela.png" 
                        alt="Elevva Interface"
                        className="w-full h-full object-contain object-center scale-[1.05]"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-white/5 pointer-events-none"></div>
                    </div>
                </div>
             </div>
             
             {/* Decorative Elements */}
             <div className="absolute -top-16 -right-16 w-80 h-80 bg-brand-neon/10 blur-[100px] rounded-full -z-10 pointer-events-none"></div>
             <div className="absolute -bottom-16 -left-16 w-80 h-80 bg-blue-200/5 blur-[100px] rounded-full -z-10 pointer-events-none"></div>
          </div>

          {/* Botão visível apenas no Mobile (abaixo da imagem) */}
          <div className="w-full text-center mt-4 lg:hidden">
            <a 
              href="https://app.elevva.net.br/register" 
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-black text-white rounded-full font-bold text-lg transition-all hover:bg-gray-800 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
            >
              Teste Grátis
              <ArrowRight size={20} className="ml-2" />
            </a>
          </div>

        </div>
      </div>



    </section>
  );
};

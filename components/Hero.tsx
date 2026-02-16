
import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

export const Hero: React.FC = () => {

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

  return (
    <section id="home" className="relative pt-20 pb-12 lg:pt-32 lg:pb-20 overflow-hidden bg-white">
      
      {/* Background Grid Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-gray/30 border-l border-black/5 hidden lg:block"></div>

      <div className="max-w-[95%] 2xl:max-w-[1400px] mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left">
          
          <div className="inline-block mb-6 animate-float">
             <div className="bg-brand-neon border border-black px-4 py-1.5 rounded-full shadow-neo-sm flex items-center gap-2">
                <Star size={14} className="fill-black" />
                <span className="text-xs font-bold uppercase tracking-wider">IA Generativa v2.5</span>
             </div>
          </div>

          <h1 className="text-5xl sm:text-6xl xl:text-8xl font-black text-brand-black mb-8 lg:mb-6 leading-[0.95] lg:leading-[0.9] tracking-tighter">
            RECRUTE <br />
            <span className="relative inline-block px-2">
              <span className="absolute inset-0 bg-brand-neon transform -skew-x-3 -z-10 rounded-sm"></span>
              MELHOR
            </span> <br />
            E MAIS RÁPIDO.
          </h1>

          <p className="text-lg md:text-xl text-gray-600 font-medium max-w-xl mx-auto lg:mx-0 mb-16 lg:mb-10 leading-relaxed">
            Troque a triagem manual por uma IA especialista que <span className="underline decoration-brand-neon decoration-4 underline-offset-2">lê, interpreta e ranqueia</span> currículos em segundos.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <a 
              href="#pricing" 
              onClick={(e) => scrollToSection(e, '#pricing')}
              className="px-8 py-4 bg-brand-black text-white rounded-lg font-bold text-lg border border-black shadow-neo hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all flex items-center gap-3 w-full sm:w-auto justify-center"
            >
              Começar Agora
              <ArrowRight size={20} />
            </a>
            
            <a 
              href="#demo"
              onClick={(e) => scrollToSection(e, '#demo')}
              className="px-8 py-4 bg-white text-brand-black rounded-lg font-bold text-lg border border-black shadow-neo-sm hover:bg-gray-50 transition-all w-full sm:w-auto flex items-center justify-center"
            >
              Ver Demo
            </a>
          </div>

          {/* Trust Badge */}
          <div className="mt-10 flex items-center justify-center lg:justify-start gap-4 opacity-80">
             <div className="flex -space-x-3">
                {[1,2,3].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${10+i}`} alt="User" />
                  </div>
                ))}
             </div>
             <p className="text-sm font-semibold text-gray-500">+150 Recrutadores usam</p>
          </div>
        </div>

        {/* Right Visual (Hyper-realistic Tablet - Bezel Less Style) */}
        {/* Aumentado width para 120% no mobile e margem negativa para expandir além do padding */}
        <div className="flex-1 w-[120%] -ml-[10%] sm:w-full sm:ml-0 max-w-[1000px] relative perspective-1000 mt-8 lg:mt-0">
           
           {/* Tablet Chassis - Reduced outer radius for tighter fit */}
           <div className="relative mx-auto bg-[#1a1a1a] rounded-[1.5rem] p-[2px] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)] ring-1 ring-white/10">
              
              {/* Hardware Buttons (Volume/Power simulation) */}
              <div className="absolute -right-[2px] top-16 w-[3px] h-10 bg-[#2a2a2a] rounded-r-md border-l border-black/50"></div>
              <div className="absolute -right-[2px] top-28 w-[3px] h-16 bg-[#2a2a2a] rounded-r-md border-l border-black/50"></div>
              
              {/* Inner Frame (The Bezel) - Minimal padding (p-1.5) */}
              <div className="bg-black rounded-[1.4rem] p-1.5 shadow-inner relative">
                  
                  {/* Screen Content - Tighter radius to match bezel */}
                  {/* Added aspect-[3/2] to increase vertical height significantly */}
                  <div className="relative rounded-[1.1rem] overflow-hidden bg-black shadow-lg border border-white/5 aspect-[3/2]">
                    <img 
                        src="https://ik.imagekit.io/xsbrdnr0y/Captura%20de%20tela%202026-02-15%20002955.png" 
                        alt="Dashboard da Plataforma Elevva"
                        className="w-full h-full object-cover object-top scale-[1.01]" 
                    />
                    
                    {/* Screen Reflection Glare (Subtle) */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none rounded-[1.1rem]"></div>
                  </div>
              </div>
           </div>

        </div>

      </div>
    </section>
  );
};

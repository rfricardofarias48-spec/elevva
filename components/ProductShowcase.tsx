
import React from 'react';
import { Zap, Target } from 'lucide-react';

export const ProductShowcase: React.FC = () => {
  
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
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

  return (
    <section id="product-showcase" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-[95%] 2xl:max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* CENTERED LAYOUT - No Image */}
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          
          {/* Badge */}
          <div className="inline-block bg-brand-neon border-2 border-black px-3 py-1.5 rounded mb-8 transform -rotate-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
             <span className="font-black text-xs md:text-sm uppercase tracking-wider text-black">Tecnologia Gemini 3</span>
          </div>

          {/* Headline */}
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-black mb-8 leading-[0.9] tracking-tighter">
            O FIM DO <br/>
            <span className="relative inline-block text-gray-300 mt-2">
              ACHISMO.
              {/* Wavy Line Decoration */}
              <svg className="absolute w-[105%] h-[12px] sm:h-[20px] top-[55%] left-[-2.5%] -translate-y-1/2 text-brand-neon fill-none overflow-visible z-10 block" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 5 0 10 5 T 20 5 T 30 5 T 40 5 T 50 5 T 60 5 T 70 5 T 80 5 T 90 5 T 100 5" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
              </svg>
            </span>
          </h2>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-gray-800 font-bold mb-12 leading-relaxed max-w-2xl mx-auto">
            A Elevva faz o trabalho pesado. Nossa IA lê, interpreta e classifica cada perfil. Você recebe a lista pronta de quem merece ser entrevistado.
          </p>

          {/* Feature Cards Grid */}
          <div className="grid sm:grid-cols-2 gap-6 mb-12 w-full text-left">
            
            {/* Card 1 - White */}
            <div className="bg-white border-2 border-black p-6 md:p-8 rounded-2xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col items-start h-full hover:-translate-y-1 transition-transform">
              <div className="mb-4 text-black">
                <Zap size={32} strokeWidth={2.5} />
              </div>
              <h3 className="font-black text-xl uppercase tracking-tight mb-3">500 CVs / Min</h3>
              <p className="text-sm text-gray-600 font-bold leading-relaxed">
                Analise volumes massivos no tempo que leva para tomar um café. Escala instantânea para sua operação.
              </p>
            </div>

             {/* Card 2 - Black */}
             <div className="bg-black border-2 border-black p-6 md:p-8 rounded-2xl shadow-[6px_6px_0px_0px_rgba(204,255,0,1)] flex flex-col items-start h-full relative overflow-hidden hover:-translate-y-1 transition-transform">
              <div className="mb-4 text-brand-neon">
                <Target size={32} strokeWidth={2.5} />
              </div>
              <h3 className="font-black text-xl uppercase tracking-tight mb-3 text-white">Fit Perfeito</h3>
              <p className="text-sm text-gray-300 font-bold leading-relaxed relative z-10">
                Esqueça a busca por palavras-chave. A IA entende contexto, senioridade e a profundidade real das experiências.
              </p>
              {/* Decorative glow */}
              <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-brand-neon blur-3xl opacity-20"></div>
            </div>

          </div>

          {/* CTA Button */}
          <a 
            href="#pricing" 
            onClick={(e) => scrollToSection(e, '#pricing')}
            className="w-full md:w-auto px-12 bg-brand-neon text-black font-black text-lg py-5 rounded-xl border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all uppercase tracking-wide text-center"
          >
            Testar Gratuitamente
          </a>

        </div>
      </div>
    </section>
  );
};

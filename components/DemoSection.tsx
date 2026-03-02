import React from 'react';
import { Brain, ArrowRight } from 'lucide-react';

export const DemoSection: React.FC = () => {
  return (
    <section id="demo" className="py-12 lg:py-24 bg-white relative overflow-hidden border-t border-gray-100">
      
      <div className="max-w-[95%] 2xl:max-w-[1400px] mx-auto px-6 relative z-10">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-brand-black mb-6 leading-[1.1] tracking-tight">
             Relatório <span className="text-gray-400">Detalhado.</span>
          </h2>
          <p className="text-lg md:text-xl font-medium text-gray-500 leading-relaxed">
             Nossa tecnologia analisa centenas de pontos de dados em cada currículo, comparando competências reais com as necessidades da sua vaga.
          </p>
        </div>

        {/* MAIN INTERFACE - TABLET STYLE */}
        {/* Aumentado max-w para expandir a tela horizontalmente conforme solicitado */}
        <div className="w-[120%] -ml-[10%] sm:w-full sm:mx-auto max-w-[1000px] lg:max-w-[1400px] relative perspective-1000 mt-10 md:mt-0 group">
           
           {/* Tablet Chassis */}
           <div className="relative mx-auto bg-[#1a1a1a] rounded-[1.5rem] p-[2px] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)] ring-1 ring-white/10">
              
              {/* Hardware Buttons */}
              <div className="absolute -right-[2px] top-16 w-[3px] h-10 bg-[#2a2a2a] rounded-r-md border-l border-black/50"></div>
              <div className="absolute -right-[2px] top-28 w-[3px] h-16 bg-[#2a2a2a] rounded-r-md border-l border-black/50"></div>
              
              {/* Inner Frame (Bezel) */}
              <div className="bg-black rounded-[1.4rem] p-1.5 shadow-inner relative">
                  
                  {/* Screen Content */}
                  {/* Ajustado: lg:aspect-[2.1/1] para diminuir a altura vertical da tela */}
                  <div className="relative rounded-[1.1rem] overflow-hidden bg-white shadow-lg border border-white/5 aspect-[3/2] lg:aspect-[2.1/1]">
                    
                    {/* IMAGEM - Visível apenas no Mobile (lg:hidden) */}
                    <img 
                      src="https://ik.imagekit.io/xsbrdnr0y/imagem%20detalhe.png" 
                      alt="Interface Mobile"
                      className="w-full h-full object-contain object-center bg-white block lg:hidden"
                    />

                    {/* IMAGEM - Visível apenas no PC/Desktop (hidden lg:block) */}
                    {/* Alterado: object-cover para preencher a tela ajustada sem bordas */}
                    <img 
                      src="https://ik.imagekit.io/xsbrdnr0y/imagem%20relat%C3%B3rio.png"
                      alt="Interface Desktop"
                      className="w-full h-full object-cover object-top hidden lg:block"
                    />
                    
                    {/* Screen Reflection Glare */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none rounded-[1.1rem]"></div>
                  </div>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
};

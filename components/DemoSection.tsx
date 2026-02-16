
import React from 'react';
import { Brain } from 'lucide-react';

export const DemoSection: React.FC = () => {
  return (
    <section id="demo" className="py-16 bg-white relative overflow-hidden border-t-2 border-black">
      
      <div className="max-w-[95%] 2xl:max-w-[1400px] mx-auto px-6 relative z-10">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black text-white text-xs font-bold uppercase tracking-widest mb-6">
            <Brain size={14} className="text-brand-neon" />
            <span>Inteligência Cognitiva</span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-brand-black mb-6 leading-[0.9] tracking-tighter">
             VEJA COMO <br/>
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-black to-gray-500">FUNCIONA.</span>
          </h2>
          <p className="text-lg font-medium text-gray-600 leading-relaxed">
             Esqueça a leitura dinâmica. A Elevva quebra cada currículo em centenas de pontos de dados, 
             comparando tecnicamente com a vaga para eliminar o viés inconsciente.
          </p>
        </div>

        {/* MAIN INTERFACE - TABLET STYLE */}
        {/* Aumentado max-w para lg:max-w-[1400px] no desktop para ficar ainda mais largo */}
        <div className="w-[120%] -ml-[10%] sm:w-full sm:mx-auto max-w-[1000px] lg:max-w-[1400px] relative perspective-1000 mt-10 md:mt-0 group">
           
           {/* Decorative Glow behind the tablet */}
           <div className="absolute -inset-4 bg-brand-neon rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-700 -z-10"></div>
           
           {/* Tablet Chassis */}
           <div className="relative mx-auto bg-[#1a1a1a] rounded-[1.5rem] p-[2px] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)] ring-1 ring-white/10">
              
              {/* Hardware Buttons */}
              <div className="absolute -right-[2px] top-16 w-[3px] h-10 bg-[#2a2a2a] rounded-r-md border-l border-black/50"></div>
              <div className="absolute -right-[2px] top-28 w-[3px] h-16 bg-[#2a2a2a] rounded-r-md border-l border-black/50"></div>
              
              {/* Inner Frame (Bezel) */}
              <div className="bg-black rounded-[1.4rem] p-1.5 shadow-inner relative">
                  
                  {/* Screen Content */}
                  {/* ALTERADO: lg:aspect-[2.2/1] para aumentar um pouco a altura verticalmente (era 2.5/1) */}
                  <div className="relative rounded-[1.1rem] overflow-hidden bg-black shadow-lg border border-white/5 aspect-[3/2] lg:aspect-[2.2/1]">
                    
                    {/* VIDEO - Visível apenas no Mobile (lg:hidden) */}
                    <video 
                      src="https://ik.imagekit.io/xsbrdnr0y/Video%20Project%207.mp4?updatedAt=1771127198468" 
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover object-center scale-[1.03] block lg:hidden"
                    />

                    {/* IMAGEM - Visível apenas no PC/Desktop (hidden lg:block) */}
                    {/* Alterado: scale-[1.03] para scale-100 e object-center para object-top */}
                    <img 
                      src="https://ik.imagekit.io/xsbrdnr0y/2tela.png?updatedAt=1771130848542"
                      alt="Interface Desktop"
                      className="w-full h-full object-cover object-top scale-100 hidden lg:block"
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

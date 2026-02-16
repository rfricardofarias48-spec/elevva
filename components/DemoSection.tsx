
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

        {/* MAIN INTERFACE VIDEO */}
        {/* Aumentado width para 120% no mobile e margem negativa ajustada para -ml-[5%] para deslocar levemente à direita */}
        <div className="w-[120%] -ml-[5%] md:w-full md:ml-0 relative group mt-10 md:mt-0">
           {/* Decorative Glow */}
           <div className="absolute -inset-0.5 bg-brand-neon rounded-[2rem] blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
           
           <div className="relative w-full aspect-video rounded-[2rem] border-2 border-black shadow-neo-lg overflow-hidden bg-gray-100">
             <video 
              src="https://ik.imagekit.io/xsbrdnr0y/Video%20Project%207.mp4?updatedAt=1771127198468" 
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover scale-[1.03]"
             />
           </div>
        </div>

      </div>
    </section>
  );
};

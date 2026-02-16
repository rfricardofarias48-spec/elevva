
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
          <h2 className="text-5xl md:text-6xl font-black text-brand-black mb-6 leading-[0.9] tracking-tighter">
             VEJA COMO <br/>
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-black to-gray-500">FUNCIONA.</span>
          </h2>
          <p className="text-lg font-medium text-gray-600 leading-relaxed">
             Esqueça a leitura dinâmica. A Elevva quebra cada currículo em centenas de pontos de dados, 
             comparando tecnicamente com a vaga para eliminar o viés inconsciente.
          </p>
        </div>

        {/* MAIN INTERFACE IMAGE */}
        <div className="w-full relative group">
           {/* Decorative Glow */}
           <div className="absolute -inset-0.5 bg-brand-neon rounded-[2rem] blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
           
           <img 
            src="https://ik.imagekit.io/xsbrdnr0y/2tela.png" 
            alt="Dashboard da Plataforma Elevva mostrando análise de candidatos" 
            className="relative w-full rounded-[2rem] border-2 border-black shadow-neo-lg"
           />
        </div>

      </div>
    </section>
  );
};

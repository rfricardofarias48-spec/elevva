import React from 'react';
import { Users, Briefcase, Zap } from 'lucide-react';

export const AgenciesSection: React.FC = () => {
  return (
    <section id="agencies" className="py-20 lg:py-32 bg-[#111827] text-white relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.03]" 
           style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
      </div>

      <div className="max-w-[95%] 2xl:max-w-[1200px] mx-auto px-6 relative z-10">
        
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
             <div className="relative bg-white/5 backdrop-blur-sm rounded-[2.5rem] p-8 md:p-12 border border-white/10 overflow-hidden">
                
                <div className="relative z-10 space-y-6">
                   <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex items-center justify-between hover:bg-white/10 transition-colors">
                      <div className="flex items-center gap-4">
                         <div className="w-12 h-12 rounded-xl bg-brand-green/20 flex items-center justify-center text-brand-green">
                            <Users size={24} />
                         </div>
                         <div>
                            <div className="font-bold text-white text-lg">Múltiplos Clientes</div>
                            <div className="text-sm text-gray-400">Gerencie todos em um só lugar</div>
                         </div>
                      </div>
                   </div>

                   <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex items-center justify-between hover:bg-white/10 transition-colors">
                      <div className="flex items-center gap-4">
                         <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400">
                            <Briefcase size={24} />
                         </div>
                         <div>
                            <div className="font-bold text-white text-lg">White-Label</div>
                            <div className="text-sm text-gray-400">Sua marca, nossa tecnologia</div>
                         </div>
                      </div>
                   </div>

                   <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex items-center justify-between hover:bg-white/10 transition-colors">
                      <div className="flex items-center gap-4">
                         <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400">
                            <Zap size={24} />
                         </div>
                         <div>
                            <div className="font-bold text-white text-lg">Escala Ilimitada</div>
                            <div className="text-sm text-gray-400">Cresça sem aumentar o headcount</div>
                         </div>
                      </div>
                   </div>
                </div>

             </div>
             
             {/* Decorative Elements */}
             <div className="absolute -top-10 -right-10 w-60 h-60 bg-brand-green rounded-full blur-[100px] opacity-10 pointer-events-none"></div>
          </div>

          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white text-sm font-bold uppercase tracking-wide mb-6">
              <Users size={16} className="text-brand-green" />
              Para Agências e Consultorias de RH
            </div>
            
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-[1.1] tracking-tight">
              Multiplique a <br className="hidden md:block"/>
              <span className="text-gray-400">sua capacidade.</span>
            </h2>
            
            <p className="text-lg md:text-xl font-medium text-gray-400 leading-relaxed max-w-2xl mb-8">
              Atenda mais clientes sem precisar inchar a sua equipe. A Elevva permite que consultorias de R&S gerenciem múltiplas vagas e clientes simultaneamente, entregando shortlists qualificadas em tempo recorde.
            </p>

            <button className="bg-brand-green text-[#111827] px-8 py-4 rounded-full font-bold text-lg hover:bg-lime-400 transition-all shadow-[0_0_20px_rgba(132,204,22,0.3)] hover:shadow-[0_0_30px_rgba(132,204,22,0.5)] transform hover:-translate-y-1">
              Falar com Especialista em Parcerias
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

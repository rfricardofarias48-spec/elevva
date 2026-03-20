import React from 'react';
import { UploadCloud, Cpu, Trophy, ArrowRight } from 'lucide-react';

export const IntegrationsSection: React.FC = () => {
  const steps = [
    {
      icon: <UploadCloud size={32} />,
      title: "1. Upload",
      desc: "Arraste pastas inteiras de currículos (PDF). Processamos centenas simultaneamente."
    },
    {
      icon: <Cpu size={32} />,
      title: "2. Análise IA",
      desc: "A IA aplica seus critérios de avaliação a cada perfil, validando requisitos e senioridade."
    },
    {
      icon: <Trophy size={32} />,
      title: "3. Relatório Completo",
      desc: "Análises detalhadas e ranking baseados nos seus critérios, tudo em segundos."
    }
  ];

  return (
    <section className="pt-8 pb-16 bg-[#111827] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
            Do upload à entrevista <br/>
            <span className="text-gray-400">em poucos minutos.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gray-700 -z-10"></div>

          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="w-24 h-24 rounded-3xl bg-[#111827] border border-gray-800 shadow-xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:border-brand-green/50 transition-all duration-300 relative">
                <div className="text-white group-hover:text-brand-green transition-colors">
                  {step.icon}
                </div>
                {/* Number Badge */}
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-brand-green text-[#111827] flex items-center justify-center font-bold text-sm border-4 border-gray-900 shadow-sm">
                  {index + 1}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-gray-500 leading-relaxed max-w-xs">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

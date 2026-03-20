import React from 'react';

export const BentoSection: React.FC = () => {
  return (
    <section id="bento" className="py-16 lg:py-20 bg-[#111827] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-4xl mx-auto mb-20 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-white mb-6 leading-[1.1]">
            A jornada invisível e perfeita do WhatsApp para a sua agenda.
          </h2>
          <p className="text-lg text-gray-400 font-medium leading-relaxed">
            Elimine o custo operacional de marcar entrevistas e triar e-mails. Feche as melhores vagas antes da concorrência.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Top Card (Full Width on Mobile, Full Width on Desktop) */}
          <div className="md:col-span-2 bg-white/5 rounded-[2rem] p-8 md:p-12 flex flex-col items-center justify-center overflow-hidden relative min-h-[400px] animate-fade-in-up border border-white/10" style={{ animationDelay: '100ms', opacity: 0 }}>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 pointer-events-none"></div>
            
            {/* Mock Chat UI */}
            <div className="w-full max-w-4xl relative z-10 flex flex-col md:flex-row gap-6 items-center md:items-stretch">
              {/* WhatsApp Mock */}
              <div className="flex-1 w-full bg-[#111827] p-5 rounded-2xl shadow-xl shadow-black/50 border border-white/10 flex flex-col gap-3">
                <div className="bg-[#dcf8c6] text-gray-800 p-3 rounded-2xl rounded-tl-sm w-fit max-w-[90%] text-sm font-medium shadow-sm">
                  Olá! Sou o Bento da Elevva. Vi que você se interessou pela vaga de Desenvolvedor. Pode me enviar seu currículo em PDF?
                </div>
                <div className="bg-white/10 text-white p-3 rounded-2xl rounded-tr-sm ml-auto w-fit max-w-[90%] text-sm font-medium flex items-center gap-2 shadow-sm">
                  📄 curriculo_joao.pdf
                </div>
                <div className="bg-[#dcf8c6] text-gray-800 p-3 rounded-2xl rounded-tl-sm w-fit max-w-[90%] text-sm font-medium shadow-sm">
                  Perfeito! Qual sua disponibilidade para uma entrevista amanhã à tarde?
                </div>
              </div>
              
              {/* Scoring Mock */}
              <div className="flex-1 w-full bg-[#111827] p-6 rounded-2xl shadow-xl shadow-black/50 border border-white/10 flex flex-col justify-center">
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/10">
                  <div>
                    <h4 className="font-bold text-white text-lg">João Silva</h4>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mt-1">Vaga: Desenvolvedor Senior</p>
                  </div>
                  <div className="w-14 h-14 rounded-full bg-brand-green/20 text-brand-green flex items-center justify-center font-black text-xl border border-brand-green/30">
                    9/10
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <span className="text-xs font-bold text-green-400 uppercase tracking-wider flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-green-400"></span> Pontos Fortes</span>
                    <p className="text-sm text-gray-300 font-medium mt-1">5 anos de React, Node.js, AWS.</p>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-red-400 uppercase tracking-wider flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-red-400"></span> Ponto de Atenção</span>
                    <p className="text-sm text-gray-300 font-medium mt-1">Inglês intermediário (vaga pede fluente).</p>
                  </div>
                  <button className="w-full mt-2 py-3 bg-[#111827] hover:bg-gray-700 text-white rounded-xl text-sm font-bold transition-colors shadow-sm">
                    Ver Entrevista Agendada
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Left Card */}
          <div className="bg-white/5 rounded-[2rem] p-8 md:p-12 flex flex-col relative overflow-hidden min-h-[400px] animate-fade-in-up border border-white/10" style={{ animationDelay: '200ms', opacity: 0 }}>
            <div className="absolute top-12 left-12">
              <div className="relative">
                <span className="font-handwriting text-2xl text-brand-green absolute -top-10 -left-6 whitespace-nowrap -rotate-6">
                  Ecossistema Google
                </span>
              </div>
              
              <div className="flex gap-6 mt-12">
                {/* App Icons */}
                <div className="w-24 h-24 bg-white/10 rounded-3xl shadow-lg border border-white/10 flex items-center justify-center overflow-hidden transition-transform hover:scale-105">
                  <img src="https://img.icons8.com/?size=100&id=WKF3bm1munsk&format=png&color=000000" alt="Google Agenda" className="w-14 h-14 object-contain" referrerPolicy="no-referrer" />
                </div>
                <div className="w-24 h-24 bg-white/10 rounded-3xl shadow-lg border border-white/10 flex items-center justify-center overflow-hidden transition-transform hover:scale-105">
                  <img src="https://img.icons8.com/?size=100&id=pE97I4t7Il9M&format=png&color=000000" alt="Google Meet" className="w-14 h-14 object-contain" referrerPolicy="no-referrer" />
                </div>
              </div>
            </div>
            
            <div className="mt-auto pt-12">
              <h3 className="text-2xl font-bold text-white mb-3">Integrações inteligentes</h3>
              <p className="text-gray-400 leading-relaxed font-medium">
                Além da triagem, nossa IA consegue agendar entrevistas direto no seu google agenda, ela é capaz gerar e enviar automaticamente os links do Google Meet para entrevistas online.
              </p>
            </div>
          </div>

          {/* Bottom Right Card */}
          <div className="bg-white/5 text-white rounded-[2rem] p-8 md:p-12 flex flex-col relative overflow-hidden min-h-[400px] animate-fade-in-up border border-white/10" style={{ animationDelay: '300ms', opacity: 0 }}>
            <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[80%]">
              <div className="bg-white/10 backdrop-blur-md text-white p-4 rounded-2xl shadow-2xl text-center font-medium text-sm md:text-base border border-white/10">
                Filtro Anti-Curiosos & Scoring Exato
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-20 h-20 bg-brand-green/30 blur-2xl rounded-full"></div>
            </div>
            
            <div className="mt-auto pt-12">
              <h3 className="text-2xl font-bold text-white mb-3">Fim da leitura dinâmica de PDFs</h3>
              <p className="text-gray-400 leading-relaxed font-medium">
                A IA identifica respostas vagas, valida pré-requisitos e descarta educadamente quem não serve. Receba apenas os melhores, já com a entrevista marcada.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

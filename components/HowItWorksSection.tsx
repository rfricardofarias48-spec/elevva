import React from 'react';
import { ChevronRight } from 'lucide-react';

export const HowItWorksSection: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 lg:py-32 bg-gray-900 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-green/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center mb-20 animate-fade-in-up">
          
          <div className="relative mb-6">
            <span className="font-handwriting text-3xl text-brand-green absolute -top-10 -left-16 whitespace-nowrap transform -rotate-6">
              Simples assim
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
              Pronto para recuperar <br /> 12 horas por semana?
            </h2>
          </div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 max-w-5xl mx-auto relative">
          
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-8 left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-transparent via-gray-700 to-transparent z-0"></div>

          {/* Step 1 */}
          <div className="flex flex-col items-center text-center relative z-10 animate-fade-in-up" style={{ animationDelay: '100ms', opacity: 0 }}>
            <div className="w-16 h-16 rounded-2xl bg-gray-800 border border-gray-700 text-white flex items-center justify-center text-2xl font-black mb-8 shadow-sm">
              1
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Qualificação no WhatsApp</h3>
            <p className="text-gray-500 leading-relaxed font-medium">
              O candidato chama no WhatsApp. Nosso Agente de IA atende na hora, 24/7, faz as perguntas-chave e recolhe o currículo em PDF.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center relative z-10 animate-fade-in-up" style={{ animationDelay: '200ms', opacity: 0 }}>
            <div className="w-16 h-16 rounded-2xl bg-gray-800 border border-gray-700 text-white flex items-center justify-center text-2xl font-black mb-8 shadow-sm">
              2
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Scoring Instantâneo</h3>
            <p className="text-gray-500 leading-relaxed font-medium">
              A IA analisa o currículo em segundos e gera um resumo com Nota de Compatibilidade, Pontos Fortes e Alertas Vermelhos.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center relative z-10 animate-fade-in-up" style={{ animationDelay: '300ms', opacity: 0 }}>
            <div className="w-16 h-16 rounded-2xl bg-brand-green/10 border border-brand-green/20 text-brand-green flex items-center justify-center text-2xl font-black mb-8 shadow-sm">
              3
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Agendamento na Agenda</h3>
            <p className="text-gray-500 leading-relaxed font-medium">
              Se aprovado, o robô cruza a disponibilidade do candidato com a sua agenda e já marca a entrevista em vídeo no Google Meet.
            </p>
          </div>

        </div>

        <div className="mt-24 flex justify-center animate-fade-in-up" style={{ animationDelay: '400ms', opacity: 0 }}>
          <a 
            href="https://app.elevva.net.br/register" 
            className="inline-flex items-center justify-center px-8 py-4 bg-brand-green text-[#111827] rounded-full font-bold text-lg transition-all hover:bg-gray-800 hover:scale-105 active:scale-95 shadow-xl shadow-black/10 group"
          >
            Começar agora
            <ChevronRight size={20} className="ml-2 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

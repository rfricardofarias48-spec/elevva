import React from 'react';
import { Clock, TrendingDown, AlertTriangle } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  return (
    <section id="problem" className="py-20 lg:py-32 bg-gray-900 border-t border-gray-800">
      <div className="max-w-[95%] 2xl:max-w-[1200px] mx-auto px-6">
        
        <div className="text-center max-w-4xl mx-auto mb-16 lg:mb-24">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-[1.1] tracking-tight">
            O volume de currículos não é o seu maior ativo. <br className="hidden md:block"/>
            <span className="text-gray-400">É o seu maior custo oculto.</span>
          </h2>
          <p className="text-lg md:text-xl font-medium text-gray-500 leading-relaxed max-w-3xl mx-auto">
            Em operações com alto volume de vagas, a triagem manual gera gargalos severos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Card 1 */}
          <div className="bg-[#111827] p-8 rounded-[2rem] shadow-xl shadow-gray-200/50 border border-gray-800 hover:-translate-y-2 transition-transform duration-300">
            <div className="w-14 h-14 bg-red-900/20 text-red-400 rounded-2xl flex items-center justify-center mb-6">
              <Clock className="text-red-500" size={28} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Desperdício de Horas Úteis</h3>
            <p className="text-gray-500 font-medium leading-relaxed">
              Analistas seniores gastam <span className="text-white font-bold">70% do tempo</span> em triagem primária e tentativas frustradas de contato.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#111827] p-8 rounded-[2rem] shadow-xl shadow-gray-200/50 border border-gray-800 hover:-translate-y-2 transition-transform duration-300">
            <div className="w-14 h-14 bg-orange-900/20 text-orange-400 rounded-2xl flex items-center justify-center mb-6">
              <TrendingDown className="text-orange-500" size={28} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Perda de Talentos (SLA Lento)</h3>
            <p className="text-gray-500 font-medium leading-relaxed">
              Os melhores candidatos são absorvidos pela concorrência enquanto a sua equipa ainda está a ler PDFs.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#111827] p-8 rounded-[2rem] shadow-xl shadow-gray-200/50 border border-gray-800 hover:-translate-y-2 transition-transform duration-300">
            <div className="w-14 h-14 bg-yellow-900/20 text-yellow-400 rounded-2xl flex items-center justify-center mb-6">
              <AlertTriangle className="text-yellow-500" size={28} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Vieses Inconscientes</h3>
            <p className="text-gray-500 font-medium leading-relaxed">
              A fadiga decisória compromete a qualidade da seleção, aumentando o turnover (rotatividade) no curto prazo.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

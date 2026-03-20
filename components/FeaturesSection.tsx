import React from 'react';

export const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="py-20 lg:py-32 bg-[#111827] relative overflow-hidden">
      <div className="max-w-[95%] 2xl:max-w-[1200px] mx-auto px-6 relative z-10">
        
        <div className="text-center max-w-4xl mx-auto mb-20 lg:mb-32">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-[1.1] tracking-tight">
            Inteligência Cognitiva em todas as <br className="hidden md:block"/>
            <span className="text-brand-green">etapas do funil de atração.</span>
          </h2>
        </div>

        <div className="space-y-24 lg:space-y-40">
          
          {/* Feature 1 */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl ring-1 ring-black/5">
                <img src="https://ik.imagekit.io/xsbrdnr0y/image_3563bb.png" alt="Triagem Cognitiva" className="w-full h-auto object-cover" />
              </div>
            </div>
            <div className="w-full lg:w-1/2 order-1 lg:order-2">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-brand-green/20 text-white font-black text-xl mb-6">1</div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">Triagem Cognitiva e Scoring de Perfis</h3>
              <p className="text-lg text-gray-500 font-medium leading-relaxed">
                A nossa IA processa dezenas de páginas de currículos instantaneamente. Esqueça a leitura dinâmica. Receba um painel estruturado com um Score de Compatibilidade (Match), análise crítica de pontos fortes e sinais de alerta, antes mesmo da primeira interação.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full lg:w-1/2 order-1">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-brand-green/20 text-white font-black text-xl mb-6">2</div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">Qualificação Ativa (Omnichannel)</h3>
              <p className="text-lg text-gray-500 font-medium leading-relaxed">
                Enquanto a concorrência manda e-mails que não são lidos, o Agente Elevva interage em tempo real via WhatsApp. Ele conduz entrevistas prévias, valida hard e soft skills e identifica o nível de interesse do candidato com fluidez humana.
              </p>
            </div>
            <div className="w-full lg:w-1/2 order-2">
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl ring-1 ring-black/5">
                <img src="https://ik.imagekit.io/xsbrdnr0y/image_35635e.png" alt="Qualificação Ativa" className="w-full h-auto object-cover" />
              </div>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl ring-1 ring-black/5">
                <img src="https://ik.imagekit.io/xsbrdnr0y/image_356318.png" alt="Orquestração de Agenda" className="w-full h-auto object-cover" />
              </div>
            </div>
            <div className="w-full lg:w-1/2 order-1 lg:order-2">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-brand-green/20 text-white font-black text-xl mb-6">3</div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">Orquestração Inteligente de Agenda</h3>
              <p className="text-lg text-gray-500 font-medium leading-relaxed">
                Fim do vai-e-vem para marcar reuniões. O sistema faz a leitura bidirecional do Google Calendar dos seus recrutadores, cruza com a disponibilidade do candidato aprovado e injeta a entrevista na agenda, já com a sala do Google Meet gerada.
              </p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full lg:w-1/2 order-1">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-brand-green/20 text-white font-black text-xl mb-6">4</div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">Centro de Comando em Tempo Real</h3>
              <p className="text-lg text-gray-500 font-medium leading-relaxed">
                Visibilidade total da sua operação. Acompanhe a cadência de conversas do Agente IA ao vivo, intervenha quando necessário e tenha métricas precisas sobre a saúde do seu funil de recrutamento.
              </p>
            </div>
            <div className="w-full lg:w-1/2 order-2">
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl ring-1 ring-black/5 bg-[#111827] p-2">
                <img src="https://ik.imagekit.io/xsbrdnr0y/image_35675e.png" alt="Centro de Comando" className="w-full h-auto object-cover rounded-[1.5rem]" />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

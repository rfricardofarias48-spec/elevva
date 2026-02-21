
import React from 'react';
import { Check, Star, Zap } from 'lucide-react';

const plans = [
  {
    name: "Grátis",
    price: "0,00",
    period: "/mês",
    desc: "Para testar a potência da IA.",
    features: ["25 Currículos / mês", "1 Vaga", "Exportação em PDF"],
    isPopular: false,
    link: "https://app.elevva.net.br",
    buttonText: "Criar Conta Grátis"
  },
  {
    name: "Mensal",
    price: "289,90",
    period: "/mês",
    desc: "Tração total para seu RH.",
    features: ["3 Vagas", "Análise Ilimitada de Currículos", "Ranking Automático", "Exportação em PDF", "Link de Candidatura"],
    isPopular: false,
    link: "https://invoice.infinitepay.io/plans/velorh/fIPbnJ9j", // Link antigo, verificar novo
    buttonText: "Assinar Mensal"
  },
  {
    name: "Trimestral",
    price: "249,90",
    period: "/mês",
    desc: "Total de R$ 749,70 cobrado trimestralmente.",
    features: ["3 Vagas", "Análise Ilimitada de Currículos", "Ranking Automático", "Exportação em PDF", "Link de Candidatura"],
    isPopular: true,
    tag: "Mais Popular",
    link: "#",
    buttonText: "Assinar Trimestral"
  },
  {
    name: "Anual",
    price: "229,90", 
    period: "/mês",
    desc: "Total de R$ 2.758,80 cobrado anualmente.",
    features: ["Vagas Ilimitadas", "Análise Ilimitada de Currículos", "Ranking Automático", "Exportação em PDF", "Link de Candidatura", "Atendimento Prioritário"],
    isPopular: false,
    isBestValue: true,
    tag: "Melhor Valor",
    link: "https://invoice.infinitepay.io/plans/velorh/3csXVcCRLP", // Link antigo, verificar novo
    buttonText: "Assinar Anual"
  }
];

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-16 bg-brand-gray relative overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]"></div>

      <div className="max-w-[95%] 2xl:max-w-[1400px] mx-auto px-6 relative z-10">
        
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-4">
            Planos Simples. <span className="bg-brand-neon px-2">Sem Pegadinhas.</span>
          </h2>
          <p className="text-gray-600 text-lg">Comece grátis ou escale com o plano Pro.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-start max-w-full mx-auto">
          {plans.map((plan: any, i) => (
            <div 
              key={i}
              className={`
                relative p-6 md:p-8 rounded-2xl border-2 transition-transform duration-300 hover:-translate-y-2 flex flex-col h-full
                ${plan.isPopular 
                  ? 'bg-black text-white border-black shadow-neo-lg scale-100 md:scale-105 z-10' 
                  : plan.isBestValue
                    ? 'bg-white text-brand-black border-brand-neon shadow-neo ring-1 ring-brand-neon'
                    : 'bg-white text-brand-black border-black shadow-neo'
                }
              `}
            >
              
              {(plan.isPopular || plan.isBestValue) && (
                <div className={`
                  absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold border border-black uppercase tracking-wider flex items-center gap-1 shadow-sm
                  ${plan.isPopular ? 'bg-brand-neon text-black' : 'bg-black text-brand-neon'}
                `}>
                  <Star size={12} className={plan.isPopular ? "fill-black" : "fill-brand-neon"} /> {plan.tag || 'Recomendado'}
                </div>
              )}

              {plan.name === "Grátis" && (
                 <div className="absolute -top-3 left-8 bg-brand-neon text-black px-3 py-1 rounded text-[10px] font-bold border border-black uppercase tracking-wider shadow-sm z-20">
                    Experimente
                 </div>
              )}

              <h3 className="text-2xl font-bold mb-2 flex items-center gap-2 mt-2">
                {plan.name}
                {plan.name !== "Grátis" && <Zap size={20} className={plan.isPopular ? "text-brand-neon fill-brand-neon" : "text-black fill-brand-neon"} />}
              </h3>
              <p className={`text-sm mb-6 ${plan.isPopular ? 'text-gray-400' : 'text-gray-500'}`}>{plan.desc}</p>
              
              <div className="mb-8 pb-8 border-b border-dashed border-current border-opacity-20">
                 <div className="flex items-baseline">
                   <span className="text-sm font-bold mr-1">R$</span>
                   <span className="text-5xl font-black tracking-tighter">{plan.price.split(',')[0]}</span>
                   <span className="text-2xl font-bold">,{plan.price.split(',')[1]}</span>
                   <span className={`ml-1 text-xs uppercase font-bold tracking-wide ${plan.isPopular ? 'text-gray-400' : 'text-gray-500'}`}>{plan.period}</span>
                 </div>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                 {plan.features.map((feat, idx) => (
                   <li key={idx} className="flex items-center gap-3 text-sm font-medium">
                     <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 border border-black ${plan.isPopular ? 'bg-brand-neon text-black border-none' : 'bg-brand-neon text-black'}`}>
                       <Check size={12} strokeWidth={4} />
                     </div>
                     {feat}
                   </li>
                 ))}
              </ul>

              <a 
                href={plan.link}
                target={plan.link.startsWith('http') ? "_blank" : "_self"}
                rel="noopener noreferrer"
                onClick={(e) => {
                  if(plan.link === '/login') {
                    e.preventDefault();
                    window.history.pushState({}, '', '/login');
                    window.dispatchEvent(new PopStateEvent('popstate'));
                  }
                }}
                className={`
                  w-full py-4 rounded-xl font-bold border-2 transition-all text-center block cursor-pointer
                  ${plan.isPopular 
                    ? 'bg-brand-neon text-black border-brand-neon hover:bg-white hover:border-white' 
                    : 'bg-black text-white border-black md:bg-white md:text-black md:hover:bg-black md:hover:text-white'}
                `}
              >
                {plan.buttonText}
              </a>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

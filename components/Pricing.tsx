
import React from 'react';
import { Check, Star, Zap, Sparkles } from 'lucide-react';

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
    price: "129,90",
    period: "/mês",
    desc: "Tração total para seu RH.",
    features: ["3 Vagas", "Análise Ilimitada de Currículos", "Ranking Automático", "Exportação em PDF"],
    isPopular: false,
    link: "https://invoice.infinitepay.io/plans/velorh/fIPbnJ9j",
    buttonText: "Assinar Mensal"
  },
  {
    name: "Trimestral",
    price: "119,90",
    period: "/mês",
    desc: "Total de R$ 359,70 cobrado trimestralmente.",
    features: ["3 Vagas", "Análise Ilimitada de Currículos", "Ranking Automático", "Exportação em PDF"],
    isPopular: true,
    tag: "Mais Popular",
    link: "https://invoice.infinitepay.io/plans/velorh/1p1tYQnp1",
    buttonText: "Assinar Trimestral"
  },
  {
    name: "Anual",
    price: "99,90", 
    period: "/mês",
    desc: "Total de R$ 1.198,80 cobrado anualmente.",
    features: ["Vagas Ilimitadas", "Análise Ilimitada de Currículos", "Ranking Automático", "Exportação em PDF", "Atendimento Prioritário"],
    isPopular: false,
    isBestValue: true,
    tag: "Melhor Valor",
    link: "https://invoice.infinitepay.io/plans/velorh/3csXVcCRLP",
    buttonText: "Assinar Anual"
  }
];

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-16 lg:py-24 bg-transparent relative overflow-hidden">
      
      <div className="max-w-[95%] 2xl:max-w-[1200px] mx-auto px-6 relative z-10">
        
        {/* HEADER SECTION */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-brand-black mb-6 leading-[1.1]">
            Planos simples. <br className="hidden md:block"/>
            <span className="text-gray-400">Sem pegadinhas.</span>
          </h2>
          
          <p className="text-lg text-gray-500 font-medium leading-relaxed">
            Comece grátis ou escale com o plano Pro.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8 items-start max-w-full mx-auto">
          {plans.map((plan: any, i) => (
            <div 
              key={i}
              className={`
                relative p-8 md:p-10 rounded-[2rem] transition-all duration-500 hover:-translate-y-2 flex flex-col h-full
                ${plan.isPopular 
                  ? 'bg-brand-black text-white shadow-2xl ring-1 ring-white/10 scale-100 md:scale-105 z-10' 
                  : plan.isBestValue
                    ? 'bg-gray-50 md:bg-white text-brand-black shadow-xl shadow-gray-200/50 border border-brand-neon ring-1 ring-brand-neon/50'
                    : 'bg-gray-50 md:bg-white text-brand-black shadow-xl shadow-gray-200/50 border border-gray-100 hover:shadow-2xl hover:shadow-gray-200/80'
                }
              `}
            >
              
              {/* Decorative Glow for Popular Plan */}
              {plan.isPopular && (
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-neon/20 blur-3xl rounded-full pointer-events-none"></div>
              )}

              {(plan.isPopular || plan.isBestValue) && (
                <div className={`
                  absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-md
                  ${plan.isPopular ? 'bg-brand-neon text-black' : 'bg-brand-black text-brand-neon'}
                `}>
                  <Star size={12} className={plan.isPopular ? "fill-black" : "fill-brand-neon"} /> {plan.tag || 'Recomendado'}
                </div>
              )}

              {plan.name === "Grátis" && (
                 <div className="absolute -top-3 left-8 bg-brand-neon text-black px-3 py-1 rounded text-[10px] font-bold uppercase tracking-wider shadow-sm z-20">
                    Experimente
                 </div>
              )}

              <h3 className="text-2xl font-bold mb-2 flex items-center gap-2 mt-2 relative z-10">
                {plan.name}
                {plan.name !== "Grátis" && <Zap size={20} className={plan.isPopular ? "text-brand-neon fill-brand-neon" : "text-gray-400 fill-gray-400"} />}
              </h3>
              <p className={`text-sm mb-8 font-medium relative z-10 ${plan.isPopular ? 'text-gray-400' : 'text-gray-500'}`}>{plan.desc}</p>
              
              <div className="mb-8 pb-8 border-b border-gray-200/20 relative z-10">
                 <div className="flex items-baseline">
                   <span className="text-sm font-bold mr-1">R$</span>
                   <span className="text-5xl font-black tracking-tight">{plan.price.split(',')[0]}</span>
                   <span className="text-2xl font-bold">,{plan.price.split(',')[1]}</span>
                   <span className={`ml-1 text-xs uppercase font-bold tracking-wide ${plan.isPopular ? 'text-gray-500' : 'text-gray-400'}`}>{plan.period}</span>
                 </div>
              </div>

              <ul className="space-y-4 mb-10 flex-1 relative z-10">
                 {plan.features.map((feat, idx) => (
                   <li key={idx} className="flex items-center gap-3 text-sm font-medium">
                     <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${plan.isPopular ? 'bg-brand-neon/20 text-brand-neon' : 'bg-gray-100 text-brand-black'}`}>
                       <Check size={12} strokeWidth={3} />
                     </div>
                     <span className={plan.isPopular ? 'text-gray-300' : 'text-gray-600'}>{feat}</span>
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
                  w-full py-4 rounded-xl font-bold transition-all text-center block cursor-pointer relative z-10
                  ${plan.isPopular 
                    ? 'bg-brand-neon text-black hover:bg-[#b3e600]' 
                    : 'bg-brand-black text-white hover:bg-gray-800'}
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

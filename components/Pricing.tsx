"use client";

import React, { useState } from 'react';
import { Check, Star, Sparkles, ArrowRight } from 'lucide-react';

const plans = [
  {
    name: "Essencial",
    monthlyPrice: "499,90",
    yearlyPrice: "399,90",
    yearlyTotal: "4.798,80",
    period: "/mês",
    desc: "Para equipes enxutas e recrutamento ágil.",
    features: [
      "3 Vagas (Simultâneas)",
      "Análise Ilimitada de Currículos",
      "Exportação em PDF"
    ],
    isPopular: false,
    monthlyLink: "https://invoice.infinitepay.io/plans/velorh/fIPbnJ9j",
    yearlyLink: "https://invoice.infinitepay.io/plans/velorh/3csXVcCRLP",
    buttonText: "Começar agora"
  },
  {
    name: "Pro",
    monthlyPrice: "799,90",
    yearlyPrice: "664,92",
    yearlyTotal: "7.979,04",
    period: "/mês",
    desc: "Tração total para seu RH com mais vagas.",
    features: [
      "10 Vagas (Simultâneas)",
      "Análise Ilimitada de Currículos",
      "Ranking Automático"
    ],
    isPopular: true,
    tag: "Mais Popular",
    monthlyLink: "https://invoice.infinitepay.io/plans/velorh/T3K76HPHZ",
    yearlyLink: "https://invoice.infinitepay.io/plans/velorh/1UyFNCHNaJ",
    buttonText: "Assinar o Pro"
  },
  {
    name: "Enterprise",
    monthlyPrice: "A consultar",
    yearlyPrice: "A consultar",
    yearlyTotal: "",
    period: "",
    desc: "Solução sob medida para grandes operações.",
    features: [
      "Vagas Ilimitadas",
      "Análise Ilimitada de Currículos",
      "Integração via Webhook (n8n)",
      "Atendimento Prioritário"
    ],
    isPopular: false,
    monthlyLink: "#contato",
    yearlyLink: "#contato",
    buttonText: "Falar com vendas"
  }
];

export const Pricing: React.FC = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="py-16 lg:py-20 bg-[#111827] relative overflow-hidden">
      
      <div className="max-w-[95%] 2xl:max-w-[1200px] mx-auto px-6 relative z-10">
        
        {/* HEADER SECTION */}
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green/20 text-white text-sm font-semibold tracking-wide mb-6">
            <Sparkles size={16} />
            <span>Investimento</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6 leading-[1.1]">
            Preços simples. <span className="text-gray-500">Retorno imediato.</span>
          </h2>
          
          <p className="text-lg text-gray-500 font-medium leading-relaxed max-w-2xl mx-auto">
            Escolha o plano ideal para o momento da sua empresa. Sem taxas ocultas, cancele quando quiser.
          </p>
        </div>

        {/* BILLING TOGGLE */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <span className={`text-sm font-medium transition-colors ${!isYearly ? 'text-white' : 'text-gray-500'}`}>
            Mensal
          </span>
          <button
            onClick={() => setIsYearly(!isYearly)}
            className={`relative w-16 h-8 rounded-full transition-colors duration-300 ${isYearly ? 'bg-brand-green' : 'bg-gray-700'}`}
          >
            <div
              className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow-md transition-transform duration-300 ${isYearly ? 'translate-x-9' : 'translate-x-1'}`}
            />
          </button>
          <div className="flex items-center gap-2">
            <span className={`text-sm font-medium transition-colors ${isYearly ? 'text-white' : 'text-gray-500'}`}>
              Anual
            </span>
            <span className="px-2 py-1 bg-brand-green/20 text-brand-green text-xs font-bold rounded-full">
              -20%
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start max-w-6xl mx-auto">
          {plans.map((plan: any, i) => {
            const currentPrice = isYearly ? plan.yearlyPrice : plan.monthlyPrice;
            const currentLink = isYearly ? plan.yearlyLink : plan.monthlyLink;
            const isCustomPrice = currentPrice === "Personalizado" || currentPrice === "A consultar";
            
            return (
              <div 
                key={i}
                className={`
                  relative p-8 lg:p-10 rounded-[2rem] transition-all duration-500 flex flex-col h-full animate-fade-in-up
                  ${plan.isPopular 
                    ? 'bg-gray-800 text-white shadow-2xl shadow-brand-black/20 scale-100 md:scale-105 z-10 border border-brand-black' 
                    : 'bg-[#111827] text-white border border-gray-700 hover:shadow-xl hover:shadow-black/5'
                  }
                `}
                style={{ animationDelay: `${(i + 1) * 100}ms`, opacity: 0 }}
              >
                
                {plan.isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 bg-brand-green text-[#111827] shadow-md">
                    <Star size={12} className="fill-white" /> {plan.tag}
                  </div>
                )}

                <h3 className="text-2xl font-bold mb-2 mt-2">
                  {plan.name}
                </h3>
                <p className={`text-sm mb-8 font-medium h-10 ${plan.isPopular ? 'text-gray-300' : 'text-gray-500'}`}>{plan.desc}</p>
                
                <div className="mb-8 pb-8 border-b border-gray-700/20">
                   <div className="flex items-baseline">
                     {!isCustomPrice && <span className="text-sm font-bold mr-1">R$</span>}
                     <span className={`font-black tracking-tight ${isCustomPrice ? 'text-3xl' : 'text-5xl'}`}>{currentPrice}</span>
                     {plan.period && !isCustomPrice && <span className={`ml-1 text-sm font-bold tracking-wide ${plan.isPopular ? 'text-gray-400' : 'text-gray-500'}`}>{plan.period}</span>}
                   </div>
                   {isYearly && !isCustomPrice && (
                     <div className="mt-2 flex items-center gap-2">
                       <span className="text-xs text-gray-500 line-through">R$ {plan.monthlyPrice}/mês</span>
                       <span className="text-xs text-brand-green font-semibold">Economia de 20%</span>
                     </div>
                   )}
                   {isYearly && plan.yearlyTotal && (
                     <p className="text-xs text-gray-500 mt-1">
                       Total anual: R$ {plan.yearlyTotal}
                     </p>
                   )}
                </div>

                <ul className="space-y-4 mb-10 flex-1">
                   {plan.features.map((feat: string, idx: number) => (
                     <li key={idx} className="flex items-start gap-3 text-sm font-medium">
                       <div className={`w-5 h-5 mt-0.5 rounded-full flex items-center justify-center shrink-0 ${plan.isPopular ? 'bg-brand-green/20 text-brand-green' : 'bg-brand-green/20 text-white'}`}>
                         <Check size={12} strokeWidth={3} />
                       </div>
                       <span className={plan.isPopular ? 'text-gray-200' : 'text-gray-400'}>{feat}</span>
                     </li>
                   ))}
                </ul>

                <a 
                  href={currentLink}
                  className={`
                    w-full py-4 rounded-xl font-bold transition-all text-center flex items-center justify-center gap-2 group
                    ${plan.isPopular 
                      ? 'bg-brand-green text-[#111827] hover:bg-[#b3e600]' 
                      : 'bg-gray-800 text-white hover:bg-gray-700'}
                  `}
                >
                  {plan.buttonText}
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </a>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

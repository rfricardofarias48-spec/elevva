
import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Fernanda S.",
    role: "Talent Acquisition",
    text: "O ranking já me entrega os melhores e eu só foco na entrevista. Salvou minha rotina.",
    initial: "F"
  },
  {
    name: "Ricardo M.",
    role: "Diretor de RH",
    text: "Encontrou candidatos ótimos que minha equipe deixou passar por cansaço visual.",
    initial: "R"
  },
  {
    name: "Juliana K.",
    role: "Recrutadora Sênior",
    text: "Processo rápido e sem burocracia pra todo mundo. O link chega e o relatório já tá lá.",
    initial: "J"
  }
];

export const SocialProofSection: React.FC = () => {
  return (
    <section className="py-12 border-b border-gray-100 bg-white">
      <div className="max-w-[95%] 2xl:max-w-[1400px] mx-auto px-6">
        
        {/* Marquee Simples */}
        <div className="mb-10 overflow-hidden">
           <div className="flex gap-16 animate-marquee whitespace-nowrap opacity-40 grayscale">
              {Array(10).fill("TRUSTED BY INNOVATORS").map((txt, i) => (
                 <span key={i} className="text-4xl font-black italic tracking-tighter text-gray-300 select-none">{txt}</span>
              ))}
           </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-gray-50 border-2 border-transparent hover:border-black p-8 rounded-2xl transition-all duration-300 hover:shadow-neo group">
              <Quote className="text-brand-neon fill-black mb-6" size={40} />
              <p className="text-xl font-medium leading-relaxed mb-8">"{t.text}"</p>
              
              <div className="flex items-center gap-4">
                 <div className="w-12 h-12 bg-black text-brand-neon rounded-full flex items-center justify-center font-bold text-xl border-2 border-black group-hover:bg-brand-neon group-hover:text-black transition-colors">
                    {t.initial}
                 </div>
                 <div>
                    <h4 className="font-bold">{t.name}</h4>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wide">{t.role}</p>
                 </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

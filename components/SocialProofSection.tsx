
import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Fernanda S.",
    role: "Talent Acquisition",
    text: "O ranking já me entrega os melhores e eu só foco na entrevista. Salvou minha rotina.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80"
  },
  {
    name: "Ricardo M.",
    role: "Diretor de RH",
    text: "Encontrou candidatos ótimos que minha equipe deixou passar por cansaço visual.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
  },
  {
    name: "Juliana K.",
    role: "Recrutadora Sênior",
    text: "Processo rápido e sem burocracia pra todo mundo. O link chega e o relatório já tá lá.",
    image: "https://images.unsplash.com/photo-1598550832205-d41fcd7504bf?auto=format&fit=crop&w=200&q=80"
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
                 <div className="w-14 h-14 rounded-full border-2 border-black overflow-hidden shrink-0 group-hover:border-brand-neon transition-colors">
                    <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                 </div>
                 <div>
                    <h4 className="font-bold text-lg leading-tight">{t.name}</h4>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wide">{t.role}</p>
                 </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

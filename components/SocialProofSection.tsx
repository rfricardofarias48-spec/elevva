
import React from 'react';
import { Quote, Sparkles } from 'lucide-react';

const testimonials = [
  {
    name: "Camila Ferreira",
    role: "Gerente de RH",
    text: "Reduzimos o tempo de triagem em 70%. A Elevva resolve em minutos o que levava dias.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=200&q=80"
  },
  {
    name: "Roberto Almeida",
    role: "Diretor Comercial",
    text: "Contratamos 10 pessoas em 20 dias. O ranking automático facilitou muito a escolha.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80"
  },
  {
    name: "Juliana Mendes",
    role: "Analista de RH",
    text: "Muito intuitivo. Criei a vaga, divulguei o link e os melhores candidatos apareceram no topo.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80"
  }
];

export const SocialProofSection: React.FC = () => {
  return (
    <section id="social-proof" className="pt-8 pb-16 lg:pt-12 lg:pb-24 bg-transparent relative overflow-hidden">
      
      <div className="max-w-[95%] 2xl:max-w-[1200px] mx-auto px-6 relative z-10">
        
        {/* HEADER SECTION */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-brand-black mb-6 leading-[1.1]">
            Quem usa, <br className="hidden md:block"/>
            <span className="text-gray-400">recomenda.</span>
          </h2>
          
          <p className="text-lg text-gray-500 font-medium leading-relaxed">
            Junte-se a centenas de recrutadores que já transformaram suas operações com a Elevva.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white border border-gray-100 p-8 md:p-10 rounded-[2rem] shadow-xl shadow-gray-200/50 flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-gray-200/80 group">
              <div>
                <Quote className="text-brand-neon fill-brand-neon/20 mb-6" size={32} />
                <p className="text-lg text-gray-600 font-medium leading-relaxed mb-8">"{t.text}"</p>
              </div>
              
              <div className="flex items-center gap-4 mt-auto">
                 <div className="w-12 h-12 rounded-full border-2 border-white shadow-md overflow-hidden shrink-0 group-hover:border-brand-neon transition-colors">
                    <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                 </div>
                 <div>
                    <h4 className="font-bold text-brand-black leading-tight">{t.name}</h4>
                    <p className="text-xs font-medium text-gray-500">{t.role}</p>
                 </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

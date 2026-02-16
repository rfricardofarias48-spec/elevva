
import React from 'react';
import { Sliders, UploadCloud, ListOrdered, UserCheck, ArrowRight } from 'lucide-react';

const features = [
  {
    icon: <Sliders size={24} />,
    title: "Otimização de Processos",
    desc: "Adeus, pilhas desorganizadas. A IA lê centenas de arquivos, atribui uma nota técnica e coloca a fila em ordem exata de competência. Do candidato ideal ao menos compatível, instantaneamente.",
    highlight: "Processos",
    variant: "gray"
  },
  {
    icon: <ListOrdered size={24} />,
    title: "Ranking Automático",
    desc: "Lista ordenada por competência. Os melhores candidatos aparecem no topo instantaneamente.",
    highlight: "Automático",
    variant: "neon"
  },
  {
    icon: <UploadCloud size={24} />,
    title: "Upload em Massa",
    desc: "Arraste pastas inteiras. Processamos centenas de PDFs simultaneamente em segundos.",
    highlight: "Massa",
    variant: "gray"
  },
  {
    icon: <UserCheck size={24} />,
    title: "Decisão Rápida",
    desc: "Resumos executivos mastigados para você decidir sem precisar ler textos longos e genéricos.",
    highlight: "Rápida",
    variant: "gray"
  }
];

export const Features: React.FC = () => {
  return (
    <section id="standards" className="py-16 bg-white relative">
      <div className="max-w-[95%] 2xl:max-w-[1400px] mx-auto px-6">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 mb-10 lg:mb-16">
          
          <div className="flex-1">
             <div className="inline-block bg-brand-neon px-4 py-1 rounded-lg transform -skew-x-6 mb-2">
                <span className="text-xl md:text-2xl font-black uppercase tracking-tight transform skew-x-6 inline-block">Funcionalidades</span>
             </div>
             <h2 className="text-4xl md:text-5xl font-black tracking-tighter mt-4">
                Potência máxima <br/>
                para seu RH.
             </h2>
          </div>

        </div>

        {/* GRID DE CARDS */}
        <div className="grid md:grid-cols-2 gap-8">
           
           {features.map((feature, idx) => (
             <div 
               key={idx} 
               className={`
                 relative p-10 rounded-[32px] border-2 border-black min-h-[320px] flex flex-col justify-between transition-all duration-300 hover:shadow-neo hover:-translate-y-1
                 ${feature.variant === 'neon' ? 'bg-brand-neon' : 'bg-brand-gray'}
               `}
             >
                {/* Icon & Title Group */}
                <div>
                   <div className={`
                      w-14 h-14 rounded-xl border border-black flex items-center justify-center mb-8 shadow-neo-sm
                      ${feature.variant === 'neon' ? 'bg-white' : 'bg-white'}
                   `}>
                      {feature.icon}
                   </div>
                   
                   <h3 className="text-3xl font-bold leading-tight mb-4 tracking-tight">
                     {feature.title.split(' ').map((word, i) => {
                        const isHighlight = word.includes(feature.highlight);
                        return (
                           <span key={i} className={feature.variant === 'gray' && i === 0 ? "bg-brand-neon px-1 rounded mr-2" : "mr-2"}>
                              {word}
                           </span>
                        )
                     })}
                   </h3>
                </div>

                {/* Description & Action */}
                <div className="mt-auto">
                   <p className={`text-lg leading-relaxed font-medium mb-8 ${feature.variant === 'neon' ? 'text-black/90' : 'text-gray-600'}`}>
                      {feature.desc}
                   </p>

                   {feature.variant === 'neon' ? (
                      <a href="#pricing" className="bg-black text-white px-8 py-4 rounded-xl inline-flex items-center gap-2 font-bold text-base cursor-pointer hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl">
                         Começar Agora <ArrowRight size={20} />
                      </a>
                   ) : (
                      <a href="#pricing" className="inline-flex items-center gap-2 font-black text-sm uppercase tracking-wide cursor-pointer group hover:text-brand-600 transition-colors border-b-2 border-black pb-1 hover:border-brand-600">
                         Teste agora <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </a>
                   )}
                </div>
                
                {/* Decorative Element for Gray Cards */}
                {feature.variant === 'gray' && (
                   <div className="absolute bottom-8 right-8 text-5xl font-black text-gray-200 select-none opacity-40 hidden sm:block">
                      $$$
                   </div>
                )}

             </div>
           ))}

        </div>

      </div>
    </section>
  );
};

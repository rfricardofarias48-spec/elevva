
import React from 'react';
import { Sliders, UploadCloud, ListOrdered, UserCheck, ArrowRight, Sparkles } from 'lucide-react';

const features = [
  {
    icon: <Sliders size={24} />,
    title: "Você define, a IA executa",
    desc: "Crie seus próprios critérios de avaliação. A IA lê centenas de currículos e aplica suas regras para encontrar o candidato ideal.",
    highlight: "Processos",
    variant: "white"
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
    variant: "white"
  },
  {
    icon: <UserCheck size={24} />,
    title: "Decisão Rápida",
    desc: "Resumos executivos mastigados para você decidir sem precisar ler textos longos e genéricos.",
    highlight: "Rápida",
    variant: "white"
  }
];

export const Features: React.FC = () => {

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="features" className="pt-16 pb-8 lg:pt-24 lg:pb-12 bg-white relative overflow-hidden">
      
      <div className="max-w-[95%] 2xl:max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* HEADER SECTION */}
        <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-brand-black mb-6 leading-[1.1]">
            Potência máxima <br className="hidden md:block"/>
            <span className="text-gray-400">para seu RH.</span>
          </h2>
          <p className="text-lg text-gray-500 font-medium leading-relaxed">
            Nossa plataforma foi desenhada para eliminar o trabalho manual e focar no que realmente importa: encontrar o talento certo.
          </p>
        </div>

        {/* GRID DE CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
           
           {features.map((feature, idx) => (
             <div 
               key={idx} 
               className="group relative p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col min-h-[260px]"
             >
                <div className="flex items-start justify-between mb-6">
                   {/* Icon Container */}
                   <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center border border-gray-100 text-brand-black">
                      {React.cloneElement(feature.icon as React.ReactElement, { size: 24 })}
                   </div>
                   
                   {/* Static Detail - Green Dot */}
                   <div className="w-2 h-2 rounded-full bg-brand-neon"></div>
                </div>
                
                <div className="mt-auto">
                    <h3 className="text-lg font-bold text-brand-black mb-3 tracking-tight">
                    {feature.title}
                    </h3>

                    <p className="text-gray-500 text-sm leading-relaxed">
                    {feature.desc}
                    </p>
                </div>
             </div>
           ))}

        </div>

      </div>
    </section>
  );
};


import React from 'react';
import { Search, CheckCircle2, BarChart3, ArrowRight } from 'lucide-react';

export const ProductShowcase: React.FC = () => {
  
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
    <section id="showcase" className="py-12 lg:py-24 bg-white relative overflow-hidden">
      <div className="max-w-[95%] 2xl:max-w-[1400px] mx-auto px-6 relative z-10">
        
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left: Content */}
          <div className="w-full lg:w-1/2">
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-brand-black mb-8 leading-[1.1] tracking-tight">
              Muito além da <br/>
              <span className="text-gray-400">palavra-chave.</span>
            </h2>
            
            <p className="text-lg text-gray-500 font-medium mb-10 leading-relaxed">
              Você no controle. A Elevva analisa cada candidato seguindo estritamente os critérios que você definiu, indo muito além da busca por palavras-chave.
            </p>

            <div className="mb-10">
              <a 
                href="https://app.elevva.net.br/login" 
                className="inline-flex px-8 py-4 bg-brand-neon text-brand-black rounded-full font-bold text-lg transition-all items-center gap-3 justify-center hover:shadow-lg hover:scale-105 active:scale-95"
              >
                Teste Agora
                <ArrowRight size={20} />
              </a>
            </div>

            <div className="space-y-6">
              {[
                { title: "Critérios Personalizados", desc: "A IA segue as regras, pesos e requisitos obrigatórios que você estipular para a vaga." },
                { title: "Relatórios Detalhados", desc: "Não entregamos apenas um ranking. Você recebe um dossiê completo individual e coletivo dos candidatos." },
                { title: "Contexto Semântico", desc: "Entende que 'Liderar equipe' e 'Gestão de pessoas' são similares." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center flex-shrink-0 border border-gray-100 text-brand-neon">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-black text-lg">{item.title}</h4>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual Representation */}
          <div className="w-full lg:w-1/2 relative">
             <div className="relative bg-brand-black rounded-[2.5rem] p-8 md:p-12 shadow-2xl overflow-hidden">
                {/* Background Grid */}
                <div className="absolute inset-0 opacity-20" 
                     style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
                </div>
                
                {/* Floating Card - Candidate Score */}
                <div className="relative z-10 bg-white rounded-2xl p-6 shadow-xl mb-6 transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
                   <div className="flex justify-between items-center mb-4">
                      <div className="flex items-center gap-3">
                         <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                            <img src="https://i.pravatar.cc/150?img=32" alt="Candidate" className="w-full h-full object-cover" />
                         </div>
                         <div>
                            <h4 className="font-bold text-brand-black">Mariana Silva</h4>
                            <p className="text-xs text-gray-500">Senior Product Designer</p>
                         </div>
                      </div>
                      <div className="text-right">
                         <div className="text-3xl font-black text-brand-neon">98%</div>
                         <div className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Match Score</div>
                      </div>
                   </div>
                   
                   <div className="space-y-2">
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                         <div className="h-full bg-brand-neon w-[98%]"></div>
                      </div>
                      <div className="flex justify-between text-xs font-medium text-gray-500">
                         <span>Experiência: 8 anos</span>
                         <span>Gestão: 3 anos</span>
                      </div>
                   </div>
                </div>

                {/* Floating Card - Skills */}
                <div className="relative z-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-xl transform translate-x-4">
                   <h5 className="text-white font-bold mb-4 flex items-center gap-2">
                      <BarChart3 size={18} className="text-brand-neon" /> Análise de Skills
                   </h5>
                   <div className="flex flex-wrap gap-2">
                      {['Figma', 'Design System', 'Prototipagem', 'React', 'Liderança'].map(skill => (
                         <span key={skill} className="px-3 py-1 rounded-full bg-white/10 text-white text-xs border border-white/10">
                            {skill}
                         </span>
                      ))}
                   </div>
                </div>

             </div>
             
             {/* Decorative Elements */}
             <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-neon rounded-full blur-[80px] opacity-50 pointer-events-none"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

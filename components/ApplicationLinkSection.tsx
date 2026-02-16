
import React from 'react';
import { Copy, CheckCircle2, ArrowRight, Smartphone } from 'lucide-react';

export const ApplicationLinkSection: React.FC = () => {
  return (
    <section id="application-link" className="py-16 md:py-24 relative bg-white overflow-hidden">
      
      {/* Abstract Shape Background */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[40%] h-[120%] bg-brand-gray -skew-x-12 z-0 hidden lg:block border-l-2 border-black"></div>

      <div className="max-w-[95%] 2xl:max-w-[1400px] mx-auto px-6 relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* --- LEFT: RECRUITER FLOW (The Link) --- */}
          <div className="flex flex-col items-start">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-black text-brand-neon text-xs font-bold uppercase tracking-wider mb-6">
               <Smartphone size={14} /> Mobile Friendly
            </div>

            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-black mb-8 leading-[0.9] tracking-tighter">
              UM LINK.<br/>
              ZERO ATRITO.
            </h2>
            
            <p className="text-xl text-gray-600 font-bold mb-10 max-w-lg leading-tight">
               Você cria a vaga, copia o link e espalha. O candidato aplica pelo celular em 1 minuto. Sem logins, sem cadastros longos.
            </p>

            {/* THE MAGIC LINK CARD */}
            <div className="w-full max-w-md bg-white rounded-2xl border-2 border-black p-2 shadow-neo-lg transform -rotate-1 mb-10 transition-transform hover:rotate-0">
               <div className="bg-gray-100 rounded-xl border border-gray-200 p-4 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3 overflow-hidden">
                     <div className="w-10 h-10 bg-white rounded-lg border border-gray-200 flex items-center justify-center shrink-0">
                        <span className="font-black text-lg">🔗</span>
                     </div>
                     <div className="flex flex-col min-w-0">
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Link da Vaga</span>
                        <span className="text-sm font-bold text-black truncate">elevva.com.br/v/designer-senior</span>
                     </div>
                  </div>
                  <button className="px-4 py-2 bg-black text-white rounded-lg font-bold text-xs hover:bg-brand-neon hover:text-black transition-colors shrink-0 flex items-center gap-2">
                     <Copy size={14} /> <span className="hidden sm:inline">Copiar</span>
                  </button>
               </div>
            </div>

            <div className="flex flex-col gap-4 w-full max-w-sm">
               {[
                  "Divulgue no LinkedIn, WhatsApp ou Instagram.",
                  "Candidato envia PDF direto do celular.",
                  "Ranking atualiza automaticamente no seu painel."
               ].map((step, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm font-bold text-gray-700">
                     <CheckCircle2 className="text-brand-neon fill-black shrink-0" size={20} />
                     {step}
                  </div>
               ))}
            </div>

          </div>


          {/* --- RIGHT: CANDIDATE FLOW (Mobile Mockup) --- */}
          <div className="flex items-center justify-center lg:justify-end relative">
             
             {/* Decorative Arrow (Only large screens) */}
             <svg className="absolute top-10 left-0 w-32 h-32 text-black z-20 hidden lg:block transform -translate-x-1/2 rotate-12" viewBox="0 0 100 100">
                <path d="M10,50 Q50,10 90,50" fill="none" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrowhead)" />
                <defs>
                   <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                      <polygon points="0 0, 10 3.5, 0 7" fill="currentColor" />
                   </marker>
                </defs>
             </svg>

             {/* PHONE MOCKUP (CSS Only) */}
             <div className="relative w-full max-w-[300px] h-[580px] md:h-[600px] bg-black rounded-[3rem] border-4 border-gray-800 shadow-2xl p-2 z-10 transform rotate-3 hover:rotate-0 transition-duration-500">
                
                {/* Screen */}
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative flex flex-col">
                   
                   {/* Notch/Status Bar */}
                   <div className="h-8 w-full bg-white flex justify-between items-center px-6 pt-2">
                      <span className="text-[10px] font-bold">9:41</span>
                      <div className="flex gap-1">
                         <div className="w-3 h-3 bg-black rounded-full"></div>
                         <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                      </div>
                   </div>

                   {/* App Header */}
                   <div className="px-6 py-4 border-b border-gray-100">
                      <div className="flex items-center gap-2 mb-2">
                         <div className="w-6 h-6 bg-black rounded flex items-center justify-center text-white text-[10px] font-black">E.</div>
                         <span className="font-bold text-sm">Elevva Recrutamento</span>
                      </div>
                      <h3 className="font-black text-xl leading-tight">Senior Product Designer</h3>
                      <div className="flex gap-2 mt-2">
                         <span className="px-2 py-0.5 bg-gray-100 rounded text-[10px] font-bold text-gray-600">Remoto</span>
                         <span className="px-2 py-0.5 bg-gray-100 rounded text-[10px] font-bold text-gray-600">CLT</span>
                      </div>
                   </div>

                   {/* Upload Area */}
                   <div className="p-6 flex-1 flex flex-col justify-center">
                      <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center bg-gray-50 mb-6">
                         <div className="w-12 h-12 bg-white rounded-full mx-auto mb-3 flex items-center justify-center border border-gray-200 shadow-sm">
                            <span className="text-xl">📄</span>
                         </div>
                         <p className="text-xs font-bold text-gray-400 mb-2">Toque para buscar seu CV</p>
                         <button className="w-full py-2 bg-white border border-black rounded-lg text-xs font-black hover:bg-black hover:text-white transition-colors">
                            Selecionar Arquivo (PDF)
                         </button>
                      </div>

                      {/* Fake Form Fields */}
                      <div className="space-y-3 mb-6">
                         <div className="h-10 bg-gray-100 rounded-lg w-full"></div>
                         <div className="h-10 bg-gray-100 rounded-lg w-full"></div>
                      </div>

                      <button className="w-full py-3 bg-brand-neon text-black rounded-xl font-black text-sm border-2 border-black shadow-neo-sm hover:shadow-none hover:translate-x-[1px] hover:translate-y-[1px] transition-all">
                         Enviar Candidatura
                      </button>
                   </div>

                   {/* Success Toast (Absolute) */}
                   <div className="absolute bottom-6 left-4 right-4 bg-black text-white p-3 rounded-lg shadow-lg flex items-center gap-3 animate-float border border-brand-neon">
                      <CheckCircle2 size={18} className="text-brand-neon" />
                      <div className="flex-1">
                         <p className="text-xs font-bold">Currículo Enviado!</p>
                         <p className="text-[10px] text-gray-400">Boa sorte 🍀</p>
                      </div>
                   </div>

                </div>
             </div>

          </div>

        </div>
      </div>
    </section>
  );
};

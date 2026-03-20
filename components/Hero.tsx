
import React from 'react';
import { ChevronRight, Sparkles, Play } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#111827] text-white">
      {/* Dynamic Background Glows */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-brand-green/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none"></div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-green/10 border border-brand-green/20 backdrop-blur-md mb-8 animate-fade-in-up" style={{ opacity: 0 }}>
            <Sparkles size={14} className="text-brand-green" />
            <span className="text-xs font-semibold text-white uppercase tracking-widest">
              Recrutamento Autogerido
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-sans font-black text-white mb-8 tracking-tighter leading-[1.05] max-w-5xl animate-fade-in-up" style={{ animationDelay: '100ms', opacity: 0 }}>
            A IA que <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-500">revoluciona</span> o seu recrutamento.
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed font-medium animate-fade-in-up" style={{ animationDelay: '200ms', opacity: 0 }}>
            Conheça o Bento, nosso agente de IA capaz de atender candidatos via WhatsApp, analisar currículos, qualificar via plataforma completa e agendar entrevistas direto no seu <span className="text-white font-bold">Google Agenda</span>.
          </p>

          {/* CTA Area */}
          <div className="flex flex-col sm:flex-row items-center gap-4 animate-fade-in-up" style={{ animationDelay: '300ms', opacity: 0 }}>
            <a 
              href="https://app.elevva.net.br/register" 
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-green text-[#111827] rounded-full font-bold text-lg transition-all hover:bg-[#b3e600] hover:scale-105 hover:shadow-[0_0_40px_rgba(34,197,94,0.3)] active:scale-95 w-full sm:w-auto"
            >
              Começar gratuitamente
              <ChevronRight size={20} className="ml-2" />
            </a>
            
            <button className="inline-flex items-center justify-center px-8 py-4 bg-[#111827] text-white border border-gray-700 rounded-full font-bold text-lg transition-all hover:bg-gray-900 hover:shadow-lg w-full sm:w-auto backdrop-blur-md group">
              <Play size={18} className="mr-2 fill-white group-hover:text-brand-green group-hover:fill-brand-green transition-colors" />
              Ver demonstração
            </button>
          </div>

          {/* Dashboard Preview Mockup */}
          <div className="mt-20 w-full max-w-7xl relative animate-fade-in-up" style={{ animationDelay: '400ms', opacity: 0 }}>
            <div className="relative rounded-2xl md:rounded-[2rem] border border-gray-700 bg-[#111827] shadow-2xl overflow-hidden">
              {/* Browser Chrome */}
              <div className="h-12 border-b border-gray-800 flex items-center px-6 gap-2 bg-gray-900">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              {/* Mockup Content */}
              <div className="aspect-[16/9] flex items-center justify-center relative overflow-hidden">
                 <img 
                   src="https://ik.imagekit.io/xsbrdnr0y/imagem%20tela%20.png" 
                   alt="Dashboard Elevva" 
                   className="w-full h-full object-cover object-top"
                 />
              </div>
            </div>
          </div>

          {/* Social Proof Logos */}
          <div className="mt-12 pt-12 border-t border-gray-700 w-full max-w-4xl flex flex-col items-center relative z-30">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-8">
              Empresas inovadoras confiam na Elevva
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              <span className="text-xl font-bold font-serif tracking-tighter">Notion</span>
              <span className="text-xl font-bold tracking-tight">salesforce</span>
              <span className="text-xl font-bold font-serif tracking-widest">HARVARD</span>
              <span className="text-xl font-bold tracking-tighter">HubSpot</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

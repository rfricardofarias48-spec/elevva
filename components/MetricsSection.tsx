import React from 'react';
import { Timer, Users, CalendarCheck } from 'lucide-react';

export const MetricsSection: React.FC = () => {
  return (
    <section id="roi" className="py-20 lg:py-32 bg-[#111827] text-white relative overflow-hidden">
      
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-green/10 blur-[120px] rounded-full"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-green/5 blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-[95%] 2xl:max-w-[1200px] mx-auto px-6 relative z-10">
        
        <div className="text-center max-w-4xl mx-auto mb-16 lg:mb-24">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.1] tracking-tight text-white">
            O que acontece quando a Elevva <br className="hidden md:block"/>
            <span className="text-brand-green">assume a operação?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Metric 1 */}
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-[2rem] border border-white/10 hover:bg-white/10 transition-colors duration-300">
            <div className="w-16 h-16 bg-brand-green/20 rounded-2xl flex items-center justify-center mb-8">
              <Timer className="text-brand-green" size={32} />
            </div>
            <div className="text-5xl font-black text-brand-green mb-4 tracking-tighter">- 85%</div>
            <h3 className="text-xl font-bold text-white mb-2">Tempo de Triagem Inicial</h3>
            <p className="text-gray-400 font-medium leading-relaxed">
              Redução drástica no Time-to-Screen, acelerando o processo seletivo.
            </p>
          </div>

          {/* Metric 2 */}
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-[2rem] border border-white/10 hover:bg-white/10 transition-colors duration-300">
            <div className="w-16 h-16 bg-brand-green/20 rounded-2xl flex items-center justify-center mb-8">
              <CalendarCheck className="text-brand-green" size={32} />
            </div>
            <div className="text-5xl font-black text-brand-green mb-4 tracking-tighter">+ 60%</div>
            <h3 className="text-xl font-bold text-white mb-2">Taxa de Comparecimento</h3>
            <p className="text-gray-400 font-medium leading-relaxed">
              Redução de no-shows nas entrevistas graças à qualificação ativa via WhatsApp.
            </p>
          </div>

          {/* Metric 3 */}
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-[2rem] border border-white/10 hover:bg-white/10 transition-colors duration-300">
            <div className="w-16 h-16 bg-brand-green/20 rounded-2xl flex items-center justify-center mb-8">
              <Users className="text-brand-green" size={32} />
            </div>
            <div className="text-5xl font-black text-brand-green mb-4 tracking-tighter">40h</div>
            <h3 className="text-xl font-bold text-white mb-2">Devolvidas à Equipa</h3>
            <p className="text-gray-400 font-medium leading-relaxed">
              Horas semanais libertadas para focar em retenção e estratégia de Employer Branding.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

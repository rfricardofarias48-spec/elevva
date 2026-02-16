import React from 'react';
import { Target, Users2, Award } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-brand-ice text-brand-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <span className="text-brand-600 font-bold tracking-wide uppercase text-sm mb-2 block">Quem Somos</span>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6 leading-tight">
              Revolucionando o RH com tecnologia de ponta
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              A Elevva nasceu da necessidade de agilidade em processos seletivos massivos. Somos uma equipe de engenheiros de IA e especialistas em Recursos Humanos unidos por um propósito: devolver o tempo estratégico aos recrutadores.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Acreditamos que a tecnologia não substitui o fator humano, mas o potencializa. Nossa plataforma remove o trabalho braçal de leitura de currículos, permitindo que você foque nas pessoas.
            </p>

            <div className="grid sm:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <Target className="text-brand-600 mb-3" size={32} />
                <h4 className="font-bold text-xl mb-1">+1M</h4>
                <p className="text-sm text-gray-500">CVs Analisados</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <Users2 className="text-brand-600 mb-3" size={32} />
                <h4 className="font-bold text-xl mb-1">500+</h4>
                <p className="text-sm text-gray-500">Empresas Ativas</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <Award className="text-brand-600 mb-3" size={32} />
                <h4 className="font-bold text-xl mb-1">99.8%</h4>
                <p className="text-sm text-gray-500">Precisão</p>
              </div>
            </div>
          </div>

          <div className="relative">
             <div className="absolute -inset-4 bg-brand-200/50 rounded-[2rem] transform rotate-3 blur-lg"></div>
             <img 
               src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
               alt="Equipe Elevva" 
               className="relative rounded-[2rem] shadow-2xl w-full object-cover h-[600px]"
             />
             <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white">
                <p className="text-brand-dark font-medium italic">
                  "A Elevva transformou nossa operação. O que levava 3 dias, agora fazemos em 20 minutos."
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-10 h-10 bg-brand-900 rounded-full flex items-center justify-center text-white font-bold">D</div>
                  <div>
                    <p className="text-sm font-bold text-brand-dark">Diretor de RH</p>
                    <p className="text-xs text-gray-500">Multinacional de Tecnologia</p>
                  </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};
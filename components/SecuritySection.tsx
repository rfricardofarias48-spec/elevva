import React from 'react';
import { ShieldCheck, Lock, Server, Fingerprint, FileCheck, EyeOff } from 'lucide-react';

export const SecuritySection: React.FC = () => {
  return (
    <section id="security" className="py-16 lg:py-20 bg-[#111827] text-white relative overflow-hidden border-t border-white/5">
      {/* Decorative background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-green/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-brand-green text-sm font-bold mb-8 backdrop-blur-sm">
            <ShieldCheck size={18} />
            <span>Segurança de Nível Empresarial</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight leading-tight">
            Fortaleza Digital. <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-400">Privacidade Absoluta.</span>
          </h2>
          
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
            Seus dados e os dos seus candidatos estão protegidos por uma infraestrutura de nível bancário. Operamos com arquitetura isolada e criptografia avançada, garantindo conformidade total com a LGPD e padrões globais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in-up" style={{ animationDelay: '200ms', opacity: 0 }}>
          
          {/* Card 1 */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors duration-300 group">
            <div className="w-14 h-14 rounded-2xl bg-brand-green/20 flex items-center justify-center text-brand-green mb-6 group-hover:scale-110 transition-transform duration-300">
              <Lock size={28} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Criptografia de Ponta</h3>
            <p className="text-gray-400 leading-relaxed font-medium">
              Todos os dados são criptografados em trânsito (TLS 1.3) e em repouso (AES-256). Ninguém, além de você, tem acesso às informações sensíveis.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors duration-300 group">
            <div className="w-14 h-14 rounded-2xl bg-brand-green/20 flex items-center justify-center text-brand-green mb-6 group-hover:scale-110 transition-transform duration-300">
              <Server size={28} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Infraestrutura Isolada</h3>
            <p className="text-gray-400 leading-relaxed font-medium">
              Arquitetura Multi-Tenant com isolamento lógico de dados. Hospedagem premium na AWS com redundância e backups automáticos diários.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors duration-300 group">
            <div className="w-14 h-14 rounded-2xl bg-brand-green/20 flex items-center justify-center text-brand-green mb-6 group-hover:scale-110 transition-transform duration-300">
              <FileCheck size={28} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Conformidade LGPD</h3>
            <p className="text-gray-400 leading-relaxed font-medium">
              Nossos processos e sistemas foram desenhados desde o primeiro dia (Privacy by Design) para atender 100% aos requisitos da LGPD e GDPR.
            </p>
          </div>

        </div>

        {/* Trust Badges */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="flex items-center gap-3">
            <ShieldCheck size={32} className="text-brand-green" />
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-widest text-white">AICPA</span>
              <span className="text-xl font-black text-white leading-none">SOC 2</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Lock size={32} className="text-brand-green" />
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-widest text-white">COMPLIANT</span>
              <span className="text-xl font-black text-white leading-none">LGPD</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Fingerprint size={32} className="text-brand-green" />
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-widest text-white">READY</span>
              <span className="text-xl font-black text-white leading-none">GDPR</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <EyeOff size={32} className="text-brand-green" />
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-widest text-white">PRIVACY</span>
              <span className="text-xl font-black text-white leading-none">BY DESIGN</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

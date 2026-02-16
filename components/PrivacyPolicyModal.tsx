import React from 'react';
import { X, Shield, Lock, Eye, FileText } from 'lucide-react';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="bg-white w-full max-w-3xl max-h-[85vh] rounded-2xl shadow-2xl relative z-10 flex flex-col overflow-hidden animate-[float_0.3s_ease-out]">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-brand-50 rounded-lg text-brand-600">
              <Shield size={20} />
            </div>
            <h2 className="text-xl font-bold text-gray-800">Política de Privacidade</h2>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-200 rounded-full transition-colors text-gray-500 hover:text-gray-700"
          >
            <X size={20} />
          </button>
        </div>

        {/* Scrollable Text Area */}
        <div className="p-6 md:p-8 overflow-y-auto text-gray-600 leading-relaxed text-sm md:text-base space-y-6">
          
          <div className="p-4 bg-brand-50 rounded-xl border border-brand-100 mb-6">
            <p className="text-brand-800 font-medium text-sm flex gap-2">
              <Lock size={16} className="shrink-0 mt-0.5" />
              Na Elevva, a segurança dos dados dos candidatos e das empresas é nossa prioridade absoluta. Seguimos rigorosamente a LGPD (Lei Geral de Proteção de Dados).
            </p>
          </div>

          <section>
            <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
              1. Coleta de Informações
            </h3>
            <p>
              Coletamos informações que você nos fornece diretamente ao utilizar nossa plataforma, principalmente através do upload de currículos (PDF) e descrições de vagas. Os dados extraídos podem incluir: nome, contato, histórico profissional, formação acadêmica e competências técnicas.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
              2. Uso de Inteligência Artificial
            </h3>
            <p>
              Utilizamos a API Google Gemini (GenAI) para processar e analisar os currículos. 
              <br/><br/>
              <strong>Como funciona:</strong> O texto do currículo é enviado de forma criptografada para análise, onde a IA extrai pontos fortes, fracos e calcula a compatibilidade com a vaga. 
              <br/>
              <strong>Importante:</strong> Os dados dos currículos <u>não</u> são utilizados para treinar os modelos públicos da IA.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
              3. Armazenamento e Segurança
            </h3>
            <p>
              Implementamos medidas técnicas e organizacionais para proteger seus dados contra acesso não autorizado. Utilizamos criptografia TLS 1.2+ em trânsito e criptografia AES-256 em repouso. O acesso aos relatórios é restrito exclusivamente à conta da empresa contratante.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
              4. Cookies e Tecnologias de Rastreamento
            </h3>
            <p>
              Utilizamos cookies essenciais para o funcionamento do site (como manter seu login ativo) e cookies analíticos para entender como nossa plataforma é utilizada e melhorar a experiência do usuário. Você pode gerenciar suas preferências a qualquer momento.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
              5. Seus Direitos (LGPD)
            </h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Acesso aos dados: Você pode solicitar cópia dos seus dados processados.</li>
              <li>Correção: Solicitar a correção de dados incompletos ou inexatos.</li>
              <li>Exclusão: Solicitar a eliminação dos dados pessoais tratados, exceto nas hipóteses previstas em lei.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
              6. Contato
            </h3>
            <p>
              Para exercer seus direitos ou tirar dúvidas sobre esta política, entre em contato com nosso Encarregado de Proteção de Dados (DPO) através do e-mail: <a href="mailto:privacidade@elevva.com.br" className="text-brand-600 hover:underline">privacidade@elevva.com.br</a>.
            </p>
          </section>
          
          <div className="pt-6 border-t border-gray-100 text-xs text-gray-400">
            Última atualização: Fevereiro de 2025. Elevva Tecnologia Ltda. Porto Alegre/RS.
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-gray-50 border-t border-gray-100 flex justify-end">
          <button 
            onClick={onClose}
            className="px-6 py-2.5 bg-brand-600 hover:bg-brand-700 text-white font-bold rounded-lg transition-colors shadow-lg shadow-brand-600/20"
          >
            Entendido
          </button>
        </div>

      </div>
    </div>
  );
};
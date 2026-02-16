import React from 'react';
import { X, FileText, Scale, AlertCircle } from 'lucide-react';

interface TermsOfUseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TermsOfUseModal: React.FC<TermsOfUseModalProps> = ({ isOpen, onClose }) => {
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
              <Scale size={20} />
            </div>
            <h2 className="text-xl font-bold text-gray-800">Termos de Uso</h2>
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
          
          <div className="p-4 bg-brand-50 rounded-xl border border-brand-100 mb-6 flex gap-3 items-start">
             <AlertCircle size={20} className="text-brand-600 mt-0.5 shrink-0" />
             <p className="text-brand-800 font-medium text-sm">
               Ao utilizar a Elevva, você reconhece que a Inteligência Artificial é uma ferramenta de apoio à decisão, e não uma substituta do julgamento humano final.
             </p>
          </div>

          <section>
            <h3 className="text-lg font-bold text-gray-900 mb-3">1. Aceitação dos Termos</h3>
            <p>
              Ao acessar e utilizar a plataforma Elevva ("Serviço"), você concorda em cumprir estes Termos de Uso. Se você estiver usando o Serviço em nome de uma empresa, você declara ter autoridade para vincular essa entidade a estes termos.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-gray-900 mb-3">2. Descrição do Serviço</h3>
            <p>
              A Elevva fornece uma ferramenta baseada em Inteligência Artificial (API Google Gemini) para análise, resumo e ranqueamento de currículos profissionais baseados em descrições de vagas fornecidas pelo usuário.
            </p>
            <p className="mt-2 text-sm italic">
              *A Elevva não garante a contratação de candidatos, nem a veracidade das informações contidas nos currículos processados.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-gray-900 mb-3">3. Uso Responsável e Dados (LGPD)</h3>
            <p>
              Você (o Contratante) atua como o <strong>Controlador</strong> dos dados pessoais dos candidatos inseridos na plataforma. A Elevva atua como <strong>Operadora</strong>.
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Você declara ter base legal (como consentimento ou legítimo interesse) para processar os currículos que envia à plataforma.</li>
              <li>É proibido usar a plataforma para discriminação de qualquer natureza.</li>
              <li>Você não deve fazer upload de documentos que contenham dados sensíveis desnecessários à análise profissional.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-bold text-gray-900 mb-3">4. Limitações da Inteligência Artificial</h3>
            <p>
              Os resultados gerados pela IA (ranqueamentos, resumos, pontuações) são sugestões baseadas em padrões probabilísticos. A tecnologia pode ocasionalmente gerar interpretações imprecisas ("alucinações").
              <br/><br/>
              <strong>Obrigação do Usuário:</strong> Você concorda em revisar humanamente os perfis antes de tomar decisões definitivas de contratação ou rejeição. A Elevva não se responsabiliza por perdas ou danos decorrentes de decisões baseadas exclusivamente na análise automatizada.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-gray-900 mb-3">5. Pagamentos e Cancelamento</h3>
            <p>
              Os planos são pré-pagos e renovados automaticamente (mensal, trimestral ou anualmente). Você pode cancelar a renovação a qualquer momento através do painel de controle. Reembolsos são concedidos apenas se solicitados em até 7 dias após a primeira assinatura (Direito de Arrependimento).
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-gray-900 mb-3">6. Propriedade Intelectual</h3>
            <p>
              Todo o software, design, algoritmos e marcas da Elevva são propriedade exclusiva da Elevva Tecnologia Ltda. O uso da plataforma não lhe concede direitos de propriedade sobre o nosso código ou tecnologia.
            </p>
          </section>

          <div className="pt-6 border-t border-gray-100 text-xs text-gray-400">
            Elevva Tecnologia Ltda. CNPJ: 00.000.000/0001-00. Porto Alegre/RS.
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-gray-50 border-t border-gray-100 flex justify-end">
          <button 
            onClick={onClose}
            className="px-6 py-2.5 bg-brand-600 hover:bg-brand-700 text-white font-bold rounded-lg transition-colors shadow-lg shadow-brand-600/20"
          >
            Li e Concordo
          </button>
        </div>

      </div>
    </div>
  );
};
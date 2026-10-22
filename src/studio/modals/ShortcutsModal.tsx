import React from 'react';
import { Keyboard, X } from 'lucide-react';

export interface ShortcutsModalProps {
  onClose: () => void;
}

const SHORTCUT_GROUPS = [
  {
    title: 'Ferramentas',
    items: [
      { key: 'T / V', desc: 'Ferramenta de texto e tipografia' },
      { key: 'Ctrl + 1', desc: 'Pincel para apagar/restaurar' },
      { key: 'Ctrl + 2', desc: 'Pincel de pintura (cor/desfoque/padrão)' },
      { key: 'Ctrl + 3', desc: 'Pincel de preenchimento local com IA' },
      { key: 'Ctrl + 4', desc: 'Executar novo OCR local na área' },
      { key: 'Ctrl + 5', desc: 'Distorção e perspectiva quadrilateral' },
      { key: 'Ctrl + 6', desc: 'Camadas de imagem e adesivos' },
    ],
  },
  {
    title: 'Área de trabalho',
    items: [
      { key: 'Mouse Wheel', desc: 'Rolar o documento na vertical' },
      { key: 'Shift + Wheel', desc: 'Rolar o documento na horizontal' },
      { key: 'Ctrl / Cmd + Wheel', desc: 'Zoom centralizado no cursor' },
      { key: 'Space + Drag', desc: 'Mover a área de trabalho' },
    ],
  },
  {
    title: 'Transformação de caixas e lettering',
    items: [
      { key: 'Top Nub Drag', desc: 'Girar a caixa de diálogo livremente' },
      { key: 'A Nub Drag', desc: 'Redimensionar a fonte diretamente na tela' },
      { key: '↔ Nub Drag', desc: 'Quebrar linhas mantendo o tamanho da fonte' },
      { key: 'Corner Handles', desc: 'Redimensionar os limites da caixa e reorganizar o texto' },
    ],
  },
  {
    title: 'Edição e área de transferência',
    items: [
      { key: 'Ctrl + Z', desc: 'Desfazer o último traço ou edição de texto' },
      { key: 'Ctrl + Shift + Z', desc: 'Refazer a ação desfeita' },
      { key: 'Ctrl + Alt + C', desc: 'Copiar estilo tipográfico' },
      { key: 'Ctrl + Alt + V', desc: 'Colar estilo tipográfico' },
      { key: 'Delete / Backspace', desc: 'Remover caixa de texto ou adesivo selecionado' },
      { key: 'Ctrl + D', desc: 'Duplicar caixa de texto selecionada' },
      { key: 'Ctrl + B', desc: 'Alternar painel do histórico' },
    ],
  },
];

export const ShortcutsModal: React.FC<ShortcutsModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4">
      <div className="w-full max-w-lg rounded-xl border border-[#282d3f] bg-[#12141c] p-5 shadow-2xl text-slate-100 max-h-[85vh] flex flex-col">
        <div className="flex items-center justify-between pb-3 border-b border-[#282d3f]">
          <div className="flex items-center gap-2 font-medium text-sm text-slate-200">
            <Keyboard className="w-4 h-4 text-[#22d3ee]" />
            Atalhos de teclado
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-md text-slate-400 hover:text-slate-100 hover:bg-[#1c1f2e] transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="mt-4 space-y-4 overflow-y-auto pr-1">
          {SHORTCUT_GROUPS.map((group) => (
            <div key={group.title}>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                {group.title}
              </h4>
              <div className="space-y-1.5">
                {group.items.map((item) => (
                  <div
                    key={item.key}
                    className="flex items-center justify-between p-2 rounded-lg bg-[#090a0f] border border-[#282d3f]/60 text-xs"
                  >
                    <span className="text-slate-300">{item.desc}</span>
                    <kbd className="px-2 py-0.5 rounded-md bg-[#1c1f2e] border border-[#363c54] font-mono text-[11px] text-[#22d3ee] font-medium">
                      {item.key}
                    </kbd>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 flex justify-end pt-3 border-t border-[#282d3f]">
          <button
            onClick={onClose}
            className="px-3 py-1.5 rounded-lg text-xs font-medium bg-[#1c1f2e] border border-[#282d3f] text-slate-200 hover:bg-[#282d3f] transition"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};

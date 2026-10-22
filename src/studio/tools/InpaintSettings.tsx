import React from 'react';
import { Sparkles, Circle, Square } from 'lucide-react';
import { studioStore, useStudioStore } from '../state/studioStore';
import { StudioEngineSelector } from './StudioEngineSelector';

export const InpaintSettings: React.FC = () => {
  const inpaint = useStudioStore((s) => s.inpaintSettings);

  const update = (partial: Partial<typeof inpaint>) => {
    studioStore.setState({
      inpaintSettings: { ...inpaint, ...partial },
    });
  };

  return (
    <div className="space-y-4 text-xs text-slate-200">
      <div className="pb-2 border-b border-[#282d3f]">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-[#22d3ee]" />
          <h3 className="font-semibold text-sm text-slate-100">Pincel de preenchimento com IA</h3>
        </div>
        <p className="text-[11px] text-slate-400 mt-1">
          Pinte sobre balões ou artefatos. Ao soltar o botão, a área é recortada na escala 1:1 e preenchida localmente, sem custos de nuvem.
        </p>
      </div>

      {/* Selectable Inpaint Model Tier */}
      <StudioEngineSelector category="inpaint" />

      {/* 2-Way Inpaint Source Selector */}
      <div>
        <label className="block text-slate-400 font-medium mb-1.5">Origem do preenchimento</label>
        <div className="grid grid-cols-2 gap-1.5 p-1 rounded-lg bg-[#090a0f] border border-[#282d3f]">
          <button
            type="button"
            onClick={() => update({ source: 'background' })}
            className={`py-1.5 px-2 rounded-md font-medium text-center text-xs transition cursor-pointer ${
              inpaint.source === 'background'
                ? 'bg-[#22d3ee] text-white shadow-xs'
                : 'text-slate-400 hover:text-slate-200 hover:bg-[#1c1f2e]/50'
            }`}
            title="Preencher o fundo de trabalho atual para remover artefatos restantes (padrão)"
          >
            Fundo preenchido
          </button>
          <button
            type="button"
            onClick={() => update({ source: 'original' })}
            className={`py-1.5 px-2 rounded-md font-medium text-center text-xs transition cursor-pointer ${
              inpaint.source === 'original'
                ? 'bg-[#22d3ee] text-white shadow-xs'
                : 'text-slate-400 hover:text-slate-200 hover:bg-[#1c1f2e]/50'
            }`}
            title="Preencher a imagem original para apagar balões de fala e efeitos sonoros"
          >
            Imagem original
          </button>
        </div>
        <p className="text-[10px] text-slate-500 mt-1">
          {inpaint.source === 'background'
            ? 'Recorta o fundo atual para retocar balões de fala e artefatos.'
            : 'Recorta a imagem original para apagar balões de fala e efeitos sonoros.'}
        </p>
      </div>

      <div>
        <label className="block text-slate-400 font-medium mb-1.5">Formato do pincel</label>
        <div className="flex gap-2">
          <button
            onClick={() => update({ shape: 'circle' })}
            className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-lg border transition ${
              inpaint.shape === 'circle'
                ? 'border-[#22d3ee] bg-[#22d3ee]/15 text-[#22d3ee] font-medium'
                : 'border-[#282d3f] bg-[#090a0f] text-slate-400 hover:text-slate-200'
            }`}
          >
            <Circle className="w-3.5 h-3.5" />
            Círculo
          </button>
          <button
            onClick={() => update({ shape: 'square' })}
            className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-lg border transition ${
              inpaint.shape === 'square'
                ? 'border-[#22d3ee] bg-[#22d3ee]/15 text-[#22d3ee] font-medium'
                : 'border-[#282d3f] bg-[#090a0f] text-slate-400 hover:text-slate-200'
            }`}
          >
            <Square className="w-3.5 h-3.5" />
            Quadrado
          </button>
        </div>
      </div>

      <div>
        <div className="flex justify-between text-slate-400 mb-1">
          <span>Tamanho do pincel</span>
          <span className="font-mono text-slate-200">{inpaint.size}px</span>
        </div>
        <input
          type="range"
          min="10"
          max="300"
          value={inpaint.size}
          onChange={(e) => update({ size: Number(e.target.value) })}
          className="w-full accent-[#22d3ee]"
        />
      </div>

      <div className="p-3 rounded-lg bg-[#22d3ee]/10 border border-[#22d3ee]/30 text-[11px] text-[#22d3ee] leading-relaxed">
        ⚡ <strong>Privacidade garantida:</strong> o preenchimento é executado 100% no navegador usando WebGPU/WASM. Nenhum recorte de imagem sai do seu dispositivo.
      </div>
    </div>
  );
};

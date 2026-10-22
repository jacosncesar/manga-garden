import React from 'react';
import { Circle, Square } from 'lucide-react';
import { studioStore, useStudioStore } from '../state/studioStore';

export const EraseSettings: React.FC = () => {
  const erase = useStudioStore((s) => s.eraseSettings);

  const update = (partial: Partial<typeof erase>) => {
    studioStore.setState({
      eraseSettings: { ...erase, ...partial },
    });
  };

  return (
    <div className="space-y-4 text-xs text-slate-200">
      <div className="pb-2 border-b border-[#282d3f]">
        <h3 className="font-semibold text-sm text-slate-100">Pincel para restaurar/apagar</h3>
        <p className="text-[11px] text-slate-400 mt-0.5">
          Restaura a imagem original ou o fundo limpo usando composição destination-in.
        </p>
      </div>

      {/* Restore Source Toggle */}
      <div>
        <label className="block text-slate-400 font-medium mb-1.5">Origem da restauração</label>
        <div className="grid grid-cols-2 gap-1.5 p-1 rounded-lg bg-[#090a0f] border border-[#282d3f]">
          <button
            onClick={() => update({ source: 'inpainted' })}
            className={`py-1.5 px-2 rounded-md font-medium transition ${
              erase.source === 'inpainted'
                ? 'bg-[#22d3ee] text-white shadow-xs'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Fundo preenchido
          </button>
          <button
            onClick={() => update({ source: 'original' })}
            className={`py-1.5 px-2 rounded-md font-medium transition ${
              erase.source === 'original'
                ? 'bg-[#22d3ee] text-white shadow-xs'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Imagem original
          </button>
        </div>
      </div>

      {/* Brush Shape */}
      <div>
        <label className="block text-slate-400 font-medium mb-1.5">Formato do pincel</label>
        <div className="flex gap-2">
          <button
            onClick={() => update({ shape: 'circle' })}
            className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-lg border transition ${
              erase.shape === 'circle'
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
              erase.shape === 'square'
                ? 'border-[#22d3ee] bg-[#22d3ee]/15 text-[#22d3ee] font-medium'
                : 'border-[#282d3f] bg-[#090a0f] text-slate-400 hover:text-slate-200'
            }`}
          >
            <Square className="w-3.5 h-3.5" />
            Quadrado
          </button>
        </div>
      </div>

      {/* Brush Size */}
      <div>
        <div className="flex justify-between text-slate-400 mb-1">
          <span>Tamanho do pincel</span>
          <span className="font-mono text-slate-200">{erase.size}px</span>
        </div>
        <input
          type="range"
          min="5"
          max="300"
          value={erase.size}
          onChange={(e) => update({ size: Number(e.target.value) })}
          className="w-full accent-[#22d3ee]"
        />
      </div>

      {/* Brush Feather */}
      <div>
        <div className="flex justify-between text-slate-400 mb-1">
          <span>Suavização das bordas</span>
          <span className="font-mono text-slate-200">{erase.feather}px</span>
        </div>
        <input
          type="range"
          min="0"
          max="80"
          value={erase.feather}
          onChange={(e) => update({ feather: Number(e.target.value) })}
          className="w-full accent-[#22d3ee]"
        />
      </div>
    </div>
  );
};

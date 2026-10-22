import React from 'react';
import { Maximize2, RotateCcw } from 'lucide-react';
import { studioStore, useStudioStore } from '../state/studioStore';
import { studioUndoStack } from '../state/undoStack';
import { WarpMesh, type WarpPreset } from '../canvas/WarpMesh';
import type { TextObject } from '../types';

const WARP_PRESETS: { id: WarpPreset; label: string }[] = [
  { id: 'none', label: 'Nenhuma (plana)' },
  { id: 'arch', label: 'Arco (curvo)' },
  { id: 'bulge', label: 'Saliente (expandir)' },
  { id: 'wave', label: 'Onda (senoidal)' },
  { id: 'twist', label: 'Torção (diagonal)' },
  { id: 'squeeze', label: 'Apertar (ampulheta)' },
];

export const WarpSettings: React.FC = () => {
  const textObjects = useStudioStore((s) => s.textObjects);
  const selectedTextId = useStudioStore((s) => s.selectedTextId);

  const selectedObj = textObjects.find((t) => t.id === selectedTextId);

  const update = (partial: Partial<TextObject>) => {
    if (!selectedObj) return;
    const prev = [...textObjects];
    const next = textObjects.map((t) => (t.id === selectedObj.id ? { ...t, ...partial } : t));
    studioStore.setState({ textObjects: next });
    studioUndoStack.push({
      id: `warp-update-${Date.now()}`,
      timestamp: Date.now(),
      description: 'Update Warp Preset',
      textObjects: { before: prev, after: next },
    });
  };

  if (!selectedObj) {
    return (
      <div className="p-5 text-center text-xs text-slate-400">
        <p>Nenhum balão de texto selecionado.</p>
        <p className="mt-1 text-[11px] text-slate-500">
          Selecione um balão de texto para aplicar distorção em perspectiva de 4 pontos ou distorção paramétrica.
        </p>
      </div>
    );
  }

  const currentPreset = (selectedObj.warpPreset as WarpPreset) || 'none';
  const currentBend = selectedObj.warpBend ?? 0.5;

  const handlePresetSelect = (preset: WarpPreset) => {
    const quad = WarpMesh.generatePresetQuad(selectedObj.width, selectedObj.height, preset, currentBend);
    update({
      warpPreset: preset,
      warpBend: currentBend,
      quadPoints: quad,
    });
  };

  const handleBendChange = (bend: number) => {
    const quad = WarpMesh.generatePresetQuad(selectedObj.width, selectedObj.height, currentPreset, bend);
    update({
      warpBend: bend,
      quadPoints: quad,
    });
  };

  const handleResetQuad = () => {
    const defaultQuad: [any, any, any, any] = [
      { x: 0, y: 0 },
      { x: selectedObj.width, y: 0 },
      { x: selectedObj.width, y: selectedObj.height },
      { x: 0, y: selectedObj.height },
    ];
    update({
      warpPreset: 'none',
      warpBend: 0,
      quadPoints: defaultQuad,
    });
  };

  return (
    <div className="space-y-4 text-xs text-slate-200">
      <div className="pb-2 border-b border-[#282d3f]">
        <div className="flex items-center gap-2">
          <Maximize2 className="w-4 h-4 text-[#22d3ee]" />
          <h3 className="font-semibold text-sm text-slate-100">Distorção e perspectiva quadrilateral</h3>
        </div>
        <p className="text-[11px] text-slate-400 mt-1">
          Distorça caixas de texto para acompanhar balões inclinados, placas em perspectiva ou efeitos sonoros dinâmicos.
        </p>
      </div>

      <div>
        <label className="block text-slate-400 font-medium mb-1.5">Predefinições de distorção</label>
        <div className="grid grid-cols-2 gap-1.5">
          {WARP_PRESETS.map((p) => (
            <button
              key={p.id}
              onClick={() => handlePresetSelect(p.id)}
              className={`py-2 px-2.5 rounded-lg border text-left transition ${
                currentPreset === p.id
                  ? 'border-[#22d3ee] bg-[#22d3ee]/15 text-[#22d3ee] font-medium'
                  : 'border-[#282d3f] bg-[#090a0f] text-slate-400 hover:text-slate-200'
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      {currentPreset !== 'none' && (
        <div>
          <div className="flex justify-between text-slate-400 mb-1">
            <span>Intensidade da curvatura</span>
            <span className="font-mono text-slate-200">{Math.round(currentBend * 100)}%</span>
          </div>
          <input
            type="range"
            min="-1"
            max="1"
            step="0.05"
            value={currentBend}
            onChange={(e) => handleBendChange(Number(e.target.value))}
            className="w-full accent-[#22d3ee]"
          />
        </div>
      )}

      <div className="pt-2">
        <button
          onClick={handleResetQuad}
          className="w-full flex items-center justify-center gap-1.5 py-1.5 rounded-lg border border-[#282d3f] bg-[#1c1f2e] text-slate-300 hover:bg-[#282d3f] transition"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          Redefinir quadrilátero como retângulo
        </button>
      </div>

      <div className="p-3 rounded-lg bg-[#22d3ee]/10 border border-[#22d3ee]/30 text-[11px] text-[#22d3ee] leading-relaxed">
        💡 <strong>Alças interativas:</strong> arraste qualquer uma das quatro alças de canto na tela para distorcer o texto livremente em perspectiva 3D.
      </div>
    </div>
  );
};

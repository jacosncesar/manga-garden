import React from 'react';
import { ScanText, Circle, Square } from 'lucide-react';
import { studioStore, useStudioStore } from '../state/studioStore';
import { StudioEngineSelector } from './StudioEngineSelector';

export const OcrSettings: React.FC = () => {
  const ocr = useStudioStore((s) => s.ocrSettings);

  /** Updates session-local OCR steps and brush settings without changing extension defaults.
   * @param partial - Fields changed by the user.
   * @returns Nothing.
   */
  const update = (partial: Partial<typeof ocr>) => {
    studioStore.setState({
      ocrSettings: { ...ocr, ...partial },
    });
  };

  return (
    <div className="space-y-4 text-xs text-slate-200">
      <div className="pb-2 border-b border-[#282d3f]">
        <div className="flex items-center gap-2">
          <ScanText className="w-4 h-4 text-[#22d3ee]" />
          <h3 className="font-semibold text-sm text-slate-100">Executar novo OCR com IA</h3>
        </div>
        <p className="text-[11px] text-slate-400 mt-1">
          Pinte sobre falas ou efeitos sonoros para ler a imagem original, mesmo onde o fundo do editor já foi limpo. Escolha quais etapas executar após o reconhecimento.
        </p>
      </div>

      {/* Selectable OCR Recognition Tier */}
      <StudioEngineSelector category="ocr" />

      {/* 3-Way Scan Source Selector */}
      <div>
        <label className="block text-slate-400 font-medium mb-1.5">Origem da leitura do OCR</label>
        <div className="grid grid-cols-3 gap-1.5 p-1 rounded-lg bg-[#090a0f] border border-[#282d3f]">
          <button
            type="button"
            onClick={() => update({ scanSource: 'original' })}
            className={`py-1 px-1 rounded text-center text-[10px] font-medium transition cursor-pointer ${
              ocr.scanSource === 'original'
                ? 'bg-[#22d3ee] text-white shadow'
                : 'text-slate-400 hover:text-slate-200'
            }`}
            title="Ler a imagem original (texto japonês ou estrangeiro ainda não traduzido)"
          >
            Original
          </button>
          <button
            type="button"
            onClick={() => update({ scanSource: 'background' })}
            className={`py-1 px-1 rounded text-center text-[10px] font-medium transition cursor-pointer ${
              ocr.scanSource === 'background'
                ? 'bg-[#22d3ee] text-white shadow'
                : 'text-slate-400 hover:text-slate-200'
            }`}
            title="Ler a imagem de fundo preenchida/limpa"
          >
            Fundo preenchido
          </button>
          <button
            type="button"
            onClick={() => update({ scanSource: 'composition' })}
            className={`py-1 px-1 rounded text-center text-[10px] font-medium transition cursor-pointer ${
              ocr.scanSource === 'composition'
                ? 'bg-[#22d3ee] text-white shadow'
                : 'text-slate-400 hover:text-slate-200'
            }`}
            title="Ler a imagem composta traduzida (fundo + texto inserido)"
          >
            Traduzida
          </button>
        </div>
        <p className="text-[10px] text-slate-500 mt-1">
          {ocr.scanSource === 'original'
            ? 'Analisa a imagem original para detectar falas e efeitos sonoros.'
            : ocr.scanSource === 'background'
            ? 'Analisa o fundo limpo (o texto pode já ter sido apagado).'
            : 'Analisa a página composta, incluindo o texto traduzido.'}
        </p>
      </div>

      <fieldset className="space-y-2 rounded-lg border border-[#282d3f] p-3">
        <legend className="px-1 text-slate-400 font-medium">Após o reconhecimento</legend>
        <label className="flex items-center justify-between gap-3 cursor-pointer">
          <span>Traduzir o texto reconhecido</span>
          <input type="checkbox" checked={ocr.translate}
            onChange={(event) => update({ translate: event.target.checked })}
            className="accent-[#22d3ee]" />
        </label>
        <label className="flex items-center justify-between gap-3 cursor-pointer">
          <span>Limpar o fundo</span>
          <input type="checkbox" checked={ocr.inpaint}
            onChange={(event) => update({ inpaint: event.target.checked })}
            className="accent-[#22d3ee]" />
        </label>
        <p className="text-[11px] text-slate-400 leading-relaxed">
          {!ocr.translate && !ocr.inpaint
            ? 'Somente OCR: adiciona o texto original em caixas editáveis. Não solicita tradução nem altera o fundo.'
            : `${ocr.translate ? 'Adiciona o texto traduzido' : 'Adiciona o texto original'}${ocr.inpaint ? ' e limpa as letras detectadas usando o nível de preenchimento selecionado.' : '. O fundo permanece inalterado.'}`}
        </p>
        <p className="text-[10px] text-slate-500">Estas etapas se aplicam somente ao Studio, independentemente da sincronização global.</p>
      </fieldset>

      <div>
        <label className="block text-slate-400 font-medium mb-1.5">Formato do pincel</label>
        <div className="flex gap-2">
          <button
            onClick={() => update({ shape: 'circle' })}
            className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-lg border transition ${
              ocr.shape === 'circle'
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
              ocr.shape === 'square'
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
          <span className="font-mono text-slate-200">{ocr.size}px</span>
        </div>
        <input
          type="range"
          min="10"
          max="300"
          value={ocr.size}
          onChange={(e) => update({ size: Number(e.target.value) })}
          className="w-full accent-[#22d3ee]"
        />
      </div>

      <div className="p-3 rounded-lg bg-[#22d3ee]/10 border border-[#22d3ee]/30 text-[11px] text-[#22d3ee] leading-relaxed">
        O texto reconhecido é adicionado em caixas editáveis sobre a posição detectada. Com a tradução desativada, as caixas exibem o texto original.
      </div>
    </div>
  );
};

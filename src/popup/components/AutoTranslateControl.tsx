import type { PopupState } from '../../shared/types';

interface AutoTranslateControlProps {
  state: PopupState;
  updateState: (updates: Partial<PopupState>) => void;
}

export default function AutoTranslateControl({ state, updateState }: AutoTranslateControlProps) {
  return (
    <div className="flex flex-col gap-3">
      {/* Main Auto-Translate Toggle Card */}
      <div className="flex items-center justify-between p-3 bg-[var(--color-vellum)] border border-[var(--color-dust)] rounded-md">
        <div>
          <span className="font-medium block text-sm">Tradução automática</span>
          <span className="text-xs text-[var(--color-dust)]">
            {state.isAuto ? 'Traduz imagens visíveis automaticamente' : 'Requer ativação manual'}
          </span>
        </div>
        <button 
          onClick={() => updateState({ isAuto: !state.isAuto })}
          className="manga-garden-switch manga-garden-switch-md"
          data-state={state.isAuto ? 'checked' : 'unchecked'}
        >
          <span className="sr-only">Alternar tradução automática</span>
          <span className="manga-garden-switch-thumb" />
        </button>
      </div>
    </div>
  );
}

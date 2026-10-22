import { useState } from 'react';
import { X, Plus, BookOpen, Trash2 } from 'lucide-react';
import {
  normalizeGlossaryEntries,
  MAX_GLOSSARY_ENTRIES,
  MAX_GLOSSARY_TERM_LENGTH,
  type GlossaryEntry,
} from '../../shared/glossary';
import HelpTooltip from './HelpTooltip';

/**
 * Minimal glossary state slice; the caller owns persistence and complete popup state.
 */
export interface GlossaryPanelProps {
  glossaryEnabled: boolean;
  glossaryEntries: GlossaryEntry[];
  updateState: (patch: {
    glossaryEnabled?: boolean;
    glossaryEntries?: GlossaryEntry[];
  }) => void;
  onClose: () => void;
}

/**
 * Collapsible panel for managing source-to-preferred-translation glossary mappings.
 * Stored in popupState; passed per-request to LLM engines via TranslationOptions.
 * Glossary mappings are treated as untrusted literal data in prompts, never instructions.
 *
 * @param props - Glossary state slice and mutation callback.
 * @returns The rendered glossary management panel.
 */
export default function GlossaryPanel({
  glossaryEnabled,
  glossaryEntries,
  updateState,
  onClose,
}: GlossaryPanelProps) {
  const [draftSource, setDraftSource] = useState('');
  const [draftTarget, setDraftTarget] = useState('');

  const entries = normalizeGlossaryEntries(glossaryEntries);
  const atCapacity = entries.length >= MAX_GLOSSARY_ENTRIES;

  /**
   * Normalizes, deduplicates, and persists a new mapping from the draft fields.
   * Silently ignores empty or duplicate source terms.
   * @returns Nothing; persists valid drafts through updateState.
   */
  const handleAdd = () => {
    const source = draftSource.trim().slice(0, MAX_GLOSSARY_TERM_LENGTH).trim();
    const target = draftTarget.trim().slice(0, MAX_GLOSSARY_TERM_LENGTH).trim();
    if (!source || !target) return;
    if (entries.some((e) => e.source === source)) return; // duplicate source
    if (atCapacity) return;
    updateState({ glossaryEntries: [...entries, { source, target }] });
    setDraftSource('');
    setDraftTarget('');
  };

  /**
   * Removes a mapping by index and persists the reduced set.
   *
   * @param index - Position of the entry to remove.
   * @returns Nothing; persists the remaining normalized mappings.
   */
  const handleRemove = (index: number) => {
    updateState({ glossaryEntries: entries.filter((_, i) => i !== index) });
  };

  return (
    <div className="bg-[var(--color-vellum)] border border-[var(--color-dust)] rounded-md p-3">
      {/* Header with toggle and close */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <BookOpen size={16} className="text-[var(--color-dust)]" />
          <span className="font-medium text-sm">Glossário de tradução</span>
          <HelpTooltip
            size="sm"
            content={
              <>
                Associe termos de origem às traduções preferidas no WebLLM, em APIs personalizadas e no pool compartilhado.
                Os modelos de linguagem podem não seguir sempre essas preferências. O Google Tradutor não oferece suporte ao glossário no Manga Garden.
                <span className="block mt-1 text-[var(--color-dust)]">
                  Ao usar uma API personalizada ou o pool compartilhado, os termos do glossário são enviados ao respectivo provedor na solicitação de tradução. Não inclua dados confidenciais.
                </span>
              </>
            }
          />
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            role="switch"
            aria-checked={glossaryEnabled}
            aria-label="Ativar glossário de tradução"
            onClick={() => updateState({ glossaryEnabled: !glossaryEnabled })}
            className="manga-garden-switch manga-garden-switch-sm"
            data-state={glossaryEnabled ? 'checked' : 'unchecked'}
          >
            <span className="sr-only">Ativar glossário de tradução</span>
            <span className="manga-garden-switch-thumb" />
          </button>
          <button
            aria-label="Fechar glossário de tradução"
            onClick={onClose}
            className="p-1 hover:bg-[var(--color-dust)] hover:bg-opacity-30 rounded cursor-pointer"
          >
            <X size={14} />
          </button>
        </div>
      </div>

      {/* Existing entries */}
      {entries.length > 0 && (
        <div className="flex flex-col gap-1.5 mb-3 max-h-36 overflow-y-auto">
          {entries.map((entry, index) => (
            <div
              key={`${entry.source}-${index}`}
              className="flex items-center gap-2 text-xs bg-[var(--color-paper)] rounded px-2 py-1.5 border border-[var(--color-dust)] border-opacity-30"
            >
              <span className="flex-1 truncate font-medium" title={entry.source}>
                {entry.source}
              </span>
              <span className="text-[var(--color-dust)]">&rarr;</span>
              <span className="flex-1 truncate" title={entry.target}>
                {entry.target}
              </span>
              <button
                onClick={() => handleRemove(index)}
                className="p-0.5 hover:bg-red-100 dark:hover:bg-red-900 rounded cursor-pointer text-[var(--color-dust)] hover:text-red-500 transition-colors"
                title="Remover item"
              >
                <Trash2 size={12} />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Add new entry row */}
      <div className="flex gap-1.5 items-end">
        <div className="flex-1">
          <label className="text-[10px] text-[var(--color-dust)] block mb-0.5">Origem</label>
          <input
            type="text"
            aria-label="Origem"
            value={draftSource}
            onChange={(e) => setDraftSource(e.target.value)}
            placeholder="Ex.: 先輩"
            maxLength={MAX_GLOSSARY_TERM_LENGTH}
            className="w-full px-2 py-1 text-xs bg-[var(--color-paper)] border border-[var(--color-dust)] rounded focus:outline-none focus:border-[var(--color-editorial)] text-[var(--color-ink)]"
          />
        </div>
        <div className="flex-1">
          <label className="text-[10px] text-[var(--color-dust)] block mb-0.5">Tradução preferida</label>
          <input
            type="text"
            aria-label="Tradução preferida"
            value={draftTarget}
            onChange={(e) => setDraftTarget(e.target.value)}
            placeholder="Ex.: Senpai"
            maxLength={MAX_GLOSSARY_TERM_LENGTH}
            className="w-full px-2 py-1 text-xs bg-[var(--color-paper)] border border-[var(--color-dust)] rounded focus:outline-none focus:border-[var(--color-editorial)] text-[var(--color-ink)]"
          />
        </div>
        <button
          onClick={handleAdd}
          disabled={atCapacity || !draftSource.trim() || !draftTarget.trim()}
          className="p-1.5 bg-[var(--color-editorial)] text-white rounded hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-opacity"
          title={atCapacity ? `Limite de ${MAX_GLOSSARY_ENTRIES} itens atingido` : 'Adicionar item ao glossário'}
        >
          <Plus size={14} />
        </button>
      </div>

      {/* Capacity indicator */}
      {entries.length > 0 && (
        <p className="text-[10px] text-[var(--color-dust)] mt-1.5 text-right">
          {entries.length}/{MAX_GLOSSARY_ENTRIES} itens
        </p>
      )}
    </div>
  );
}

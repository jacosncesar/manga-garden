/**
 * Centralized constants for Manga Garden extension.
 */

export const CLOUDFLARE_WORKER_BASE_URL = 'https://api.12094852.xyz';
export const CLOUDFLARE_TRANSLATE_DEFAULT_ENDPOINT = `${CLOUDFLARE_WORKER_BASE_URL}/v1/chat/completions`;
export const CLOUDFLARE_QUOTA_DEFAULT_ENDPOINT = `${CLOUDFLARE_WORKER_BASE_URL}/v1/quota`;
export const CLOUDFLARE_TRANSLATE_MODEL = 'kites-translation';

/**
 * Single Source of Truth for chrome.storage.local keys across all extension contexts
 * (Background Service Worker, Popup, Offscreen Document, Content Scripts).
 */
export const STORAGE_KEYS = {
  POPUP_STATE: 'popupState',
  AUTH_TOKEN: 'manga_garden_oauth_auth_token',
  AUTH_EXPIRES_AT: 'manga_garden_oauth_token_expires_at',
  WEBGPU_SUPPORTED: 'hardware_webgpu_supported',
  DATABASE_MIGRATED: 'manga_garden_database_migrated',
} as const;

export type StorageKey = (typeof STORAGE_KEYS)[keyof typeof STORAGE_KEYS];

export const LEGACY_STORAGE_KEYS = {
  AUTH_TOKEN: 'kites_oauth_auth_token',
  AUTH_EXPIRES_AT: 'kites_oauth_token_expires_at',
} as const;

/**
 * Copies saved OAuth credentials to their Manga Garden keys before removing legacy keys.
 * @returns Resolves after legacy credentials have been migrated or when Chrome storage is unavailable.
 */
export async function migrateLegacyAuthStorage(): Promise<void> {
  if (typeof chrome === 'undefined' || !chrome.storage?.local) return;

  const keys = [
    STORAGE_KEYS.AUTH_TOKEN,
    STORAGE_KEYS.AUTH_EXPIRES_AT,
    LEGACY_STORAGE_KEYS.AUTH_TOKEN,
    LEGACY_STORAGE_KEYS.AUTH_EXPIRES_AT,
  ];
  const data = await chrome.storage.local.get(keys);
  const token = data[STORAGE_KEYS.AUTH_TOKEN] ?? data[LEGACY_STORAGE_KEYS.AUTH_TOKEN];
  const expiresAt = data[STORAGE_KEYS.AUTH_EXPIRES_AT] ?? data[LEGACY_STORAGE_KEYS.AUTH_EXPIRES_AT];
  const updates: Partial<Record<StorageKey, unknown>> = {};

  if (typeof token === 'string' && typeof data[STORAGE_KEYS.AUTH_TOKEN] !== 'string') {
    updates[STORAGE_KEYS.AUTH_TOKEN] = token;
  }
  if (typeof expiresAt === 'number' && typeof data[STORAGE_KEYS.AUTH_EXPIRES_AT] !== 'number') {
    updates[STORAGE_KEYS.AUTH_EXPIRES_AT] = expiresAt;
  }

  if (Object.keys(updates).length > 0) {
    await chrome.storage.local.set(updates);
  }
  await chrome.storage.local.remove([
    LEGACY_STORAGE_KEYS.AUTH_TOKEN,
    LEGACY_STORAGE_KEYS.AUTH_EXPIRES_AT,
  ]);
}

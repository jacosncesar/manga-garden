import { describe, expect, it, vi } from 'vitest';
import {
  CLOUDFLARE_QUOTA_DEFAULT_ENDPOINT,
  CLOUDFLARE_TRANSLATE_DEFAULT_ENDPOINT,
  CLOUDFLARE_WORKER_BASE_URL,
  LEGACY_STORAGE_KEYS,
  migrateLegacyAuthStorage,
  STORAGE_KEYS,
} from './constants';

describe('Cloudflare shared pool endpoints', () => {
  it('derives API endpoints from the protected custom domain', () => {
    expect(CLOUDFLARE_WORKER_BASE_URL).toBe('https://api.12094852.xyz');
    expect(CLOUDFLARE_TRANSLATE_DEFAULT_ENDPOINT).toBe(
      'https://api.12094852.xyz/v1/chat/completions',
    );
    expect(CLOUDFLARE_QUOTA_DEFAULT_ENDPOINT).toBe(
      'https://api.12094852.xyz/v1/quota',
    );
  });
});

describe('Centralized STORAGE_KEYS', () => {
  it('defines canonical keys for chrome.storage.local', () => {
    expect(STORAGE_KEYS.POPUP_STATE).toBe('popupState');
    expect(STORAGE_KEYS.AUTH_TOKEN).toBe('manga_garden_oauth_auth_token');
    expect(STORAGE_KEYS.AUTH_EXPIRES_AT).toBe('manga_garden_oauth_token_expires_at');
    expect(STORAGE_KEYS.WEBGPU_SUPPORTED).toBe('hardware_webgpu_supported');
    expect(LEGACY_STORAGE_KEYS.AUTH_TOKEN).toBe('kites_oauth_auth_token');
    expect(LEGACY_STORAGE_KEYS.AUTH_EXPIRES_AT).toBe('kites_oauth_token_expires_at');
  });

  it('moves legacy OAuth credentials to the new brand keys and removes old keys', async () => {
    const get = vi.fn().mockResolvedValue({
      [LEGACY_STORAGE_KEYS.AUTH_TOKEN]: 'saved-token',
      [LEGACY_STORAGE_KEYS.AUTH_EXPIRES_AT]: 12345,
    });
    const set = vi.fn().mockResolvedValue(undefined);
    const remove = vi.fn().mockResolvedValue(undefined);
    vi.stubGlobal('chrome', { storage: { local: { get, set, remove } } });

    try {
      await migrateLegacyAuthStorage();
    } finally {
      vi.unstubAllGlobals();
    }

    expect(set).toHaveBeenCalledWith({
      [STORAGE_KEYS.AUTH_TOKEN]: 'saved-token',
      [STORAGE_KEYS.AUTH_EXPIRES_AT]: 12345,
    });
    expect(remove).toHaveBeenCalledWith([
      LEGACY_STORAGE_KEYS.AUTH_TOKEN,
      LEGACY_STORAGE_KEYS.AUTH_EXPIRES_AT,
    ]);
  });
});

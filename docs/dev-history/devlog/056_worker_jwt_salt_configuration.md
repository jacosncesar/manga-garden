# 056 - Require a configured Worker JWT salt

**Date:** 2026-10-22  
**Feature/Task:** Worker secret configuration  
**Status:** Completed

## Objective

Prevent the translation Worker from silently using a predictable, public value to derive user identifiers for quota tracking.

## Implementation

1. Removed fallback salts from both authenticated Worker endpoints and from the user-subject hashing function.
2. Return an explicit HTTP 503 configuration error from translation and quota endpoints when `JWT_SALT` is missing or blank.
3. Replaced secret-shaped sample values in `worker/.dev.vars.example` with clearly non-credential placeholders.
4. Updated local and production setup instructions to explain the required secret and its stability requirement.
5. Added coverage that the hash helper rejects an empty salt.

## Behavior and operational impact

When `JWT_SALT` is configured, token hashing and quota behavior remain unchanged. If it is missing, authenticated translation and quota requests now return a clear configuration error rather than using a public fallback. Changing the configured salt later changes derived user identifiers, so existing quota records will no longer map to those identifiers.

## Verification

The hash helper and other Worker tests pass when run through the repository-root Vitest configuration. The Worker package's own test command still resolves the extension's root setup file relative to `worker/`; endpoint-level tests also require a Cloudflare Workers test runtime because the Worker entry point imports the `cloudflare:workers` module.

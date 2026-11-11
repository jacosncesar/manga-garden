# Devlog 070: Página inicial oficial da extensão

## Data

2026-11-11

## Objetivo

Fazer com que a página de informações da extensão no Chrome direcione para o site oficial do Manga Garden.

## Implementação

- Definido `homepage_url` no manifesto como `https://manga-garden-translator.pages.dev/`.
- O link de site exibido pelo Chrome em `chrome://extensions` passa a usar a página publicada do Manga Garden.
- O clique no ícone da extensão continua abrindo o popup; este campo altera apenas a URL de homepage indicada pelo manifesto.

## Validação

- Confirmada a URL no `manifest.json`.
- Validado o build da extensão.

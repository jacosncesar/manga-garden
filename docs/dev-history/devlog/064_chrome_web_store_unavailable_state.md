# Devlog 064: Estado temporariamente indisponível da Chrome Web Store

## Data

2026-11-11

## Objetivo

Manter visíveis o cartão e as chamadas da Chrome Web Store, deixando claro que a instalação por esse canal está temporariamente indisponível.

## Implementação

- Substituídos os links ativos da Chrome Web Store na navegação, no destaque inicial, no cartão de instalação, no rodapé e nas políticas de privacidade por elementos não interativos.
- Adicionado um aviso visível de indisponibilidade, com tradução para português e inglês.
- Aplicado estilo acinzentado aos itens indisponíveis, preservando as opções alternativas de instalação e os links do projeto.
- Mantidas idênticas as duas cópias da política de privacidade.

## Validação

- Confirmado que não há links ativos para `chromewebstore.google.com` nas páginas do site.
- Verificada a correspondência das páginas duplicadas de privacidade e executado `git diff --check`.

# Devlog 067: Navegação do site sempre recolhida

## Data

2026-11-11

## Objetivo

Evitar que os links da navegação se aproximem da marca ou causem uma chamada de instalação desproporcional na barra superior.

## Implementação

- Mantido o menu hambúrguer em todas as larguras; os links da navegação aparecem apenas quando o menu é aberto.
- Preservados o nome/logo, o controle do menu e o seletor de idioma na barra superior.
- Reduzido o item da Chrome Web Store a uma linha compacta e acinzentada dentro do menu, mantendo o aviso curto de indisponibilidade.

## Validação

- Conferidos o estado aberto/fechado, a navegação por links e o aviso em inglês e português.
- Verificado o layout em telas de celular, tablet e desktop.
- Executados `node --check site/js/main.js`, `node --check site/js/i18n.js` e `git diff --check`.

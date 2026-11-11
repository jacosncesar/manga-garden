# Devlog 062: Espaçamento e menu responsivo da navbar

## Data

2026-11-11

## Objetivo

Dar mais respiro aos links da navbar sem comprimi-los quando a largura disponível não comporta o nome da marca, os links e os controles de idioma.

## Implementação

- Aumentado para 32 px o espaçamento entre os links no layout desktop.
- Expandido o limite do contêiner do cabeçalho para 1500 px, permitindo que a navegação completa caiba em telas largas.
- Abaixo de 1440 px, os links e o CTA passam para um menu suspenso acessível, aberto por um botão com estado `aria-expanded`.
- O menu responsivo fecha ao selecionar um link, clicar fora, pressionar Escape ou voltar ao layout desktop.
- Mantidos o seletor de idioma e a marca visíveis junto ao controle do menu; ajustado o espaço lateral em telas estreitas.

## Validação

- `node --check` passou para `site/js/main.js` e `site/js/i18n.js`; `git diff --check` passou.
- Testados os layouts de 320 a 1600 px nos idiomas pt-BR e inglês, sem rolagem horizontal.
- No navegador, confirmada a abertura do menu, visibilidade dos links e CTA, fechamento por Escape e clique fora, além do espaçamento de 32 px no desktop.

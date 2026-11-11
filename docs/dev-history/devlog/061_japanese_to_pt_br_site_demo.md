# Devlog 061: Demonstração de japonês para pt-BR

## Data

2026-11-11

## Objetivo

Adicionar ao comparador da página inicial um exemplo de mangá em japonês traduzido para português.

## Implementação

- Adicionado o exemplo `demo8` ao catálogo do comparador, usando `demo8-imput.png` como original em japonês e `demo8-thumb.png` como imagem traduzida para português.
- Adicionada uma miniatura seletora baseada na imagem original.
- Incluído o crédito `Origem: Pixiv #144884723`, traduzido para inglês como `Source: Pixiv #144884723`.
- Definido este exemplo como a demonstração inicial e primeira miniatura exibida.
- Incluídos os rótulos e textos alternativos em inglês, com suas traduções em pt-BR; o idioma de destino é identificado visualmente apenas como “Português”.
- A pré-carga das imagens agora acompanha todas as demonstrações cadastradas; os rótulos informam também o idioma correto para tecnologias assistivas.

## Validação

- Confirmado que as duas imagens existem e têm dimensões iguais: 1097 × 1600 px.
- `node --check` passou para `site/js/main.js` e `site/js/i18n.js`; `git diff --check` passou.
- No navegador, confirmados o carregamento inicial de `demo8`, o crédito e a alternância dos rótulos e da legenda entre pt-BR e inglês.

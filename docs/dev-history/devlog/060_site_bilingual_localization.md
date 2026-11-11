# Devlog 060: Localização bilingue do site

## Data

2026-11-11

## Objetivo

Disponibilizar o site público em português brasileiro e inglês, com pt-BR como idioma inicial, uma opção visível para alternar o idioma e uma identidade visual com acentos roxos no lugar dos detalhes rosas.

## Implementação

- Adicionado um localizador compartilhado em `site/js/i18n.js` para textos, atributos acessíveis e conteúdo criado dinamicamente.
- Aplicado o seletor de idioma à página inicial, à política de privacidade e ao mapa interativo do pipeline.
- Definido pt-BR como padrão para novas visitas; a escolha explícita é persistida em `localStorage` e reaplicada nas páginas do site.
- Localizadas as mensagens dinâmicas do mapa, incluindo estados do percurso guiado, busca de caminhos, lente semântica, radar, relacionamentos e exportação. O catálogo contém 472 entradas e 440 textos únicos; todos têm tradução e alternância de volta ao inglês sem ambiguidades.
- Atualizados para roxo os acentos visuais solicitados e ajustado o conteúdo longo dos cartões de instalação para telas estreitas.

## Validação

- `node --check site/js/i18n.js` e `git diff --check` concluídos sem erros.
- As cópias da política (`site/privacy.html` e `site/privacy/index.html`) permanecem idênticas.
- No navegador, confirmados o padrão pt-BR em uma visita sem preferência salva, a persistência após recarregar e a alternância entre idiomas em mensagens dinâmicas do mapa.
- Em viewports de 390 px e 320 px, a largura do documento não excedeu a área disponível.
- Verificado que os 440 textos únicos do catálogo dinâmico têm tradução, não há chaves duplicadas e todas as traduções retornam ao texto original em inglês.

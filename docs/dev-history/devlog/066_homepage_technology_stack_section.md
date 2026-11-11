# Devlog 066: Seção de tecnologias na página inicial

## Data

2026-11-11

## Objetivo

Apresentar as principais tecnologias do Manga Garden em uma seção visualmente alinhada ao restante da página inicial.

## Implementação

- Adicionada uma seção de tecnologias perto do rodapé, organizada em quatro cartões: plataforma, visão computacional, tradução e armazenamento/ferramentas.
- Exibidas tecnologias e provedores usados pelo projeto em etiquetas compactas, com descrições sobre a função de cada grupo.
- Aplicada a paleta roxa, os cartões e os cantos arredondados já usados no site, com adaptação automática para telas menores.
- Antecipado o breakpoint do menu recolhível para acomodar o novo item de navegação sem causar rolagem horizontal em telas próximas a 1440 px.
- Adicionado o atalho “Technology Stack” à navegação e traduções PT-BR para os textos e rótulos acessíveis da seção.

## Validação

- Verificados os cartões e a navegação em inglês e português.
- Verificado o layout em larguras de celular, tablet e desktop.
- Executados `node --check site/js/i18n.js` e `git diff --check`.

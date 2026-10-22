# Devlog 059: Localização da interface para pt-BR

## Objetivo

Traduzir para português brasileiro os textos da interface da extensão, incluindo controles, opções de seleção, Studio e leitor de capítulos, sem alterar identificadores internos ou valores persistidos.

## Alterações

- Localizados os controles, descrições, estados e opções do popup e de suas configurações.
- Localizados os controles, ferramentas, menus e diálogos do Studio.
- Localizados os controles do leitor de capítulos, incluindo modos de visualização, direção de leitura e exportação.
- Localizados os controles de tradução e recorte exibidos sobre as imagens, além dos estados de preparação dos modelos.
- Localizados os textos da biblioteca de páginas e da tela inicial do Studio.
- Mantidos IDs de idiomas, modelos, provedores, estados internos e demais valores usados por APIs ou persistência.
- Exibidos nomes de idiomas em pt-BR sem alterar os nomes canônicos usados pelo pipeline de tradução.

## Validação

- `npm test`: 84 arquivos e 871 testes passaram.
- `npm run build`: compilação e verificação de tipos concluídas; o Vite reportou o aviso existente de chunks grandes.
- `npm run lint`: concluído sem erros; foram reportados avisos de lint em arquivos do worker.
- `git diff --check`: sem erros de formatação.

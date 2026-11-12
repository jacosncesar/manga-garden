# Devlog 072: Avisos de licença e origem no pacote da extensão

## Data

2026-11-11

## Objetivo

Incluir os avisos de licença, modificações e código-fonte correspondente junto ao pacote distribuído da extensão.

## Implementação

- Atualizada a versão da extensão para `1.2.4`, pois o pacote `v1.2.3` já havia sido publicado sem os avisos.
- O empacotador agora valida a correspondência entre as versões do pacote e do manifesto compilado.
- Incluídos o arquivo `LICENSE` e um `NOTICE.txt` gerado para a versão, com atribuição do projeto original, declaração de modificações independentes, data do pacote e link para a tag de código-fonte correspondente.
- Atualizado o README para esclarecer a origem derivada e a independência do Manga Garden.
- Atualizadas as instruções de release para exigir o envio prévio do código-fonte e uma descrição com o link da tag correspondente.

## Validação

- `npm run package` concluiu o build e gerou `manga-garden-v1.2.4.zip`.
- O ZIP foi verificado: contém `LICENSE` idêntico ao arquivo do repositório, `NOTICE.txt`, `manifest.json` com versão `1.2.4`, o ícone `icons/icon128.png` e o link de código-fonte `tree/v1.2.4`.
- `npm run lint` e `git diff --check` passaram; o lint apresenta avisos preexistentes.
- A publicação da tag e da Release `v1.2.4` permanece pendente.

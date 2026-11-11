# Devlog 066: Download público do pacote da extensão

## Data

2026-11-11

## Objetivo

Disponibilizar o pacote compilado da extensão para visitantes do site por meio de uma Release pública do GitHub, sem adicionar o arquivo ZIP ao site estático ou ao histórico Git.

## Implementação

- Atualizada a versão da extensão para `1.2.3`, sem mover ou reutilizar a tag local `v1.2.2`.
- Substituído o empacotamento dependente do comando Unix `zip` por `scripts/package-extension.mjs`, que usa a dependência JSZip já instalada e funciona no Windows.
- O comando `npm run package` agora compila a extensão e gera `manga-garden-v<versão>.zip` na raiz do repositório.
- O botão de download principal e o link de Releases do rodapé apontam para a página da Release mais recente do GitHub.
- O comando `npm run deploy:site` continua publicando apenas o site no Cloudflare Pages; o ZIP é anexado à Release e não é enviado ao Pages nem commitado no Git.
- Registrado o procedimento operacional em `docs/development/extension-download.md`.

## Operação

Torne o repositório público para permitir downloads sem autenticação, gere o pacote com `npm run package` e publique uma Release correspondente à versão do manifesto anexando o ZIP. O comando de criação está documentado em `docs/development/extension-download.md`.

## Validação

- `npm run package` concluiu o build e gerou o ZIP `manga-garden-v1.2.3.zip`.
- O ZIP foi verificado: contém 77 arquivos, `manifest.json` na raiz com versão `1.2.3` e o ícone `icons/icon128.png`; tamanho de 35.000.688 bytes.
- `npm run lint` e `git diff --check` passaram.
- A criação da Release e o teste de download público permanecem pendentes: o repositório ainda precisa estar público e a CLI `gh` não está instalada neste ambiente.

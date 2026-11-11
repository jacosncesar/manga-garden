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

- A validação do build, do conteúdo do ZIP e do download público da Release permanece pendente.

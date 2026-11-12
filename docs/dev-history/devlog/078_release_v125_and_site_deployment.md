# Devlog 078: Publicação da v1.2.5 e deploy do site

## Data

2026-11-12

## Objetivo

Publicar a versão 1.2.5 da extensão com o código-fonte correspondente e atualizar o site Manga Garden sem publicar uma nova versão do Worker.

## Implementação

- Criado e enviado ao GitHub a tag `v1.2.5`, apontando para o commit com a localização espanhola do site e os READMEs em espanhol e inglês.
- Reconstruída a extensão com `npm run package`; o artefato contém 74 arquivos, incluindo `LICENSE`, `THIRD_PARTY_NOTICES.md` e `NOTICE.txt`.
- Publicada a GitHub Release `v1.2.5` com o ZIP da extensão.
- Feito deploy exclusivamente do diretório `site` no Cloudflare Pages; nenhum Worker foi publicado.
- Atualizado o histórico de versões nos READMEs para registrar a release e a inclusão dos avisos de terceiros.

## Validação

- A compilação e o empacotamento da extensão foram concluídos; `package.json` e `dist/manifest.json` indicam a versão `1.2.5`.
- Confirmados a release pública, o ZIP anexado e o download HTTP 200.
- Confirmados HTTP 200 para a página inicial, a política de privacidade e o mapa do pipeline publicados; a opção em espanhol está presente no site.
- Validado `git diff --check`.

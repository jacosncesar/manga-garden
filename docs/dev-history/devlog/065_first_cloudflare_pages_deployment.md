# Devlog 065: Primeira publicação do site no Cloudflare Pages

## Data

2026-11-11

## Objetivo

Publicar o site estático do Manga Garden e tornar o endereço público fácil de encontrar no README.

## Implementação

- Criado o projeto de Cloudflare Pages `manga-garden-translator`, com `main` como branch de produção.
- Publicada a pasta `site` por Direct Upload do Wrangler.
- Atualizado `npm run deploy:site` para funcionar no Windows e não substituir o mapa localizado em `site/pipeline` por uma cópia desatualizada de `docs/workflow.html`.
- Adicionado o endereço público do site ao README.

## Endereço

https://manga-garden-translator.pages.dev/

## Operação

Para publicar atualizações manualmente, autentique o Wrangler com `npx wrangler login` e execute `npm run deploy:site`. O workflow do GitHub Actions valida e compila a extensão, mas não publica o site.

## Validação

- Confirmado HTTP 200 para a página inicial, a política de privacidade, o mapa do fluxo e o script de localização.
- Verificados no site publicado os avisos de indisponibilidade da Chrome Web Store em inglês e português, sem links ativos para a loja.

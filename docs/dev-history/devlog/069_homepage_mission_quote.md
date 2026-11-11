# Devlog 069: Frase de propósito no destaque inicial

## Data

2026-11-11

## Objetivo

Exibir com destaque, no início da página, a frase “Que o idioma nunca seja uma barreira para alguém conhecer uma história que ama.”

## Implementação

- Adicionada a frase ao destaque principal, entre a identificação do produto e o título.
- Criado um estilo tipográfico próprio com destaque roxo, seguindo a identidade visual existente e adaptando a fonte a telas menores.
- Incluída a tradução para que a frase seja apresentada em português ou inglês conforme o idioma escolhido no site.

## Validação

- Conferidos o texto PT-BR e sua versão em inglês no site local.
- Verificado o destaque em larguras de celular e desktop.
- Executados `node --check site/js/i18n.js` e `git diff --check`.

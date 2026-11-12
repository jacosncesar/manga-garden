# Devlog 071: Atribuição de projeto no rodapé

## Data

2026-11-11

## Objetivo

Adicionar uma seção discreta de atribuição no rodapé do site, sem alterar a navegação nem o conteúdo principal.

## Implementação

- Incluída uma breve seção de créditos com localização em inglês e português.
- Adicionados links em nova aba para o repositório original e para a organização mantenedora.
- Mantida a aparência existente do rodapé e o arquivo `LICENSE` já presente no repositório.

## Validação

- A seção e os dois links foram verificados em inglês e português com JSDOM.
- `npm run lint` passou; foram exibidos avisos preexistentes em outros arquivos.
- `git diff --check` passou.

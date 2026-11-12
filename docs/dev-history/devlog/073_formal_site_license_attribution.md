# Devlog 073: Atribuição e licença em linguagem formal

## Data

2026-11-11

## Objetivo

Deixar mais explícitos no site o caráter derivado e independente do Manga Garden, sua licença e os caminhos para consultar o projeto original e o código-fonte.

## Implementação

- Reformulada a seção do rodapé para identificar o Manga Garden como trabalho independente e modificado baseado no Kites.
- Incluída uma declaração de ausência de afiliação, patrocínio ou endosso pela Unheat.
- Especificada a licença como GNU GPL versão 3 ou posterior, alinhada ao identificador `GPL-3.0-or-later` do projeto.
- Adicionados links para o projeto original, o código-fonte do Manga Garden e o texto da licença.
- Atualizado o resumo de licença e atribuição no README.
- Mantidas traduções em português e inglês e preservado o layout do rodapé.

## Observação

Esta redação é informativa e não constitui parecer jurídico nem certificação de conformidade. A distribuição deve continuar incluindo os avisos e o código-fonte correspondentes exigidos pela licença.

## Validação

- Rodapé e alternância de idioma verificados em inglês e português com JSDOM.
- Verificados os links para Kites, repositório do Manga Garden e licença.
- `npm run lint` e `git diff --check` passaram; o lint apresentou apenas avisos já existentes.

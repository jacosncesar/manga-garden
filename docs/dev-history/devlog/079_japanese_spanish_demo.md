# Devlog 079: Demonstração de japonês para espanhol

## Data

2026-11-12

## Objetivo

Adicionar a nova demonstração Pixiv de japonês para espanhol ao comparador visual do site e aos READMEs em todos os idiomas publicados.

## Implementação

- Normalizado o nome do arquivo de origem para remover um espaço acidental antes da extensão; os dois arquivos de imagem fornecidos foram preservados.
- Adicionada a demonstração `demo9` ao seletor da página inicial, depois das demonstrações existentes, com crédito Pixiv #144216246, idioma de destino espanhol, texto alternativo e miniatura próprios.
- Incluído o novo par de imagens por último na seção de demonstrações dos READMEs em português, inglês, espanhol, vietnamita, japonês e chinês simplificado.
- Adicionadas as traduções dos novos rótulos, créditos e textos alternativos em português e espanhol.

## Validação

- Verificados os arquivos `site/assets/demo9-imput.png` e `site/assets/demo9-thumb.png` e os caminhos locais dessas imagens nos seis READMEs.
- `node --check site/js/main.js`, `node --check site/js/i18n.js` e `git diff --check` concluídos sem erros; o lint não encontrou erros e manteve um aviso existente sobre um parâmetro `catch` não utilizado em `site/js/main.js`.
- Em JSDOM, validados a seleção da nova demonstração, a troca das imagens, a legenda Pixiv, os atributos acessíveis e o rótulo espanhol em português e espanhol.
- Confirmado que a nova demonstração é a última da seção de exemplos em cada README.

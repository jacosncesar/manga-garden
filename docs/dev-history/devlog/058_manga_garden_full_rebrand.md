# Devlog 058: Renomeação do projeto para Manga Garden

## Objetivo

Padronizar o nome do produto como Manga Garden na extensão, nas interfaces, nos recursos de desenvolvimento e na documentação.

## Alterações

- Atualizados o nome da extensão, títulos da interface, textos, seletores, identificadores internos, nomes dos pacotes e configurações de build/deploy.
- Renomeados arquivos de documentação, fluxo, apresentação e imagens promocionais para remover os nomes anteriores.
- Atualizados os links atuais para apontarem ao repositório configurado no Git.
- Criada migração do banco IndexedDB anterior para `MangaGardenDatabase`, mantendo a base anterior intacta.
- Criada migração das chaves de autenticação para os nomes novos; as credenciais são copiadas antes da remoção das chaves antigas.
- Mantido o reconhecimento do protocolo antigo de captura para jobs que ainda estejam na fila durante a atualização.

## Compatibilidade externa

- Mantida a chave do manifesto para preservar o ID da extensão e a configuração OAuth existente.
- Mantidos o identificador do modelo de tradução e o nome da namespace Durable Object para não quebrar contratos ou zerar estado remoto.
- O domínio do serviço hospedado e a publicação na Chrome Web Store ainda dependem de atualização nas respectivas plataformas. Nenhum deploy foi executado nesta alteração.

## Validação

- Suíte completa: 84 arquivos de teste e 871 testes passaram.
- Build de produção concluído; o manifesto gerado exibe “Manga Garden”.
- Lint concluído sem erros; o comando reportou avisos existentes.
- `git diff --check` sem erros.

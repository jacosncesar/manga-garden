# Devlog 075: Auditoria de avisos e fontes das releases

## Data

2026-11-11

## Objetivo

Verificar a preservação de avisos de origem e identificar o código-fonte público correspondente às versões distribuídas.

## Verificações

- O arquivo `LICENSE` local tem o mesmo Git blob SHA do arquivo `LICENSE` do repositório Kites (`f288702d2fa16d3cdf0035b15a9fcbc552cd88e7`).
- Os arquivos de código alterados nas tarefas recentes (`site/index.html` e `site/js/i18n.js`) não continham avisos de copyright próprios nas versões verificadas; não foi removido nenhum aviso desse tipo. `site/js/i18n.js` não tem arquivo homônimo no Kites atual.
- `THIRD_PARTY_NOTICES.md` existia no código-fonte, mas não era incluído no ZIP `v1.2.4`. O empacotador agora inclui esse documento, além de `LICENSE` e do aviso de release.
- O README registra que o histórico público de desenvolvimento começa em 2026-07-08 e liga as tags correspondentes às duas releases públicas auditadas.

## Releases públicas encontradas

- `v1.2.3`: tag e snapshot de código-fonte públicos. O ZIP publicado não inclui `LICENSE` nem `NOTICE.txt`; marcado no README como supersedido.
- `v1.2.4`: tag e snapshot de código-fonte públicos. O ZIP publicado inclui `LICENSE` e `NOTICE.txt`, mas não `THIRD_PARTY_NOTICES.md`; essa omissão será corrigida no próximo pacote.
- Tags locais `v1.0.2` a `v1.2.2` não aparecem entre as tags públicas do GitHub no momento da auditoria. A distribuição dessas versões fora do GitHub precisa ser confirmada antes de afirmar que todas têm fonte pública correspondente.

## Limites e observações

- Esta foi uma verificação dirigida aos arquivos alterados nas tarefas recentes e aos artefatos públicos de release, não uma comparação linha a linha de todo o repositório contra todas as revisões históricas do Kites.
- A página da Chrome Web Store para o ID atualmente presente no manifesto identifica o item como Kites. O campo `key` do manifesto é igual ao do Kites. Não alterado nesta auditoria por envolver a identidade da extensão e potencial impacto em instalações; requer decisão separada antes de uma publicação independente na Chrome Web Store.
- Esta auditoria técnica não constitui parecer jurídico.

## Validação

- `npm run package` concluiu; o ZIP v1.2.5 foi verificado e contém `manifest.json`, `LICENSE`, `THIRD_PARTY_NOTICES.md` e `NOTICE.txt`.
- `npm run lint` concluiu sem erros; reportou avisos já existentes em vários arquivos não relacionados a esta alteração.
- `git diff --check` concluiu sem erros.
- A versão 1.2.5 foi preparada localmente, mas não publicada. Antes de uma distribuição independente pela Chrome Web Store, é necessário resolver a identidade/chave da extensão descrita acima.

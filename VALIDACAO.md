# Verificação da entrega

Verificado em 19/10/2026, em Windows, com Node.js 22.22.3 e navegador Chromium do aplicativo.

## Verificações automatizadas

`npm test`: **17 testes passaram**, sem falhas.

Cobertura: 24 semanas, seis módulos, 96 horas, 240 minutos por semana, IDs únicos, referências válidas no conteúdo, cálculo de progresso, conclusão e reabertura, jornada completa, round-trip JSON, rejeição de backups inválidos, datas, armazenamento indisponível e proteção de dados corrompidos.

`npm run build`: build de produção concluído. Foi construído e servido também com `VITE_BASE_PATH=/rota-devops/` para verificar o cenário de subpasta usado no GitHub Pages.

## Fluxos conferidos no navegador

- Abertura do painel e navegação por hashes no build de produção.
- Quatro tarefas da primeira semana marcadas: 57% na semana, sem conclusão antecipada.
- Três critérios confirmados: 100% na semana e uma semana concluída.
- Checklists, anotações e evidências preservados após recarregar.
- Anotações e evidências exibidas no caderno de bordo.
- Busca por Terraform na trilha e filtro cloud na biblioteca.
- Tema claro aplicado e preservado após recarregar.
- Data inicial aplicada, mantida após recarregar e presente no JSON exportado.
- Exportação de um backup real pelo navegador e leitura do arquivo baixado.
- Cancelamento do reinício; reinício confirmado apenas dos dados criados durante o teste.
- Importação do backup com resumo e confirmação; restauração mantida após recarregar.
- Rejeição de backup com versão incompatível, preservando o estado anterior.
- Menu mobile aberto, navegação para a trilha e fechamento após escolher a tela.

Os dados de teste foram reiniciados ao final. Eles não estão incluídos no código nem no ZIP.

## Layout

Inspeção visual do painel escuro e da trilha clara em desktop. Em uma página de teste com iframes, foram conferidas as larguras nominais de 320, 360, 390, 768 e 960 pixels, em diferentes telas. A página de teste foi excluída da entrega.

As medições de largura do documento coincidiram com a área útil do viewport nos cenários testados, sem rolagem horizontal. Como o navegador de desktop reserva espaço para a barra de rolagem, a largura útil pode ser 15 pixels menor que a largura nominal do iframe.

Durante a revisão foram corrigidos o foco que deslocava a página inicial, a aplicação da data e o limite mínimo de largura que gerava rolagem horizontal em uma tela muito estreita.

## Limites da verificação

- Responsividade foi verificada em Chromium com viewports simulados; não houve teste em aparelho Android/iPhone físico ou Safari.
- O workflow foi preparado conforme a documentação oficial, mas não executado na conta GitHub do usuário. Publicação, políticas da conta e URL final dependem de enviar o repositório e habilitar Pages.
- Não há medição automática de estudo real, verificação externa das evidências ou sincronização em nuvem.
- Não foi feita uma auditoria completa de acessibilidade. A interface usa controles rotulados, foco visível, navegação por teclado, diálogo nativo e redução de animações conforme a preferência do sistema.
- Os testes validam a integridade dos IDs das referências; não garantem disponibilidade futura de sites externos.

Para repetir as verificações automatizadas, execute `npm ci`, `npm test` e `npm run build`. Para conferir a interface, execute `npm run dev` e use os fluxos acima com dados de teste.

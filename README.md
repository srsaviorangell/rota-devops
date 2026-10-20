# Rota — NOC, Infra & DevOps

Seu espaço de estudo para construir uma base prática em **24 semanas, 4 horas por semana, 96 horas no total**. Projeto React/Vite editável, em português, preparado para GitHub Pages.

## Começar no seu computador

Instale **Node.js 24 LTS** com npm. O projeto também foi validado com Node 22.22.3; o mínimo declarado é 22.12.0.

1. Extraia o ZIP.
2. Abra um terminal na pasta `rota-devops`, onde está `package.json`.
3. Execute:

```powershell
npm.cmd ci
npm.cmd run dev
```

Abra o endereço local mostrado no terminal. No macOS/Linux, use `npm` em vez de `npm.cmd`. Para encerrar o servidor, pressione `Ctrl+C`.

**Não abra `index.html` com duplo clique.** Este é um projeto React que precisa do servidor de desenvolvimento ou de um build servido por HTTP.

## O que você pode fazer

- **Visão geral:** progresso, próxima semana, atividades realizadas e carga estimada de conteúdo.
- **Minha trilha:** seis módulos, mapa com 24 estações clicáveis, busca e filtros de status.
- **Semana:** objetivo, contexto operacional, quatro exercícios, entrega, três critérios de avaliação, anotações e evidências.
- **Caderno de bordo:** todas as notas e evidências em uma única visão.
- **Biblioteca:** 15 referências oficiais, filtradas por módulo.
- **Ajustes:** tema claro/escuro, data inicial, exportação/importação e reinício com confirmação.
- Layout responsivo, menu mobile, foco visível, controles nativos e respeito à preferência de movimento reduzido.

Tudo começa **zerado**, sem progresso fictício. As fontes tipográficas são empacotadas junto com a aplicação; não há dependência de Google Fonts em tempo de execução.

## Como estudar

| Mês | Semanas | Foco                                                | Entrega principal                                 |
| --- | ------- | --------------------------------------------------- | ------------------------------------------------- |
| 1   | 01–04   | Linux, permissões, SSH, serviços, logs, backup      | Servidor documentado e restauração demonstrada    |
| 2   | 05–08   | TCP/IP, sub-redes, DNS, VLAN, NAT, investigação NOC | Runbooks e três incidentes simulados              |
| 3   | 09–12   | Git, Bash, Python e integração                      | Kit de automação NOC com testes                   |
| 4   | 13–16   | Docker, Compose, CI/CD e rollback                   | Aplicação com pipeline e reversão demonstrada     |
| 5   | 17–20   | Prometheus, Grafana, alertas e Ansible              | Serviço observado e configurado como código       |
| 6   | 21–24   | Cloud, Terraform local e projeto final              | Mini-NOC reproduzível e apresentação de portfólio |

Cada semana tem quatro blocos: **45 min para entender + 75 min para praticar + 90 min para investigar + 30 min para consolidar**. Você pode dividi-los em sessões menores ou dois encontros de duas horas. Não há bloqueio de semanas nem cobrança automática de atraso.

Em **Ajustes**, escolha a data de início e clique em **Aplicar data**. Cada semana ocupa sete dias no calendário. Vinte e quatro semanas correspondem a aproximadamente seis meses, não a seis meses civis exatos.

O ponto de partida é Linux básico. Pratique em uma VM/ambiente de laboratório; WSL2 serve para os primeiros exercícios. Para as partes de serviços, rede e SSH, o roteiro usa uma VM. O curso não executa os exercícios por você: ele organiza a prática e registra sua autoavaliação.

Cloud é estudada primeiro como arquitetura; Terraform usa Docker local. **Não é necessário contratar recursos cloud.** Os exercícios aproveitam as entregas anteriores para caber nas 96 horas. A conclusão demonstra uma base prática, não equivale a experiência profissional de produção ou garantia de emprego.

## O que o progresso significa

- Uma tarefa marcada soma sua duração **estimada** ao conteúdo percorrido. O site não cronometra horas reais.
- Uma semana só está concluída quando suas **quatro tarefas e três critérios** estão marcados.
- Progresso global = itens marcados ÷ 168, arredondado para o inteiro mais próximo.
- A próxima semana sugerida é a primeira ainda não concluída.
- Notas e evidências são opcionais; não alteram o percentual.
- Você pode desmarcar itens. Ao desfazer um critério, a semana volta a ficar incompleta.

## Seus dados e o backup

O estado é salvo automaticamente na chave `rota-devops-v1` do **localStorage**. Isso inclui checklists, notas, evidências, tema e data inicial.

Os dados pertencem à **origem do endereço** (protocolo, domínio e porta) e ao perfil do navegador. Um localhost, um domínio do GitHub Pages e outro navegador têm armazenamentos separados. Sites no mesmo domínio e porta compartilham a chave, mesmo se estiverem em subpastas diferentes: evite hospedar duas cópias independentes do Rota na mesma origem sem alterar `STORAGE_KEY` e a leitura inicial em `index.html`.

Para mudar de aparelho ou publicar seu progresso local:

1. No site de origem, vá a **Ajustes & backup → Exportar progresso**.
2. Guarde o arquivo JSON.
3. Abra o Rota no novo endereço/aparelho.
4. Use **Importar backup**, confira o resumo e confirme a substituição.

A importação valida versão, IDs e tipos. Ela **substitui** os dados atuais; não faz mesclagem. Arquivos inválidos são rejeitados. O limite é 2 MB e cada campo de nota/evidência aceita até 20 mil caracteres. Faça uma exportação antes de importar outro registro.

Não há conta, backend nem sincronização entre abas/aparelhos. Use uma aba por vez. Limpar os dados do navegador, usar uma janela privada ou bloquear armazenamento pode impedir a persistência. Se salvar falhar, a interface avisa e mantém a sessão em memória para exportação. Dados anteriores inválidos não são sobrescritos automaticamente; importar um backup válido ou confirmar um reinício libera a gravação novamente.

As anotações são texto, não HTML executável. Links nas evidências ficam em texto para edição/cópia; as referências da biblioteca são links externos clicáveis. Evite registrar senhas ou dados de clientes.

## Publicar no GitHub Pages

O projeto está preparado para publicação. A entrega **não cria um repositório nem publica na sua conta automaticamente**.

### 1. Enviar o projeto

Crie um repositório no GitHub, por exemplo `rota-devops`. Copie **o conteúdo desta pasta** para a raiz do repositório: o `package.json` e a pasta `.github` precisam estar na raiz, não dentro de outra pasta `rota-devops`.

Você pode usar GitHub Desktop para publicar essa pasta. Se preferir terminal, em um repositório remoto vazio:

```powershell
git init
git add .
git commit -m "Cria Rota de estudos NOC e DevOps"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git
git push -u origin main
```

Substitua os dois nomes pelo usuário e repositório reais. Não envie `node_modules`, `.env` nem backups pessoais; o `.gitignore` já exclui dependências e arquivos locais usuais. Se já existe um repositório com histórico, integre os arquivos nele sem recriar ou forçar o histórico.

### 2. Habilitar Pages

No repositório, abra **Settings → Pages → Build and deployment → Source → GitHub Actions**. A disponibilidade de Pages em repositórios privados depende do seu plano GitHub.

### 3. Executar a publicação

O arquivo `.github/workflows/deploy.yml` é executado a cada push em `main`. Se o primeiro push ocorreu antes de habilitar Pages, abra **Actions → Publicar Rota no GitHub Pages → Run workflow**.

O workflow instala as versões do lockfile, executa os 17 testes, constrói o site, envia `dist` como artefato e publica no ambiente `github-pages`. Ao terminar com sucesso, o job de deploy apresenta a URL real.

Exemplo de URL de projeto: `https://SEU-USUARIO.github.io/SEU-REPOSITORIO/`.

### Por que existe um base path?

O Vite precisa saber onde procurar JavaScript, CSS, fontes e ícone. Em Pages de projeto, a raiz do site é uma subpasta:

| Destino                          | `base` efetivo  |
| -------------------------------- | --------------- |
| `usuario.github.io/repositorio/` | `/repositorio/` |
| `usuario.github.io/`             | `/`             |
| Domínio próprio na raiz          | `/`             |

O workflow usa `actions/configure-pages` e passa seu `base_path` real para `VITE_BASE_PATH`. Você pode renomear o repositório sem editar um nome fixo no código. Para domínio próprio, configure o domínio em Pages antes de reconstruir o site.

**Teste manual de uma subpasta no PowerShell:**

```powershell
$env:VITE_BASE_PATH = "/meu-repositorio/"
npm.cmd run build
npm.cmd run preview -- --base /meu-repositorio/
```

Abra o caminho `/meu-repositorio/` no endereço mostrado. Após encerrar com `Ctrl+C`, limpe a variável:

```powershell
Remove-Item Env:VITE_BASE_PATH
```

Para um build local na raiz, basta `npm.cmd run build` sem a variável. Também é possível copiar `.env.example` para `.env` e ajustar `VITE_BASE_PATH` para builds manuais.

### Por que as URLs têm `#`?

A navegação usa hashes, como `#/semana/8`. O servidor recebe apenas o caminho do site; o React escolhe a tela depois. Isso permite recarregar e compartilhar uma semana sem precisar de regras de servidor ou de uma página 404 customizada no Pages.

Referências oficiais usadas para a configuração: [deploy de Vite no GitHub Pages](https://vite.dev/guide/static-deploy.html#github-pages), [workflows personalizados do GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages) e [saídas de configure-pages](https://github.com/actions/configure-pages/blob/main/action.yml).

## Entenda e edite o projeto

```text
rota-devops/
├── .github/workflows/deploy.yml   # Build, testes e deploy no Pages
├── public/favicon.svg            # Ícone do site
├── src/
│   ├── data/curriculum.js        # Módulos, 24 semanas e referências
│   ├── lib/progress.js           # Validação, cálculos e calendário
│   ├── lib/useProgress.js        # Estado React e persistência
│   ├── App.jsx                   # Telas, navegação e componentes
│   ├── main.jsx                  # Inicialização e fontes locais
│   └── styles.css                # Temas, layout e responsividade
├── tests/progress.test.js        # Testes de regras e dados
├── index.html
├── vite.config.js
├── package.json
├── package-lock.json
├── VALIDACAO.md
└── README.md
```

**Para editar o estudo:** comece em `src/data/curriculum.js`. Cada semana define título, meta, contexto, quatro tarefas detalhadas, entrega, critérios, fontes e tags. Os IDs das tarefas e critérios ligam o conteúdo ao progresso; preserve-os ao mudar apenas um texto. Alterar o número de tarefas/semanas exige atualizar os totais, a regra de cálculo e os testes, além de planejar a migração do backup.

**Para mudar cores:** ajuste as variáveis de `:root` e `:root[data-theme=light]` em `src/styles.css`. O tema altera tokens comuns, mantendo as duas aparências consistentes.

**Fluxo de uma alteração de progresso:** checkbox → estado React → recálculo dos indicadores → gravação no localStorage. As regras puras ficam fora dos componentes para serem testadas sem abrir um navegador. O backup tem versão para tornar futuras migrações explícitas.

**Por que não Three.js?** O objetivo é selecionar semanas e entender progresso. SVG/CSS oferecem a ilustração e as estações interativas com menos complexidade, melhor comportamento no celular e controles acessíveis pelo teclado. Não há necessidade de cena 3D para essa tarefa.

## Verificar alterações

```powershell
npm.cmd test
npm.cmd run build
npm.cmd run preview
```

Os testes verificam duração/conteúdo do plano, integridade de IDs, cálculos de progresso, conclusão/reabertura, datas, exportação/importação e falhas de armazenamento. A conferência de UI realizada está descrita em `VALIDACAO.md`.

`vite preview` serve para conferir o build local; a hospedagem de produção é o GitHub Pages. O ZIP contém o código e o lockfile, sem `node_modules` e sem um build amarrado a um nome de repositório. O workflow gera o build correto na publicação.

## Problemas comuns

- **Tela vazia ou assets com 404:** confira a URL/subpasta, o `VITE_BASE_PATH` e se o último workflow concluiu. Não publique o `index.html` da raiz como se já fosse o build.
- **Workflow não inicia:** confirme branch `main`, `.github/workflows/deploy.yml` na raiz e Actions habilitado.
- **Erro ao configurar Pages:** habilite Pages com source GitHub Actions e execute novamente; confira as políticas da sua organização.
- **Progresso sumiu após publicar:** exporte no localhost e importe no domínio publicado; são origens diferentes.
- **PowerShell bloqueia `npm.ps1`:** use `npm.cmd` conforme os exemplos, sem alterar a política global do sistema.
- **Porta ocupada:** use o endereço alternativo mostrado pelo Vite ou `npm.cmd run dev -- --port 5174`.

## Créditos

Interface e plano de estudos criados para este projeto. Ícones: Lucide, licença ISC. Fontes: Manrope e IBM Plex Mono via Fontsource, licenças OFL. React e Vite possuem suas próprias licenças. As referências externas pertencem às respectivas organizações e podem mudar; nenhuma página externa foi copiada para o projeto.

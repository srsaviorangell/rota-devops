// O conteúdo fica separado da interface para facilitar a edição do plano.
export const modules = [
  {
    id: "linux",
    title: "Fundamentos Linux",
    short: "Linux",
    subtitle: "O terminal é o seu ponto de partida.",
    icon: "terminal",
    color: "#c8f26f",
    outcome: "Um servidor Linux documentado e recuperável.",
  },
  {
    id: "networks",
    title: "Redes & operação NOC",
    short: "Redes & NOC",
    subtitle: "Do pacote à investigação de incidentes.",
    icon: "network",
    color: "#75c9c0",
    outcome: "Um runbook de diagnóstico com evidências.",
  },
  {
    id: "automation",
    title: "Automação & Git",
    short: "Bash, Python & Git",
    subtitle: "Transforme tarefas repetidas em ferramentas.",
    icon: "code",
    color: "#b5abed",
    outcome: "Um kit de automação versionado e testado.",
  },
  {
    id: "delivery",
    title: "Containers & entrega",
    short: "Docker & CI/CD",
    subtitle: "Da aplicação local ao deploy reproduzível.",
    icon: "box",
    color: "#f4b779",
    outcome: "Uma aplicação em containers com pipeline.",
  },
  {
    id: "reliability",
    title: "Observabilidade & Ansible",
    short: "Observar & automatizar",
    subtitle: "Enxergue falhas. Reproduza soluções.",
    icon: "activity",
    color: "#e5a4b9",
    outcome: "Um serviço monitorado e configurado como código.",
  },
  {
    id: "cloud",
    title: "Cloud & projeto final",
    short: "Cloud & Terraform",
    subtitle: "Conecte tudo em um projeto de portfólio.",
    icon: "cloud",
    color: "#88b8ee",
    outcome: "Um laboratório completo, demonstrável e documentado.",
  },
];

export const resources = [
  {
    id: "linux-cli",
    title: "Primeiros passos no terminal",
    source: "Ubuntu",
    url: "https://ubuntu.com/tutorials/command-line-for-beginners",
    type: "Tutorial",
    module: 0,
    description:
      "Arquivos, diretórios, comandos e pipes. Comece pelas seções práticas.",
  },
  {
    id: "ubuntu",
    title: "Manual do servidor Linux",
    source: "Ubuntu Server",
    url: "https://documentation.ubuntu.com/server/",
    type: "Documentação",
    module: 0,
    description:
      "Consulte as partes de usuários, SSH, serviços, backup e redes conforme o laboratório.",
  },
  {
    id: "wireshark",
    title: "Enxergue o tráfego de rede",
    source: "Wireshark",
    url: "https://www.wireshark.org/docs/wsug_html_chunked/",
    type: "Guia",
    module: 1,
    description:
      "Captura, filtros e análise. Use apenas tráfego do seu laboratório.",
  },
  {
    id: "networks",
    title: "Redes no Linux",
    source: "Ubuntu Server",
    url: "https://documentation.ubuntu.com/server/",
    type: "Documentação",
    module: 1,
    description:
      "No índice, abra Networking: endereçamento, rotas, DNS e configuração de rede.",
  },
  {
    id: "bash",
    title: "Manual de referência Bash",
    source: "GNU",
    url: "https://www.gnu.org/software/bash/manual/bash.html",
    type: "Referência",
    module: 2,
    description:
      "Variáveis, condições, loops, redirecionamento e códigos de saída.",
  },
  {
    id: "python",
    title: "Python em português",
    source: "Python",
    url: "https://docs.python.org/pt-br/3/tutorial/",
    type: "Tutorial",
    module: 2,
    description:
      "Controle de fluxo, estruturas de dados, arquivos, módulos e exceções.",
  },
  {
    id: "git",
    title: "Pro Git em português",
    source: "Git",
    url: "https://git-scm.com/book/pt-br/v2",
    type: "Livro aberto",
    module: 2,
    description:
      "Leia os capítulos de fundamentos e ramificações enquanto pratica no repositório.",
  },
  {
    id: "docker",
    title: "Comece com containers",
    source: "Docker",
    url: "https://docs.docker.com/get-started/",
    type: "Tutorial",
    module: 3,
    description:
      "Imagens, containers, volumes, redes e aplicações com múltiplos serviços.",
  },
  {
    id: "actions",
    title: "Seu primeiro pipeline",
    source: "GitHub Actions",
    url: "https://docs.github.com/pt/actions",
    type: "Documentação",
    module: 3,
    description: "Workflows, jobs, runners, artefatos e variáveis de ambiente.",
  },
  {
    id: "prometheus",
    title: "Métricas com Prometheus",
    source: "Prometheus",
    url: "https://prometheus.io/docs/introduction/overview/",
    type: "Documentação",
    module: 4,
    description:
      "Entenda o modelo de coleta e avance para primeiros passos e PromQL.",
  },
  {
    id: "grafana",
    title: "Dashboards que ajudam a operar",
    source: "Grafana",
    url: "https://grafana.com/docs/grafana/latest/fundamentals/getting-started/",
    type: "Tutorial",
    module: 4,
    description:
      "Fonte de dados, painéis, consultas e alertas para o seu serviço.",
  },
  {
    id: "ansible",
    title: "Primeiros passos com Ansible",
    source: "Ansible",
    url: "https://docs.ansible.com/projects/ansible/latest/getting_started/index.html",
    type: "Tutorial",
    module: 4,
    description: "Inventário, conexão, playbooks e automação declarativa.",
  },
  {
    id: "cloud",
    title: "Conceitos e serviços de cloud",
    source: "AWS",
    url: "https://docs.aws.amazon.com/whitepapers/latest/aws-overview/introduction.html",
    type: "Visão geral",
    module: 5,
    description:
      "Use como referência de conceitos. O plano não exige criar uma conta paga.",
  },
  {
    id: "terraform",
    title: "Infraestrutura como código",
    source: "HashiCorp",
    url: "https://developer.hashicorp.com/terraform/intro",
    type: "Documentação",
    module: 5,
    description:
      "Entenda configuração, estado e o ciclo plan → apply → destroy.",
  },
  {
    id: "terraform-lab",
    title: "Terraform com Docker local",
    source: "HashiCorp",
    url: "https://developer.hashicorp.com/terraform/tutorials/docker-get-started",
    type: "Laboratório",
    module: 5,
    description:
      "Pratique infraestrutura como código localmente, sem cobrança de um provedor cloud.",
  },
];

const durations = [45, 75, 90, 30];
const kinds = ["Entender", "Praticar", "Investigar", "Consolidar"];
function week(
  id,
  title,
  goal,
  context,
  tasks,
  deliverable,
  criteria,
  resourceIds,
  tags,
) {
  return {
    id,
    module: Math.floor((id - 1) / 4),
    title,
    goal,
    context,
    tasks: tasks.map(([title, detail], i) => ({
      id: `w${id}-t${i + 1}`,
      title,
      detail,
      minutes: durations[i],
      kind: kinds[i],
    })),
    deliverable,
    criteria: criteria.map((text, i) => ({ id: `w${id}-c${i + 1}`, text })),
    resourceIds,
    tags,
  };
}

export const weeks = [
  week(
    1,
    "Seu primeiro laboratório Linux",
    "Preparar um ambiente Linux e navegar pelo sistema sem depender da interface gráfica.",
    "O mesmo terminal usado para explorar arquivos será sua ferramenta para investigar um servidor no NOC.",
    [
      [
        "Entenda o ambiente",
        "Leia sobre shell, diretório pessoal e caminhos absolutos e relativos. Desenhe a diferença entre o computador hospedeiro e uma máquina virtual.",
      ],
      [
        "Prepare sua bancada",
        "Use uma VM Ubuntu com rede NAT e snapshot inicial. No terminal, execute pwd, ls -la, cd, mkdir e cp dentro de ~/lab-noc. Registre a versão do sistema e os recursos atribuídos. Se já usa WSL2, ele serve para esta semana; reserve uma VM para serviços e rede.",
      ],
      [
        "Encontre e organize arquivos",
        "Crie pastas docs, logs e backup; escreva um arquivo com echo; localize-o com find e leia com cat e less. Copie e renomeie arquivos de teste. Explique o que mudou após cada operação.",
      ],
      [
        "Registre o que aprendeu",
        "Crie um diário com dez comandos, a finalidade de cada um e um exemplo executado. Anote uma dúvida e a resposta encontrada na documentação.",
      ],
    ],
    "Diário de laboratório com ambiente, árvore de pastas e dez comandos demonstrados.",
    [
      "Navego por caminhos absolutos e relativos sem copiar um roteiro.",
      "Crio, localizo, copio e leio arquivos dentro do laboratório.",
      "Explico a diferença entre host, VM, terminal e shell.",
    ],
    ["linux-cli", "ubuntu"],
    ["Terminal", "Laboratório", "Fundamentos"],
  ),
  week(
    2,
    "Usuários, permissões & SSH",
    "Controlar quem pode acessar arquivos e conectar ao laboratório com SSH.",
    "Um erro de permissão pode parecer indisponibilidade. Aprenda a verificar a identidade e o acesso antes de alterar o serviço.",
    [
      [
        "Leia as permissões",
        "Estude proprietário, grupo e outros; compare leitura, escrita e execução em arquivos e diretórios. Traduza rwxr-x--- para modo numérico.",
      ],
      [
        "Monte um acesso mínimo",
        "Na VM, crie um usuário de estudo e uma pasta compartilhada por grupo. Teste chmod, chown, id e sudo. Registre uma tentativa permitida e outra negada; evite permissões amplas como 777.",
      ],
      [
        "Conecte e investigue",
        "Instale/configure OpenSSH na VM e conecte do host por chave. Confira a impressão digital no primeiro acesso. Compare falha de autenticação com porta inacessível nos logs; mantenha o console da VM disponível.",
      ],
      [
        "Documente os acessos",
        "Desenhe usuário → grupo → pasta e escreva o passo a passo da conexão. Guarde apenas a chave pública no material de estudo; a privada fica fora do portfólio.",
      ],
    ],
    "Matriz de permissões e conexão SSH local documentada.",
    [
      "Justifico as permissões escolhidas para cada usuário.",
      "Demonstro acesso por chave e uma tentativa negada.",
      "Diferencio problema de autenticação de falha de conectividade.",
    ],
    ["ubuntu", "linux-cli"],
    ["Permissões", "SSH", "Segurança"],
  ),
  week(
    3,
    "Processos, serviços & logs",
    "Diagnosticar o estado de um serviço usando processos, portas e registros.",
    "“O site caiu” é um sintoma. Processo, porta e log ajudam a localizar a falha sem reiniciar tudo.",
    [
      [
        "Conheça o ciclo de um serviço",
        "Estude PID, processo, serviço e systemd. Compare iniciar agora com habilitar na inicialização. Leia as opções básicas de ps, top, systemctl e journalctl.",
      ],
      [
        "Sirva uma página local",
        "Instale Nginx na VM, verifique systemctl status, a porta com ss -lntp e a resposta com curl. Identifique o processo e os arquivos de log. Salve os três tipos de evidência.",
      ],
      [
        "Simule uma indisponibilidade",
        "Pare apenas o Nginx do laboratório. Observe curl, ss e journalctl; formule uma hipótese antes de reiniciar. Reative o serviço e compare as evidências com o estado anterior.",
      ],
      [
        "Escreva um mini-runbook",
        "Registre sintoma, comandos de investigação, causa simulada, recuperação e teste de sucesso. Inclua a diferença entre serviço ativo e aplicação saudável.",
      ],
    ],
    "Runbook de indisponibilidade do Nginx com evidências antes/depois.",
    [
      "Localizo PID, porta e logs do serviço.",
      "Recupero a falha simulada e confirmo uma resposta HTTP.",
      "Explico por que active não prova saúde da aplicação.",
    ],
    ["ubuntu"],
    ["systemd", "Logs", "Troubleshooting"],
  ),
  week(
    4,
    "Disco, backup & primeiro desafio",
    "Restaurar uma configuração e validar a operação do servidor.",
    "Backup só oferece confiança quando você consegue restaurá-lo e demonstrar o resultado.",
    [
      [
        "Entenda capacidade e restauração",
        "Compare df e du; identifique sistema de arquivos, espaço disponível e consumo por pasta. Estude tar e a diferença entre snapshot e backup.",
      ],
      [
        "Crie um backup verificável",
        "Faça um arquivo tar da página e de uma configuração de teste do laboratório. Liste o conteúdo e calcule um checksum. Guarde a cópia fora da pasta original.",
      ],
      [
        "Enfrente o desafio Linux",
        "Renomeie a página de teste para simular perda, restaure em outra pasta e compare o conteúdo. Recoloque a versão válida e confirme HTTP, processo, porta e permissões. Não preencha discos nem altere dados reais.",
      ],
      [
        "Feche o primeiro módulo",
        "Consolide ambiente, acessos, runbook e restauração em um documento. Explique em voz alta, por três minutos, como recuperaria o servidor.",
      ],
    ],
    "Dossiê Linux: instalação, acesso, diagnóstico e restauração demonstrada.",
    [
      "Distingo espaço do filesystem e tamanho de um diretório.",
      "Restauro os arquivos e verifico integridade e serviço.",
      "Apresento o laboratório sem depender de comandos decorados.",
    ],
    ["ubuntu"],
    ["Backup", "Disco", "Desafio mensal"],
  ),
  week(
    5,
    "TCP/IP, sub-redes & caminho do pacote",
    "Explicar como um pacote sai de um host e alcança outra rede.",
    "A análise de rede começa com endereço, máscara e rota. O objetivo é justificar o caminho, não apenas testar ping.",
    [
      [
        "Conecte as camadas",
        "Revise Ethernet, ARP, IPv4, TCP, UDP e ICMP. Separe endereço MAC, endereço IP e porta. Desenhe o caminho host → gateway → servidor.",
      ],
      [
        "Pratique endereçamento",
        "Calcule rede, broadcast e hosts utilizáveis em quatro exemplos /24, /25, /26 e /30. Confira os cálculos com Python ou uma calculadora. Examine ip address, ip route e ip neigh na VM.",
      ],
      [
        "Siga um pacote",
        "Compare ping ao gateway com ping a um destino autorizado e consulta da rota. Capture ARP/ICMP apenas no laboratório e identifique origem/destino. Registre quando um firewall pode impedir resposta sem provar queda.",
      ],
      [
        "Desenhe sua topologia",
        "Produza um diagrama com redes, máscara, gateway e função dos nós. Use endereços fictícios ao publicar e explique quatro decisões de endereçamento.",
      ],
    ],
    "Topologia do laboratório e tabela de quatro sub-redes calculadas.",
    [
      "Acerto rede, broadcast e faixa nos quatro exercícios.",
      "Explico a decisão de enviar ao gateway ou à rede local.",
      "Não uso ausência de resposta ICMP como prova isolada de falha.",
    ],
    ["networks", "wireshark"],
    ["TCP/IP", "Sub-redes", "Roteamento"],
  ),
  week(
    6,
    "DNS, DHCP & teste por camadas",
    "Separar falha de resolução de nomes, conectividade e serviço.",
    "Quando um nome não resolve, trocar rotas sem evidência pode esconder a causa. Teste uma camada de cada vez.",
    [
      [
        "Revise os serviços de rede",
        "Descreva a função do DHCP e os registros DNS A, AAAA e CNAME. Compare servidor autoritativo, resolvedor recursivo, cache e TTL.",
      ],
      [
        "Observe consultas e endereços",
        "Use dig ou nslookup para comparar nomes válidos e inexistentes. Veja endereço, gateway e DNS fornecidos à VM. Capture uma consulta DNS do seu próprio teste.",
      ],
      [
        "Monte três diagnósticos",
        "Teste um nome inexistente, uma porta local fechada e uma página HTTP válida. Compare resolução, conexão TCP e resposta HTTP. Para HTTPS, explique por que acessar somente o IP pode falhar por certificado ou host virtual.",
      ],
      [
        "Transforme testes em decisão",
        "Escreva uma árvore com perguntas: há endereço? rota? DNS? porta? resposta da aplicação? Anexe a evidência de cada cenário.",
      ],
    ],
    "Árvore de diagnóstico com três falhas ou estados diferenciados.",
    [
      "Diferencio NXDOMAIN de timeout de conexão.",
      "Identifico quais dados vêm de DHCP e quais vêm de DNS.",
      "Explico resolução de nomes separadamente de acesso ao serviço.",
    ],
    ["networks", "wireshark"],
    ["DNS", "DHCP", "Diagnóstico"],
  ),
  week(
    7,
    "VLANs, NAT & análise de tráfego",
    "Relacionar segmentação e tradução de endereços às evidências de tráfego.",
    "NOC exige reconhecer onde termina uma rede e onde o tráfego é traduzido, sem confundir isso com DNS.",
    [
      [
        "Desenhe isolamento e tradução",
        "Estude porta access/trunk e marcação 802.1Q. Compare NAT, PAT e CGNAT conceitualmente. Desenhe duas VLANs e a função do roteamento entre elas.",
      ],
      [
        "Inspecione uma conexão",
        "Na VM NAT, capture uma conexão HTTP ao serviço de teste. Identifique SYN, SYN-ACK, ACK e encerramento. Compare o endereço da VM com o endereço do host e explique a tradução prevista.",
      ],
      [
        "Investigue latência e perda",
        "Em uma VM descartável, ou com capturas de exemplo do Wireshark, observe retransmissões e tempo entre pacotes. Registre hipótese e limites da captura. Não aplique mudanças de VLAN na rede de trabalho.",
      ],
      [
        "Escreva a análise",
        "Anote cinco pacotes relevantes, o que demonstram e o que não demonstram. Inclua um diagrama das VLANs e um exemplo de tradução de porta.",
      ],
    ],
    "Análise comentada de captura e diagrama de segmentação/NAT.",
    [
      "Reconheço o handshake TCP e uma retransmissão.",
      "Explico access, trunk e comunicação entre VLANs.",
      "Separo observação da captura de hipótese sobre a causa.",
    ],
    ["wireshark", "networks"],
    ["VLAN", "NAT", "Wireshark"],
  ),
  week(
    8,
    "Plantão NOC: da falha ao runbook",
    "Conduzir uma investigação reproduzível e comunicar impacto e recuperação.",
    "O resultado de um plantão não é apenas recuperar o serviço: é deixar evidências úteis para a próxima pessoa.",
    [
      [
        "Defina uma rotina de incidente",
        "Estude sintoma, impacto, severidade, linha do tempo, hipótese e evidência. Escolha como registrar início, detecção, mitigação e fim.",
      ],
      [
        "Prepare três cenários",
        "No laboratório, planeje falha de DNS, serviço parado e permissão de arquivo incorreta. Para cada um, descreva resultado esperado e forma de restaurar o estado inicial.",
      ],
      [
        "Faça um plantão simulado",
        "Execute os cenários um por vez. Investigue com o roteiro por camadas, recupere e meça o tempo. Em 90 minutos, busque concluir os três, explicando cada hipótese descartada.",
      ],
      [
        "Faça a passagem de turno",
        "Escreva um resumo com impacto, causa demonstrada, ação, validação e pendências. Remova nomes de clientes, credenciais e endereços de produção.",
      ],
    ],
    "Três relatórios curtos de incidente e um runbook reutilizável.",
    [
      "Recupero os três cenários e valido o serviço após cada um.",
      "Minha linha do tempo distingue observação, hipótese e causa.",
      "Outra pessoa consegue seguir meu runbook.",
    ],
    ["networks", "ubuntu"],
    ["Incidentes", "Runbook", "Desafio mensal"],
  ),
  week(
    9,
    "Git: dê histórico ao laboratório",
    "Versionar documentação e scripts com mudanças pequenas e recuperáveis.",
    "Histórico e revisão tornam uma automação compreensível, inclusive quando uma mudança falha.",
    [
      [
        "Entenda o ciclo do Git",
        "Diferencie diretório de trabalho, staging, commit e remoto. Leia os capítulos iniciais do Pro Git e explique o que um commit representa.",
      ],
      [
        "Versione o seu material",
        "Crie um repositório para o laboratório, README e .gitignore. Faça três commits pequenos com mensagens claras. Confira status, diff e log antes e depois.",
      ],
      [
        "Trabalhe em uma branch",
        "Crie uma branch de documentação, altere o runbook, revise o diff e faça merge. Provoque um conflito em um arquivo descartável e resolva. Use revert para desfazer um commit de teste.",
      ],
      [
        "Organize o portfólio",
        "Revise arquivos antes de publicar em um remoto opcional. Confirme ausência de chaves, senhas, logs de clientes e arquivos grandes. Escreva instruções para reproduzir o lab.",
      ],
    ],
    "Repositório com README, commits, branch integrada e um revert explicado.",
    [
      "Explico staging e commit usando meu próprio histórico.",
      "Resolvo o conflito de teste sem perder conteúdo desejado.",
      "Meu .gitignore exclui segredos e artefatos locais.",
    ],
    ["git"],
    ["Git", "Versionamento", "Portfólio"],
  ),
  week(
    10,
    "Bash: automatize uma verificação",
    "Criar um script de saúde com entradas, saída clara e códigos de erro.",
    "Uma automação de operação precisa deixar claro se houve sucesso, falha do alvo ou erro no próprio script.",
    [
      [
        "Aprenda o essencial de shell",
        "Leia variáveis, argumentos, aspas, if, loops e exit codes. Explique por que um caminho com espaços precisa de aspas.",
      ],
      [
        "Escreva um health check",
        "Crie um script que consulte um endpoint do laboratório com curl e timeout. Receba a URL por argumento, registre horário/status e termine com código diferente de zero em falhas.",
      ],
      [
        "Teste entradas e falhas",
        "Execute com URL válida, porta fechada, argumento ausente e destino que demora. Compare stdout, stderr e código de saída. Não use laços sem intervalo nem destinos de terceiros.",
      ],
      [
        "Documente o contrato",
        "Adicione exemplos de uso e tabela de códigos de saída. Versione o script e explique quais falhas ele detecta e quais ficam fora do escopo.",
      ],
    ],
    "Script Bash de saúde com quatro cenários de teste registrados.",
    [
      "Valido argumentos e uso timeout.",
      "Meu script retorna erro quando a verificação falha.",
      "Explico cada linha, inclusive aspas e redirecionamentos.",
    ],
    ["bash", "git"],
    ["Bash", "Health check", "Automação"],
  ),
  week(
    11,
    "Python: transforme logs em informação",
    "Ler dados de operação e gerar um resumo sem esconder entradas inválidas.",
    "O valor do script está em transformar muitos eventos em uma informação verificável.",
    [
      [
        "Conheça as estruturas básicas",
        "Estude listas, dicionários, funções, leitura de arquivo e exceções. Crie um CSV fictício com host, status e duração; não use dados de clientes.",
      ],
      [
        "Crie um analisador",
        "Com csv da biblioteca padrão, conte sucessos e falhas por host e calcule a média de duração dos registros válidos. Separe leitura, processamento e saída em funções simples.",
      ],
      [
        "Teste casos reais de erro",
        "Use arquivo vazio, linha inválida e dez registros com resultado calculado à mão. Gere um JSON e confira contagens e médias. Informe linhas rejeitadas em vez de ignorá-las silenciosamente.",
      ],
      [
        "Explique o resultado",
        "Escreva README com formato de entrada, saída e limitações. Acrescente testes com unittest para os cálculos e erros que você encontrou.",
      ],
    ],
    "Analisador CSV → JSON com amostra fictícia e testes dos resultados.",
    [
      "As contagens e médias coincidem com o cálculo manual.",
      "Arquivo vazio e linha inválida têm comportamento definido.",
      "Minhas funções separam entrada, processamento e apresentação.",
    ],
    ["python", "git"],
    ["Python", "CSV & JSON", "Testes"],
  ),
  week(
    12,
    "Seu kit de automação NOC",
    "Unir coleta, análise e documentação em uma ferramenta reproduzível.",
    "Uma ferramenta pequena, explicável e testada vale mais no portfólio do que um script grande que ninguém consegue operar.",
    [
      [
        "Defina a entrega mínima",
        "Desenhe o fluxo health check → CSV → resumo JSON. Defina nomes de campos, timeouts, códigos de saída e limites do laboratório.",
      ],
      [
        "Integre as peças",
        "Adapte os scripts das semanas anteriores para compartilhar o mesmo formato. Execute uma coleta curta contra seu serviço local e gere um relatório. Faça o agendamento apenas no laboratório, com intervalo e log definidos.",
      ],
      [
        "Valide e recupere",
        "Pare o serviço, rode a coleta, recupere e compare relatórios. Teste falha de leitura e destino indisponível. Se usar cron, confira PATH/caminho absoluto e remova o agendamento ao terminar.",
      ],
      [
        "Prepare uma demonstração",
        "Grave ou ensaie cinco minutos: problema, arquitetura, execução, falha e resultado. Crie uma versão identificada no Git e liste duas melhorias futuras sem implementá-las agora.",
      ],
    ],
    "Kit NOC com scripts, dados fictícios, testes e demonstração de cinco minutos.",
    [
      "Consigo executar o fluxo a partir do README.",
      "A indisponibilidade aparece corretamente no relatório.",
      "Sei explicar limites, agendamento e tratamento de erros.",
    ],
    ["bash", "python", "git"],
    ["Integração", "Portfólio", "Desafio mensal"],
  ),
  week(
    13,
    "Docker: da imagem ao serviço",
    "Executar um serviço em container e explicar seu ciclo de vida.",
    "Containers tornam a execução repetível, mas você ainda precisa entender processos, portas e arquivos.",
    [
      [
        "Entenda os componentes",
        "Compare imagem, container, registry e VM. Leia os primeiros passos do Docker e identifique o que é compartilhado com o host.",
      ],
      [
        "Execute um serviço isolado",
        "Prepare Docker na bancada e execute Nginx com versão explícita, publicando apenas em 127.0.0.1. Use ps, logs, inspect, stop e start. Verifique a página via curl.",
      ],
      [
        "Explore persistência",
        "Monte uma pasta com uma página de teste. Recrie o container e confira o que permanece. Compare arquivo dentro do container com bind mount ou volume, sem remover volumes de outros projetos.",
      ],
      [
        "Registre as decisões",
        "Desenhe porta do host → porta do container e documente os comandos. Explique onde seus dados ficam e como restaurar o serviço.",
      ],
    ],
    "Serviço containerizado com porta local, logs e persistência demonstrados.",
    [
      "Distingo imagem de container e container de VM.",
      "Acesso o serviço e encontro seus logs.",
      "Explico quais dados sobrevivem à recriação.",
    ],
    ["docker"],
    ["Docker", "Imagens", "Volumes"],
  ),
  week(
    14,
    "Dockerfile & Compose",
    "Empacotar uma aplicação simples e subir uma stack com um comando.",
    "Um arquivo declarativo substitui a memória de comandos manuais e torna o ambiente mais fácil de reproduzir.",
    [
      [
        "Leia uma receita de build",
        "Estude FROM, WORKDIR, COPY, RUN, USER e CMD. Entenda cache de camadas e o papel de .dockerignore.",
      ],
      [
        "Empacote o laboratório",
        "Crie um Dockerfile para uma aplicação HTTP mínima com endpoint /health. Fixe versões, use usuário sem privilégios quando aplicável e exclua .git e segredos do contexto.",
      ],
      [
        "Descreva a stack",
        "Crie compose.yaml com a aplicação, rede e volume necessários. Suba, consulte /health, examine logs e recrie a stack. Simule uma configuração inválida e localize o erro.",
      ],
      [
        "Documente como operar",
        "Registre build, inicialização, validação, logs e encerramento. Explique que ordem de inicialização não garante prontidão de um serviço.",
      ],
    ],
    "Dockerfile e Compose reproduzíveis para uma aplicação com /health.",
    [
      "Outra pessoa consegue construir a imagem pelo README.",
      "A stack responde e os logs permitem investigar falhas.",
      "Não incluo segredos na imagem nem no repositório.",
    ],
    ["docker"],
    ["Dockerfile", "Compose", "Reprodutibilidade"],
  ),
  week(
    15,
    "CI: cada mudança passa por uma checagem",
    "Executar testes e build automaticamente em um repositório de laboratório.",
    "Integração contínua dá feedback cedo; um pipeline verde só cobre aquilo que você realmente testou.",
    [
      [
        "Leia um workflow",
        "Entenda eventos, jobs, steps, runner e artefatos no GitHub Actions. Desenhe push → testes → build.",
      ],
      [
        "Monte a integração contínua",
        "Crie um workflow no repositório de estudo que instale dependências fixadas, execute os testes Python e construa a imagem. Use permissões mínimas e evite publicar credenciais.",
      ],
      [
        "Faça o teste falhar de propósito",
        "Em uma branch, altere uma expectativa para falhar. Observe o bloqueio do job, leia o log, corrija e rode de novo. Compare o pipeline com a execução local.",
      ],
      [
        "Defina o que é garantido",
        "Registre exatamente o que os testes verificam, o que o build valida e o que continua manual. Adicione o fluxo ao README.",
      ],
    ],
    "Workflow com uma execução falha e uma bem-sucedida explicadas.",
    [
      "O teste inválido faz a execução falhar.",
      "Após corrigir, testes e build terminam com sucesso.",
      "Sei diferenciar evidência de build e evidência de funcionamento.",
    ],
    ["actions", "docker"],
    ["CI", "Actions", "Qualidade"],
  ),
  week(
    16,
    "Entrega, rollback & desafio de deploy",
    "Publicar uma versão no laboratório e reverter para uma versão conhecida.",
    "Entregar envolve validar a nova versão e ter uma saída quando a mudança não funciona.",
    [
      [
        "Diferencie CI e CD",
        "Explique integração, entrega e implantação contínuas. Defina uma etapa de aprovação e três verificações pós-deploy para o laboratório.",
      ],
      [
        "Crie duas versões",
        "Gere imagens v1 e v2 da aplicação, com resposta que identifique a versão. Documente um deploy local pelo Compose; execute a troca e valide /health e comportamento esperado.",
      ],
      [
        "Exercite o rollback",
        "Simule uma versão com falha controlada, detecte com o health check e volte para v1. Registre duração, logs e validação. Separe reversão de imagem de reversão de dados.",
      ],
      [
        "Feche a entrega do módulo",
        "Adicione checklist de deploy/rollback ao repositório e reúna evidências de CI e execução. Apresente em cinco minutos o caminho commit → serviço.",
      ],
    ],
    "Aplicação com pipeline, versões identificadas e rollback demonstrado.",
    [
      "Valido comportamento e versão depois do deploy.",
      "Consigo voltar para a versão anterior seguindo o runbook.",
      "Explico por que rollback de imagem não reverte dados automaticamente.",
    ],
    ["docker", "actions"],
    ["CD", "Rollback", "Desafio mensal"],
  ),
  week(
    17,
    "Métricas & Prometheus",
    "Coletar métricas do laboratório e criar consultas que respondam perguntas operacionais.",
    "Uma métrica precisa ter significado, unidade e contexto; um número sozinho não explica um incidente.",
    [
      [
        "Escolha o que observar",
        "Compare métricas, logs e traces. Defina disponibilidade, volume de requisições e duração como perguntas. Estude counter, gauge e labels.",
      ],
      [
        "Suba uma coleta local",
        "Adicione Prometheus e um exporter de laboratório à stack. Configure um alvo, confirme a página Targets e consulte up. Limite as portas ao ambiente de estudo.",
      ],
      [
        "Teste uma hipótese",
        "Pare o alvo e observe up; depois recupere. Consulte taxa de um counter com rate e compare com o valor acumulado. Anote frequência de coleta e o atraso de detecção.",
      ],
      [
        "Crie um catálogo mínimo",
        "Registre três métricas com unidade, tipo, significado, consulta e limitação. Explique por que labels com valores ilimitados aumentam cardinalidade.",
      ],
    ],
    "Coleta funcional e catálogo de três métricas com consultas.",
    [
      "Identifico alvo disponível e indisponível com evidência.",
      "Distingo valor acumulado de taxa.",
      "Explico unidade, intervalo e limites das métricas usadas.",
    ],
    ["prometheus", "docker"],
    ["Prometheus", "PromQL", "Métricas"],
  ),
  week(
    18,
    "Grafana, alertas & resposta",
    "Construir um painel acionável e validar um alerta com recuperação.",
    "Um alerta útil aponta impacto, contexto e uma ação. Cor bonita no painel não substitui esse contrato.",
    [
      [
        "Desenhe o painel antes de montar",
        "Escolha três perguntas: o serviço responde? há erros? o tempo mudou? Defina unidade, intervalo e quando investigar. Estude a diferença entre SLI, SLO e SLA.",
      ],
      [
        "Monte a visão operacional",
        "Conecte Grafana ao Prometheus. Crie três painéis com títulos, unidades e consultas. Exporte o JSON do dashboard e inclua no repositório sem credenciais.",
      ],
      [
        "Dispare e resolva um alerta",
        "Crie uma regra para indisponibilidade com duração mínima. Pare apenas o alvo do laboratório, observe pending/firing e recupere. Registre os tempos; use o estado local do alerta, sem enviar mensagens a terceiros.",
      ],
      [
        "Escreva a ação esperada",
        "Anexe um runbook ao alerta: impacto, primeira verificação, escalonamento simulado e recuperação. Defina um SLO ilustrativo e explicite que não é contrato real.",
      ],
    ],
    "Dashboard exportado e alerta testado até a recuperação.",
    [
      "Cada painel responde a uma pergunta com unidade correta.",
      "Demonstro transição de alerta e retorno ao estado saudável.",
      "O alerta tem um runbook com ação concreta.",
    ],
    ["grafana", "prometheus"],
    ["Grafana", "Alertas", "SLO"],
  ),
  week(
    19,
    "Ansible: configuração reproduzível",
    "Configurar uma VM com um playbook e verificar idempotência.",
    "Descrever o estado desejado reduz diferenças entre servidores e ajuda a reconstruir um ambiente.",
    [
      [
        "Entenda o modelo declarativo",
        "Estude inventário, módulos, tarefas, variáveis e handlers. Compare mandar um comando com declarar que um pacote deve existir.",
      ],
      [
        "Prepare o inventário",
        "Instale Ansible no ambiente Linux e use SSH por chave para a VM do laboratório. Crie um inventário simples e teste conectividade. Não grave chaves privadas ou senhas no repositório.",
      ],
      [
        "Automatize um serviço",
        "Escreva um playbook que instale Nginx, copie uma página e assegure o serviço iniciado. Execute duas vezes; a segunda deve evitar mudanças desnecessárias. Altere a página e observe o resultado.",
      ],
      [
        "Explique a convergência",
        "Salve as saídas das duas execuções e anote changed/ok. Documente pré-requisitos, inventário, validação HTTP e recuperação.",
      ],
    ],
    "Playbook Ansible com duas execuções e idempotência demonstrada.",
    [
      "Consigo executar o playbook usando um inventário claro.",
      "A segunda execução não reporta mudanças sem necessidade.",
      "Valido o resultado do serviço além do resumo do Ansible.",
    ],
    ["ansible", "ubuntu"],
    ["Ansible", "Inventário", "Idempotência"],
  ),
  week(
    20,
    "Confiabilidade: detectar e reconstruir",
    "Unir automação, monitoramento e comunicação em um incidente simulado.",
    "Confiabilidade aparece no ciclo completo: detectar, entender, recuperar e aprender.",
    [
      [
        "Defina um exercício controlado",
        "Escolha serviço parado ou página alterada na VM. Defina estado inicial, hipótese, sinal de detecção, limite do experimento e forma de recuperar.",
      ],
      [
        "Prepare a observação",
        "Confira dashboard, regra de alerta, coleta e playbook. Registre evidências do estado saudável antes de iniciar e mantenha o console da VM disponível.",
      ],
      [
        "Execute e recupere",
        "Introduza a falha no laboratório, observe o alerta e consulte os logs. Use o playbook para restaurar o estado esperado, confira HTTP e acompanhe a resolução do alerta.",
      ],
      [
        "Faça um post-mortem breve",
        "Escreva impacto simulado, linha do tempo, causa evidenciada e duas ações de melhoria. Diferencie tempo de detecção de tempo de recuperação.",
      ],
    ],
    "Incidente simulado com dashboard, automação e post-mortem.",
    [
      "Relaciono a falha a um sinal observado.",
      "Restauro o estado e verifico aplicação e monitoramento.",
      "Meu relatório distingue detecção, diagnóstico e recuperação.",
    ],
    ["ansible", "grafana", "prometheus"],
    ["Confiabilidade", "Incidente", "Desafio mensal"],
  ),
  week(
    21,
    "Cloud: arquitetura antes de recursos",
    "Traduzir o laboratório em uma arquitetura cloud com limites de acesso e custo.",
    "Cloud muda onde os recursos vivem; rede, identidade, operação e responsabilidade continuam essenciais.",
    [
      [
        "Mapeie os conceitos",
        "Estude computação, armazenamento, rede virtual, zonas, IAM e responsabilidade compartilhada. Relacione cada conceito a uma peça do laboratório.",
      ],
      [
        "Desenhe uma arquitetura",
        "Escolha um provedor como referência e desenhe rede, sub-rede, máquina/serviço, armazenamento e acesso administrativo. Separe acesso público e privado e identifique onde ficariam segredos.",
      ],
      [
        "Faça uma revisão de custo e acesso",
        "Liste recursos cobrados, região, horas e armazenamento. Consulte a calculadora oficial apenas se desejar estimar preços atuais. Defina menor privilégio e um plano de desligamento. Nenhuma conta ou recurso pago é obrigatório.",
      ],
      [
        "Justifique o desenho",
        "Registre três decisões com benefício e custo. Explique o que você configuraria e o que continuaria responsabilidade do provedor.",
      ],
    ],
    "Diagrama cloud com responsabilidades, acesso e inventário de custos.",
    [
      "Mapeio cada componente local para uma função cloud.",
      "Explico o limite entre responsabilidade minha e do provedor.",
      "Identifico recursos cobrados e como encerrá-los.",
    ],
    ["cloud"],
    ["Cloud", "IAM", "Arquitetura"],
  ),
  week(
    22,
    "Terraform sem conta cloud",
    "Gerenciar um recurso Docker local com infraestrutura como código.",
    "Você pode aprender o ciclo de infraestrutura como código sem provisionar um serviço pago.",
    [
      [
        "Entenda configuração e estado",
        "Leia providers, resources, variables, outputs e state. Explique por que um arquivo de estado pode conter dados sensíveis e não deve ir para um repositório público.",
      ],
      [
        "Declare um recurso local",
        "Siga o laboratório oficial Terraform com Docker. Instale Terraform, use versões compatíveis com o tutorial, configure uma porta livre e execute fmt, init, validate e plan. Leia o plano antes de aplicar.",
      ],
      [
        "Observe o ciclo de mudança",
        "Aplique apenas no Docker local, confirme o serviço e mude uma variável. Compare o novo plan; aplique e valide. Destrua os recursos desse exercício e confirme a remoção.",
      ],
      [
        "Registre o contrato",
        "Versione configuração e lockfile do provider; ignore estado, .terraform e segredos. Anote a diferença entre plan, apply e destroy com resultados do laboratório.",
      ],
    ],
    "Projeto Terraform local com criação, alteração e remoção verificadas.",
    [
      "Interpreto o plano antes de aplicar.",
      "Demonstro criação, alteração e remoção do recurso local.",
      "Distingo código versionável de estado e segredos.",
    ],
    ["terraform", "terraform-lab"],
    ["Terraform", "IaC", "Estado"],
  ),
  week(
    23,
    "Projeto final: seu mini-NOC",
    "Integrar o que já construiu em uma entrega pequena e demonstrável.",
    "O projeto final conecta as peças prontas: não precisa começar uma plataforma nova.",
    [
      [
        "Feche o escopo",
        "Escolha um serviço HTTP, health check, dashboard e runbook já feitos. Defina quem usa, qual problema resolve e três critérios de aceitação. Desenhe Terraform → recurso, Ansible → configuração e Compose → stack sem duplicar a posse do mesmo recurso.",
      ],
      [
        "Integre o ambiente",
        "Organize diretórios para aplicação, scripts, infra e docs. Reaproveite a CI, o Compose e o monitoramento. Inclua o exercício Terraform como recurso separado e documente a fronteira com Ansible.",
      ],
      [
        "Faça uma instalação limpa",
        "Siga o README em uma VM ou pasta limpa, usando os pré-requisitos descritos. Execute testes, inicie o serviço e valide métricas. Anote passos ausentes e corrija somente o necessário para reproduzir.",
      ],
      [
        "Prepare o material de apresentação",
        "Crie um README com diagrama, início rápido, testes, incidente simulado, limites e encerramento. Use dados fictícios e revise o repositório antes de compartilhá-lo.",
      ],
    ],
    "Mini-NOC reproduzível com CI, aplicação, monitoramento e documentação.",
    [
      "Consigo reproduzir o ambiente seguindo o início rápido.",
      "Serviço, health check e dashboard apresentam dados coerentes.",
      "Explico o papel de cada ferramenta e evito responsabilidades duplicadas.",
    ],
    ["docker", "ansible", "terraform"],
    ["Projeto final", "Integração", "Portfólio"],
  ),
  week(
    24,
    "Demonstre, avalie & defina o próximo passo",
    "Apresentar o projeto, executar uma recuperação e avaliar sua evolução.",
    "Seu portfólio deve mostrar raciocínio e evidências. As 96 horas constroem uma base prática, não uma promessa de contratação.",
    [
      [
        "Revise a jornada",
        "Leia os critérios das semanas anteriores e escolha três habilidades ainda frágeis. Prepare um roteiro de demonstração de dez minutos com problema, arquitetura e resultado.",
      ],
      [
        "Demonstre a entrega",
        "Apresente instalação, pipeline e dashboard. Mostre um diff de Git e explique uma decisão de Bash/Python, uma de rede e uma de infraestrutura como código. Grave localmente ou ensaie.",
      ],
      [
        "Faça a prova prática final",
        "Introduza uma das falhas já estudadas, investigue sem copiar o runbook, recupere e compare com ele depois. Valide o serviço e o alerta. Revise acesso, segredos e encerramento dos recursos de teste.",
      ],
      [
        "Planeje a continuidade",
        "Escreva uma retrospectiva com evidências, dificuldades e três próximos estudos. Atualize o README final e descreva o projeto em cinco linhas, sem inventar experiência de produção.",
      ],
    ],
    "Portfólio final, demonstração de dez minutos e plano de evolução pessoal.",
    [
      "Demonstro o projeto e justifico as decisões com minhas palavras.",
      "Investigo, recupero e valido uma falha controlada.",
      "Apresento evidências reais e identifico minhas lacunas.",
    ],
    ["git", "cloud", "terraform"],
    ["Apresentação", "Retrospectiva", "Desafio final"],
  ),
];

export const totalMinutes = weeks.reduce(
  (sum, w) => sum + w.tasks.reduce((s, t) => s + t.minutes, 0),
  0,
);

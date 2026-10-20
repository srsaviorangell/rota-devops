import { useEffect, useRef, useState } from "react";
import {
  Activity,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Box,
  CalendarDays,
  Check,
  CheckCheck,
  ChevronLeft,
  ChevronRight,
  CircleHelp,
  Clock3,
  Cloud,
  Code2,
  Download,
  Flag,
  FolderGit2,
  LayoutDashboard,
  Map,
  Menu,
  Moon,
  Network,
  NotebookPen,
  Search,
  Settings2,
  ShieldCheck,
  Sparkles,
  Sun,
  Target,
  Terminal,
  Upload,
  X,
} from "lucide-react";
import { modules, resources, weeks } from "./data/curriculum.js";
import {
  formatHours,
  freshState,
  pad,
  summary,
  validateState,
  weekPeriod,
  weekProgress,
} from "./lib/progress.js";
import { useProgress } from "./lib/useProgress.js";

const icons = {
  terminal: Terminal,
  network: Network,
  code: Code2,
  box: Box,
  activity: Activity,
  cloud: Cloud,
};
const nav = [
  ["painel", "Visão geral", LayoutDashboard],
  ["trilha", "Minha trilha", Map],
  ["caderno", "Caderno de bordo", NotebookPen],
  ["recursos", "Biblioteca", BookOpen],
];
function getRoute() {
  const [page, id] = location.hash.replace(/^#\/?/, "").split("/");
  return {
    page: [
      "painel",
      "trilha",
      "semana",
      "caderno",
      "recursos",
      "ajustes",
    ].includes(page)
      ? page
      : "painel",
    id: Math.min(24, Math.max(1, Number.parseInt(id, 10) || 1)),
  };
}
const hrefWeek = (id) => `#/semana/${id}`;
const Badge = ({ children, className = "" }) => (
  <span className={`badge ${className}`}>{children}</span>
);
function ProgressBar({ value, label = "Progresso" }) {
  return (
    <div
      className="progress-track"
      role="progressbar"
      aria-label={label}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={value}
    >
      <span style={{ width: `${value}%` }} />
    </div>
  );
}
function ModuleIcon({ module, size = 20 }) {
  const Icon = icons[module.icon];
  return (
    <span className="module-icon" style={{ "--module-color": module.color }}>
      <Icon size={size} strokeWidth={1.7} />
    </span>
  );
}
function SectionHeading({ eyebrow, title, description, children }) {
  return (
    <header className="page-heading">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        {description && <p className="page-description">{description}</p>}
      </div>
      {children}
    </header>
  );
}
function ResourceCard({ resource }) {
  return (
    <a
      className="resource-card"
      href={resource.url}
      target="_blank"
      rel="noreferrer"
    >
      <span className="resource-top">
        <span className="mono">{resource.source}</span>
        <ArrowUpRight size={17} />
      </span>
      <h3>{resource.title}</h3>
      <p>{resource.description}</p>
      <Badge>
        {resource.type} <span aria-hidden="true">·</span> Oficial
      </Badge>
    </a>
  );
}

function LabIllustration() {
  return (
    <div className="lab-illustration" aria-hidden="true">
      <svg viewBox="0 0 440 275" fill="none">
        <defs>
          <pattern
            id="grid"
            width="24"
            height="24"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1" cy="1" r="1" fill="currentColor" opacity=".18" />
          </pattern>
          <linearGradient
            id="tile"
            x1="100"
            y1="100"
            x2="300"
            y2="270"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#c8f26f" stopOpacity=".14" />
            <stop offset="1" stopColor="#c8f26f" stopOpacity=".02" />
          </linearGradient>
        </defs>
        <rect width="440" height="275" fill="url(#grid)" />
        <path
          d="M48 196 220 98 392 196 220 274Z"
          fill="url(#tile)"
          stroke="currentColor"
          opacity=".2"
        />
        <path
          className="signal-line"
          d="m87 163 68 39 65-38 83 48 51-29M220 164V97"
          stroke="#c8f26f"
          strokeWidth="1.5"
          strokeDasharray="4 5"
        />
        <g className="lab-server">
          <path
            d="m164 91 56-32 57 32v77l-57 33-56-33Z"
            fill="#1e2b21"
            stroke="#a0bb82"
          />
          <path d="m164 91 56 33 57-33M220 124v77" stroke="#a0bb82" />
          <path d="m164 117 56 33 57-33m-113 27 56 33 57-33" stroke="#6b8255" />
          <path
            d="m177 112 27 16m-27 10 27 16m-27 10 27 16"
            stroke="#c8f26f"
            strokeWidth="3"
          />
          <circle cx="238" cy="123" r="2" fill="#c8f26f" />
          <circle cx="238" cy="149" r="2" fill="#c8f26f" />
          <circle cx="238" cy="176" r="2" fill="#c8f26f" />
        </g>
        <g transform="translate(55 103)">
          <path d="m0 0 65 37v48L0 48Z" fill="#19251e" stroke="#6d8b63" />
          <path
            d="m10 17 10 12-10 1m17 12 17 10"
            stroke="#c8f26f"
            strokeWidth="2"
          />
          <path d="m0 48 65 37 15-8-65-37Z" fill="#2c3b28" stroke="#6d8b63" />
        </g>
        <g transform="translate(312 129)">
          <path
            d="m0 14 38-22 38 22v43L38 79 0 57Z"
            fill="#1c2b23"
            stroke="#7f9f7b"
          />
          <path d="m0 14 38 22 38-22M38 36v43" stroke="#7f9f7b" />
          <path d="m10 8 38 22M28-2l38 22" stroke="#7f9f7b" />
        </g>
        <path
          d="M281 54c0-11 9-19 20-18 6-17 32-14 35 4 17-4 27 19 11 28h-57c-6-3-9-8-9-14Z"
          fill="#26382a"
          stroke="#7f9f7b"
        />
        <path d="M306 74v19l-48 28" stroke="#c8f26f" strokeDasharray="4 5" />
        <circle className="signal-dot" cx="155" cy="202" r="4" fill="#c8f26f" />
        <circle cx="303" cy="212" r="4" fill="#c8f26f" />
        <text
          x="47"
          y="233"
          fill="#a4b896"
          fontSize="9"
          fontFamily="IBM Plex Mono, monospace"
        >
          LOCAL LAB / 01
        </text>
        <text
          x="291"
          y="103"
          fill="#a4b896"
          fontSize="9"
          fontFamily="IBM Plex Mono, monospace"
        >
          NEXT: CLOUD
        </text>
      </svg>
      <span className="lab-status">
        <span /> LAB EM CONSTRUÇÃO
      </span>
    </div>
  );
}

function Dashboard({ state, toggle }) {
  const data = summary(state),
    current = data.current,
    progress = weekProgress(current, state),
    mod = modules[current.module];
  return (
    <>
      <SectionHeading
        eyebrow="SEU ESPAÇO DE EVOLUÇÃO"
        title="Um passo de cada vez."
        description="Da rotina de NOC ao universo DevOps. Sua próxima conquista começa na prática."
      >
        <Badge>
          <CalendarDays size={14} /> 6 meses · 4h por semana
        </Badge>
      </SectionHeading>
      <section className="hero">
        <div className="hero-copy">
          <span className="hero-kicker">
            <span /> APRENDA. EXPERIMENTE. EVOLUA.
          </span>
          <h2>
            Construa a base.
            <br />
            Conquiste o <em>próximo nível.</em>
          </h2>
          <p>
            24 semanas para conectar Linux, redes e automação.
            <br className="desktop-break" /> Um laboratório por vez, no seu
            ritmo.
          </p>
          <a className="button primary" href={hrefWeek(current.id)}>
            {data.completed === 24
              ? "Revisar última semana"
              : data.taskCount
                ? "Continuar minha jornada"
                : "Começar minha jornada"}
            <ArrowRight size={17} />
          </a>
          <span className="hero-foot">
            <Terminal size={13} /> Menos teoria solta. Mais mão na massa.
          </span>
        </div>
        <LabIllustration />
      </section>
      <section className="stats" aria-label="Resumo do progresso">
        <div className="stat">
          <span>
            <Flag size={16} /> Jornada concluída
          </span>
          <strong>
            {data.percent}
            <small>%</small>
          </strong>
          <ProgressBar value={data.percent} />
        </div>
        <div className="stat">
          <span>
            <CheckCheck size={16} /> Semanas concluídas
          </span>
          <strong>
            {pad(data.completed)}
            <small> / 24</small>
          </strong>
          <p>Atividades + avaliação</p>
        </div>
        <div className="stat">
          <span>
            <Clock3 size={16} /> Conteúdo percorrido
          </span>
          <strong>
            {formatHours(data.minutes)}
            <small> / 96h</small>
          </strong>
          <p>Carga estimada das tarefas feitas</p>
        </div>
        <div className="stat">
          <span>
            <Target size={16} /> Tarefas realizadas
          </span>
          <strong>
            {pad(data.taskCount)}
            <small> / 96</small>
          </strong>
          <p>Cada prática conta</p>
        </div>
      </section>
      {data.completed === 24 && (
        <div className="success-banner">
          <Sparkles size={20} />
          <div>
            <strong>Você completou sua rota!</strong>
            <p>
              Revise seu portfólio e use a retrospectiva para escolher o próximo
              desafio.
            </p>
          </div>
        </div>
      )}
      <div className="dashboard-grid">
        <section className="panel journey-panel">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">O CAMINHO À FRENTE</p>
              <h2>Sua trilha de evolução</h2>
            </div>
            <a className="text-link" href="#/trilha">
              Explorar trilha <ArrowUpRight size={16} />
            </a>
          </div>
          <div className="module-overview">
            {modules.map((module, index) => {
              const group = weeks.filter((w) => w.module === index);
              const done = group.filter(
                (w) => weekProgress(w, state).done,
              ).length;
              return (
                <a
                  key={module.id}
                  className={`module-row ${current.module === index ? "current" : ""}`}
                  href={hrefWeek(
                    group.find((w) => !weekProgress(w, state).done)?.id ||
                      group[0].id,
                  )}
                >
                  <ModuleIcon module={module} />
                  <div className="module-row-text">
                    <div>
                      <span className="mono small">MÊS {pad(index + 1)}</span>
                      {current.module === index && data.completed < 24 && (
                        <span className="you-are-here">Você está aqui</span>
                      )}
                    </div>
                    <h3>{module.title}</h3>
                    <p>
                      Semanas {pad(group[0].id)}–{pad(group[3].id)}
                      <span>16 horas</span>
                    </p>
                  </div>
                  <div
                    className="mini-stations"
                    aria-label={`${done} de 4 semanas concluídas`}
                  >
                    {group.map((w) => (
                      <i
                        key={w.id}
                        className={
                          weekProgress(w, state).done
                            ? "done"
                            : weekProgress(w, state).started
                              ? "started"
                              : ""
                        }
                      />
                    ))}
                  </div>
                  <ChevronRight size={17} className="muted" />
                </a>
              );
            })}
          </div>
          <div className="journey-foot">
            <Flag size={16} />
            <span>
              Destino: um projeto de portfólio que você sabe explicar.
            </span>
          </div>
        </section>
        <aside className="dashboard-side">
          <section className="panel focus-panel">
            <div className="focus-label">
              <span className="eyebrow">
                {data.completed === 24
                  ? "ÚLTIMA CONQUISTA"
                  : "SEU PRÓXIMO PASSO"}
              </span>
              <span className="mono">S{pad(current.id)}</span>
            </div>
            <ModuleIcon module={mod} size={22} />
            <h2>{current.title}</h2>
            <p>{current.goal}</p>
            <div className="focus-progress">
              <span>{progress.tasks}/4 atividades</span>
              <span>{progress.percent}%</span>
            </div>
            <ProgressBar value={progress.percent} />
            <div className="quick-tasks">
              {current.tasks.map((task) => (
                <label key={task.id} className="quick-task">
                  <input
                    type="checkbox"
                    checked={!!state.tasks[task.id]}
                    onChange={() => toggle("tasks", task.id)}
                  />
                  <span>{task.title}</span>
                  <small>{task.minutes}min</small>
                </label>
              ))}
            </div>
            <a className="button primary full" href={hrefWeek(current.id)}>
              Abrir semana {pad(current.id)}
              <ArrowRight size={16} />
            </a>
          </section>
          <section className="rhythm-card">
            <span className="rhythm-icon">
              <Clock3 size={20} />
            </span>
            <div>
              <h3>Constância &gt; intensidade</h3>
              <p>
                Reserve dois encontros de 2h ou quatro blocos menores. Se
                precisar, repita uma semana.
              </p>
            </div>
          </section>
        </aside>
      </div>
    </>
  );
}

function Trail({ state }) {
  const [filter, setFilter] = useState("all");
  const [query, setQuery] = useState("");
  const data = summary(state);
  const normalize = (s) =>
    s
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  const visible = weeks.filter((w) => {
    const p = weekProgress(w, state);
    return (
      (filter === "all" ||
        (filter === "done"
          ? p.done
          : filter === "started"
            ? p.started && !p.done
            : !p.started)) &&
      normalize(
        `${w.title} ${modules[w.module].title} ${w.tags.join(" ")}`,
      ).includes(normalize(query))
    );
  });
  return (
    <>
      <SectionHeading
        eyebrow="24 SEMANAS · 96 HORAS · UM NOVO REPERTÓRIO"
        title="Sua rota, do início ao deploy."
        description="Explore cada estação. Todas as semanas estão abertas para você revisar e avançar."
      />
      <div className="trail-toolbar">
        <div className="filter-tabs" aria-label="Filtrar semanas">
          {[
            ["all", "Todas"],
            ["started", "Em andamento"],
            ["done", "Concluídas"],
            ["new", "Não iniciadas"],
          ].map(([id, label]) => (
            <button
              key={id}
              className={filter === id ? "active" : ""}
              aria-pressed={filter === id}
              onClick={() => setFilter(id)}
            >
              {label}
            </button>
          ))}
        </div>
        <label className="search-box">
          <Search size={17} />
          <input
            aria-label="Buscar semanas"
            placeholder="Buscar uma habilidade..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </label>
      </div>
      <div className="trail-legend">
        <span>
          <i className="legend-dot done" />
          Concluída
        </span>
        <span>
          <i className="legend-dot started" />
          Em andamento
        </span>
        <span>
          <i className="legend-dot" />A explorar
        </span>
        <span className="legend-total">{visible.length} semanas</span>
      </div>
      <div className="trail-grid">
        {modules.map((module, index) => {
          const group = visible.filter((w) => w.module === index);
          if (!group.length) return null;
          const all = weeks.filter((w) => w.module === index);
          const done = all.filter((w) => weekProgress(w, state).done).length;
          return (
            <section
              className="panel trail-module"
              key={module.id}
              style={{ "--module-color": module.color }}
            >
              <div className="trail-module-head">
                <ModuleIcon module={module} />
                <span className="eyebrow">MÊS {pad(index + 1)}</span>
                <span className="module-count">
                  {done}/4 <CheckCheck size={14} />
                </span>
              </div>
              <h2>{module.title}</h2>
              <p>{module.subtitle}</p>
              <div
                className="station-map"
                aria-label={`Mapa de ${module.title}`}
              >
                {all.map((w) => {
                  const p = weekProgress(w, state);
                  return (
                    <a
                      key={w.id}
                      href={hrefWeek(w.id)}
                      aria-label={`Semana ${w.id}: ${w.title}${p.done ? ", concluída" : ""}`}
                      className={`station ${p.done ? "done" : p.started ? "started" : ""} ${data.current.id === w.id ? "recommended" : ""}`}
                    >
                      <span>{p.done ? <Check size={18} /> : pad(w.id)}</span>
                      <small>SEM {pad(w.id)}</small>
                    </a>
                  );
                })}
              </div>
              <div className="trail-week-list">
                {group.map((w) => {
                  const p = weekProgress(w, state);
                  return (
                    <a key={w.id} href={hrefWeek(w.id)}>
                      <span className="mono">{pad(w.id)}</span>
                      <span>{w.title}</span>
                      {p.done ? (
                        <Check size={16} className="accent" />
                      ) : (
                        <ChevronRight size={16} />
                      )}
                    </a>
                  );
                })}
              </div>
              <div className="module-outcome">
                <Flag size={15} />
                <span>{module.outcome}</span>
              </div>
            </section>
          );
        })}
      </div>
      {!visible.length && (
        <div className="empty-state">
          <Search size={28} />
          <h2>Nenhuma semana por aqui.</h2>
          <p>Tente outro termo ou remova os filtros.</p>
          <button
            className="button secondary"
            onClick={() => {
              setQuery("");
              setFilter("all");
            }}
          >
            Limpar filtros
          </button>
        </div>
      )}
    </>
  );
}

function Week({ id, state, toggle, setText }) {
  const week = weeks[id - 1],
    module = modules[week.module],
    p = weekProgress(week, state);
  const period = weekPeriod(state.startDate, id);
  return (
    <>
      <div className="week-breadcrumb">
        <a href="#/trilha">
          <ArrowLeft size={15} /> Minha trilha
        </a>
        <span>/</span>
        <span>{module.short}</span>
      </div>
      <SectionHeading
        eyebrow={`MÊS ${pad(week.module + 1)} · SEMANA ${pad(id)} DE 24`}
        title={week.title}
        description={week.goal}
      >
        <Badge className={p.done ? "success" : ""}>
          {p.done ? <CheckCheck size={15} /> : <Clock3 size={15} />}{" "}
          {p.done ? "Semana concluída" : "4 horas de prática"}
        </Badge>
      </SectionHeading>
      <div className="week-meta">
        <div className="tags">
          {week.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
        <span>
          <CalendarDays size={15} />
          {period || "No seu ritmo · defina uma data em Ajustes"}
        </span>
      </div>
      <div className="week-layout">
        <div>
          <section className="context-card">
            <span>
              <CircleHelp size={19} />
            </span>
            <div>
              <h2>Por que isso importa?</h2>
              <p>{week.context}</p>
            </div>
          </section>
          <div className="section-inline">
            <h2>Seu roteiro de prática</h2>
            <span>{p.tasks} de 4 atividades</span>
          </div>
          <div className="tasks-list">
            {week.tasks.map((task, index) => (
              <article
                key={task.id}
                className={`task-card ${state.tasks[task.id] ? "checked" : ""}`}
              >
                <div className="task-top">
                  <label>
                    <input
                      type="checkbox"
                      checked={!!state.tasks[task.id]}
                      onChange={() => toggle("tasks", task.id)}
                    />
                    <span>
                      <span className="eyebrow">
                        BLOCO {index + 1} · {task.kind.toUpperCase()}
                      </span>
                      <h3>{task.title}</h3>
                    </span>
                  </label>
                  <span className="duration">
                    <Clock3 size={13} />
                    {task.minutes} min
                  </span>
                </div>
                <p>{task.detail}</p>
              </article>
            ))}
          </div>
          <section className="panel notes-panel">
            <div className="panel-heading">
              <div>
                <p className="eyebrow">REGISTRE O RACIOCÍNIO</p>
                <h2>Caderno desta semana</h2>
              </div>
              <NotebookPen size={20} />
            </div>
            <label htmlFor="week-notes">
              O que aprendi, onde travei e como resolvi
            </label>
            <textarea
              id="week-notes"
              rows={6}
              maxLength={20000}
              placeholder="Ex.: o serviço estava ativo, mas a porta não respondia. Minha hipótese foi..."
              value={state.notes[id] || ""}
              onChange={(e) => setText("notes", id, e.target.value)}
            />
            <small>
              Salvo neste navegador quando o armazenamento está disponível.
            </small>
          </section>
        </div>
        <aside className="week-side">
          <section className="panel week-checkpoint">
            <div className="panel-heading">
              <h2>Checkpoint</h2>
              <span className="mono accent">{p.percent}%</span>
            </div>
            <ProgressBar
              value={p.percent}
              label={`Progresso da semana ${id}`}
            />
            <p className="checkpoint-help">
              Conclua as atividades e confirme o que você consegue demonstrar.
            </p>
            <div className="criteria-list">
              {week.criteria.map((c) => (
                <label key={c.id}>
                  <input
                    type="checkbox"
                    checked={!!state.criteria[c.id]}
                    onChange={() => toggle("criteria", c.id)}
                  />
                  <span>{c.text}</span>
                </label>
              ))}
            </div>
            {p.done && (
              <div className="complete-note">
                <CheckCheck size={17} /> Semana concluída. Boa conquista!
              </div>
            )}
          </section>
          <section className="delivery-card">
            <span className="eyebrow">
              <FolderGit2 size={15} /> ENTREGA DA SEMANA
            </span>
            <h3>{week.deliverable}</h3>
            <label htmlFor="week-evidence">
              Minha evidência ou link do projeto
            </label>
            <textarea
              id="week-evidence"
              rows={3}
              maxLength={20000}
              placeholder="Descreva o resultado ou cole o link do seu repositório..."
              value={state.evidence[id] || ""}
              onChange={(e) => setText("evidence", id, e.target.value)}
            />
            <small>
              Registro opcional; a avaliação acima é sua autoavaliação.
            </small>
          </section>
          <section className="week-resources">
            <h3>
              Fontes para esta semana <ArrowUpRight size={15} />
            </h3>
            {week.resourceIds.map((resourceId) => (
              <ResourceCard
                key={resourceId}
                resource={resources.find((r) => r.id === resourceId)}
              />
            ))}
          </section>
        </aside>
      </div>
      <nav className="week-pagination" aria-label="Navegação entre semanas">
        {id > 1 ? (
          <a className="button secondary" href={hrefWeek(id - 1)}>
            <ChevronLeft size={16} /> Semana {pad(id - 1)}
          </a>
        ) : (
          <a className="text-link" href="#/painel">
            <ArrowLeft size={16} /> Voltar ao painel
          </a>
        )}
        <span className="mono">{pad(id)} / 24</span>
        {id < 24 ? (
          <a className="button primary" href={hrefWeek(id + 1)}>
            Semana {pad(id + 1)}
            <ChevronRight size={16} />
          </a>
        ) : (
          <a className="button primary" href="#/painel">
            Ver minha evolução <Flag size={16} />
          </a>
        )}
      </nav>
    </>
  );
}

function Notebook({ state }) {
  const entries = weeks.filter(
    (w) => state.notes[w.id]?.trim() || state.evidence[w.id]?.trim(),
  );
  return (
    <>
      <SectionHeading
        eyebrow="SUA MEMÓRIA DE APRENDIZADO"
        title="Caderno de bordo."
        description="Decisões, descobertas e evidências. O conhecimento fica mais claro quando você escreve."
      />
      <div className="notebook-tip">
        <NotebookPen size={20} />
        <p>
          Adicione suas anotações dentro de cada semana. Elas aparecem aqui,
          organizadas pela jornada.
        </p>
        <Badge>{entries.length} registros</Badge>
      </div>
      {entries.length ? (
        <div className="notebook-grid">
          {entries.map((w) => (
            <article className="panel notebook-entry" key={w.id}>
              <div className="resource-top">
                <span className="eyebrow">
                  SEMANA {pad(w.id)} · {modules[w.module].short}
                </span>
                <a
                  aria-label={`Editar anotações da semana ${w.id}`}
                  href={hrefWeek(w.id)}
                >
                  <ArrowUpRight size={19} />
                </a>
              </div>
              <h2>{w.title}</h2>
              {state.notes[w.id]?.trim() && (
                <p className="note-content">{state.notes[w.id]}</p>
              )}
              {state.evidence[w.id]?.trim() && (
                <div className="evidence-content">
                  <span className="eyebrow">EVIDÊNCIA</span>
                  <p>{state.evidence[w.id]}</p>
                </div>
              )}
              <a className="text-link" href={hrefWeek(w.id)}>
                Abrir e editar semana <ArrowRight size={15} />
              </a>
            </article>
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <NotebookPen size={35} />
          <h2>Sua primeira descoberta merece um registro.</h2>
          <p>
            Comece com uma dúvida, um comando útil ou um problema que você
            resolveu.
          </p>
          <a
            className="button primary"
            href={hrefWeek(summary(state).current.id)}
          >
            Anotar na minha semana <ArrowRight size={16} />
          </a>
        </div>
      )}
    </>
  );
}

function Library() {
  const [module, setModule] = useState("all");
  return (
    <>
      <SectionHeading
        eyebrow="FONTES PARA IR MAIS FUNDO"
        title="Uma boa base começa na fonte."
        description="Documentação oficial para consultar enquanto você pratica. Escolha um módulo para começar."
      />
      <div className="library-toolbar">
        <label htmlFor="library-module">Explorar por módulo</label>
        <select
          id="library-module"
          value={module}
          onChange={(e) => setModule(e.target.value)}
        >
          <option value="all">Todos os módulos</option>
          {modules.map((m, i) => (
            <option key={m.id} value={i}>
              {pad(i + 1)} · {m.title}
            </option>
          ))}
        </select>
        <span className="muted small">
          Abrem em uma nova aba · português e inglês
        </span>
      </div>
      <div className="resources-grid">
        {resources
          .filter((r) => module === "all" || r.module === Number(module))
          .map((r) => (
            <ResourceCard key={r.id} resource={r} />
          ))}
      </div>
      <div className="library-note">
        <BookOpen size={18} />
        <p>
          Use a documentação como apoio ao exercício. Não é necessário ler cada
          manual inteiro para concluir uma semana.
        </p>
      </div>
    </>
  );
}

function Modal({
  title,
  children,
  onClose,
  onConfirm,
  confirmText = "Confirmar",
}) {
  const ref = useRef(null);
  const confirmRef = useRef(null);
  useEffect(() => {
    const previous = document.activeElement;
    const dialog = ref.current;
    dialog.showModal();
    confirmRef.current?.focus();
    return () => {
      dialog.close();
      previous?.focus();
    };
  }, []);
  return (
    <dialog
      ref={ref}
      className="modal"
      onCancel={(e) => {
        e.preventDefault();
        onClose();
      }}
    >
      <div className="modal-head">
        <h2>{title}</h2>
        <button
          className="icon-button"
          onClick={onClose}
          aria-label="Fechar confirmação"
        >
          <X size={20} />
        </button>
      </div>
      <div>{children}</div>
      <div className="modal-actions">
        <button className="button secondary" onClick={onClose}>
          Cancelar
        </button>
        <button ref={confirmRef} className="button primary" onClick={onConfirm}>
          {confirmText}
        </button>
      </div>
    </dialog>
  );
}

function Settings({ state, update, replace, error, notify }) {
  const fileRef = useRef(null);
  const dateRef = useRef(null);
  const [pending, setPending] = useState(null);
  const [reset, setReset] = useState(false);
  const [inputError, setInputError] = useState("");
  function exportBackup() {
    const blob = new Blob([JSON.stringify(state, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `rota-progresso-${new Date().toISOString().slice(0, 10)}.json`;
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    notify("Backup exportado. Guarde o arquivo em um lugar seguro.");
  }
  async function importBackup(event) {
    const file = event.target.files?.[0];
    event.target.value = "";
    if (!file) return;
    try {
      if (file.size > 2 * 1024 * 1024)
        throw new Error("O arquivo excede o limite de 2 MB.");
      setPending(validateState(JSON.parse(await file.text())));
      setInputError("");
    } catch (e) {
      setInputError(
        e instanceof SyntaxError
          ? "O arquivo não é um JSON válido. Nenhum dado foi alterado."
          : e.message,
      );
    }
  }
  return (
    <>
      <SectionHeading
        eyebrow="DO SEU JEITO, NO SEU RITMO"
        title="Ajustes da jornada."
        description="Escolha sua aparência, organize o calendário e cuide do seu progresso."
      />
      <div className="settings-grid">
        <section className="panel settings-panel">
          <span className="settings-icon">
            <CalendarDays size={23} />
          </span>
          <h2>Um ponto de partida</h2>
          <p>
            A data organiza as semanas em períodos de sete dias. Você pode mudar
            o início sem perder nenhuma conquista.
          </p>
          <form
            className="date-form"
            onSubmit={(e) => {
              e.preventDefault();
              const value = dateRef.current.value;
              update((s) => ({ ...s, startDate: value }));
              notify("Calendário atualizado. Seu progresso foi mantido.");
            }}
          >
            <label htmlFor="start-date">Data de início do plano</label>
            <div>
              <input
                ref={dateRef}
                key={state.startDate}
                type="date"
                id="start-date"
                min="2000-01-01"
                max="2200-12-31"
                defaultValue={state.startDate}
              />
              <button className="button secondary" type="submit">
                Aplicar data
              </button>
            </div>
          </form>
          <small>
            {state.startDate
              ? `Semana 24: ${weekPeriod(state.startDate, 24)}. São 24 semanas, aproximadamente seis meses.`
              : "Sem data definida: avance no seu próprio ritmo."}
          </small>
          <div className="theme-choice">
            <h3>Aparência</h3>
            <div className="segmented">
              {[
                ["dark", "Escuro", Moon],
                ["light", "Claro", Sun],
              ].map(([id, label, Icon]) => (
                <button
                  key={id}
                  aria-pressed={state.theme === id}
                  className={state.theme === id ? "active" : ""}
                  onClick={() => update((s) => ({ ...s, theme: id }))}
                >
                  <Icon size={17} />
                  {label}
                </button>
              ))}
            </div>
          </div>
        </section>
        <section className="panel settings-panel">
          <span className="settings-icon">
            <ShieldCheck size={23} />
          </span>
          <h2>Seu progresso, com você</h2>
          <p>
            Os dados ficam no armazenamento deste navegador. Para trocar de
            aparelho, mudar de endereço do site ou guardar uma cópia, exporte um
            backup.
          </p>
          <div className="backup-actions">
            <button className="button primary" onClick={exportBackup}>
              <Download size={17} /> Exportar progresso
            </button>
            <button
              className="button secondary"
              onClick={() => fileRef.current.click()}
            >
              <Upload size={17} /> Importar backup
            </button>
            <input
              ref={fileRef}
              aria-label="Arquivo de backup"
              className="file-input"
              type="file"
              accept=".json,application/json"
              onChange={importBackup}
            />
          </div>
          {inputError && (
            <p className="error-message" role="alert">
              {inputError}
            </p>
          )}
          {error && <p className="error-message">{error}</p>}
          <div className="storage-note">
            <CircleHelp size={17} />
            <p>
              Não há conta nem sincronização automática. Limpar os dados do
              navegador remove o progresso. Use uma aba por vez para evitar que
              uma sessão sobrescreva outra.
            </p>
          </div>
        </section>
        <section className="panel settings-panel how-it-works">
          <span className="eyebrow">COMO SUA EVOLUÇÃO É CALCULADA</span>
          <h2>Praticar + conseguir explicar.</h2>
          <div className="explanation-grid">
            <div>
              <strong>04</strong>
              <h3>Atividades por semana</h3>
              <p>
                45 + 75 + 90 + 30 minutos. A carga percorrida soma a duração
                estimada das atividades marcadas.
              </p>
            </div>
            <div>
              <strong>03</strong>
              <h3>Critérios de avaliação</h3>
              <p>
                Uma autoavaliação do que você sabe demonstrar. A semana só
                termina com as quatro tarefas e os três critérios.
              </p>
            </div>
            <div>
              <strong>24</strong>
              <h3>Semanas na jornada</h3>
              <p>
                O percentual total considera os 168 itens de tarefas e
                avaliação. As anotações e evidências são opcionais.
              </p>
            </div>
          </div>
        </section>
        <section className="reset-panel">
          <div>
            <h3>Recomeçar a jornada</h3>
            <p>
              Apaga checklists, anotações, evidências e data de início. Exporte
              seu backup primeiro.
            </p>
          </div>
          <button className="button danger" onClick={() => setReset(true)}>
            Reiniciar progresso
          </button>
        </section>
      </div>
      {pending && (
        <Modal
          title="Importar este progresso?"
          onClose={() => setPending(null)}
          confirmText="Substituir e importar"
          onConfirm={() => {
            replace(pending);
            setPending(null);
            notify("Backup importado. Sua jornada foi restaurada.");
          }}
        >
          <p>
            Este backup contém{" "}
            <strong>{summary(pending).taskCount} tarefas marcadas</strong> e{" "}
            <strong>{summary(pending).completed} semanas concluídas</strong>. A
            importação substitui todo o progresso, as anotações e os ajustes
            atuais.
          </p>
          <p>
            Exporte a sessão atual antes de continuar se quiser preservar os
            dois registros.
          </p>
        </Modal>
      )}
      {reset && (
        <Modal
          title="Recomeçar do zero?"
          onClose={() => setReset(false)}
          confirmText="Apagar e recomeçar"
          onConfirm={() => {
            replace({ ...freshState(), theme: state.theme });
            setReset(false);
            notify("Progresso reiniciado. Uma nova rota começa aqui.");
          }}
        >
          <p>
            Esta ação apaga seu progresso e suas anotações neste navegador. A
            aparência escolhida será mantida.
          </p>
          <p>
            Só será possível recuperar os dados se você tiver um backup
            exportado.
          </p>
        </Modal>
      )}
    </>
  );
}

export default function App() {
  const { state, error, update, replace, toggle, setText } = useProgress();
  const [route, setRoute] = useState(getRoute);
  const [menuOpen, setMenuOpen] = useState(false);
  const [toast, setToast] = useState("");
  const mainRef = useRef(null);
  const initialRoute = useRef(true);
  const data = summary(state);
  useEffect(() => {
    const change = () => setRoute(getRoute());
    window.addEventListener("hashchange", change);
    return () => window.removeEventListener("hashchange", change);
  }, []);
  useEffect(() => {
    setMenuOpen(false);
    if (!initialRoute.current) mainRef.current?.focus({ preventScroll: true });
    initialRoute.current = false;
    window.scrollTo({ top: 0, behavior: "instant" });
    document.title = `${route.page === "semana" ? `Semana ${pad(route.id)}` : { painel: "Visão geral", trilha: "Minha trilha", caderno: "Caderno de bordo", recursos: "Biblioteca", ajustes: "Ajustes" }[route.page]} · Rota`;
  }, [route.page, route.id]);
  useEffect(() => {
    if (!menuOpen) return;
    const close = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [menuOpen]);
  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => setToast(""), 5500);
    return () => clearTimeout(timer);
  }, [toast]);
  const currentPage = route.page === "semana" ? "trilha" : route.page;
  return (
    <div className="app-shell">
      <a
        className="skip-link"
        href="#main-content"
        onClick={(e) => {
          e.preventDefault();
          mainRef.current?.focus();
        }}
      >
        Pular para o conteúdo
      </a>
      <aside className={`sidebar ${menuOpen ? "open" : ""}`}>
        <a className="brand" href="#/painel" aria-label="Rota, início">
          <span className="brand-mark">
            r<span>↗</span>
          </span>
          <span>
            rota<span className="brand-dot">.</span>
          </span>
        </a>
        <div className="workspace-label">
          <span className="workspace-avatar">
            <Terminal size={18} />
          </span>
          <div>
            <strong>Meu laboratório</strong>
            <span>NOC · Infra · DevOps</span>
          </div>
          <span className="status-dot" />
        </div>
        <span className="sidebar-label">WORKSPACE</span>
        <nav aria-label="Navegação principal">
          {nav.map(([id, label, Icon]) => (
            <a
              key={id}
              className={currentPage === id ? "active" : ""}
              aria-current={currentPage === id ? "page" : undefined}
              href={`#/${id}`}
            >
              <Icon size={19} />
              <span>{label}</span>
              {id === "trilha" && <span className="nav-count">24</span>}
            </a>
          ))}
        </nav>
        <div className="sidebar-bottom">
          <div className="sidebar-progress">
            <div>
              <span>SUA JORNADA</span>
              <strong>{data.percent}%</strong>
            </div>
            <ProgressBar value={data.percent} />
            <p>{data.completed} de 24 semanas concluídas</p>
          </div>
          <a
            className={`settings-link ${route.page === "ajustes" ? "active" : ""}`}
            aria-current={route.page === "ajustes" ? "page" : undefined}
            href="#/ajustes"
          >
            <Settings2 size={18} /> Ajustes & backup
          </a>
          <div className="sidebar-signature">
            <span className="profile-avatar">EU</span>
            <div>
              <strong>Minha próxima versão</strong>
              <span>Em constante evolução</span>
              <small>Rota v1.0</small>
            </div>
          </div>
        </div>
      </aside>
      <div className="main-shell">
        <header className="topbar">
          <button
            className="icon-button mobile-menu"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
          <div className="topbar-breadcrumb">
            <span>Meu workspace</span>
            <ChevronRight size={13} />
            <strong>
              {route.page === "semana"
                ? `Semana ${pad(route.id)}`
                : {
                    painel: "Visão geral",
                    trilha: "Minha trilha",
                    caderno: "Caderno de bordo",
                    recursos: "Biblioteca",
                    ajustes: "Ajustes",
                  }[route.page]}
            </strong>
          </div>
          <div className="topbar-actions">
            <span className={`local-indicator ${error ? "warning" : ""}`}>
              <span />
              {error ? "Atenção ao salvamento" : "Progresso neste navegador"}
            </span>
            <button
              className="icon-button theme-toggle"
              aria-label={`Ativar tema ${state.theme === "dark" ? "claro" : "escuro"}`}
              onClick={() =>
                update((s) => ({
                  ...s,
                  theme: s.theme === "dark" ? "light" : "dark",
                }))
              }
            >
              {state.theme === "dark" ? <Sun size={19} /> : <Moon size={19} />}
            </button>
          </div>
        </header>
        {menuOpen && (
          <button
            className="mobile-overlay"
            aria-label="Fechar navegação"
            onClick={() => setMenuOpen(false)}
          />
        )}
        <main id="main-content" tabIndex={-1} ref={mainRef}>
          {error && (
            <div className="storage-warning" role="alert">
              <CircleHelp size={18} />
              <span>{error}</span>
              <a href="#/ajustes">Abrir ajustes</a>
            </div>
          )}
          {route.page === "painel" && (
            <Dashboard state={state} toggle={toggle} />
          )}
          {route.page === "trilha" && <Trail state={state} />}
          {route.page === "semana" && (
            <Week
              key={route.id}
              id={route.id}
              state={state}
              toggle={toggle}
              setText={setText}
            />
          )}
          {route.page === "caderno" && <Notebook state={state} />}
          {route.page === "recursos" && <Library />}
          {route.page === "ajustes" && (
            <Settings
              state={state}
              update={update}
              replace={replace}
              error={error}
              notify={setToast}
            />
          )}
        </main>
        <footer className="app-footer">
          <span>Feito de prática. Construído por você.</span>
          <span className="mono">
            NOC → INFRA → DEVOPS <span className="accent">↗</span>
          </span>
        </footer>
      </div>
      {toast && (
        <div className="toast" role="status">
          <Check size={18} />
          <span>{toast}</span>
          <button aria-label="Fechar aviso" onClick={() => setToast("")}>
            <X size={16} />
          </button>
        </div>
      )}
    </div>
  );
}

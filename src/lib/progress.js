import { weeks } from "../data/curriculum.js";

export const STORAGE_KEY = "rota-devops-v1";
export const freshState = () => ({
  version: 1,
  theme: "dark",
  startDate: "",
  tasks: {},
  criteria: {},
  notes: {},
  evidence: {},
});
const taskIds = new Set(weeks.flatMap((w) => w.tasks.map((t) => t.id)));
const criterionIds = new Set(weeks.flatMap((w) => w.criteria.map((c) => c.id)));
const weekIds = new Set(weeks.map((w) => String(w.id)));
const isObject = (value) =>
  value !== null && typeof value === "object" && !Array.isArray(value);

export function validDate(value) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const [year, month, day] = value.split("-").map(Number);
  const d = new Date(year, month - 1, day, 12);
  return (
    year >= 2000 &&
    year <= 2200 &&
    d.getFullYear() === year &&
    d.getMonth() === month - 1 &&
    d.getDate() === day
  );
}

// Importações aceitam somente o contrato conhecido, nunca código ou campos arbitrários.
export function validateState(input) {
  if (!isObject(input) || input.version !== 1)
    throw new Error(
      "Backup incompatível. Use um arquivo exportado pelo Rota, versão 1.",
    );
  if (
    !["dark", "light"].includes(input.theme) ||
    (input.startDate !== "" && !validDate(input.startDate))
  )
    throw new Error("Tema ou data inválidos no backup.");
  const output = freshState();
  output.theme = input.theme;
  output.startDate = input.startDate;
  for (const [field, ids, text] of [
    ["tasks", taskIds, false],
    ["criteria", criterionIds, false],
    ["notes", weekIds, true],
    ["evidence", weekIds, true],
  ]) {
    if (!isObject(input[field]))
      throw new Error(`O campo ${field} está ausente ou é inválido.`);
    for (const [key, value] of Object.entries(input[field])) {
      if (
        !ids.has(key) ||
        (text
          ? typeof value !== "string" || value.length > 20000
          : typeof value !== "boolean")
      )
        throw new Error(
          `Conteúdo inválido em ${field}. Nenhum dado foi substituído.`,
        );
      output[field][key] = value;
    }
  }
  return output;
}

export function readState(storage) {
  try {
    const raw = storage.getItem(STORAGE_KEY);
    return {
      state: raw ? validateState(JSON.parse(raw)) : freshState(),
      error: "",
      blocked: false,
    };
  } catch {
    return {
      state: freshState(),
      error:
        "Não foi possível carregar o armazenamento local. Os dados existentes não serão sobrescritos. Exporte esta sessão ou importe um backup em Ajustes.",
      blocked: true,
    };
  }
}

export function weekProgress(week, state) {
  const tasks = week.tasks.filter((t) => state.tasks[t.id]).length;
  const criteria = week.criteria.filter((c) => state.criteria[c.id]).length;
  const total = week.tasks.length + week.criteria.length;
  return {
    tasks,
    criteria,
    done: tasks === week.tasks.length && criteria === week.criteria.length,
    percent: Math.round(((tasks + criteria) / total) * 100),
    started: tasks + criteria > 0,
  };
}

export function summary(state) {
  const taskCount = weeks
    .flatMap((w) => w.tasks)
    .filter((t) => state.tasks[t.id]).length;
  const criterionCount = weeks
    .flatMap((w) => w.criteria)
    .filter((c) => state.criteria[c.id]).length;
  const completed = weeks.filter((w) => weekProgress(w, state).done).length;
  const minutes = weeks
    .flatMap((w) => w.tasks)
    .reduce((sum, t) => sum + (state.tasks[t.id] ? t.minutes : 0), 0);
  return {
    taskCount,
    criterionCount,
    completed,
    minutes,
    percent: Math.round(((taskCount + criterionCount) / 168) * 100),
    current: weeks.find((w) => !weekProgress(w, state).done) || weeks[23],
  };
}

export function weekPeriod(startDate, weekId) {
  if (!validDate(startDate)) return "";
  const [y, m, d] = startDate.split("-").map(Number);
  const start = new Date(y, m - 1, d + (weekId - 1) * 7, 12);
  const end = new Date(y, m - 1, d + (weekId - 1) * 7 + 6, 12);
  const format = (value) =>
    value
      .toLocaleDateString("pt-BR", { day: "2-digit", month: "short" })
      .replace(".", "");
  return `${format(start)} – ${format(end)}`;
}

export const formatHours = (minutes) =>
  (minutes / 60).toLocaleString("pt-BR", { maximumFractionDigits: 1 });
export const pad = (value) => String(value).padStart(2, "0");

import test from "node:test";
import assert from "node:assert/strict";
import {
  modules,
  resources,
  totalMinutes,
  weeks,
} from "../src/data/curriculum.js";
import {
  freshState,
  readState,
  summary,
  validateState,
  validDate,
  weekPeriod,
  weekProgress,
} from "../src/lib/progress.js";

test("plano tem 24 semanas, 6 módulos e 96 horas", () => {
  assert.equal(weeks.length, 24);
  assert.equal(modules.length, 6);
  assert.equal(totalMinutes, 96 * 60);
  assert.deepEqual(
    weeks.map((w) => w.id),
    Array.from({ length: 24 }, (_, i) => i + 1),
  );
  modules.forEach((_, i) =>
    assert.equal(weeks.filter((w) => w.module === i).length, 4),
  );
});
test("cada semana tem 240 minutos, quatro tarefas e três critérios", () => {
  for (const week of weeks) {
    assert.equal(week.tasks.length, 4);
    assert.equal(week.criteria.length, 3);
    assert.equal(
      week.tasks.reduce((s, t) => s + t.minutes, 0),
      240,
    );
    assert.ok(week.goal.length > 30);
    assert.ok(week.deliverable.length > 30);
    week.tasks.forEach((t) => assert.ok(t.detail.length > 80));
  }
});
test("identificadores são únicos e fontes de todas as semanas existem", () => {
  const ids = weeks.flatMap((w) =>
    [...w.tasks, ...w.criteria].map((t) => t.id),
  );
  assert.equal(new Set(ids).size, 168);
  weeks.forEach((w) =>
    w.resourceIds.forEach((id) =>
      assert.ok(resources.some((r) => r.id === id)),
    ),
  );
  resources.forEach((r) => assert.equal(new URL(r.url).protocol, "https:"));
});
test("jornada começa vazia na semana 1", () => {
  const s = summary(freshState());
  assert.equal(s.completed, 0);
  assert.equal(s.percent, 0);
  assert.equal(s.current.id, 1);
  assert.equal(s.minutes, 0);
});
test("tarefas sozinhas não concluem uma semana", () => {
  const s = freshState();
  weeks[0].tasks.forEach((t) => (s.tasks[t.id] = true));
  assert.equal(weekProgress(weeks[0], s).done, false);
  assert.equal(summary(s).completed, 0);
  assert.equal(summary(s).minutes, 240);
});
test("conclusão exige tarefas e critérios e avança a próxima semana", () => {
  const s = freshState();
  weeks[0].tasks.forEach((t) => (s.tasks[t.id] = true));
  weeks[0].criteria.forEach((c) => (s.criteria[c.id] = true));
  assert.equal(weekProgress(weeks[0], s).done, true);
  assert.equal(summary(s).completed, 1);
  assert.equal(summary(s).current.id, 2);
  s.criteria["w1-c1"] = false;
  assert.equal(summary(s).completed, 0);
  assert.equal(summary(s).current.id, 1);
});
test("carga estimada só soma tarefas marcadas", () => {
  const s = freshState();
  s.tasks["w1-t1"] = true;
  s.tasks["w2-t3"] = true;
  s.criteria["w3-c1"] = true;
  assert.equal(summary(s).minutes, 135);
  assert.equal(summary(s).taskCount, 2);
  assert.equal(summary(s).criterionCount, 1);
});
test("finalizar todo o plano produz 100% e mantém semana válida", () => {
  const s = freshState();
  weeks.forEach((w) => {
    w.tasks.forEach((t) => (s.tasks[t.id] = true));
    w.criteria.forEach((c) => (s.criteria[c.id] = true));
  });
  const result = summary(s);
  assert.equal(result.percent, 100);
  assert.equal(result.completed, 24);
  assert.equal(result.current.id, 24);
  assert.equal(result.minutes, 5760);
});
test("exportação e importação preservam texto, tema, data e checklists", () => {
  const s = freshState();
  s.theme = "light";
  s.startDate = "2026-10-19";
  s.notes["1"] = "Aprendi: ação, rede e recuperação.";
  s.evidence["1"] = "https://example.com/lab";
  s.tasks["w1-t2"] = true;
  assert.deepEqual(validateState(JSON.parse(JSON.stringify(s))), s);
});
test("backup incompatível ou parcial é rejeitado", () => {
  for (const s of [
    null,
    [],
    {},
    { version: 2 },
    { ...freshState(), tasks: null },
    { ...freshState(), theme: "other" },
  ])
    assert.throws(() => validateState(s));
});
test("backup não permite IDs desconhecidos ou tipos falsos", () => {
  assert.throws(() =>
    validateState({ ...freshState(), tasks: { "w99-t1": true } }),
  );
  assert.throws(() =>
    validateState({ ...freshState(), tasks: { "w1-t1": "true" } }),
  );
  assert.throws(() => validateState({ ...freshState(), notes: { 1: 42 } }));
  assert.throws(() =>
    validateState({ ...freshState(), notes: { 1: "a".repeat(20001) } }),
  );
  assert.throws(() =>
    validateState({
      ...freshState(),
      notes: JSON.parse('{"__proto__":"unsafe"}'),
    }),
  );
});
test("validação retorna nova estrutura e descarta campos extras", () => {
  const input = { ...freshState(), extra: "ignorar" };
  const s = validateState(input);
  assert.equal(s.extra, undefined);
  s.tasks["w1-t1"] = true;
  assert.equal(input.tasks["w1-t1"], undefined);
});
test("datas impossíveis e fora do intervalo não são aceitas", () => {
  for (const d of [
    "2026-02-30",
    "2026-13-01",
    "2026-00-12",
    "99-01-01",
    "1999-01-01",
    "2201-01-01",
    undefined,
  ])
    assert.equal(validDate(d), false);
  assert.equal(validDate("2028-02-29"), true);
  assert.equal(validDate("2026-10-19"), true);
});
test("calendário avança por semanas sem exigir uma data inicial", () => {
  assert.equal(weekPeriod("", 1), "");
  assert.match(weekPeriod("2026-10-19", 1), /19.*out.*25.*out/);
  assert.match(weekPeriod("2026-10-19", 2), /26.*out.*01.*nov/);
});
test("dados inválidos no armazenamento não são sobrescritos", () => {
  let writes = 0;
  const result = readState({
    getItem: () => "{invalid",
    setItem: () => writes++,
  });
  assert.equal(result.blocked, true);
  assert.ok(result.error);
  assert.equal(writes, 0);
  assert.deepEqual(result.state, freshState());
});
test("armazenamento indisponível permite sessão em memória com aviso", () => {
  const result = readState({
    getItem() {
      throw new Error("blocked");
    },
  });
  assert.equal(result.blocked, true);
  assert.ok(result.error);
  assert.equal(result.state.version, 1);
});
test("armazenamento vazio e válido são carregados sem erro", () => {
  assert.equal(readState({ getItem: () => null }).error, "");
  const s = freshState();
  s.tasks["w1-t1"] = true;
  assert.deepEqual(readState({ getItem: () => JSON.stringify(s) }).state, s);
});

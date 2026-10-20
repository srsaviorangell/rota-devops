import { useEffect, useState } from "react";
import { readState, STORAGE_KEY } from "./progress.js";

export function useProgress() {
  const [initial] = useState(() => {
    try {
      return readState(window.localStorage);
    } catch {
      return readState({
        getItem() {
          throw new Error();
        },
      });
    }
  });
  const [state, setState] = useState(initial.state);
  const [error, setError] = useState(initial.error);
  const [blocked, setBlocked] = useState(initial.blocked);
  const [revision, setRevision] = useState(0);
  useEffect(() => {
    document.documentElement.dataset.theme = state.theme;
  }, [state.theme]);
  useEffect(() => {
    if (!revision || blocked) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      setError("");
    } catch {
      setError(
        "O navegador não conseguiu salvar. Suas alterações estão nesta sessão; exporte um backup antes de fechar.",
      );
    }
  }, [state, revision, blocked]);
  function update(updater) {
    setState((previous) =>
      typeof updater === "function" ? updater(previous) : updater,
    );
    setRevision((v) => v + 1);
  }
  function replace(next) {
    setBlocked(false);
    update(next);
  }
  function toggle(field, id) {
    update((s) => ({ ...s, [field]: { ...s[field], [id]: !s[field][id] } }));
  }
  function setText(field, id, value) {
    update((s) => ({ ...s, [field]: { ...s[field], [id]: value } }));
  }
  return { state, error, update, replace, toggle, setText };
}

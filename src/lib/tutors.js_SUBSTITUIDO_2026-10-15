const TUTOR_BASE = "https://drmarionascimento.github.io/fisiologia-interativa";

export function origemDaRota(search = "") {
  const hash = typeof window !== "undefined" ? window.location.hash : "";
  const query = hash.includes("?") ? hash.slice(hash.indexOf("?") + 1) : String(search).replace(/^\?/, "");
  return new URLSearchParams(query);
}

export function urlDoTutor(cursoId, roomId, origem) {
  if (origem === "moodle") {
    return cursoId === "fisio"
      ? `${TUTOR_BASE}/tutor-moodle.html?percurso=fisioterapia`
      : `${TUTOR_BASE}/tutor-moodle.html`;
  }
  const page = cursoId === "fisio" ? "tutor-fisio.html" : "tutor-ef.html";
  const eixo = roomId ? `?eixo=${encodeURIComponent(roomId)}` : "";
  return `${TUTOR_BASE}/${page}${eixo}`;
}

import { enigmas } from "./enigmas.js";

export const cursos = [
  {
    id: "ef",
    nome: "Educação Física",
    desc: "Seis eixos: do potencial de ação à integração cardiorrespiratória.",
    cor: "#65d5cc",
  },
  {
    id: "fisio",
    nome: "Fisioterapia",
    desc: "Cinco unidades: sem o eixo osteoarticular, foco clínico.",
    cor: "#8ee4ad",
  },
];

export const rooms = [
  {
    "id": "celular",
    "imagem": "celular.webp",
    "cursos": [
      "ef",
      "fisio"
    ],
    "eixo": "Fisiologia celular, transporte de substâncias e potenciais de ação",
    "titulo": "A Célula Sitiada"
  },
  {
    "id": "muscular",
    "imagem": "muscular.webp",
    "cursos": [
      "ef",
      "fisio"
    ],
    "eixo": "Excitabilidade e sistema muscular",
    "titulo": "O Músculo em Silêncio"
  },
  {
    "id": "osteoarticular",
    "imagem": "osteoarticular.webp",
    "cursos": [
      "ef"
    ],
    "eixo": "Sistema osteoarticular",
    "titulo": "O Osso que Se Reconstrói"
  },
  {
    "id": "cardiovascular",
    "imagem": "cardiovascular.webp",
    "cursos": [
      "ef",
      "fisio"
    ],
    "eixo": "Sistema cardiovascular",
    "titulo": "O Circuito da Pressão"
  },
  {
    "id": "respiratorio",
    "imagem": "respiratorio.webp",
    "cursos": [
      "ef",
      "fisio"
    ],
    "eixo": "Sistema respiratório",
    "titulo": "O Fôlego Perdido"
  },
  {
    "id": "integracao",
    "imagem": "integracao.webp",
    "cursos": [
      "ef",
      "fisio"
    ],
    "eixo": "Integração cardiorrespiratória",
    "titulo": "A Marcha do Oxigênio"
  }
];

const tutores = {
  ef: {
    nome: "Educação Física",
    url: "https://fisiologia.drmarionascimento.com.br/tutor-ef.html",
  },
  fisio: {
    nome: "Fisioterapia",
    url: "https://fisiologia.drmarionascimento.com.br/tutor-fisio.html",
  },
};

function comporSala(base, cursoId) {
  if (!base) return undefined;
  const curso = cursos.find((item) => item.id === cursoId);
  if (!curso || !base.cursos.includes(cursoId)) return undefined;
  const especifica = enigmas[cursoId][base.id];
  const sala = {
    ...base,
    ...especifica,
    cursoId,
    cursoNome: curso.nome,
    percursoId: `${cursoId}-${base.id}`,
    tutorUrl: tutores[cursoId].url,
  };
  return {
    ...sala,
    tempoPorQuestao: 60,
    tempoSegundos: sala.puzzles.length * 60,
  };
}

export function roomsPorCurso(cursoId) {
  return rooms
    .filter((room) => room.cursos.includes(cursoId))
    .map((room) => comporSala(room, cursoId));
}

export function getRoom(roomId, cursoId) {
  const base = rooms.find((room) => room.id === roomId);
  const percurso = cursoId || base?.cursos?.[0];
  return comporSala(base, percurso);
}

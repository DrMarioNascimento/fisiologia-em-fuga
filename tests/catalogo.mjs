import assert from "node:assert/strict";
import { cursos, roomsPorCurso, getRoom } from "../src/data/escapeRooms.js";
import { urlDoTutor } from "../src/lib/tutors.js";
import { prepararPuzzles } from "../src/lib/game.js";
import { montarOperacao, temasPorCurso, puzzlesPorTema, salaProtocolo } from "../src/data/protocoloEferente.js";

assert.equal(cursos.length, 2);
assert.equal(roomsPorCurso("ef").length, 12);
for (const id of ["snp", "snc"]) {
  assert.equal(getRoom(id, "ef").puzzles.length, 6);
  assert.equal(getRoom(id, "fisio"), undefined);
  assert.match(urlDoTutor("ef", id, "site"), new RegExp("eixo=" + id));
}
assert.equal(getRoom("reprodutor", "ef").puzzles.length, 6);
assert.equal(getRoom("reprodutor", "fisio"), undefined);
assert.match(urlDoTutor("ef", "reprodutor", "site"), /tutor-ef\.html\?eixo=reprodutor$/);
assert.equal(getRoom("digestorio", "ef").puzzles.length, 6);
assert.equal(getRoom("digestorio", "fisio").puzzles.length, 6);
assert.notEqual(getRoom("digestorio", "fisio").titulo, getRoom("digestorio", "ef").titulo);
assert.match(urlDoTutor("ef", "digestorio", "site"), /tutor-ef\.html\?eixo=digestorio$/);
assert.equal(getRoom("urinario", "ef").puzzles.length, 6);
assert.equal(getRoom("urinario", "fisio").puzzles.length, 7);
assert.notEqual(getRoom("urinario", "fisio").titulo, getRoom("urinario", "ef").titulo);
assert.match(urlDoTutor("ef", "urinario", "site"), /tutor-ef\.html\?eixo=urinario$/);
assert.equal(getRoom("linfatico", "ef").puzzles.length, 6);
assert.match(urlDoTutor("fisio", "linfatico", "site"), /tutor-fisio\.html\?eixo=linfatico$/);
assert.match(urlDoTutor("ef", "linfatico", "site"), /tutor-ef\.html\?eixo=linfatico$/);
assert.equal(roomsPorCurso("fisio").length, 11);
for (const id of ["tegumentar", "termorregulacao"]) {
  assert.equal(getRoom(id, "fisio").puzzles.length, 6);
  assert.equal(getRoom(id, "ef"), undefined);
  assert.match(urlDoTutor("fisio", id, "site"), new RegExp("eixo=" + id));
}
assert.equal(getRoom("linfatico", "fisio").puzzles.length, 6);
assert.notEqual(getRoom("linfatico", "fisio").titulo, getRoom("linfatico", "ef").titulo);
assert.equal(getRoom("osteoarticular", "fisio").puzzles.length, 6);
assert.notEqual(getRoom("osteoarticular", "fisio").titulo, getRoom("osteoarticular", "ef").titulo);
assert.equal(salaProtocolo.id, "protocolo-eferente");
assert.ok(salaProtocolo.operacao);
assert.deepEqual(salaProtocolo.cursos, ["ef", "fisio"]);

const ef = getRoom("cardiovascular", "ef");
const fisio = getRoom("cardiovascular", "fisio");

assert.equal(ef.percursoId, "ef-cardiovascular");
assert.equal(fisio.percursoId, "fisio-cardiovascular");
assert.notEqual(ef.titulo, fisio.titulo);
assert.equal(ef.puzzles.length, 5);
assert.equal(fisio.puzzles.length, 5);
assert.ok(ef.puzzles.every((puzzle) => puzzle.dica));
assert.ok(fisio.puzzles.every((puzzle) => puzzle.dica));
assert.equal(ef.tempoPorQuestao, 60);
assert.equal(ef.tempoSegundos, ef.puzzles.length * 60);

for (const curso of cursos) {
  for (const sala of roomsPorCurso(curso.id)) {
    assert.match(sala.imagem, /\.webp$/);
    assert.equal(sala.tempoSegundos, sala.puzzles.length * 60);
  }
}

const preparados = prepararPuzzles(getRoom("celular", "ef").puzzles, () => 0);
const multipla = preparados.find((puzzle) => puzzle.tipo === "multipla");
const ordem = preparados.find((puzzle) => puzzle.tipo === "ordem");
const verdadeiro = preparados.find((puzzle) => puzzle.tipo === "verdadeiro");

assert.equal(multipla.opcoes.filter((opcao) => opcao.correta).length, 1);
assert.equal(new Set(ordem.itens.map((item) => item.id)).size, ordem.itens.length);
assert.equal(ordem.corretaIds.length, ordem.itens.length);
assert.deepEqual(new Set(verdadeiro.opcoesVF.map((opcao) => opcao.v)), new Set([true, false]));

assert.match(urlDoTutor("ef", "celular", "moodle"), /tutor-moodle\.html$/);
assert.match(urlDoTutor("fisio", "respiratorio", "moodle"), /tutor-moodle\.html\?percurso=fisioterapia$/);
assert.match(urlDoTutor("ef", "osteoarticular", "site"), /tutor-ef\.html\?eixo=osteoarticular$/);

assert.equal(temasPorCurso.ef.length, 6);
assert.equal(temasPorCurso.fisio.length, 5);
const curta = montarOperacao("ef", ["celular"]);
assert.equal(curta.puzzles.length, 2);
const cheia = montarOperacao("ef", ["celular", "muscular"]);
assert.equal(cheia.puzzles.length, 4);
assert.equal(cheia.tempoSegundos, 240);
const fisioOp = montarOperacao("fisio", ["celular", "integracao"]);
assert.notEqual(cheia.puzzles[0].pergunta, fisioOp.puzzles[0].pergunta);
assert.ok(Object.values(puzzlesPorTema.ef).every((lista) => lista.every((p) => p.dica && p.explicacao)));
assert.ok(Object.values(puzzlesPorTema.fisio).every((lista) => lista.every((p) => p.dica && p.explicacao)));

console.log("Catálogo validado: salas por unidade + Operação Protocolo Eferente.");

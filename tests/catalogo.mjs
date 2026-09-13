import assert from "node:assert/strict";
import { cursos, roomsPorCurso, getRoom } from "../src/data/escapeRooms.js";
import { urlDoTutor } from "../src/lib/tutors.js";
import { prepararPuzzles } from "../src/lib/game.js";
import { montarOperacao, temasPorCurso, puzzlesPorTema, salaProtocolo } from "../src/data/protocoloEferente.js";

assert.equal(cursos.length, 2);
assert.equal(roomsPorCurso("ef").length, 6);
assert.equal(roomsPorCurso("fisio").length, 5);
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

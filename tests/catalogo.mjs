import assert from "node:assert/strict";
import { cursos, roomsPorCurso, getRoom } from "../src/data/escapeRooms.js";

assert.equal(cursos.length, 2);
assert.equal(roomsPorCurso("ef").length, 6);
assert.equal(roomsPorCurso("fisio").length, 5);

const ef = getRoom("cardiovascular", "ef");
const fisio = getRoom("cardiovascular", "fisio");

assert.equal(ef.percursoId, "ef-cardiovascular");
assert.equal(fisio.percursoId, "fisio-cardiovascular");
assert.notEqual(ef.titulo, fisio.titulo);
assert.equal(ef.puzzles.length, 5);
assert.equal(fisio.puzzles.length, 5);
assert.ok(ef.puzzles.every((puzzle) => puzzle.dica));
assert.ok(fisio.puzzles.every((puzzle) => puzzle.dica));

console.log("Catálogo validado: 6 unidades de Educação Física e 5 de Fisioterapia.");


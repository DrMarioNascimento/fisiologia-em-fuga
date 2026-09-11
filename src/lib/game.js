export function embaralhar(itens, random = Math.random) {
  const copia = [...itens];
  for (let i = copia.length - 1; i > 0; i -= 1) {
    const j = Math.floor(random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
}

export function prepararPuzzles(puzzles, random = Math.random) {
  return puzzles.map((puzzle, puzzleIndex) => {
    if (puzzle.tipo === "multipla") {
      const opcoes = puzzle.opcoes.map((texto, index) => ({
        id: `${puzzleIndex}-opcao-${index}`,
        texto,
        correta: index === puzzle.correta,
      }));
      return { ...puzzle, opcoes: embaralhar(opcoes, random) };
    }

    if (puzzle.tipo === "ordem") {
      const itens = puzzle.itens.map((texto, index) => ({
        id: `${puzzleIndex}-item-${index}`,
        texto,
      }));
      return {
        ...puzzle,
        itens: embaralhar(itens, random),
        corretaIds: puzzle.correta.map((index) => `${puzzleIndex}-item-${index}`),
      };
    }

    if (puzzle.tipo === "verdadeiro") {
      return {
        ...puzzle,
        opcoesVF: embaralhar([
          { v: true, label: "Verdadeiro" },
          { v: false, label: "Falso" },
        ], random),
      };
    }

    return puzzle;
  });
}

import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Lock, Unlock, Clock, Trophy, RotateCcw, Lightbulb, KeyRound } from "lucide-react";
import { getRoom } from "@/data/escapeRooms";
import { prepararPuzzles } from "@/lib/game";

function PuzzleOrdem({ puzzle, onResolver, onTentativa }) {
  const [selecao, setSelecao] = useState([]);
  const [errado, setErrado] = useState(false);
  const itens = puzzle.itens;

  const toggle = (idx) => {
    if (selecao.includes(idx)) {
      setSelecao(selecao.filter((i) => i !== idx));
    } else {
      setSelecao([...selecao, idx]);
    }
    setErrado(false);
  };

  const confirmar = () => {
    onTentativa();
    const correta = puzzle.corretaIds;
    const escolha = selecao.map((i) => itens[i].id);
    if (JSON.stringify(correta) === JSON.stringify(escolha)) {
      onResolver(true);
    } else {
      setErrado(true);
    }
  };

  return (
    <div>
      <p className="text-sm text-stone-300 mb-4">{pergunta(puzzle)}</p>
      <div className="space-y-2 mb-4">
        {itens.map((it, idx) => {
          const ordem = selecao.indexOf(idx);
          const sel = ordem >= 0;
          return (
            <button
              key={it.id}
              onClick={() => toggle(idx)}
              className={`escape-option w-full text-left px-4 py-3 text-sm flex items-center gap-3 ${sel ? "is-selected" : ""}`}
            >
              <span
                className={`escape-order-badge flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs ${sel ? "is-selected" : ""}`}
              >
                {sel ? ordem + 1 : ""}
              </span>
              {it.texto}
            </button>
          );
        })}
      </div>
      {errado && (
        <p className="text-xs text-red-400 mb-3">Ordem incorreta. Tente de novo.</p>
      )}
      <button
        onClick={confirmar}
        disabled={selecao.length !== itens.length}
        className="escape-btn escape-btn--primary w-full px-6 py-3 font-semibold disabled:opacity-40"
      >
        <KeyRound className="w-4 h-4" /> Confirmar ordem
      </button>
    </div>
  );
}

function PuzzleMultipla({ puzzle, onResolver, onTentativa }) {
  const [escolha, setEscolha] = useState(null);
  const [errado, setErrado] = useState(false);

  const escolher = (i) => {
    onTentativa();
    setEscolha(i);
    if (puzzle.opcoes[i].correta) {
      setErrado(false);
      onResolver(true);
    } else {
      setErrado(true);
    }
  };

  return (
    <div>
      <p className="text-sm text-stone-300 mb-4">{pergunta(puzzle)}</p>
      <div className="space-y-2 mb-3">
        {puzzle.opcoes.map((op, i) => {
          const sel = escolha === i;
          const correta = op.correta;
          const estilo = sel ? (correta ? "is-correct" : "is-wrong") : "";
          return (
            <button
              key={op.id}
              onClick={() => escolher(i)}
              className={`escape-option w-full text-left px-4 py-3 text-sm ${estilo}`}
            >
              {op.texto}
            </button>
          );
        })}
      </div>
      {errado && <p className="text-xs text-red-400">Resposta incorreta — tente outra.</p>}
    </div>
  );
}

function PuzzleVerdadeiro({ puzzle, onResolver, onTentativa }) {
  const [escolha, setEscolha] = useState(null);
  const [errado, setErrado] = useState(false);

  const escolher = (v) => {
    onTentativa();
    setEscolha(v);
    if (v === puzzle.correta) {
      setErrado(false);
      onResolver(true);
    } else {
      setErrado(true);
    }
  };

  return (
    <div>
      <p className="text-sm text-stone-300 mb-4">{pergunta(puzzle)}</p>
      <div className="grid grid-cols-2 gap-3 mb-3">
        {puzzle.opcoesVF.map((o) => {
          const sel = escolha === o.v;
          const correta = o.v === puzzle.correta;
          const estilo = sel ? (correta ? "is-correct" : "is-wrong") : "";
          return (
            <button
              key={o.label}
              onClick={() => escolher(o.v)}
              className={`escape-option px-4 py-4 text-sm font-medium ${estilo}`}
            >
              {o.label}
            </button>
          );
        })}
      </div>
      {errado && <p className="text-xs text-red-400">Resposta incorreta — tente de novo.</p>}
    </div>
  );
}

function pergunta(p) {
  return p.pergunta;
}

export default function EscapeRoom() {
  const { roomId, cursoId } = useParams();
  const room = getRoom(roomId, cursoId);
  const [puzzlesPartida, setPuzzlesPartida] = useState(() => prepararPuzzles(room?.puzzles ?? []));
  const [resolvidos, setResolvidos] = useState(0);
  const [atual, setAtual] = useState(0);
  const [mostrarExplicacao, setMostrarExplicacao] = useState(false);
  const [segundos, setSegundos] = useState(room?.tempoSegundos ?? 600);
  const [comecou, setComecou] = useState(false);
  const [escapou, setEscapou] = useState(false);
  const [tempoEsgotado, setTempoEsgotado] = useState(false);
  const [tentativas, setTentativas] = useState(0);
  const [dicasUsadas, setDicasUsadas] = useState(0);
  const [mostrarDica, setMostrarDica] = useState(false);

  useEffect(() => {
    if (!comecou || escapou || tempoEsgotado || mostrarExplicacao) return;
    const t = setInterval(() => setSegundos((s) => Math.max(0, s - 1)), 1000);
    return () => clearInterval(t);
  }, [comecou, escapou, tempoEsgotado, mostrarExplicacao]);

  useEffect(() => {
    if (comecou && segundos === 0 && !escapou) setTempoEsgotado(true);
  }, [comecou, segundos, escapou]);

  if (!room) {
    return (
      <div className="min-h-screen bg-[#0b0d12] text-stone-100 flex items-center justify-center">
        <div className="text-center">
          <p className="text-stone-400 mb-4">Sala não encontrada.</p>
          <Link to="/escape" className="text-amber-400">Voltar ao hub</Link>
        </div>
      </div>
    );
  }

  const total = puzzlesPartida.length;
  const puzzle = puzzlesPartida[atual];
  const imagemSala = `${import.meta.env.BASE_URL}salas/${room.imagem}`;

  const resolver = () => {
    setMostrarExplicacao(true);
  };

  const proximo = () => {
    const novosResolvidos = resolvidos + 1;
    setResolvidos(novosResolvidos);
    setMostrarExplicacao(false);
    setMostrarDica(false);
    if (novosResolvidos >= total) {
      setEscapou(true);
    } else {
      setAtual(atual + 1);
    }
  };

  const reiniciar = () => {
    setPuzzlesPartida(prepararPuzzles(room.puzzles));
    setResolvidos(0);
    setAtual(0);
    setSegundos(room.tempoSegundos ?? 600);
    setComecou(false);
    setEscapou(false);
    setTempoEsgotado(false);
    setTentativas(0);
    setDicasUsadas(0);
    setMostrarDica(false);
    setMostrarExplicacao(false);
  };

  const fmt = (s) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
  const tempoUsado = (room.tempoSegundos ?? 600) - segundos;
  const abrirDica = () => {
    if (!mostrarDica) setDicasUsadas((valor) => valor + 1);
    setMostrarDica(true);
  };

  if (!comecou) {
    return (
      <div className="escape-app escape-scene escape-scene--intro text-stone-100" style={{ "--room-image": `url("${imagemSala}")` }}>
        <div className="relative z-10 max-w-2xl mx-auto px-5 py-6 min-h-[100svh] flex flex-col">
          <a href={room.tutorUrl} className="inline-flex items-center gap-2 text-sm text-stone-300 hover:text-white mb-8">
            <ArrowLeft className="w-4 h-4" /> Voltar ao Tutor
          </a>
          <div className="room-glass mt-auto rounded-3xl border border-amber-500/40 p-6 sm:p-8">
            <div className="inline-flex items-center gap-2 text-amber-300 text-xs tracking-[0.25em] uppercase mb-4">
              <KeyRound className="w-4 h-4" /> Escape Room
            </div>
            <h1 className="font-display text-3xl font-light mb-2">{room.titulo}</h1>
            <p className="text-xs text-stone-500 mb-2">{room.cursoNome} · {room.eixo}</p>
            {room.piloto && <p className="text-xs uppercase tracking-[0.2em] text-amber-400/80 mb-6">Sala piloto</p>}
            <p className="text-stone-300/80 leading-relaxed mb-8">{room.cenario}</p>
            <div className="flex items-center gap-4 text-xs text-stone-400 mb-8">
              <span className="inline-flex items-center gap-1">
                <Lock className="w-3.5 h-3.5" /> {total} puzzles
              </span>
              <span className="inline-flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" /> 1 min por cadeado · {fmt(room.tempoSegundos)} no total
              </span>
            </div>
            <button
              onClick={() => setComecou(true)}
              className="escape-btn escape-btn--primary w-full px-6 py-4 font-semibold"
            >
              <KeyRound className="w-5 h-5" /> Pegar a chave e entrar
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (escapou) {
    return (
      <div className="escape-app escape-scene escape-scene--result text-stone-100" style={{ "--room-image": `url("${imagemSala}")` }}>
        <div className="relative z-10 max-w-2xl mx-auto px-6 py-10 min-h-[100svh] flex flex-col justify-center">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-3 text-amber-300 mb-4"><Trophy className="w-12 h-12" /><KeyRound className="w-9 h-9" /></div>
            <h1 className="font-display text-3xl font-light mb-2">Você escapou!</h1>
            <p className="text-stone-400 text-sm">{room.titulo}</p>
          </div>
          <div className="room-glass rounded-2xl border border-amber-500/40 p-6 mb-6 text-center">
            <p className="text-xs text-stone-400 mb-1">Tempo utilizado</p>
            <p className="font-display text-4xl text-amber-400">{fmt(tempoUsado)}</p>
            <div className="mt-4 grid grid-cols-3 gap-3 text-xs text-stone-400">
              <span>{total} cadeados</span><span>{tentativas} tentativas</span><span>{dicasUsadas} pistas</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={reiniciar}
              className="escape-btn escape-btn--primary flex-1 px-6 py-3 font-semibold"
            >
              <RotateCcw className="w-4 h-4" /> Jogar de novo
            </button>
            <a
              href={room.tutorUrl}
              className="escape-btn escape-btn--secondary flex-1 px-6 py-3 font-semibold"
            >
              Voltar ao Tutor
            </a>
          </div>
        </div>
      </div>
    );
  }

  if (tempoEsgotado) {
    return (
      <div className="escape-app escape-scene escape-scene--timeout text-stone-100 flex items-center justify-center px-6" style={{ "--room-image": `url("${imagemSala}")` }}>
        <div className="room-glass relative z-10 w-full max-w-md rounded-3xl border border-rose-300/40 p-7 text-center">
          <div className="mx-auto mb-4 flex w-fit items-center gap-2 text-amber-300"><Lock className="w-12 h-12" /><Clock className="w-8 h-8" /></div>
          <h1 className="font-display text-3xl font-light mb-3">Você ficou preso na sala</h1>
          <p className="text-stone-200 mb-3">Infelizmente, o tempo terminou. Estude um pouco mais e tente novamente!</p>
          <p className="text-stone-400 mb-6">{resolvidos} de {total} cadeados abertos</p>
          <div className="grid grid-cols-2 gap-3 mb-6 text-sm text-stone-300">
            <div className="rounded-xl border border-stone-800 p-4">{tentativas}<small className="block text-stone-500">tentativas</small></div>
            <div className="rounded-xl border border-stone-800 p-4">{dicasUsadas}<small className="block text-stone-500">pistas</small></div>
          </div>
          <button onClick={reiniciar} className="escape-btn escape-btn--primary w-full px-6 py-3 font-semibold"><KeyRound className="w-4 h-4" /> Tentar novamente</button>
          <a href={room.tutorUrl} className="mt-3 inline-flex text-sm text-stone-400">Voltar ao Tutor</a>
        </div>
      </div>
    );
  }

  return (
    <div className="escape-app escape-scene escape-scene--play text-stone-100" style={{ "--room-image": `url("${imagemSala}")` }}>
      <div className="relative z-10 max-w-2xl mx-auto px-5 py-6 sm:py-10 min-h-[100svh]">
        <div className="flex items-center justify-between mb-6">
          <a href={room.tutorUrl} className="inline-flex items-center gap-2 text-sm text-stone-400 hover:text-stone-200">
            <ArrowLeft className="w-4 h-4" /> Tutor
          </a>
          <div className="flex items-center gap-3 text-xs">
            <span className="text-emerald-100/70">Cadeado {atual + 1}/{total}</span>
            <span className="inline-flex items-center gap-1 text-emerald-300">
              <Clock className="w-3.5 h-3.5" /> {fmt(segundos)} restantes
            </span>
          </div>
        </div>

        <h1 className="font-display text-2xl font-light mb-1">{room.titulo}</h1>
        <p className="text-xs text-stone-500 mb-6">{room.eixo}</p>

        <div className="escape-lock-track mb-8" aria-label={`${resolvidos} de ${total} cadeados abertos`}>
          {puzzlesPartida.map((_, i) => {
            const aberto = i < resolvidos || (i === atual && mostrarExplicacao);
            const corrente = i === atual && !mostrarExplicacao;
            return (
              <div key={i} className={`escape-lock-step ${aberto ? "is-open" : ""} ${corrente ? "is-current" : ""}`} aria-label={aberto ? `Cadeado ${i + 1} aberto` : corrente ? `Cadeado ${i + 1} atual` : `Cadeado ${i + 1} fechado`}>
                {aberto ? <Unlock className="w-4 h-4" /> : corrente ? <KeyRound className="w-4 h-4" /> : <Lock className="w-4 h-4" />}
              </div>
            );
          })}
        </div>

        <div className="room-glass rounded-2xl border border-stone-600/60 p-5 sm:p-6">
          <div className="flex items-center gap-2 text-xs text-emerald-300 mb-4">
            {mostrarExplicacao ? <Unlock className="w-3.5 h-3.5" /> : <Lock className="w-3.5 h-3.5" />}
            {mostrarExplicacao ? "Cadeado aberto" : `Cadeado ${atual + 1}`}
          </div>

          {!mostrarExplicacao ? (
            <>
              {puzzle.dica && (
                <div className="mb-4">
                  <button onClick={abrirDica} className="escape-key-action inline-flex items-center gap-2 text-xs">
                    <KeyRound className="w-3.5 h-3.5" /> {mostrarDica ? "Pista aberta" : "Usar uma chave de pista"}
                  </button>
                  {mostrarDica && <p className="mt-2 rounded-xl border border-amber-700/30 bg-amber-500/10 p-3 text-sm text-stone-300">{puzzle.dica}</p>}
                </div>
              )}
              {puzzle.tipo === "ordem" && <PuzzleOrdem key={atual} puzzle={puzzle} onResolver={resolver} onTentativa={() => setTentativas((valor) => valor + 1)} />}
              {puzzle.tipo === "multipla" && <PuzzleMultipla key={atual} puzzle={puzzle} onResolver={resolver} onTentativa={() => setTentativas((valor) => valor + 1)} />}
              {puzzle.tipo === "verdadeiro" && <PuzzleVerdadeiro key={atual} puzzle={puzzle} onResolver={resolver} onTentativa={() => setTentativas((valor) => valor + 1)} />}
            </>
          ) : (
            <div>
              <div className="inline-flex items-center gap-2 text-emerald-300 text-sm mb-4">
                <Unlock className="w-4 h-4" /> Cadeado aberto — chave encontrada!
              </div>
              <div className="rounded-xl bg-amber-500/10 border border-amber-700/30 p-4 mb-6">
                <div className="flex items-center gap-2 text-xs text-amber-400/70 mb-2">
                  <Lightbulb className="w-3.5 h-3.5" /> Por quê?
                </div>
                <p className="text-sm text-stone-200 leading-relaxed">{puzzle.explicacao}</p>
              </div>
              <button
                onClick={proximo}
                className="escape-btn escape-btn--primary w-full px-6 py-3 font-semibold"
              >
                <KeyRound className="w-4 h-4" /> {resolvidos + 1 >= total ? "Usar a chave e escapar" : "Ir ao próximo cadeado"}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

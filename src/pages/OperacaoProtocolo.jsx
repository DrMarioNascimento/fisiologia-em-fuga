import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ArrowLeft, Clock, KeyRound, Lock, RotateCcw } from "lucide-react";
import { cursos } from "@/data/escapeRooms";
import { montarOperacao, salaProtocolo, temasPorCurso } from "@/data/protocoloEferente";
import { origemDaRota, urlDoTutor } from "@/lib/tutors";
import { prepararPuzzles } from "@/lib/game";
import "./protocolo.css";

function fmt(s) {
  const m = Math.floor(s / 60);
  return `${m}:${String(s % 60).padStart(2, "0")}`;
}

function Puzzle({ puzzle, onResolver, onTentativa }) {
  const [escolha, setEscolha] = useState(null);
  const [selecao, setSelecao] = useState([]);
  const [errado, setErrado] = useState(false);
  if (puzzle.tipo === "ordem") {
    const itens = puzzle.itens;
    const toggle = (idx) => {
      setSelecao((atual) => (atual.includes(idx) ? atual.filter((i) => i !== idx) : [...atual, idx]));
      setErrado(false);
    };
    const confirmar = () => {
      onTentativa();
      const ids = selecao.map((i) => itens[i].id);
      if (JSON.stringify(ids) === JSON.stringify(puzzle.corretaIds)) onResolver(true);
      else setErrado(true);
    };
    return (
      <div>
        <p className="text-sm text-stone-300 mb-4">{puzzle.pergunta}</p>
        <div className="space-y-2 mb-4">
          {itens.map((it, idx) => {
            const ordem = selecao.indexOf(idx);
            return (
              <button key={it.id} onClick={() => toggle(idx)} className={`escape-option w-full text-left px-4 py-3 text-sm flex items-center gap-3 ${ordem >= 0 ? "is-selected" : ""}`}>
                <span className={`escape-order-badge flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs ${ordem >= 0 ? "is-selected" : ""}`}>{ordem >= 0 ? ordem + 1 : ""}</span>
                {it.texto}
              </button>
            );
          })}
        </div>
        {errado && <p className="text-xs text-red-400 mb-3">Ordem incorreta. Tente de novo.</p>}
        <button onClick={confirmar} disabled={selecao.length !== itens.length} className="escape-btn escape-btn--primary w-full px-6 py-3 font-semibold disabled:opacity-40">
          <KeyRound className="w-4 h-4" /> Confirmar ordem
        </button>
      </div>
    );
  }
  if (puzzle.tipo === "verdadeiro") {
    const escolher = (v) => {
      onTentativa();
      setEscolha(v);
      if (v === puzzle.correta) onResolver(true);
      else setErrado(true);
    };
    return (
      <div>
        <p className="text-sm text-stone-300 mb-4">{puzzle.pergunta}</p>
        <div className="grid grid-cols-2 gap-3 mb-3">
          {puzzle.opcoesVF.map((o) => {
            const sel = escolha === o.v;
            const estilo = sel ? (o.v === puzzle.correta ? "is-correct" : "is-wrong") : "";
            return (
              <button key={o.label} onClick={() => escolher(o.v)} className={`escape-option px-4 py-4 text-sm font-medium ${estilo}`}>{o.label}</button>
            );
          })}
        </div>
        {errado && <p className="text-xs text-red-400">Resposta incorreta — tente de novo.</p>}
      </div>
    );
  }
  const escolher = (i) => {
    onTentativa();
    setEscolha(i);
    if (puzzle.opcoes[i].correta) onResolver(true);
    else setErrado(true);
  };
  return (
    <div>
      <p className="text-sm text-stone-300 mb-4">{puzzle.pergunta}</p>
      <div className="space-y-2 mb-3">
        {puzzle.opcoes.map((op, i) => {
          const estilo = escolha === i ? (op.correta ? "is-correct" : "is-wrong") : "";
          return (
            <button key={op.id} onClick={() => escolher(i)} className={`escape-option w-full text-left px-4 py-3 text-sm ${estilo}`}>{op.texto}</button>
          );
        })}
      </div>
      {errado && <p className="text-xs text-red-400">Resposta incorreta — tente outra.</p>}
    </div>
  );
}

export default function OperacaoProtocolo() {
  const { cursoId = "ef" } = useParams();
  const curso = cursos.find((item) => item.id === cursoId) || cursos[0];
  const tutorHref = urlDoTutor(curso.id, "protocolo-eferente", origemDaRota().get("origem"));
  const temas = temasPorCurso[curso.id] || [];
  const imagemSala = `${import.meta.env.BASE_URL}salas/${salaProtocolo.imagem}`;
  const [temasEscolhidos, setTemasEscolhidos] = useState([]);
  const [puzzles, setPuzzles] = useState([]);
  const [atual, setAtual] = useState(0);
  const [resolvidos, setResolvidos] = useState(0);
  const [segundos, setSegundos] = useState(0);
  const [comecou, setComecou] = useState(false);
  const [escapou, setEscapou] = useState(false);
  const [tempoEsgotado, setTempoEsgotado] = useState(false);
  const [mostrarExplicacao, setMostrarExplicacao] = useState(false);
  const [mostrarDica, setMostrarDica] = useState(false);
  const [tentativas, setTentativas] = useState(0);
  const [dicasUsadas, setDicasUsadas] = useState(0);

  useEffect(() => {
    if (!comecou || escapou || tempoEsgotado || mostrarExplicacao) return;
    const t = setInterval(() => setSegundos((s) => Math.max(0, s - 1)), 1000);
    return () => clearInterval(t);
  }, [comecou, escapou, tempoEsgotado, mostrarExplicacao]);
  useEffect(() => {
    if (comecou && segundos === 0 && !escapou) setTempoEsgotado(true);
  }, [comecou, segundos, escapou]);

  const podeEntrar = temasEscolhidos.length >= 2;
  const nCadeados = temasEscolhidos.length * 2;
  const puzzle = puzzles[atual];
  const total = puzzles.length;
  const tempoUsado = Math.max(0, total * 60 - segundos);
  const toggleTema = (id) => setTemasEscolhidos((lista) => (lista.includes(id) ? lista.filter((item) => item !== id) : [...lista, id]));

  const iniciar = () => {
    const montada = montarOperacao(curso.id, temasEscolhidos);
    if (montada.puzzles.length < 4) return;
    setPuzzles(prepararPuzzles(montada.puzzles));
    setAtual(0); setResolvidos(0); setSegundos(montada.tempoSegundos);
    setComecou(true); setEscapou(false); setTempoEsgotado(false);
    setMostrarExplicacao(false); setMostrarDica(false); setTentativas(0); setDicasUsadas(0);
  };
  const reiniciar = () => {
    setComecou(false); setEscapou(false); setTempoEsgotado(false);
    setTemasEscolhidos([]); setPuzzles([]); setMostrarExplicacao(false); setMostrarDica(false);
  };
  const proximo = () => {
    const n = resolvidos + 1;
    setResolvidos(n); setMostrarExplicacao(false); setMostrarDica(false);
    if (n >= total) setEscapou(true); else setAtual(atual + 1);
  };

  if (!comecou) {
    return (
      <div className="escape-app escape-scene escape-scene--intro text-stone-100" style={{ "--room-image": `url("${imagemSala}")` }}>
        <div className="relative z-10 max-w-5xl mx-auto px-4 py-6 min-h-[100svh] flex flex-col">
          <a href={tutorHref} className="inline-flex items-center gap-2 text-sm text-stone-300 hover:text-white mb-5"><ArrowLeft className="w-4 h-4" /> Voltar ao Tutor</a>
          <div className="protocolo-shell rounded-[28px] p-4 sm:p-6 mt-auto">
            <div className="flex items-center gap-2 text-amber-300 text-xs tracking-[0.28em] uppercase mb-3"><KeyRound className="w-4 h-4" /> <Lock className="w-4 h-4" /> Operação</div>
            <h1 className="font-display text-3xl sm:text-4xl font-light mb-1">{salaProtocolo.titulo}</h1>
            <p className="text-xs text-cyan-200/80 mb-5">{curso.nome} · escolha no mínimo 2 vias</p>
            <div className="grid md:grid-cols-2 gap-4 mb-5">
              <section className="protocolo-tile protocolo-tile--story p-5">
                <p className="text-lg mb-2">🧪🔑</p>
                <h2 className="font-display text-xl mb-3">O acidente</h2>
                <p className="text-sm text-stone-200/90 leading-relaxed mb-4">{salaProtocolo.cenario}</p>
                <div className="rounded-2xl border border-amber-400/30 bg-amber-300/10 p-3 text-sm text-amber-100">
                  <span className="mr-2">🎯</span> Objetivo: entrar pela via aferente, abrir os cadeados das vias escolhidas e sair pela via eferente. Isso reverte o acidente.
                </div>
              </section>
              <section className="protocolo-tile protocolo-tile--checks p-5">
                <p className="text-lg mb-2">📦🔐</p>
                <h2 className="font-display text-xl mb-3">Vias do protocolo</h2>
                <p className="text-xs text-stone-300 mb-4">Marque pelo menos duas. Cada via abre 2 cadeados · 1 minuto cada.</p>
                <div className="grid grid-cols-2 gap-2">
                  {temas.map((tema) => {
                    const on = temasEscolhidos.includes(tema.id);
                    return (
                      <button key={tema.id} type="button" onClick={() => toggleTema(tema.id)} className={`protocolo-check ${on ? "is-on" : ""}`} style={{ "--tema-cor": tema.cor }}>
                        <span className="text-lg">{on ? "🔓" : "🔒"}</span>
                        <span className="text-lg">{tema.emoji}</span>
                        <span className="text-sm font-semibold">{tema.label}</span>
                      </button>
                    );
                  })}
                </div>
                <p className="mt-4 text-xs text-stone-400">{podeEntrar ? `${nCadeados} cadeados · ${nCadeados} min` : "Selecione no mínimo 2 assuntos para entrar."}</p>
              </section>
            </div>
            <button onClick={iniciar} disabled={!podeEntrar} className="escape-btn escape-btn--primary w-full px-6 py-4 font-semibold">
              <KeyRound className="w-5 h-5" /> Entrar pela via aferente
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (escapou) {
    return (
      <div className="escape-app escape-scene escape-scene--result text-stone-100" style={{ "--room-image": `url("${imagemSala}")` }}>
        <div className="relative z-10 max-w-2xl mx-auto px-6 py-10 min-h-[100svh] flex flex-col justify-center text-center">
          <div className="protocolo-win-art mb-3">🏅🔓🧬</div>
          <h1 className="font-display text-3xl font-light mb-2">Via eferente liberada!</h1>
          <p className="text-amber-200 font-semibold text-lg">Você está preparado para a avaliação!</p>
          <p className="text-stone-300 text-sm mt-2 mb-6">O acidente foi revertido. A chave eferente devolveu o tamanho e o raciocínio.</p>
          <div className="room-glass rounded-2xl border border-amber-500/40 p-6 mb-6">
            <p className="text-xs text-stone-400 mb-1">Tempo utilizado</p>
            <p className="font-display text-4xl text-amber-400">{fmt(tempoUsado)}</p>
            <div className="mt-4 grid grid-cols-3 gap-3 text-xs text-stone-400">
              <span>{total} cadeados</span><span>{tentativas} tentativas</span><span>{dicasUsadas} pistas</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <button onClick={reiniciar} className="escape-btn escape-btn--primary flex-1 px-6 py-3 font-semibold"><RotateCcw className="w-4 h-4" /> Jogar de novo</button>
            <a href={tutorHref} className="escape-btn escape-btn--secondary flex-1 px-6 py-3 font-semibold">Voltar ao Tutor</a>
          </div>
        </div>
      </div>
    );
  }

  if (tempoEsgotado) {
    return (
      <div className="escape-app escape-scene escape-scene--timeout text-stone-100 flex items-center justify-center px-6" style={{ "--room-image": `url("${imagemSala}")` }}>
        <div className="room-glass relative z-10 w-full max-w-md rounded-3xl border border-rose-300/40 p-7 text-center">
          <Lock className="w-12 h-12 mx-auto text-amber-300 mb-3" />
          <h1 className="font-display text-3xl font-light mb-3">Você ficou preso no corpo</h1>
          <p className="text-stone-200 mb-6">O tempo acabou. Estude os simuladores das vias escolhidas e tente outra vez.</p>
          <button onClick={reiniciar} className="escape-btn escape-btn--primary w-full px-6 py-3 font-semibold"><KeyRound className="w-4 h-4" /> Tentar novamente</button>
        </div>
      </div>
    );
  }

  return (
    <div className="escape-app escape-scene escape-scene--play text-stone-100" style={{ "--room-image": `url("${imagemSala}")` }}>
      <div className="relative z-10 max-w-2xl mx-auto px-5 py-6 min-h-[100svh] flex flex-col">
        <div className="flex items-center justify-between mb-5">
          <a href={tutorHref} className="inline-flex items-center gap-2 text-sm text-stone-400 hover:text-stone-200"><ArrowLeft className="w-4 h-4" /> Tutor</a>
          <div className={`inline-flex items-center gap-2 text-sm ${segundos < 30 ? "text-rose-300" : "text-amber-300"}`}><Clock className="w-4 h-4" /> {fmt(segundos)}</div>
        </div>
        <div className="room-glass rounded-3xl border border-amber-500/30 p-6">
          <div className="flex items-center justify-between text-xs text-stone-400 mb-4">
            <span className="inline-flex items-center gap-1"><Lock className="w-3.5 h-3.5" /> Cadeado {atual + 1} de {total}</span>
            <span>🔑 Protocolo eferente</span>
          </div>
          {!mostrarExplicacao ? (
            <>
              <Puzzle puzzle={puzzle} onResolver={() => setMostrarExplicacao(true)} onTentativa={() => setTentativas((n) => n + 1)} />
              <button onClick={() => { if (!mostrarDica) setDicasUsadas((n) => n + 1); setMostrarDica(true); }} className="mt-4 text-xs text-amber-300/80">
                {mostrarDica ? puzzle.dica : "Pedir pista"}
              </button>
            </>
          ) : (
            <div>
              <p className="text-sm text-emerald-200 leading-relaxed mb-5">{puzzle.explicacao}</p>
              <button onClick={proximo} className="escape-btn escape-btn--primary w-full px-6 py-3 font-semibold">
                <KeyRound className="w-4 h-4" /> {resolvidos + 1 >= total ? "Abrir a via eferente" : "Próximo cadeado"}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import { KeyRound, ArrowRight, BookOpen, Clock, Lock } from "lucide-react";
import { cursos, roomsPorCurso } from "@/data/escapeRooms";

export default function Home() {
  const percursos = cursos.flatMap((curso) => roomsPorCurso(curso.id));
  const totalSalas = percursos.length;
  const totalPuzzles = percursos.reduce((s, room) => s + room.puzzles.length, 0);

  return (
    <div className="min-h-screen bg-[#0b0d12] text-stone-100">
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-amber-700/20 blur-3xl" />
          <div className="absolute top-40 -right-24 h-96 w-96 rounded-full bg-sky-700/20 blur-3xl" />
        </div>
        <div className="relative max-w-3xl mx-auto px-6 pt-20 pb-16 text-center">
          <div className="inline-flex items-center gap-2 text-amber-400/80 text-xs tracking-[0.3em] uppercase mb-6">
            <KeyRound className="w-4 h-4" /> Fisiologia Interativa
          </div>
          <h1 className="font-display text-5xl sm:text-6xl font-light tracking-tight leading-[1.05]">
            Fisiologia
            <span className="block text-stone-400 text-2xl sm:text-3xl mt-3 font-light italic">
              em Fuga
            </span>
          </h1>
          <p className="mt-8 text-stone-300/80 text-lg leading-relaxed font-light max-w-xl mx-auto">
            Um escape room para cada unidade de Educação Física e Fisioterapia.
            Entre diretamente pelo Tutor do seu curso e resolva os cadeados antes
            do tempo.
          </p>
          <div className="mt-10">
            <Link
              to="/escape"
              className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-8 py-4 text-stone-950 font-medium tracking-wide hover:bg-amber-400 transition-colors"
            >
              Entrar <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </header>

      <section className="max-w-3xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-3 gap-4 mb-10">
          <div className="text-center">
            <p className="font-display text-3xl text-amber-400">{totalSalas}</p>
            <p className="text-xs text-stone-500 mt-1">salas</p>
          </div>
          <div className="text-center">
            <p className="font-display text-3xl text-amber-400">{cursos.length}</p>
            <p className="text-xs text-stone-500 mt-1">cursos</p>
          </div>
          <div className="text-center">
            <p className="font-display text-3xl text-amber-400">{totalPuzzles}</p>
            <p className="text-xs text-stone-500 mt-1">puzzles</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {cursos.map((c) => {
            const count = roomsPorCurso(c.id).length;
            return (
              <Link
                key={c.id}
                to="/escape"
                className="rounded-2xl border border-stone-800/60 bg-stone-900/30 p-6 hover:border-amber-700/40 transition-colors"
              >
                <div
                  className="w-10 h-10 rounded-xl mb-4 flex items-center justify-center"
                  style={{ background: c.cor + "22", color: c.cor }}
                >
                  <BookOpen className="w-5 h-5" />
                </div>
                <h3 className="font-display text-xl mb-1">{c.nome}</h3>
                <p className="text-sm text-stone-400 leading-relaxed mb-3">{c.desc}</p>
                <div className="flex items-center gap-3 text-xs text-stone-500">
                  <span className="inline-flex items-center gap-1">
                    <Lock className="w-3 h-3" /> {count} salas
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="w-3 h-3" /> cronometrado
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <footer className="max-w-2xl mx-auto px-6 pb-12 text-center">
        <p className="text-xs text-stone-500 leading-relaxed">
          Baseado no repositório DrMarioNascimento/fisiologia-interativa ·
          Prof. Mário César Nascimento, PhD · finalidade didática e educacional.
        </p>
      </footer>
    </div>
  );
}

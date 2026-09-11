import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Lock, KeyRound, Clock, BookOpen } from "lucide-react";
import { cursos, roomsPorCurso } from "@/data/escapeRooms";

export default function EscapeHub() {
  const [curso, setCurso] = useState(null);

  return (
    <div className="escape-app min-h-screen bg-[#0d2b34] text-stone-100">
      <div className="max-w-2xl mx-auto px-6 py-10">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-stone-400 hover:text-stone-200 mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Voltar
        </Link>

        <div className="inline-flex items-center gap-2 text-amber-300 text-xs tracking-[0.3em] uppercase mb-4">
          <KeyRound className="w-4 h-4" /> Escape Room
        </div>
        <h1 className="font-display text-4xl font-light mb-3">Fisiologia em Fuga</h1>
        <p className="text-stone-400 text-sm mb-10 max-w-md">
          Uma sala por unidade do repositório Fisiologia Interativa. Resolva os
          puzzles de cada eixo para escapar antes do tempo — separado por curso.
        </p>

        {!curso ? (
          <div className="grid sm:grid-cols-2 gap-4">
            {cursos.map((c) => (
              <button
                key={c.id}
                onClick={() => setCurso(c.id)}
                className="escape-panel-card text-left p-6"
              >
                <div
                  className="w-10 h-10 rounded-xl mb-4 flex items-center justify-center"
                  style={{ background: c.cor + "22", color: c.cor }}
                >
                  <BookOpen className="w-5 h-5" />
                </div>
                <h2 className="font-display text-xl mb-1">{c.nome}</h2>
                <p className="text-sm text-stone-400 leading-relaxed">{c.desc}</p>
              </button>
            ))}
          </div>
        ) : (
          <div>
            <button
              onClick={() => setCurso(null)}
              className="escape-key-action inline-flex items-center gap-2 text-sm mb-6"
            >
              <ArrowLeft className="w-4 h-4" /> Trocar curso
            </button>

            <div className="flex items-center gap-2 mb-6">
              <span
                className="text-xs tracking-[0.25em] uppercase px-2.5 py-1 rounded-full"
                style={{ background: cursos.find((c) => c.id === curso).cor + "22", color: cursos.find((c) => c.id === curso).cor }}
              >
                {cursos.find((c) => c.id === curso).nome}
              </span>
            </div>

            <div className="space-y-3">
              {roomsPorCurso(curso).map((r, i) => (
                <Link
                  key={`${curso}-${r.id}`}
                  to={`/escape/${curso}/${r.id}`}
                  className="escape-panel-card relative block overflow-hidden p-5"
                >
                  <img
                    src={`${import.meta.env.BASE_URL}salas/${r.imagem}`}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-y-0 right-0 h-full w-2/5 object-cover opacity-35"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0b0d12] via-[#0b0d12]/95 to-[#0b0d12]/30" />
                  <div className="relative flex items-start gap-4">
                    <div className="escape-lock-emblem flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center">
                      <Lock className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-stone-500 mb-1">
                        Unidade {i + 1}
                      </p>
                      <div className="flex items-center gap-2">
                        <h3 className="font-display text-lg text-stone-100">{r.titulo}</h3>
                        {r.piloto && <span className="rounded-full bg-amber-500/15 px-2 py-0.5 text-[10px] uppercase tracking-wider text-amber-300">Piloto</span>}
                      </div>
                      <p className="text-xs text-stone-400 mt-1">{r.eixo}</p>
                      <p className="text-xs text-stone-500 mt-2 flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {r.puzzles.length} puzzles · {r.puzzles.length} min
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

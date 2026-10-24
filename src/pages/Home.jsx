import React, { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { KeyRound } from 'lucide-react';
import { useAuth } from '@/components/Auth';
export default function Home() {
  const { user, loading, busy, error, login } = useAuth();
  const location = useLocation();
  const goToPercursos = new URLSearchParams(location.search).get('next') === 'percursos';
  useEffect(() => {
    if (user && !loading && goToPercursos) window.location.replace(`${import.meta.env.BASE_URL}percursos/`);
  }, [user, loading, goToPercursos]);
  if (user && !loading && !goToPercursos) return <Navigate to="/escape" replace />;
  return <div className="escape-app min-h-[90svh] bg-[#0d2b34] text-stone-100 flex flex-col justify-center">
    <main className="relative overflow-hidden px-6 py-16">
      <div aria-hidden="true" className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />
      <div className="relative max-w-xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 text-amber-300 text-xs tracking-[0.3em] uppercase mb-6"><KeyRound className="w-4 h-4" /> Fisiologia Interativa</div>
        <h1 className="font-display text-5xl sm:text-6xl font-light tracking-tight leading-[1.05]">Fisiologia<span className="block text-stone-400 text-2xl sm:text-3xl mt-3 italic">em Fuga</span></h1>
        <p className="mt-8 text-stone-300 text-lg leading-relaxed">Investigue histórias, conecte os sistemas do organismo e resolva os desafios de fisiologia.</p>
        <div className="escape-panel-card p-7 mt-10">
          <h2 className="font-display text-2xl">Entre para escolher sua atividade</h2>
          <p className="text-sm text-stone-300 mt-3 mb-6">Use sua conta Google para acessar os percursos e as salas.</p>
          <button type="button" onClick={login} disabled={loading || busy || Boolean(user)} className="escape-btn escape-btn--primary px-7 py-4 font-semibold disabled:opacity-60">
            <KeyRound className="w-4 h-4" aria-hidden="true" /> {loading ? 'Verificando entrada…' : busy ? 'Aguardando o Google…' : user ? 'Abrindo atividade…' : 'Entrar com Google'}
          </button>
          {error && <p role="alert" className="text-sm text-amber-200 leading-relaxed mt-5">{error}</p>}
          <p className="text-xs text-stone-400 leading-relaxed mt-5">A entrada utiliza seu nome e e-mail da conta Google. O progresso das atividades fica neste navegador; as notas não são enviadas.</p>
        </div>
      </div>
    </main>
  </div>;
}

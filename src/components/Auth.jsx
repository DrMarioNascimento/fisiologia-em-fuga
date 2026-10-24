import React, { createContext, useContext, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { observeUser, loginWithGoogle, logout } from '@/lib/firebase';
import { isGoogleUser, authErrorMessage } from '@/lib/auth-policy';
import Home from '@/pages/Home';
export const AuthContext = createContext(null);
export const useAuth = () => useContext(AuthContext);
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  useEffect(() => {
    const fail = (err) => { setUser(null); setLoading(false); setError(authErrorMessage(err)); };
    try {
      return observeUser((next) => { setUser(isGoogleUser(next) ? next : null); setLoading(false); }, fail);
    } catch (err) { fail(err); }
  }, []);
  async function run(action) {
    setBusy(true); setError('');
    try { await action(); } catch (err) { setError(authErrorMessage(err)); }
    finally { setBusy(false); }
  }
  return <AuthContext.Provider value={{ user, loading, busy, error, login: () => run(loginWithGoogle), logout: () => run(logout) }}>{children}</AuthContext.Provider>;
}
export function RequireAuth() {
  const { user, loading } = useAuth();
  return !loading && user ? <Outlet /> : <Home />;
}
export function SessionBar() {
  const { user, busy, error, logout: leave } = useAuth();
  if (!user) return null;
  return <div className="bg-[#0d2b34] border-b border-emerald-100/10 px-6 py-3 text-stone-200">
    <div className="max-w-4xl mx-auto flex items-center justify-between gap-4 text-sm">
      <span className="truncate">{user.displayName || 'Conta Google conectada'}</span>
      <button type="button" disabled={busy} onClick={leave} className="escape-btn px-4 py-2 shrink-0">{busy ? 'Saindo…' : 'Sair'}</button>
    </div>
    {error && <p role="alert" className="text-amber-200 max-w-4xl mx-auto mt-2">{error}</p>}
  </div>;
}

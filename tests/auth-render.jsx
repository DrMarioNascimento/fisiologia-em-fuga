import React from 'react';
import { renderToString } from 'react-dom/server';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { AuthContext, RequireAuth } from '../src/components/Auth';
import Home from '../src/pages/Home';
import EscapeHub from '../src/pages/EscapeHub';
export function renderPage(user, path, loading = false) {
  return renderToString(<MemoryRouter initialEntries={[path]}><AuthContext.Provider value={{user,loading,busy:false,error:'',login(){},logout(){}}}>
    <Routes><Route path="/" element={<Home />} /><Route element={<RequireAuth />}><Route path="/escape" element={<EscapeHub />} /><Route path="/escape/*" element={<p>ACTIVITY CONTENT</p>} /></Route></Routes>
  </AuthContext.Provider></MemoryRouter>);
}

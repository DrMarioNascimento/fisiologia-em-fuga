import React from 'react';
import { renderToString } from 'react-dom/server';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import Home from '../src/pages/Home';
import EscapeHub from '../src/pages/EscapeHub';
export function renderPage(_user, path, _loading = false) {
  return renderToString(<MemoryRouter initialEntries={[path]}><Routes>
    <Route path="/" element={<Home />} />
    <Route path="/escape" element={<EscapeHub />} />
    <Route path="/escape/*" element={<p>ACTIVITY CONTENT</p>} />
  </Routes></MemoryRouter>);
}

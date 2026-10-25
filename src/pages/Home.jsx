import React from 'react';
import { Navigate } from 'react-router-dom';
// Acesso público sem Google: /escape exibe três escolhas (Percursos, EF e Fisioterapia).
export default function Home() { return <Navigate to="/escape" replace />; }

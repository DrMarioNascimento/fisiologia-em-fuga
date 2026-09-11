import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "@/pages/Home";
import EscapeHub from "@/pages/EscapeHub";
import EscapeRoom from "@/pages/EscapeRoom";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/escape" element={<EscapeHub />} />
        <Route path="/escape/:cursoId/:roomId" element={<EscapeRoom />} />
        <Route path="/escape/:roomId" element={<EscapeRoom />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
}


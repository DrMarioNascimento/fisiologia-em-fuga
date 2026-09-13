import { HashRouter, Navigate, Route, Routes, useParams } from "react-router-dom";
import Home from "@/pages/Home";
import EscapeHub from "@/pages/EscapeHub";
import EscapeRoom from "@/pages/EscapeRoom";
import OperacaoProtocolo from "@/pages/OperacaoProtocolo";

function EscapeRoomRoute() {
  const { cursoId = "", roomId = "" } = useParams();
  return <EscapeRoom key={`${cursoId}/${roomId}`} />;
}

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/escape" element={<EscapeHub />} />
        <Route path="/escape/:cursoId/protocolo-eferente" element={<OperacaoProtocolo />} />
        <Route path="/escape/:cursoId/:roomId" element={<EscapeRoomRoute />} />
        <Route path="/escape/:roomId" element={<EscapeRoomRoute />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
}

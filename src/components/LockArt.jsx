/** Ícones fornecidos pelo professor; a lógica de acesso permanece no chamador. */
function LockArt({ open = false, className = "", ...props }) {
  return <svg className={`inline-block shrink-0 align-middle ${className}`} viewBox="280 70 870 1260" aria-hidden="true" focusable="false" {...props}>
    <image href={`${import.meta.env.BASE_URL}assets/icons/locks/${open ? "open" : "closed"}-white.png`} width="1408" height="1408" />
  </svg>;
}
export function Lock(props) { return <LockArt {...props} />; }
export function Unlock(props) { return <LockArt {...props} open />; }

// Percursos de Fisiologia: acesso público aos dois cursos, sem autenticação.
const base = import.meta.env.BASE_URL;
const shell = document.querySelector('#pilot-shell');
const status = document.querySelector('#auth-status');
function loadScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = resolve;
    script.onerror = () => reject(new Error('script-load'));
    document.body.append(script);
  });
}
Promise.resolve()
  .then(() => loadScript(`${base}percursos/data.js`))
  .then(() => loadScript(`${base}percursos/app.js`))
  .then(() => { status.hidden = true; shell.hidden = false; })
  .catch(() => { shell.hidden = true; status.hidden = false; status.textContent = 'Não foi possível carregar a atividade. Recarregue a página.'; });

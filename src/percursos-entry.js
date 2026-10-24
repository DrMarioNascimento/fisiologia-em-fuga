import { observeUser, logout } from './lib/firebase';
import { isGoogleUser, authErrorMessage } from './lib/auth-policy';
const base = import.meta.env.BASE_URL;
const shell = document.querySelector('#pilot-shell');
const status = document.querySelector('#auth-status');
let active = false;
let loading;
function loadScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = resolve;
    script.onerror = () => reject(new Error('script-load'));
    document.body.append(script);
  });
}
function fail(err) {
  shell.hidden = true;
  status.hidden = false;
  status.textContent = err?.message === 'script-load'
    ? 'Não foi possível carregar a atividade. Recarregue a página para tentar novamente.'
    : authErrorMessage(err);
}
try {
  observeUser(async (user) => {
    active = isGoogleUser(user);
    if (!active) {
      shell.hidden = true;
      window.location.replace(`${base}#/?next=percursos`);
      return;
    }
    try {
      loading ||= loadScript(`${base}percursos/data.js`).then(() => loadScript(`${base}percursos/app.js`));
      await loading;
      if (active) { status.hidden = true; shell.hidden = false; }
    } catch (err) { fail(err); }
  }, fail);
} catch (err) { fail(err); }
document.querySelector('#sign-out').addEventListener('click', async (event) => {
  const button = event.currentTarget;
  button.disabled = true;
  try { await logout(); } catch (err) { fail(err); button.disabled = false; }
});

import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import vm from 'node:vm';
import { createServer } from 'vite';
import { isGoogleUser, authErrorMessage } from '../src/lib/auth-policy.js';
const google = { isAnonymous:false, providerData:[{providerId:'google.com'}] };
assert(isGoogleUser(google));
for (const user of [null, {}, {isAnonymous:true,providerData:google.providerData}, {providerData:[{providerId:'password'}]}]) assert(!isGoogleUser(user));
assert.match(authErrorMessage({code:'auth/popup-blocked'}), /Permita/);
const server = await createServer({server:{middlewareMode:true}, appType:'custom', logLevel:'error'});
try {
  const {renderPage} = await server.ssrLoadModule('/tests/auth-render.jsx');
  const warning = console.error;
  console.error = (...args) => { if (!String(args[0]).includes('useLayoutEffect does nothing on the server')) warning(...args); };
  try {
    for (const path of ['/', '/escape', '/escape/educacao-fisica/celular', '/escape/fisioterapia/protocolo-eferente', '/escape/legado']) {
      const html = renderPage(null, path);
      assert.match(html, /Entrar com Google/);
      assert(!html.includes('ACTIVITY CONTENT'));
      assert(!html.includes('Percursos de Fisiologia'));
    }
    assert(!renderPage(google,'/escape',true).includes('Percursos de Fisiologia'));
    const hub = renderPage(google,'/escape');
    for (const title of ['Percursos de Fisiologia','Educação Física','Fisioterapia']) assert.equal(hub.split(`<h2 class="font-display text-xl mb-1">${title}</h2>`).length-1,1);
    assert.match(renderPage(google,'/escape/fisioterapia/respiratorio'), /ACTIVITY CONTENT/);
    assert(!renderPage(null,'/escape/fisioterapia/respiratorio').includes('ACTIVITY CONTENT'));
  } finally { console.error = warning; }
} finally { await server.close(); }
// Exercise the standalone quiz gate, including logout during script loading.
const source=(await readFile(new URL('../src/percursos-entry.js',import.meta.url),'utf8')).replace(/^import .*;\n/gm,'').replace('import.meta.env.BASE_URL',JSON.stringify('/'));
function standalone() {
 const shell={hidden:true},status={hidden:false,textContent:''},button={disabled:false};
 const scripts=[],redirects=[]; let observer,leave;
 const context={isGoogleUser,authErrorMessage,observeUser(next){observer=next},logout:async()=>observer(null),window:{location:{replace(url){redirects.push(url)}}},document:{querySelector(s){return s==='#pilot-shell'?shell:s==='#auth-status'?status:{addEventListener(t,fn){leave=fn}}},createElement(){return {}},body:{append(s){scripts.push(s);queueMicrotask(()=>s.onload())}}}};
 vm.runInNewContext(source,context);
 return {shell,status,scripts,redirects,update:(user)=>observer(user),leave:()=>leave({currentTarget:button})};
}
const quiz=standalone();await quiz.update(null);assert(quiz.shell.hidden);assert.deepEqual(quiz.redirects,['/#/?next=percursos']);assert.equal(quiz.scripts.length,0);
await quiz.update(google);assert(!quiz.shell.hidden);assert(quiz.status.hidden);assert.deepEqual(quiz.scripts.map(s=>s.src),['/percursos/data.js','/percursos/app.js']);
await quiz.leave();assert(quiz.shell.hidden);assert.equal(quiz.redirects.length,2);
const race=standalone();const pending=race.update(google);await race.update(null);await pending;assert(race.shell.hidden);
console.log('Auth: login/loading gates, three unique cards, direct routes, logout, standalone quiz and loading race passed.');

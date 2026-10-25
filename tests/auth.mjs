import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import vm from 'node:vm';
import { createServer } from 'vite';
const server = await createServer({server:{middlewareMode:true},appType:'custom',logLevel:'error'});
try {
 const {renderPage}=await server.ssrLoadModule('/tests/auth-render.jsx');
 const warn=console.error; console.error=(...args)=>{if(!String(args[0]).includes('useLayoutEffect does nothing on the server'))warn(...args)};
 try {
  for(const user of [null, {providerData:[{providerId:'google.com'}]}]){
   const hub=renderPage(user,'/escape');
   for(const title of ['Percursos de Fisiologia','Educação Física','Fisioterapia']) assert.equal(hub.split(`<h2 class="font-display text-xl mb-1">${title}</h2>`).length-1,1);
   for(const p of ['/escape/ef/cardiovascular','/escape/fisio/cardiovascular']) assert.match(renderPage(user,p),/ACTIVITY CONTENT/);
  }
 }finally{console.error=warn}
}finally{await server.close()}
const source=(await readFile(new URL('../src/percursos-entry.js',import.meta.url),'utf8')).replace('import.meta.env.BASE_URL',JSON.stringify('/'));
const shell={hidden:true},status={hidden:false,textContent:''};const scripts=[];
const context={document:{querySelector(s){return s==='#pilot-shell'?shell:status},createElement(){return {}},body:{append(s){scripts.push(s.src);queueMicrotask(()=>s.onload())}}}};
vm.runInNewContext(source,context);
await new Promise(resolve=>setTimeout(resolve,0));
assert.equal(shell.hidden,false);assert.equal(status.hidden,true);
assert.deepEqual(scripts,['/percursos/data.js','/percursos/app.js']);
console.log('PASS: public escape routes and shared pathways require no login.');

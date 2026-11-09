const fs=require('fs'),vm=require('vm'),assert=require('assert');
const path=require('path');
const elements=new Map();
const el=s=>{if(!elements.has(s))elements.set(s,{innerHTML:'',textContent:'',focus(){},scrollIntoView(){}});return elements.get(s);};
const listeners={};
const context={console,assert,setTimeout(){},localStorage:{getItem(){return null},setItem(){},removeItem(){}},document:{querySelector:el,addEventListener(type,handler){listeners[type]=handler;}},window:{innerWidth:1200,scrollTo(){}},Date,Blob};
context.click=(action,dataset={action})=>listeners.click({target:{closest:()=>({dataset})}});
vm.createContext(context);
const root=path.join(__dirname,'../public/percursos');
vm.runInContext(fs.readFileSync(path.join(root,'data.js'),'utf8')+'\n'+fs.readFileSync(path.join(root,'app.js'),'utf8'),context);
vm.runInContext(`
assert.equal(UNITS.length,12);assert.equal(CASES.length,9);assert.equal(SUPPORT.length,12);
let combinations=0, questions=0;
for(const c of CASES){
 for(const u of UNITS){const q=makeQuestion(c,u.id);assert.equal(q.choices.length,3);assert.equal(new Set(q.choices).size,3);assert(q.correct.length>=1&&q.correct.length<=2);assert(q.chain.length>=2);assert(!JSON.stringify(q).includes('CALC_'));assert(!JSON.stringify(q).includes('RESP_'));questions++;}
 for(let mask=1;mask<4096;mask++){
  state.selected=UNITS.filter(u=>mask&(1<<(u.id-1))).map(u=>u.id);state.caseId=c.id;state.records={};
  assert.equal(state.selected.length+UNITS.filter(u=>!state.selected.includes(u.id)).length,12);
  const diagram=mapHTML();
  assert(!diagram.includes('<button'));assert(!diagram.includes('data-node'));
  for(const u of UNITS)assert.equal(diagram.includes('. '+u.short+'<span>'),state.selected.includes(u.id));
  assert(!allDone());for(const id of state.selected)state.records[id]={done:true};assert(allDone());
  assert(diagram.includes('Síntese final'));combinations++;
 }
}
// Exercise actual grading, retry, completion and rendering across each theme,
// including all systems, one system and the three requested example subsets.
let routes=0;
for(const c of CASES)for(const ids of [[1],[12],[1,2,3],[4,5,6],[1,2,3,4,5,6],UNITS.map(u=>u.id)]){
 state={page:'brief',selected:ids,caseId:c.id,records:{},started:false};
 const brief=renderBrief();assert(!brief.includes('questãos'));
 start();assert(!allDone());
 for(const id of [...ids,0]){
  assert.equal(state.current,id);
  click('next');assert.equal(state.current,id);assert.equal(state.page,'play');
  click(null,{node:String(ids.find(other=>other!==id)??0)});assert.equal(state.current,id);
  const q=getQ(id),r=state.records[id];
  const bad=q.choices.map((_,i)=>i).find(i=>!q.correct.includes(i));
  answer=[bad];feedback='';check();assert(!r.done);assert.equal(feedback,'wrong');
  assert.equal(r.attempts.length,1);check();assert.equal(r.attempts.length,1,'duplicate rejected');
  feedback='';answer=[...q.correct];check();assert(r.done);assert.equal(r.attempts.length,2);
  if(id!==0)assert(!state.complete);
  click('next');
 }
 assert.equal(state.page,'result');assert(state.complete);assert(allDone());assert(validSaved(state));
 for(const u of UNITS)assert.equal(renderResult().includes(' · '+u.title+'</h3>'),ids.includes(u.id));
 assert(renderResult().includes('Diagrama completo'));assert.equal(completed(),ids.length);
 assert.equal(state.records[0].attempts.length,2);routes++;
}
// Quantitative answers and multi-select all-or-nothing grading are grounded in data.
for(const c of CASES){if(c.group!==1){assert.equal(makeQuestion(c,4).choices[0],(c.fc*c.vs/1000).toLocaleString('pt-BR')+' L/min');assert.equal(makeQuestion(c,5).choices[0],((c.vt-c.vd)*c.vent/1000).toLocaleString('pt-BR')+' L/min');}}
state={page:'brief',selected:[12],caseId:'alta',records:{},started:false};start();answer=[0];check();assert(!isDone(12));feedback='';answer=[0,1];check();assert(isDone(12));
const broken=JSON.parse(JSON.stringify(state));broken.records={};assert(!validSaved(broken));
state={page:'brief',selected:[2,4,5],caseId:'alta',records:{},started:false};start();
const legacy=JSON.parse(JSON.stringify(state));
legacy.records[5].done=true;legacy.current=5;
state={page:'units'};saved=legacy;click('resume');
assert.equal(state.current,2);assert(isDone(5));
answer=getQ(2).correct;click('check');
saved=JSON.parse(JSON.stringify(state));state={page:'units'};click('resume');
assert.equal(state.current,2);click('next');assert.equal(state.current,4);
answer=getQ(4).correct;click('check');click('next');assert.equal(state.current,0);
console.log(JSON.stringify({combinations,contextualQuestions:questions,completeRoutes:routes,multiSelect:'passed',persistenceValidation:'passed',quantitativeAnswers:'passed'}));
`,context);

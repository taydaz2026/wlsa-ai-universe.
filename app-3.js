
// Nested-solar-system pilot: only AI Education is changed. All other original nodes remain unchanged.
(()=>{
const systems={
 education:{title:'AI Education Solar System',subtitle:'AI learning for the entire WLSA community',core:'AI Education',emoji:'🎓',planet:'#996ef4',intro:'A school-wide programme for developing informed, capable and responsible AI users and creators.',nodes:[
  {id:'students',name:'Students',emoji:'🧑‍🎓',color:'#4bc7ff',summary:'AI education designed around student learning, creativity and real projects.',features:['Grade 9 AI pilot course','AI literacy and digital citizenship','Prompt engineering and practical tools','Independent student innovation projects'],children:true},
  {id:'teachers',name:'Teachers',emoji:'📚',color:'#5ca7ff',summary:'Supporting teachers in the responsible, effective use of AI for teaching and learning.',features:['AI-assisted lesson preparation','Feedback and resource design','Subject-specific workshops','Classroom implementation and evaluation']},
  {id:'parents',name:'Parents',emoji:'🏡',color:'#ec9bda',summary:'Helping families understand AI, school expectations and safe use at home.',features:['Parent AI awareness sessions','Academic integrity guidance','Family digital citizenship resources','Understanding AI-supported learning']},
  {id:'staff',name:'Staff',emoji:'💼',color:'#4ee0be',summary:'Building the professional skills needed to work productively with AI.',features:['Staff professional development','Everyday AI workflows','Privacy and responsible AI','Practical department-specific training']},
  {id:'literacy',name:'AI Literacy',emoji:'🧠',color:'#ffbd73',summary:'Developing critical awareness of AI capabilities, risks and limitations across WLSA.',features:['Model reliability and bias','Critical thinking and verification','Ethics and academic honesty','Data privacy and online safety']},
  {id:'resources',name:'Resources',emoji:'📖',color:'#ba9aff',summary:'Shared teaching materials, reference guides and learning opportunities.',features:['Tutorials and learning guides','Course and workshop materials','Approved tool recommendations','Learning activities and templates']}
 ]},
 students:{title:'Students Solar System',subtitle:'Learn • Experiment • Build • Lead',core:'Student AI',emoji:'🧑‍🎓',planet:'#239ed9',intro:'Student opportunities range from introductory AI literacy to authentic innovation and school projects.',nodes:[
  {id:'grade9',name:'Grade 9 AI Course',emoji:'🚀',color:'#59beff',summary:'A proposed structured Grade 9 pilot course to introduce AI principles, practical prompting and responsible use.',features:['Foundations of artificial intelligence','Prompt engineering and evaluation','Responsible AI use','Practical activities and mini projects']},
  {id:'prompting',name:'Prompt Engineering',emoji:'💬',color:'#9b88ff',summary:'Learn how to communicate effectively with AI systems and critically assess their responses.',features:['Prompt structures','Iteration and testing','Verification of AI outputs','Appropriate AI assistance']},
  {id:'citizenship',name:'Responsible AI',emoji:'🛡️',color:'#45d1be',summary:'Learn the ethical and safe use of generative AI at school and beyond.',features:['Academic integrity','Bias and hallucination awareness','Privacy and data protection','Disclosure and transparency']},
  {id:'projects',name:'Student AI Projects',emoji:'🛠️',color:'#ffbe6c',summary:'Create prototypes, educational tools and solutions to genuine school challenges.',features:['Educational games and apps','Department-supported innovation','Collaborative prototyping','Testing and presentations']},
  {id:'internships',name:'AI Internships',emoji:'🌟',color:'#f48cca',summary:'Student interns contribute to approved Innovation Team projects under staff supervision.',features:['Mentored development work','Small school improvement projects','Project documentation','Showcase and reflection']},
  {id:'studentresources',name:'Learning Resources',emoji:'📚',color:'#65ceef',summary:'Find curated resources to improve AI literacy and technical skills.',features:['Starter guides','Suggested practice challenges','School AI expectations','Project resources']}
 ]}
};
const space=document.getElementById('edu-space'),orbits=document.getElementById('edu-orbits'),panel=document.getElementById('edu-panel'),crumb=document.getElementById('edu-crumb');
let system='education',active=null;
function open(){system='education';active=null;space.classList.add('active');space.setAttribute('aria-hidden','false');render();document.getElementById('edu-exit').focus();}
function close(){space.classList.remove('active');space.setAttribute('aria-hidden','true');document.querySelector('[data-id="training"]')?.focus();}
function enterStudents(){system='students';active=null;render();}
function showNode(id){active=id;render();}
function render(){let data=systems[system];document.getElementById('edu-title').textContent=data.title;document.getElementById('edu-subtitle').textContent=data.subtitle;
crumb.innerHTML='<button data-nav="home">WLSA Universe</button> › <button data-nav="education">AI Education</button>'+(system==='students'?' › <strong>Students</strong>':'');
crumb.querySelectorAll('[data-nav]').forEach(b=>b.addEventListener('click',()=>{if(b.dataset.nav==='home')close();else{system='education';active=null;render()}}));
const positions=[[50,12],[84,28],[86,72],[50,87],[14,72],[16,28]];
orbits.innerHTML='<div class="edu-ring" style="--w:96%;--h:78%"></div><div class="edu-ring" style="--w:69%;--h:91%"></div><div class="edu-ring" style="--w:84%;--h:67%"></div>'+`<div class="edu-node core" style="--x:50%;--y:50%;--planet:${data.planet}"><span class="edu-sphere">${data.emoji}</span><span class="edu-name">${data.core}</span></div>`+data.nodes.map((n,i)=>`<button type="button" class="edu-node ${active===n.id?'picked':''}" data-edu-node="${n.id}" style="--x:${positions[i][0]}%;--y:${positions[i][1]}%;--planet:${n.color};--delay:${i*.28}s"><span class="edu-sphere">${n.emoji}</span><span class="edu-name">${n.name}</span></button>`).join('');
orbits.querySelectorAll('[data-edu-node]').forEach(b=>b.addEventListener('click',()=>showNode(b.dataset.eduNode)));
let n=data.nodes.find(x=>x.id===active);
panel.innerHTML=n?`<div class="edu-kicker">${system==='students'?'Student pathway':'AI Education · Audience'} / Planet Details</div><h3>${n.emoji} ${n.name}</h3><span class="edu-tag">${n.children?'Nested solar system available':'Programme area'}</span><p>${n.summary}</p><h4>Focus areas</h4><ul>${n.features.map(f=>`<li>${f}</li>`).join('')}</ul>${n.children?'<button class="edu-action" id="edu-deeper">🚀 Explore Students Solar System →</button>':''}<button class="edu-action secondary" id="edu-clear">← Back to Solar System Overview</button>`:`<div class="edu-kicker">WLSA / Interactive learning journey</div><h3>${data.emoji} ${data.title}</h3><div class="edu-summary"><p>${data.intro}</p></div><h4>How to explore</h4><p>Click any orbiting planet to discover its programmes, users and opportunities. <span class="edu-highlight">Select Students</span> to travel into a second solar system.</p><h4>Available planets</h4><ul>${data.nodes.map(n=>`<li>${n.name}</li>`).join('')}</ul>${system==='students'?'<button class="edu-action secondary" id="edu-back">← Back to AI Education</button>':''}`;
panel.querySelector('#edu-deeper')?.addEventListener('click',enterStudents);panel.querySelector('#edu-clear')?.addEventListener('click',()=>{active=null;render()});panel.querySelector('#edu-back')?.addEventListener('click',()=>{system='education';active='students';render()});
let atlas=document.getElementById('edu-map-links');atlas.innerHTML=data.nodes.map(n=>`<button type="button" data-map-node="${n.id}" class="${active===n.id?'selected':''}">${n.emoji} ${n.name}</button>`).join('');atlas.querySelectorAll('button').forEach(b=>b.onclick=()=>showNode(b.dataset.mapNode));
}
document.getElementById('edu-exit').onclick=close;
// Existing main galaxy: AI Education gets an Explore button in its original dossier.
const originalChooseV2=choose;
choose=function(id){originalChooseV2(id);if(id==='training'){let actions=document.querySelector('#detail .panel-actions');if(actions&&!document.getElementById('edu-entry')){let btn=document.createElement('button');btn.id='edu-entry';btn.type='button';btn.innerHTML='🚀 Enter AI Education Solar System';btn.style.cssText='background:#6045b4;color:white;border:1px solid #a18bfd;font-weight:800';btn.onclick=open;actions.prepend(btn)}}};
// Capture planet click only for AI Education: take user straight into its nested solar system.
document.querySelector('[data-id="training"]')?.addEventListener('click',e=>{e.stopImmediatePropagation();choose('training');open()},true);
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&space.classList.contains('active')){e.preventDefault();close()}});
choose('iwlsa');
})();

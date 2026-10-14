import { copy } from './translations.js';


function setLanguage(lang){const c=copy[lang]||copy.ru;
document.documentElement.lang=lang;
document.querySelectorAll('[data-i]').forEach(el=>el.innerHTML=c[el.dataset.i]);
document.querySelectorAll('[data-lang]').forEach(el=>el.setAttribute('aria-pressed',String(el.dataset.lang===lang)));
document.getElementById('notesGrid').innerHTML=c.notes.map(n=>`<article class="note"><div class="meta"><span>${n[0]}</span><span>UL / N</span></div><h3>${n[1]}</h3><p>${n[2]}</p><details><summary>${c.read}</summary><p>${n[3]}</p></details></article>`).join('');
document.getElementById('workRows').innerHTML=c.work.map((w,i)=>`<div class="work-row"><span class="index">0${i+1}</span><h3>${w[0]}</h3><p>${w[1]}</p></div>`).join('');
document.querySelector('meta[name="description"]').content=c.heroText;
try{localStorage.setItem('uliana-language',lang)}catch(e){}}
document.querySelectorAll('[data-lang]').forEach(b=>b.addEventListener('click',()=>setLanguage(b.dataset.lang)));
let lang='ru';
try{lang=localStorage.getItem('uliana-language')||'ru'}catch(e){}setLanguage(lang);
document.getElementById('year').textContent=new Date().getFullYear();


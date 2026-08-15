(()=>{const page=location.pathname.split('/').pop()||'index.html';const norm=s=>(s||'').replace(/\s+/g,' ').trim();const addDining=()=>{const data={
'Sea Salt':'~5–10 min walk','Fois':'~5–10 min drive','Esperides':'~5–10 min drive','La Calma':'~5–10 min drive','Avithos Preview':'~5 min drive','To Enetiko':'~5 min drive','Denis Restaurant & Bar':'~20–25 min drive','Alati':'~1 hr 15–25 min drive','Sarris Winery':'~20 min walk / ~5 min drive','Gentilini Winery':'~10 min drive','Orealios Gaea':'~25–30 min drive'};
document.querySelectorAll('.venue').forEach(v=>{const h=v.querySelector('h3');if(!h)return;const name=norm(h.textContent).replace(/^[^A-Za-zÀ-ž]+/,'');const key=Object.keys(data).find(k=>name.includes(k));if(!key)return;const ratings=v.querySelector('.ratings');if(!ratings||ratings.querySelector('.villa-time'))return;const chip=document.createElement('span');chip.className='rate villa-time';chip.textContent='🏡 Villa: '+data[key];ratings.appendChild(chip)});};
const addDest=()=>{const data={
'Ai Helis':['~5 min walk','1–4 hrs','High midday','Low'],
'Avithos':['~5 min drive','2–4 hrs','High midday','Low'],
'Argostoli':['~15–20 min drive','2–5 hrs','Moderate','Low'],
'Lourdas':['~25–30 min drive','3–6 hrs','High midday','Low'],
'Myrtos + Assos':['~50–60 min to Myrtos','6–9 hrs','High midday','Moderate'],
'Melissani + Drogarati + Sami':['~45–50 min to Melissani','6–8 hrs','Mixed / caves cool','Moderate'],
'Antisamos':['~50–55 min drive','4–7 hrs','High midday','Low–moderate'],
'Agia Efimia':['~50–55 min drive','4–7 hrs','Moderate','Low'],
'Mount Ainos National Park':['~45–60 min drive','4–7 hrs','Cooler at elevation','Moderate'],
'Fiskardo':['~1 hr 20 min drive','Full day','High midday','Moderate']};
document.querySelectorAll('article.card').forEach(c=>{const h=c.querySelector('h2');if(!h)return;const name=norm(h.textContent).replace(/^[^A-Za-zÀ-ž]+/,'');const key=Object.keys(data).find(k=>name.includes(k));if(!key)return;if(c.querySelector('.stats'))return;const body=c.querySelector('.body');if(!body)return;const p=body.querySelector('p');const stats=document.createElement('div');stats.className='stats';['Villa','Time','Heat','Effort'].forEach((label,i)=>{const x=document.createElement('div');x.className='stat';x.innerHTML='<b>'+label+'</b>'+data[key][i];stats.appendChild(x)});body.insertBefore(stats,p)});};
if(page==='dining.html')addDining();if(page==='destinations.html')addDest();})();
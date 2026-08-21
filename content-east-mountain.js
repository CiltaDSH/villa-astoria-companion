(()=>{
  if(!location.pathname.endsWith('/destinations.html')&&!location.pathname.endsWith('destinations.html')) return;
  const cards=[...document.querySelectorAll('article.card')];
  const card=t=>cards.find(c=>(c.querySelector('h2')?.textContent||'').includes(t));

  const east=card('Melissani + Drogarati + Sami');
  if(east){
    const p=east.querySelector('.body > p');
    if(p) p.textContent='Make Melissani the centerpiece, then continue to Sami for an unhurried waterfront lunch. Drogarati is worthwhile if the group wants a second cave; Antisamos is an optional afternoon swim rather than a required stop.';
    const pair=east.querySelector('.pairwith');
    if(pair) pair.innerHTML='<b>Build the day:</b><br><a href="https://www.google.com/maps/dir/?api=1&origin=Melissani+Cave+Kefalonia&destination=Sami+Kefalonia" target="_blank">🍽️ Sami waterfront</a><a href="https://www.google.com/maps/dir/?api=1&origin=Sami+Kefalonia&destination=Antisamos+Beach+Kefalonia" target="_blank">🏖️ Optional Antisamos swim</a><a href="today.html#nature">🌲 Nature & caves plan</a>';
  }

  const anti=card('Antisamos');
  if(anti&&!anti.querySelector('.antisamos-note')){
    const n=document.createElement('div');
    n.className='note antisamos-note'; n.style.marginTop='10px';
    n.innerHTML='<b>Swimming note:</b> The beach is a beautiful optional extension from Sami, but the water can deepen quickly. Families with young children or less-confident swimmers may prefer a gentler beach day.';
    const pair=anti.querySelector('.pairwith'); if(pair) pair.before(n);
  }

  const ainos=card('Mount Ainos');
  if(ainos){
    const p=ainos.querySelector('.body > p');
    if(p) p.textContent='Choose the mountain experience deliberately: an easy forest outing is very different from the Megas Soros summit hike. Keep the summit as its own active-day plan rather than casually adding it to a winery or monastery visit.';
    if(!ainos.querySelector('.ainos-routes')){
      const n=document.createElement('div'); n.className='note ainos-routes'; n.style.marginTop='10px';
      n.innerHTML='<b>Two very different Ainos choices:</b><br>• Environmental Centre–Chionistra: 6.2 km circular route, low difficulty, about 1½ hours.<br>• Digaleto–Megas Soros: 6.6 km summit route, about 4½ hours.<br><br>For a relaxed day, choose the forest circuit. Treat the summit route as a dedicated hike, especially in summer heat.';
      const pair=ainos.querySelector('.pairwith'); if(pair) pair.before(n);
    }
  }

  const gera=card('Gerasimos');
  if(gera){
    const p=gera.querySelector('.body > p');
    if(p) p.textContent='St. Gerasimos and the nearby Robola wine country make a natural, low-pressure cultural-and-wine pairing. Add Mount Ainos only as a scenic forest stop—not the summit hike—unless the group has chosen a dedicated hiking day.';
  }
})();

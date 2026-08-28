(()=>{
  if(!location.pathname.endsWith('/destinations.html')&&!location.pathname.endsWith('destinations.html')) return;
  const cards=[...document.querySelectorAll('article.card')];
  const card=t=>cards.find(c=>(c.querySelector('h2')?.textContent||'').includes(t));

  // Host language preference: emphasize natural day-trip combinations and how stops dovetail,
  // rather than repeatedly describing destinations as "paired."
  const intro=document.querySelector('.intro');
  if(intro) intro.innerHTML='<strong>Choose what feels worth doing today.</strong> One destination may be plenty. If you want to add more, each major destination includes a same-day combination layer showing which nearby meals, beaches, wineries, villages or other stops naturally complement the outing.';

  document.querySelectorAll('.pairwith > b').forEach(b=>{
    if(/Pairs well with:/i.test(b.textContent)) b.textContent='Good combination:';
  });

  const av=card('Avithos');
  if(av){const p=av.querySelector('.body > p');if(p)p.textContent='A relaxed southern-coast choice that dovetails naturally with lunch or dinner nearby.';}

  const my=card('Myrtos + Assos');
  if(my){
    const p=my.querySelector('.body > p');
    if(p)p.textContent='Myrtos and Assos make a natural same-day combination: see Myrtos from the viewpoint first, then continue to Assos for the waterfront village and lunch. Make these the anchors of the day rather than automatically adding Fiskardo.';
  }

  const east=card('Melissani + Drogarati + Sami');
  if(east){
    const p=east.querySelector('.body > p');
    if(p) p.textContent='Melissani and Drogarati dovetail naturally with an unhurried waterfront lunch in Sami. Antisamos can be a complementary afternoon swim if the group still has the energy.';
    const combo=east.querySelector('.pairwith');
    if(combo) combo.innerHTML='<b>Build the day:</b><br><a href="https://www.google.com/maps/dir/?api=1&origin=Melissani+Cave+Kefalonia&destination=Sami+Kefalonia" target="_blank">🍽️ Sami waterfront</a><a href="https://www.google.com/maps/dir/?api=1&origin=Sami+Kefalonia&destination=Antisamos+Beach+Kefalonia" target="_blank">🏖️ Optional Antisamos swim</a><a href="today.html#nature">🌲 Nature & caves plan</a>';
  }

  const anti=card('Antisamos');
  if(anti&&!anti.querySelector('.antisamos-note')){
    const n=document.createElement('div');
    n.className='note antisamos-note'; n.style.marginTop='10px';
    n.innerHTML='<b>Swimming note:</b> The beach is a beautiful optional extension from Sami, but the water can deepen quickly. Families with young children or less-confident swimmers may prefer a gentler beach day.';
    const combo=anti.querySelector('.pairwith'); if(combo) combo.before(n);
  }

  const ainos=card('Mount Ainos');
  if(ainos){
    const p=ainos.querySelector('.body > p');
    if(p) p.textContent='Choose the mountain experience deliberately: an easy forest outing is very different from the Megas Soros summit hike. Keep the summit as its own active-day plan rather than casually adding it to a winery or monastery visit.';
    if(!ainos.querySelector('.ainos-routes')){
      const n=document.createElement('div'); n.className='note ainos-routes'; n.style.marginTop='10px';
      n.innerHTML='<b>Two very different Ainos choices:</b><br>• Environmental Centre–Chionistra: 6.2 km circular route, low difficulty, about 1½ hours.<br>• Digaleto–Megas Soros: 6.6 km summit route, about 4½ hours.<br><br>For a relaxed day, choose the forest circuit. Treat the summit route as a dedicated hike, especially in summer heat.';
      const combo=ainos.querySelector('.pairwith'); if(combo) combo.before(n);
    }
  }

  const gera=card('Gerasimos');
  if(gera){
    const p=gera.querySelector('.body > p');
    if(p) p.textContent='St. Gerasimos and the nearby Robola wine country make a natural, low-pressure cultural-and-wine combination. Add Mount Ainos only as a scenic forest stop—not the summit hike—unless the group has chosen a dedicated hiking day.';
  }

  const f=card('Fiskardo');
  if(f){
    const p=f.querySelector('.body > p');
    if(p)p.textContent='The northern harbor is distinctive enough for its own unhurried outing, especially when combined with a nearby swim rather than a rushed Myrtos–Assos–Fiskardo circuit.';
  }

  const feature=document.querySelector('.feature');
  if(feature){
    const p=feature.querySelector('p');
    if(p)p.innerHTML='You do not need to return to the home page after every choice. Use the green <b>Good combination</b> links when you want to add a meal, nearby attraction, beach, winery or another layer to the day. Stopping after one good choice is equally valid.';
  }
})();

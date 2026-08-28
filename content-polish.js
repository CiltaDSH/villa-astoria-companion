(()=>{
  if(!location.pathname.endsWith('/destinations.html')&&!location.pathname.endsWith('destinations.html'))return;

  const cards=[...document.querySelectorAll('article.card')];
  const card=t=>cards.find(c=>(c.querySelector('h2')?.textContent||'').includes(t));

  // Replace the old "pairing" vocabulary with the hosts' preferred trip-combination language.
  const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);
  const nodes=[];
  while(walker.nextNode())nodes.push(walker.currentNode);
  nodes.forEach(n=>{
    n.nodeValue=n.nodeValue
      .replace(/Pairs well with:/gi,'Good combination:')
      .replace(/pairs naturally with/gi,'dovetails naturally with')
      .replace(/pair naturally with/gi,'dovetail naturally with')
      .replace(/paired with/gi,'combined with')
      .replace(/pairing/gi,'combination')
      .replace(/pairs well with/gi,'works well with');
  });

  const intro=document.querySelector('.intro');
  if(intro){
    intro.innerHTML='<strong>Choose what feels worth doing today.</strong> One destination may be plenty. If you want to add more, each major destination includes a same-day combination layer showing which nearby meals, beaches, wineries, villages or other stops naturally complement the outing.';
  }

  const av=card('Avithos');
  if(av){const p=av.querySelector('.body > p');if(p)p.textContent='A relaxed southern-coast choice that dovetails naturally with lunch or dinner nearby.';}

  const my=card('Myrtos + Assos');
  if(my){
    const continueLink=[...my.querySelectorAll('a')].find(a=>a.textContent.includes('Continue to Fiskardo'));
    if(continueLink)continueLink.remove();
    const p=my.querySelector('.body > p');
    if(p)p.textContent='Myrtos and Assos make a natural same-day combination: see Myrtos from the viewpoint first, then continue to Assos for the waterfront village and lunch. Make these the anchors of the day rather than automatically adding Fiskardo.';
    const note=document.createElement('div');
    note.className='note myrtos-safety';
    note.style.marginTop='10px';
    note.innerHTML='<b>Myrtos swimming:</b> Beautiful but not always gentle. Strong undercurrents can occur, especially on breezy days; follow lifeguard guidance and use extra caution in the water.<br><br><b>Assos Castle:</b> Optional. Allow roughly two hours for the climb and descent, and skip it in strong midday heat unless the group specifically wants the hike.';
    const combo=my.querySelector('.pairwith');
    if(combo&&!my.querySelector('.myrtos-safety'))combo.before(note);
  }

  const mel=card('Melissani + Drogarati + Sami');
  if(mel){const p=mel.querySelector('.body > p');if(p)p.textContent='Melissani and Drogarati dovetail naturally with a waterfront lunch in Sami; Antisamos can be a complementary same-day swim if the group still has the energy.';}

  const f=card('Fiskardo');
  if(f){
    const p=f.querySelector('.body > p');
    if(p)p.textContent='The northern harbor is distinctive enough for its own unhurried outing, especially when combined with a nearby swim rather than a rushed Myrtos–Assos–Fiskardo circuit.';
    [...f.querySelectorAll('.pairwith a')].filter(a=>a.textContent.includes('Assos')).forEach(a=>a.remove());
  }
})();

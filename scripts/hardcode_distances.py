from pathlib import Path

# One-time build helper: hard-code Villa-centered distance information into the
# existing guest-facing HTML. It intentionally uses exact stable snippets so
# all unrelated copy, photos, links and layout remain untouched.

DINING = {
    '🌊 Sea Salt': '🏡 Villa: ~5–10 min walk',
    '🍋 Fois': '🏡 Villa: ~5–10 min drive',
    '🌿 Esperides': '🏡 Villa: ~5–10 min drive',
    '🌅 La Calma': '🏡 Villa: ~5–10 min drive',
    '🌊 Avithos Preview': '🏡 Villa: ~5 min drive',
    '🐟 To Enetiko': '🏡 Villa: ~5 min drive',
    '🏖️ Denis Restaurant & Bar': '🏡 Villa: ~20–25 min drive',
    '🌅 Alati': '🏡 Villa: ~1 hr 15–25 min drive',
    '🍇 Sarris Winery': '🏡 Villa: ~20 min walk / ~5 min drive',
    '🍷 Gentilini Winery': '🏡 Villa: ~10 min drive',
    '⛰️ Orealios Gaea': '🏡 Villa: ~25–30 min drive',
    '🍷 Oenops': '🏡 Villa: ~15–20 min drive',
    '🐟 Ampelaki': '🏡 Villa: ~15–20 min drive',
    '🍰 Premier': '🏡 Villa: ~15–20 min drive',
    '⚓ Captain’s Table': '🏡 Villa: ~15–20 min drive',
}

DEST = {
    '🌊 Avithos': ('~5 min drive','2–4 hrs','High midday','Low'),
    '🏙️ Argostoli': ('~15–20 min drive','2–5 hrs','Moderate','Low'),
    '🏖️ Lourdas': ('~25–30 min drive','3–6 hrs','High midday','Low'),
    '🏞️ Myrtos + Assos': ('~50–60 min to Myrtos','6–9 hrs','High midday','Moderate'),
    '🪨 Melissani + Drogarati + Sami': ('~45–50 min to Melissani','6–8 hrs','Mixed / caves cool','Moderate'),
    '🌿 Antisamos': ('~50–55 min drive','4–7 hrs','High midday','Low–moderate'),
    '⛵ Agia Efimia': ('~50–55 min drive','4–7 hrs','Moderate','Low'),
    '🌲 Mount Ainos National Park': ('~45–60 min drive','4–7 hrs','Cooler elevation','Moderate'),
    '⛵ Fiskardo': ('~1 hr 20 min drive','Full day','High midday','Moderate'),
    '🏖️ Skala': ('~45–55 min drive','Full day','High midday','Low'),
}

def chip(text):
    return f'<span class="rate villa-time">{text}</span>'

def statstrip(vals):
    labels=('Villa','Time','Heat','Effort')
    return '<div class="stats">' + ''.join(f'<div class="stat"><b>{lab}</b>{val}</div>' for lab,val in zip(labels,vals)) + '</div>'

def patch_dining():
    p=Path('dining.html'); s=p.read_text()
    for title,label in DINING.items():
        marker=f'<h3>{title}</h3><div class="ratings">'
        start=s.find(marker)
        if start<0: continue
        pos=start+len(marker)
        end=s.find('</div>',pos)
        if end<0: continue
        block=s[pos:end]
        if 'villa-time' not in block:
            s=s[:end]+chip(label)+s[end:]
    # Ensure the static chip class inherits the existing rate treatment.
    p.write_text(s)

def patch_destinations():
    p=Path('destinations.html'); s=p.read_text()
    for title,vals in DEST.items():
        marker=f'<h2>{title}</h2>'
        start=s.find(marker)
        if start<0: continue
        pos=start+len(marker)
        # Do not duplicate if this card already has its strip.
        nextp=s.find('<p>',pos)
        if nextp<0: continue
        if '<div class="stats">' not in s[pos:nextp]:
            s=s[:pos]+statstrip(vals)+s[pos:]
    p.write_text(s)

patch_dining()
patch_destinations()

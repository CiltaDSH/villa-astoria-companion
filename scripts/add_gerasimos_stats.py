from pathlib import Path
p=Path('destinations.html')
s=p.read_text()
marker='<h2>⛪ St Gerasimos + Robola</h2>'
strip='<div class="stats"><div class="stat"><b>Villa</b>~20–25 min drive</div><div class="stat"><b>Time</b>2–4 hrs</div><div class="stat"><b>Heat</b>Moderate</div><div class="stat"><b>Effort</b>Low</div></div>'
if marker in s and strip not in s:
    s=s.replace(marker, marker+strip, 1)
p.write_text(s)

from pathlib import Path
p=Path('dining.html')
s=p.read_text()
repls={
'<h3>🍇 Petrakopoulos Wines</h3><div class="ratings"><span class="rate">€€</span><span class="rate pick">★★★★★</span></div>':'<h3>🍇 Petrakopoulos Wines</h3><div class="ratings"><span class="rate">€€</span><span class="rate pick">★★★★★</span><span class="rate villa-time">🏡 Villa: ~25–30 min drive</span></div>',
'<h3>🌿 Haritatos Vineyard</h3><div class="ratings"><span class="rate">€€–€€€€</span><span class="rate pick">★★★★★</span></div>':'<h3>🌿 Haritatos Vineyard</h3><div class="ratings"><span class="rate">€€–€€€€</span><span class="rate pick">★★★★★</span><span class="rate villa-time">🏡 Villa: ~1 hr–1 hr 15 min drive</span></div>',
'<h3>🍷 Sclavos Wines</h3><div class="ratings"><span class="rate">€€</span><span class="rate pick">★★★★½</span></div>':'<h3>🍷 Sclavos Wines</h3><div class="ratings"><span class="rate">€€</span><span class="rate pick">★★★★½</span><span class="rate villa-time">🏡 Villa: ~1 hr–1 hr 10 min drive</span></div>'
}
for old,new in repls.items():
    if old not in s:
        raise SystemExit(f'Missing expected block: {old[:60]}')
    s=s.replace(old,new,1)
p.write_text(s)

from pathlib import Path

repls = {
'getting-ready.html': {
'The guest edition will recheck practical details closer to departure and link to current official information where appropriate.': 'Recheck travel rules, airline and ferry schedules, business hours and seasonal operations shortly before departure; use the linked official sources for anything time-sensitive.',
},
'nearby.html': {
'Final guest edition: preferred quick shop + preferred large stock-up store + Villa travel times.': '<b>Before departure:</b> confirm the preferred quick shop and larger stock-up supermarket, including current opening hours and route time from Villa Astoria.',
'Final guest edition: identify our preferred bakery after verification.': '<b>Before departure:</b> confirm the preferred nearby bakery and its current opening hours.',
'Final guest edition: two or three verified taxi/transfer contacts so there is a backup if the first is unavailable.': '<b>Before departure:</b> save two or three current taxi/transfer contacts so there is a backup if the first is unavailable.',
'The private guest edition will place the final network name and password here so guests do not need to hunt through messages after arrival.': 'The Villa Wi‑Fi network name and password belong in the private trip-information layer shared with guests, not on the public Companion.',
'Current rubbish/recycling location, parking arrangement, key instructions and any property-manager house notes will be added here after final verification.': 'Parking, key access, rubbish/recycling and property-manager house notes belong in the private trip-information layer and should be reconfirmed shortly before arrival.',
'<b>Closer to summer 2027:</b> this page becomes increasingly specific—preferred market, bakery, nearest pharmacy, fuel station, bank ATM, taxi contacts and current opening hours—while remaining this simple to scan.': '<b>Before departure:</b> recheck preferred market, bakery, pharmacy, fuel, bank ATM, taxi contacts and opening hours. The live map-search buttons remain useful if a business changes.',
},
'help.html': {
'Hospital telephone and current service information must be reverified shortly before the 2027 guest edition is distributed.': '<b>Before departure:</b> recheck the hospital telephone number and current service information. For an emergency in Greece, call 112.',
'<b>Private guest edition:</b> final street/address wording, precise saved pin, host contacts and property-manager contacts will also be stored here for offline reference.': '<b>Private trip information:</b> keep the precise Villa pin, host contacts and property-manager contacts saved offline on each guest’s phone.',
'The final private guest edition will place these directly in the HTML so they remain readable even when an external website cannot load.': 'Save these details offline before travel so they remain available even when an external website cannot load.',
}
}

for fn, mapping in repls.items():
    p=Path(fn); s=p.read_text()
    for a,b in mapping.items():
        if a not in s:
            print(f'warning: phrase not found in {fn}: {a[:60]}')
        s=s.replace(a,b)
    p.write_text(s)

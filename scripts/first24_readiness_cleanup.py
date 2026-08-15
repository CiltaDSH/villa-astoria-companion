from pathlib import Path
p=Path('first-24-hours.html')
s=p.read_text()
s=s.replace('Final house details will be matched to the property manager’s 2027 arrival instructions before guest distribution.','<b>Before departure:</b> confirm the property manager’s current arrival and house instructions and save them with the private trip information.')
s=s.replace('The private guest edition will include the final Wi‑Fi network/password and any essential house-system instructions supplied by the property manager.','Wi‑Fi credentials and essential house-system instructions should be saved with the private trip information supplied to guests before arrival.')
s=s.replace('<b>Still to personalize before 2027:</b> exact check-in/key procedure, property-manager arrival contact, Wi‑Fi credentials, garbage/recycling instructions, pool guidance and the preferred first grocery store. Those details should come from the final Villa Astoria welcome instructions rather than being guessed.','<b>Before departure:</b> confirm the check-in/key procedure, property-manager arrival contact, Wi‑Fi credentials, rubbish/recycling instructions, pool guidance and preferred first grocery store from the current Villa Astoria welcome information.')
p.write_text(s)

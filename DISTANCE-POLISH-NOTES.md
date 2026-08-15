# Villa Astoria Companion — distance/time polish

This branch prepares the next guest-facing refinement: every important destination, restaurant and winery should answer **“How far from Villa Astoria?”** at a glance.

## Display standard

Use one compact, consistent line/card element:

- **Villa:** `~5 min walk`
- **Villa:** `~5–10 min drive`
- **Villa:** `~20 min drive`
- For long destinations, use a rounded planning estimate such as `~1 hr 10 min drive` rather than false precision.

Every map action should continue to open a live route from **Villa Astoria, Ai Helis, Svoronata**, so the phone supplies current traffic/routing at departure time.

## High-confidence anchors already supported

- Ai Helis Beach — about 5 minutes on foot from Villa Astoria.
- Argostoli — about 20 minutes by car from Villa Astoria.
- Sarris Winery — about 20 minutes on foot from Villa Astoria; near Avithos Beach.
- Nearby restaurants/bars/supermarkets — generally within roughly 5–20 minutes on foot depending on the venue.
- Ammes Beach — a few minutes by car.

## Dining presentation

Add a `Villa` chip beside cost and editorial-pick chips. For nearby venues, favor useful ranges over fragile exact figures until the final 2027 route audit.

Suggested categories:

- **Walkable / very close:** Ai Helis / Sea Salt and immediate Svoronata choices.
- **Short outing:** Avithos dining + Sarris Winery; airport/Minies-area choices.
- **~20-minute outing:** Argostoli dinner/bar choices.
- **Destination dinner:** north-island and other long-drive choices; make the drive part of the description.

## Destination presentation

`destinations.html` already has the correct four-cell stat design on Ai Helis. Extend the same `Villa / Time / Heat / Effort` strip to the other major destination cards instead of inventing a second visual system.

## Verification rule

Distances in the prose are planning estimates, not promises. Before the summer 2027 guest release:

1. Open each route from the actual Villa Astoria saved pin.
2. Record a rounded normal driving time and approximate road distance.
3. Recheck any destination whose access/parking route changes seasonally.
4. Keep the live Google Maps route button on every card.

## Source notes — checked August 2026

Villa Astoria's official site identifies the property as Villa Astoria, Ai Helis, Svoronata 28100, states Ai Helis is about a five-minute walk, Argostoli about a 20-minute drive, and Sarris Winery about a 20-minute walk. Sarris Winery's official site confirms its Avithos Beach location. Sea Salt's official site confirms its Ai Helis Beach location.

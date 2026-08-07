# ABTalks — V5 Realistic Final

A mobile-first redesign of the ABTalks 60-Day Coding Challenge.

## Routes
/
 /dashboard
 /day/12

Additional working routes:
- /progress
- /achievements
- /learn
- /community
- /help
- /profile

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Core behavior

- Persistent challenge progress using localStorage.
- A day becomes complete only after 3 proof checks pass.
- GitHub repository and commit URLs are domain/structure validated.
- LinkedIn URLs are domain/structure validated.
- Achievements are derived from completed days.
- Community supports multiple demo members.
- Profile editing is persisted locally.
- Mobile-first responsive layout with 390px support.
- Animated background and V5-style dark premium UI.

## Important production note

This is a hackathon frontend/demo. LocalStorage is not a secure database. Real authentication, owner-only authorization, LinkedIn ownership verification, multi-device community data and server-side proof verification require a backend.

## Prompt log

See `PROMPTS.md`. Keep appending AI-assisted prompts and changes rather than deleting history.

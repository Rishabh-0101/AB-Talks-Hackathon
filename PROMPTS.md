# ABTalks Hackathon — AI Usage Log / PROMPTS

> Keep this file in the repository. Do not delete previous entries. Append new AI-assisted work chronologically.

## Project baseline
- Product: ABTalks 60-Day Coding Challenge
- Required routes: `/`, `/dashboard`, `/day/12`
- Mobile target: 390px
- Owner/student name: Rishabh Patel
- College: ABES Engineering College, Ghaziabad
- Program: B.Tech 2nd Year
- Design baseline: V5-style dark premium dashboard with animated background.

## Prompt 001 — Product foundation
Build a mobile-first ABTalks 60-day coding challenge experience with a premium dark UI, animated background, dashboard, challenge-day proof workflow, progress, achievements, community, learning and help pages. Keep the interface readable at 390px.

## Prompt 002 — Proof verification
Add proof-of-work verification for GitHub repository, GitHub commit and LinkedIn post. Reject unrelated domains. Do not claim that frontend-only code can prove LinkedIn ownership; document that production ownership verification requires a backend/OAuth integration.

## Prompt 003 — Persistent progress
Make completed challenge days persist in localStorage. Progress must increase only after verified proof submission and survive browser refresh.

## Prompt 004 — Earned achievements
Make four achievements unlock based on completed challenge days. Do not allow arbitrary unlock buttons.

## Prompt 005 — Public community
Add a public community join flow that accepts multiple members, displays member data, and prevents the same name from being added twice in the same browser demo.

## Prompt 006 — Owner/profile editing
Add profile editing and explain that real owner-only authorization must be enforced server-side in production. Never store real passwords or API secrets in client-side React.

## Prompt 007 — Visual refinement
Preserve the V5-style layout while improving readability, spacing, mobile responsiveness, contrast, animated background and visual hierarchy.

## Prompt 008 — Reliability
Avoid optional icon dependencies that can crash the whole app. Keep the app runnable with a minimal dependency set.

## Important
This frontend demo uses localStorage for persistence and does not provide production authentication, database-backed community membership, or cryptographic owner authorization. Those require a backend.

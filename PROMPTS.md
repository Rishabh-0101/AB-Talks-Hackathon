ABTalks Vibe Code Hackathon — AI Usage Log

This file records the main AI-assisted work used for the ABTalks hackathon project.

Hackathon window: 7 August 2026, 8:00 PM → 9 August 2026, 8:00 PMDuration: 48 hours

The dates above describe the hackathon window. This log should contain the actual prompts/work used during the build and should not be used to rewrite or hide any pre-hackathon work.

7 August 2026 — Initial implementation

Prompt:

Build the ABTalks 60-day coding challenge as a mobile-first React/Vite web app. The required routes are /, /dashboard, and /day/12.

Create a polished student-focused interface for a 390px mobile viewport. Use a clean dark UI, readable typography, subtle animated background effects, clear cards and responsive layouts.

Use realistic mock/local data. The demo student profile is Rishabh Patel, B.Tech 2nd Year, ABES Engineering College, Ghaziabad.

The dashboard should show streak/progress information, today's task, challenge progress and achievements. The challenge-day screen should allow GitHub repository, GitHub commit and LinkedIn proof to be entered and checked.

7 August 2026 — Working proof and progress

Prompt:

Make the important challenge interactions functional rather than decorative.

A challenge day should only become completed after the required proof checks pass. Validate URL domains so unrelated websites are rejected. Keep completed progress after refresh using local persistence.

Do not put real API keys, passwords or private secrets in frontend code.

8 August 2026 — Student experience and UI improvements

Prompt:

Improve the existing product without replacing its overall structure. Make the interface feel like a real student platform.

Improve typography, spacing, navigation, cards, readability and the mobile 390px layout. Keep the animated background subtle so content remains sharp and easy to read.

Make the Help/Guide, Learn, Achievements and Community sections useful and interactive instead of leaving them as empty visual cards.

8 August 2026 — Community and achievements

Prompt:

Make the community flow support multiple users joining independently. Do not show fake active-user numbers as if they were real production data.

Make achievement progress meaningful. Start at 0/4 and increase only when the corresponding completion conditions are actually satisfied. Persist progress after refresh.

8 August 2026 — Final functional polish

Prompt:

Review the complete application as a hackathon submission. Keep the existing V5-style visual direction and navigation.

Check the main routes, mobile responsiveness, sign-in/sign-out demo flow, challenge progress, achievement progress, community joining, proof validation, Help/Guide interactions and persistent local state.

Fix broken buttons, empty interactions, unclear states and unreadable text. Keep all visible content clean and sharp.

Submission checks

Before submission, verify:

/

/dashboard

/day/12

390px mobile layout

Sign-in / sign-out demo

Progress persistence after refresh

Achievement progress

Community join flow

GitHub URL validation

GitHub commit validation

LinkedIn URL validation

Help/Guide interactions

No real secrets committed

Public repository

Working live deployment

Required Route Map is present

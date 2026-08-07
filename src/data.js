export const profile = {
  name: "Rishabh Patel",
  college: "ABES Engineering College, Ghaziabad",
  year: "B.Tech 2nd Year",
  track: "Full-Stack Development"
};

export const tasks = Array.from({ length: 60 }, (_, i) => ({
  day: i + 1,
  title: i === 11 ? "Build a proof-of-work dashboard" : `Build Challenge Project ${i + 1}`,
  description:
    i === 11
      ? "Create a focused dashboard that shows real evidence of today's coding work."
      : `Complete the Day ${i + 1} mission, commit your work and share your learning publicly.`,
  deliverables: [
    "Complete the daily coding mission.",
    "Create a meaningful GitHub commit.",
    "Share a learning update on LinkedIn."
  ]
}));

export const achievements = [
  { id: "first", title: "First Proof", detail: "Complete your first verified challenge day.", day: 1 },
  { id: "week", title: "7 Day Builder", detail: "Complete seven challenge days.", day: 7 },
  { id: "half", title: "Halfway Hero", detail: "Complete thirty challenge days.", day: 30 },
  { id: "finish", title: "60 Day Finisher", detail: "Complete the complete challenge.", day: 60 }
];

export const guides = [
  { title: "How the streak works", body: "A streak grows only when a challenge day is actually completed with verified proof. Refreshing does not erase saved progress." },
  { title: "GitHub proof", body: "Use a public repository and a real commit URL from github.com. Random websites or unrelated domains are rejected." },
  { title: "LinkedIn proof", body: "Paste a LinkedIn post URL. The demo validates the LinkedIn domain. True ownership verification requires a backend/OAuth integration." },
  { title: "Missed day", body: "A missed day does not invent progress. Complete the available mission and submit valid evidence to move forward." }
];
const KEY = "abtalks_v5_state";

const initial = {
  signedIn: false,
  owner: false,
  completed: [],
  proofs: {},
  members: [],
  activity: [],
  profile: {
    name: "Rishabh Patel",
    college: "ABES Engineering College, Ghaziabad",
    year: "B.Tech 2nd Year"
  }
};

export function load() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return structuredClone(initial);
    return { ...structuredClone(initial), ...JSON.parse(raw) };
  } catch {
    return structuredClone(initial);
  }
}

export function save(next) {
  localStorage.setItem(KEY, JSON.stringify(next));
  return next;
}

export function resetDemo() {
  localStorage.removeItem(KEY);
}

function url(value) {
  try { return new URL(value); } catch { return null; }
}

export async function verifyRepo(value) {
  const u = url(value);
  if (!u || u.hostname.toLowerCase() !== "github.com") {
    return { ok: false, msg: "Rejected: enter a real github.com repository URL." };
  }
  const parts = u.pathname.split("/").filter(Boolean);
  if (parts.length < 2) return { ok: false, msg: "Enter a GitHub owner/repository URL." };
  return { ok: true, msg: "GitHub repository URL accepted." };
}

export async function verifyCommit(value, repo) {
  const u = url(value);
  if (!u || u.hostname.toLowerCase() !== "github.com" || !u.pathname.includes("/commit/")) {
    return { ok: false, msg: "Rejected: enter a GitHub commit URL." };
  }
  if (repo) {
    const r = url(repo);
    const commitParts = u.pathname.split("/").filter(Boolean);
    const repoParts = r?.pathname.split("/").filter(Boolean) || [];
    if (repoParts.length >= 2 && (commitParts[0] !== repoParts[0] || commitParts[1] !== repoParts[1])) {
      return { ok: false, msg: "Commit does not belong to the submitted repository." };
    }
  }
  return { ok: true, msg: "GitHub commit URL accepted." };
}

export function verifyLinkedIn(value) {
  const u = url(value);
  if (!u || !["linkedin.com", "www.linkedin.com"].includes(u.hostname.toLowerCase())) {
    return { ok: false, msg: "Rejected: only linkedin.com URLs are accepted." };
  }
  if (!u.pathname.includes("/posts/") && !u.pathname.includes("/feed/")) {
    return { ok: false, msg: "Use a LinkedIn post/share URL." };
  }
  return { ok: true, msg: "LinkedIn URL accepted. Ownership requires backend verification." };
}
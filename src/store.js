const KEY = "abtalks_v5_state";

const API_BASE = "http://localhost:5000";

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
    year: "B.Tech 2nd Year",
    track: "Full-Stack Development"
  }
};

export function load() {
  try {
    const raw = localStorage.getItem(KEY);

    if (!raw) {
      return structuredClone(initial);
    }

    const saved = JSON.parse(raw);

    return {
      ...structuredClone(initial),
      ...saved,
      profile: {
        ...structuredClone(initial.profile),
        ...(saved.profile || {})
      }
    };
  } catch (error) {
    console.error("Failed to load ABTalks state:", error);
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
  try {
    return new URL(value);
  } catch {
    return null;
  }
}

/* --------------------------------------------------
   BACKEND API
-------------------------------------------------- */

export async function checkApiHealth() {
  try {
    const response = await fetch(`${API_BASE}/api/health`);

    if (!response.ok) {
      throw new Error(`API returned ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("API health check failed:", error);

    return {
      success: false,
      message: "Backend API is unavailable.",
      status: "offline"
    };
  }
}

export async function fetchApiProfile() {
  try {
    const response = await fetch(`${API_BASE}/api/profile`);

    if (!response.ok) {
      throw new Error(`API returned ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Profile API request failed:", error);

    return {
      success: false,
      profile: null,
      message: "Could not load profile from backend."
    };
  }
}

/* --------------------------------------------------
   GITHUB REPOSITORY VERIFICATION
-------------------------------------------------- */

export async function verifyRepo(value) {
  const u = url(value);

  if (!u || u.hostname.toLowerCase() !== "github.com") {
    return {
      ok: false,
      msg: "Rejected: enter a valid GitHub repository URL."
    };
  }

  const parts = u.pathname.split("/").filter(Boolean);

  if (parts.length < 2) {
    return {
      ok: false,
      msg: "Enter a GitHub owner/repository URL."
    };
  }

  const [owner, repo] = parts;

  if (!owner || !repo) {
    return {
      ok: false,
      msg: "GitHub owner and repository are required."
    };
  }

  return {
    ok: true,
    msg: `GitHub repository accepted: ${owner}/${repo}`
  };
}

/* --------------------------------------------------
   GITHUB COMMIT VERIFICATION
-------------------------------------------------- */

export async function verifyCommit(value, repo) {
  const u = url(value);

  if (
    !u ||
    u.hostname.toLowerCase() !== "github.com" ||
    !u.pathname.includes("/commit/")
  ) {
    return {
      ok: false,
      msg: "Rejected: enter a valid GitHub commit URL."
    };
  }

  const commitParts = u.pathname.split("/").filter(Boolean);

  const commitIndex = commitParts.indexOf("commit");

  if (commitIndex < 2 || !commitParts[commitIndex + 1]) {
    return {
      ok: false,
      msg: "Invalid GitHub commit URL."
    };
  }

  if (repo) {
    const r = url(repo);

    if (!r || r.hostname.toLowerCase() !== "github.com") {
      return {
        ok: false,
        msg: "Enter a valid GitHub repository URL first."
      };
    }

    const repoParts = r.pathname.split("/").filter(Boolean);

    if (repoParts.length < 2) {
      return {
        ok: false,
        msg: "Invalid GitHub repository URL."
      };
    }

    const commitOwner = commitParts[0];
    const commitRepo = commitParts[1];

    const repoOwner = repoParts[0];
    const repoName = repoParts[1];

    if (
      commitOwner !== repoOwner ||
      commitRepo !== repoName
    ) {
      return {
        ok: false,
        msg: "Commit does not belong to the submitted repository."
      };
    }
  }

  return {
    ok: true,
    msg: "GitHub commit URL accepted."
  };
}

/* --------------------------------------------------
   LINKEDIN VERIFICATION
-------------------------------------------------- */

export function verifyLinkedIn(value) {
  const u = url(value);

  if (!u) {
    return {
      ok: false,
      msg: "Rejected: enter a valid LinkedIn URL."
    };
  }

  const hostname = u.hostname.toLowerCase();

  if (
    hostname !== "linkedin.com" &&
    hostname !== "www.linkedin.com"
  ) {
    return {
      ok: false,
      msg: "Rejected: only linkedin.com URLs are accepted."
    };
  }

  if (
    !u.pathname.includes("/posts/") &&
    !u.pathname.includes("/feed/update/")
  ) {
    return {
      ok: false,
      msg: "Use a LinkedIn post URL."
    };
  }

  return {
    ok: true,
    msg: "LinkedIn post URL accepted. Ownership requires backend verification."
  };
}
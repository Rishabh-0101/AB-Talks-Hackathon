const API_BASE_URL = "/api";

export async function getHealth() {
  const response = await fetch(`${API_BASE_URL}/health`);

  if (!response.ok) {
    throw new Error("API health check failed");
  }

  return response.json();
}

export async function getProfile() {
  const response = await fetch(`${API_BASE_URL}/profile`);

  if (!response.ok) {
    throw new Error("Profile API request failed");
  }

  return response.json();
}

export async function getStats() {
  const response = await fetch(`${API_BASE_URL}/health`);

  if (!response.ok) {
    throw new Error("Stats API request failed");
  }

  return response.json();
}
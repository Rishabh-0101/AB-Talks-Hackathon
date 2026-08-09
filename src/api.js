const API_BASE_URL = "http://localhost:5000";

export async function getHealth() {
  const response = await fetch(`${API_BASE_URL}/api/health`);

  if (!response.ok) {
    throw new Error("API health check failed");
  }

  return response.json();
}

export async function getProfile() {
  const response = await fetch(`${API_BASE_URL}/api/profile`);

  if (!response.ok) {
    throw new Error("Profile API request failed");
  }

  return response.json();
}
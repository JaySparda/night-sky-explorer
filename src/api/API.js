export const API_URL = "https://jpk-202611-pa-i7a.onrender.com";

// Build an API URL with optional query parameters.
export function buildUrl(endpoint, params = {}) {
  const query = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value !== "" && value !== null && value !== undefined) {
      query.set(key, value);
    }
  });

  const queryString = query.toString();

  return `${API_URL}${endpoint}${queryString ? `?${queryString}` : ""}`;
}

// Send a GET request and return JSON data.
export async function fetchData(url, signal) {
  const response = await fetch(url, { signal });

  if (!response.ok) {
    throw new Error(`HTTP Error: ${response.status}`);
  }

  return response.json();
}

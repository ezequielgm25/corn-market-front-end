const API_URL = 'https://localhost:7195/corn/buy'; // cambia puerto si es otro

export async function buyCorn() {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.status === 429) {
    alert('Too many requests, you need to wait for a minute');
    return null;
  }

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  return response.json();
}

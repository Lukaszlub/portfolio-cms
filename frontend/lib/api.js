const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337';

export async function fetchArticles() {
  const res = await fetch(`${API_URL}/api/articles?populate=*`);
  if (!res.ok) {
    throw new Error('Failed to fetch articles');
  }
  const data = await res.json();
  return data.data; // zależnie od wersji Strapi
}

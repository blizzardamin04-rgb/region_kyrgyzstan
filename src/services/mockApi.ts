/** Mock API — загрузка данных из public/data */
const BASE = '/data'

export async function fetchMockMeta() {
  const res = await fetch(`${BASE}/mock-api.json`)
  if (!res.ok) throw new Error('Failed to load mock API meta')
  return res.json()
}

export async function fetchDistrictsFromApi() {
  const res = await fetch(`${BASE}/districts.json`)
  if (!res.ok) throw new Error('Failed to load districts')
  return res.json()
}

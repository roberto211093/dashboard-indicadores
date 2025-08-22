import type { Indicator } from '../domain/Indicator';

// Mock (podrías cambiar a una API pública más adelante)
const MOCK: Indicator[] = [
  { id: 'usd', name: 'USD', value: 964.2, changePct: -0.3, updatedAt: new Date().toISOString() },
  { id: 'uf',  name: 'UF',  value: 36954, changePct: 0.1, updatedAt: new Date().toISOString() },
  { id: 'ipc', name: 'IPC', value: 0.8,   changePct: 0.0, updatedAt: new Date().toISOString() }
];

export async function fetchIndicators(query = ''): Promise<Indicator[]> {
  const q = query.trim().toLowerCase();
  await new Promise(r => setTimeout(r, 200)); // simula red
  return MOCK.filter(x => (x.id + x.name).toLowerCase().includes(q));
}

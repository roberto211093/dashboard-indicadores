import { useEffect, useState } from 'react';
import { SearchBar } from '../molecules/SearchBar';
import { IndicatorList } from '../organisms/IndicatorList';
import { fetchIndicators } from '../../services/indicatorService';

export default function Dashboard() {
  const [q, setQ] = useState('');
  const [items, setItems] = useState(() => [] as Awaited<ReturnType<typeof fetchIndicators>>);
  const [loading, setLoading] = useState(false);

  const debounced = useDebounce(q, 300);

  useEffect(() => {
    let aborted = false;
    const run = async () => {
      setLoading(true);
      const data = await fetchIndicators(debounced);
      if (!aborted) setItems(data);
      setLoading(false);
    };
    run();
    return () => { aborted = true; };
  }, [debounced]);

  return (
    <div className="container">
      <h1>Dashboard de Indicadores</h1>
      <p style={{ color: '#9ca3af' }}>React + TS + SASS · Atomic Design · DDD/SOLID</p>

      <div style={{ margin: '16px 0' }}>
        <SearchBar value={q} onChange={setQ} onSearch={() => setQ(q)} />
      </div>

      {loading ? <p>Cargando…</p> : <IndicatorList items={items} />}
    </div>
  );
}

// util simple de debounce
function useDebounce<T>(value: T, ms: number): T {
  const [v, setV] = useState(value);
  useEffect(() => {
    const id = setTimeout(() => setV(value), ms);
    return () => clearTimeout(id);
  }, [value, ms]);
  return v;
}

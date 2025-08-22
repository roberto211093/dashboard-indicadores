import { Card } from '../atoms/Card';
import type { Indicator } from '../../domain/Indicator';

export function IndicatorList({ items }: { items: Indicator[] }) {
  if (!items.length) return <p style={{ color: '#9ca3af' }}>Sin resultados…</p>;
  return (
    <div style={{ display: 'grid', gap: 12 }}>
      {items.map(i => (
        <Card key={i.id}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <strong>{i.name}</strong>
            <span>{i.value}</span>
          </div>
          <small style={{ color: '#9ca3af' }}>
            {i.changePct >= 0 ? '▲' : '▼'} {i.changePct}% · {new Date(i.updatedAt).toLocaleString()}
          </small>
        </Card>
      ))}
    </div>
  );
}

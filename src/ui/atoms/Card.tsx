import type { PropsWithChildren } from 'react';

export function Card({ children }: PropsWithChildren) {
  return (
    <div style={{
      background: '#111827',
      borderRadius: 12,
      padding: 16,
      boxShadow: '0 6px 20px rgba(0,0,0,.25)',
      border: '1px solid rgba(255,255,255,.06)'
    }}>
      {children}
    </div>
  );
}

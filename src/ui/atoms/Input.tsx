import type { InputHTMLAttributes } from 'react';

export function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      style={{
        width: '100%',
        padding: '10px 12px',
        borderRadius: 10,
        border: '1px solid rgba(255,255,255,.12)',
        background: '#0b1220',
        color: '#e5e7eb',
        outline: 'none'
      }}
    />
  );
}

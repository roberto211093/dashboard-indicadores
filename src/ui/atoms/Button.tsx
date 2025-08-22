import type { ButtonHTMLAttributes } from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'ghost' };

export function Button({ variant = 'primary', ...props }: Props) {
  return (
    <button
      {...props}
      style={{
        borderRadius: 12,
        padding: '10px 14px',
        border: variant === 'ghost' ? '1px solid #4f46e5' : 'none',
        background: variant === 'ghost' ? 'transparent' : '#4f46e5',
        color: '#e5e7eb',
        cursor: 'pointer',
        boxShadow: '0 6px 20px rgba(0, 0, 0, 0.25)'
      }}
    />
  );
}

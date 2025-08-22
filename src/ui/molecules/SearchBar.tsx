import { Input } from '../atoms/Input';
import { Button } from '../atoms/Button';

type Props = {
  value: string;
  onChange: (v: string) => void;
  onSearch: () => void;
};

export function SearchBar({ value, onChange, onSearch }: Props) {
  return (
    <div style={{ display: 'flex', gap: 8 }}>
      <Input
        placeholder="Buscar indicador (ej: usd, uf, ipc)"
        value={value}
        onChange={(e) => onChange((e.target as HTMLInputElement).value)}
      />
      <Button onClick={onSearch}>Buscar</Button>
    </div>
  );
}

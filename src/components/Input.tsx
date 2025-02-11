export interface InputProps {
  type: 'number' | 'text';
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

export default function Input({ type, value, onChange, error }: InputProps) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      style={{
        padding: '8px 16px',
        border: `1px solid ${error ? 'red' : '#333'}`,
        borderRadius: 4,
        width: '100%',
      }}
    />
  );
}

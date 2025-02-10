interface InputProps {
  type: 'number' | 'text';
}

export default function Input({ type }: InputProps) {
  return (
    <input
      type={type}
      style={{
        padding: '8px 16px',
        border: '1px solid #333',
        borderRadius: 4,
        width: '100%',
      }}
    />
  );
}

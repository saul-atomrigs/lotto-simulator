import { ButtonHTMLAttributes } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: 'primary' | 'dark';
  fullWidth?: boolean;
}

export default function Button(props: Props) {
  const { children, theme = 'primary', fullWidth = false, ...rest } = props;

  return (
    <button
      style={{
        padding: '8px 16px',
        backgroundColor: theme === 'primary' ? '#0070f3' : '#333',
        color: theme === 'primary' ? '#fff' : '#fff',
        border: 'none',
        borderRadius: 4,
        cursor: 'pointer',
        width: fullWidth ? '100%' : 'auto',
      }}
      {...rest}
    >
      <span>{children}</span>
    </button>
  );
}

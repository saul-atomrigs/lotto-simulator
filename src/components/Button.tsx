import { ButtonHTMLAttributes } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: 'primary' | 'dark';
  fullWidth?: boolean;
  onClick?: () => void;
  disabled?: boolean;
}

export default function Button(props: Props) {
  const {
    children,
    theme = 'primary',
    fullWidth = false,
    onClick,
    disabled,
    ...rest
  } = props;

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        padding: '8px 16px',
        backgroundColor: disabled
          ? '#ccc'
          : theme === 'primary'
            ? '#0070f3'
            : '#333',
        color: theme === 'primary' ? '#fff' : '#fff',
        border: 'none',
        borderRadius: 4,
        cursor: disabled ? 'not-allowed' : 'pointer',
        width: fullWidth ? '100%' : 'auto',
      }}
      {...rest}
    >
      <span>{children}</span>
    </button>
  );
}

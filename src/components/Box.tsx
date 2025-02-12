interface BoxProps {
  children: React.ReactNode;
  type?: 'primary' | 'winner';
  style?: React.CSSProperties;
}

export default function Box({ children, type = 'primary', style }: BoxProps) {
  const backgroundColor = type === 'winner' ? '#ffd700' : '#f6f8fa';

  return (
    <div
      style={{
        backgroundColor,
        padding: '10px',
        ...style,
      }}
    >
      {children}
    </div>
  );
}

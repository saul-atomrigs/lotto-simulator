interface BoxProps {
  children: React.ReactNode;
  type?: 'primary' | 'winner';
}

export default function Box({ children, type = 'primary' }: BoxProps) {
  const backgroundColor = type === 'winner' ? '#ffd700' : '#f6f8fa';

  return (
    <div
      style={{
        backgroundColor,
        padding: '10px',
        borderRadius: '5px',
      }}
    >
      {children}
    </div>
  );
}

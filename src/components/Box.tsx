interface BoxProps {
  children: React.ReactNode;
}

export default function Box({ children }: BoxProps) {
  return (
    <div
      style={{
        backgroundColor: '#f6f8fa',
        padding: '10px',
        borderRadius: '5px',
      }}
    >
      {children}
    </div>
  );
}

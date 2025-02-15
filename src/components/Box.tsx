import { COLORS } from '../design-tokens';

interface BoxProps {
  children: React.ReactNode;
  type?: 'primary' | 'winner';
  style?: React.CSSProperties;
}

export default function Box({ children, type = 'primary', style }: BoxProps) {
  const isWinner = type === 'winner';
  const backgroundColor = isWinner ? COLORS.GOLD : COLORS.GRAY;

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

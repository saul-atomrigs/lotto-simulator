export type SizeValue = 'small' | 'medium' | 'large';
export type FontWeightValue = 'normal' | 'bold';

interface BaseProps {
  children?: React.ReactNode;
  size?: SizeValue;
  fontWeight?: FontWeightValue;
  color?: string;
  className?: string;
}

type TxtProps = BaseProps & React.HTMLAttributes<HTMLSpanElement>;

export function Txt({
  children,
  size,
  fontWeight,
  color,
  className,
  ...rest
}: TxtProps) {
  return (
    <span
      style={{
        color,
        fontSize:
          size === 'small' ? '12px' : size === 'medium' ? '16px' : '24px',
        fontWeight: fontWeight === 'bold' ? 'bold' : 'normal',
      }}
      {...rest}
    >
      {children}
    </span>
  );
}

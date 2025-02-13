import { memo } from 'react';
import Txt from '../components/Txt';
import type { SizeValue, FontWeightValue } from '../components/Txt';

interface HeaderProps {
  children: React.ReactNode;
  size: SizeValue;
  fontWeight: FontWeightValue;
}

function Header({ children, size, fontWeight }: HeaderProps) {
  return (
    <Txt size={size} fontWeight={fontWeight}>
      {children}
    </Txt>
  );
}

export default memo(Header);

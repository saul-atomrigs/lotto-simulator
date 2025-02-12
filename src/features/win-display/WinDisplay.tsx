import { Box } from '../../components';
import { useWinStore } from '../../store/winStore';
import { sortElements } from '../../utils';

export default function WinDisplay() {
  const winningNumbers = useWinStore((state) => state.winningNumbers);
  return <Box type='winner'>{sortElements(winningNumbers)}</Box>;
}

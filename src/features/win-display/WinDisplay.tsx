import { Box, Txt } from '../../components';
import { useWinStore } from '../../store/winStore';
import { sortElements } from '../../utils';
import { CONSTANTS } from './WinDisplay.constants';

export default function WinDisplay() {
  const winningNumbers = useWinStore((state) => state.winningNumbers);
  const bonusNumber = useWinStore((state) => state.bonusNumber);

  return (
    <>
      <Txt size='small' fontWeight='bold'>
        {CONSTANTS.WINNING_NUMBERS}
      </Txt>
      <Box type='winner'>
        {sortElements(winningNumbers)}, +{bonusNumber}
      </Box>
    </>
  );
}

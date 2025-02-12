import { Box, Txt } from '../../components';
import { useWinStore } from '../../store/winStore';
import { sortElements } from '../../utils';

export default function WinDisplay() {
  const winningNumbers = useWinStore((state) => state.winningNumbers);
  const bonusNumber = useWinStore((state) => state.bonusNumber);

  return (
    <>
      <Txt size='small' fontWeight='bold'>
        당첨 번호
      </Txt>
      <Box type='winner'>
        {sortElements(winningNumbers)}, +{bonusNumber}
      </Box>
    </>
  );
}

import { memo } from 'react';
import { useWinStore } from '../../store/winStore';
import DrawList from '../draw';
import ResetButton from '../reset';
import WinButton from '../win-button';
import WinDisplay from '../win-display';
import WinResults from '../win-results';

interface LottoGameProps {
  drawAmount: number;
  draws: number[][];
  onReset: () => void;
}

function LottoGame({ drawAmount, draws, onReset }: LottoGameProps) {
  const winningNumbers = useWinStore((state) => state.winningNumbers);
  const isWinningNumbers = winningNumbers.length > 0;

  return (
    <>
      {drawAmount > 0 && (
        <>
          <DrawList draws={draws} />
          <WinButton />
        </>
      )}

      {isWinningNumbers && (
        <>
          <WinDisplay />
          <WinResults draws={draws} />
          <ResetButton onReset={onReset} />
        </>
      )}
    </>
  );
}

export default memo(LottoGame);

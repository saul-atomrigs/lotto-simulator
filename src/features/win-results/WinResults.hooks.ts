import { useWinStore } from '../../store/winStore';
import { CONSTANTS } from './WinResults.constants';

type ResultCount = {
  [key: string]: number;
};

export function useWinResults(draws: number[][]) {
  const winningNumbers = useWinStore((state) => state.winningNumbers);
  const bonusNumber = useWinStore((state) => state.bonusNumber);

  const winResults = draws.reduce((acc: ResultCount, draw) => {
    const matchCount = draw.filter((num) =>
      winningNumbers.includes(num)
    ).length;
    let rank = CONSTANTS.NONE;

    if (matchCount === 6) {
      rank = CONSTANTS.FIRST;
    } else if (matchCount === 5 && draw.includes(bonusNumber)) {
      rank = CONSTANTS.SECOND;
    } else if (matchCount === 5) {
      rank = CONSTANTS.THIRD;
    } else if (matchCount === 4) {
      rank = CONSTANTS.FOURTH;
    } else if (matchCount === 3) {
      rank = CONSTANTS.FIFTH;
    }

    acc[rank] = (acc[rank] || 0) + 1;
    return acc;
  }, {});

  return { winResults };
}

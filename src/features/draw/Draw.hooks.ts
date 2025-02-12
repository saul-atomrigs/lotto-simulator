import { useEffect, useState } from 'react';
import { generateUniqueNumbers } from '../../utils';

export function useDraw(amount: number) {
  const [draws, setDraws] = useState<number[][]>([]);

  useEffect(() => {
    setDraws(
      Array.from({ length: amount }, () =>
        generateUniqueNumbers().sort((a, b) => a - b)
      )
    );
  }, [amount]);

  return { draws };
}

import { useEffect, useState } from 'react';

function generateUniqueNumbers(): number[] {
  const numbers = new Set<number>();
  while (numbers.size < 6) {
    numbers.add(Math.floor(Math.random() * 45) + 1);
  }
  return Array.from(numbers);
}

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

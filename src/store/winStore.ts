import { create } from 'zustand';
import { generateBonusNumber, generateUniqueNumbers } from '../utils';

interface WinStore {
  winningNumbers: number[];
  setWinningNumbers: () => void;
  bonusNumber: number;
}

export const useWinStore = create<WinStore>((set) => ({
  winningNumbers: [],
  bonusNumber: 0,
  setWinningNumbers: () => {
    const numbers = generateUniqueNumbers();
    const bonus = generateBonusNumber(numbers);
    set({ winningNumbers: numbers });
    set({ bonusNumber: bonus });
  },
}));

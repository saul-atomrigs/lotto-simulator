import { create } from 'zustand';
import { generateUniqueNumbers } from '../utils';

interface WinStore {
  winningNumbers: number[];
  setWinningNumbers: () => void;
}

export const useWinStore = create<WinStore>((set) => ({
  winningNumbers: [],
  setWinningNumbers: () => {
    const numbers = generateUniqueNumbers();
    set({ winningNumbers: numbers });
  },
}));

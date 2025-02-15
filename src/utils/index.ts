export function generateUniqueNumbers(): number[] {
  const numbers = new Set<number>();
  while (numbers.size < 6) {
    numbers.add(Math.floor(Math.random() * 45) + 1);
  }
  return Array.from(numbers);
}

export function generateBonusNumber(exclude: number[]): number {
  let bonus = Math.floor(Math.random() * 45) + 1;
  while (exclude.includes(bonus)) {
    bonus = Math.floor(Math.random() * 45) + 1;
  }
  return bonus;
}

export function sortElements(arr: number[]): string {
  return arr.sort((a, b) => a - b).join(', ');
}

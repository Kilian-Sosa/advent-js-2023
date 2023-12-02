function findFirstRepeated(gifts: number[]): number | -1 {
  const seenNumbers = new Set<number>();

  for (const currentId of gifts) {
    if (seenNumbers.has(currentId)) return currentId;
    seenNumbers.add(currentId);
  }
  return -1;
}

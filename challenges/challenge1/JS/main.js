function findFirstRepeated(gifts) {
  const seenNumbers = new Set();

  for (const currentId of gifts) {
    if (seenNumbers.has(currentId)) return currentId;
    seenNumbers.add(currentId);
  }
  return -1;
}

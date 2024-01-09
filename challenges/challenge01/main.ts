function findFirstRepeated(gifts: number[]): number {
  const repeated = gifts.filter((gift, i) => gifts.indexOf(gift) !== i);
  return repeated.length > 0 ? repeated[0] : -1;
}

// 160 points

// function findFirstRepeated(gifts: number[]): number | -1 {
//   const seenNumbers = new Set<number>();

//   for (const currentId of gifts) {
//     if (seenNumbers.has(currentId)) return currentId;
//     seenNumbers.add(currentId);
//   }
//   return -1;
// }

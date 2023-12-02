function findFirstRepeated(gifts) {
  const repeated = gifts.filter((gift, i) => gifts.indexOf(gift) !== i);
  return repeated.length > 0 ? repeated[0] : -1;
}

// 160 points

// function findFirstRepeated(gifts) {
//   const seenNumbers = new Set();

//   for (const currentId of gifts) {
//     if (seenNumbers.has(currentId)) return currentId;
//     seenNumbers.add(currentId);
//   }
//   return -1;
// }

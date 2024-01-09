function manufacture(gifts: string[], materials: string): string[] {
  const materialArray = materials.split("");

  return gifts.filter((gift) => {
    const uniqueCharacters = [...new Set([...gift, ...materialArray])];
    return uniqueCharacters.length === materialArray.length;
  });
}

// 270 points

// function manufacture(gifts: string[], materials: string): string[] {
//   return gifts.filter((gift) =>
//     [...gift].every((char) => materials.includes(char))
//   );
// }

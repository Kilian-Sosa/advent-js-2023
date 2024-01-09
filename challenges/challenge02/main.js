function manufacture(gifts, materials) {
  const materialArray = materials.split("");

  return gifts.filter((gift) => {
    const uniqueCharacters = [...new Set([...gift, ...materialArray])];
    return uniqueCharacters.length === materialArray.length;
  });
}

// 270 points

// function manufacture(gifts, materials) {
//   return gifts.filter((gift) => {
//     return gift.split("").every((char) => materials.includes(char));
//   });
// }

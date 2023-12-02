function manufacture(gifts, materials) {
  return gifts.filter((gift) => {
    return gift.split("").every((char) => materials.includes(char));
  });
}

function manufacture(gifts: string[], materials: string): string[] {
  return gifts.filter((gift) =>
    [...gift].every((char) => materials.includes(char))
  );
}

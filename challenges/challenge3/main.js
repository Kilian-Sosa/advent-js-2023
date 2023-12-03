function findNaughtyStep(original, modified) {
  const minLength = Math.min(original.length, modified.length);

  for (let i = 0; i < minLength; i++)
    if (original[i] !== modified[i])
      return modified.length > original.length ? modified[i] : original[i];
  return modified.length > original.length ? modified[minLength] : "";
}

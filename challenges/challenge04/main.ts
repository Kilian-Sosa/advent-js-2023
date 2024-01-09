function decode(message: string): string {
  const regex = /\(([^()]+)\)/g;
  const replacer = (_, group) => [...group].reverse().join("");

  return message.replace(regex, replacer).replace(regex, replacer);
}

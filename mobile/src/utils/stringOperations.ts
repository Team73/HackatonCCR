export const shortenString = (word: string, maxLength: number) => {
  return word.length > maxLength
    ? word.substring(0, maxLength - 3) + '...'
    : word;
};

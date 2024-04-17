export default function getFirstLetter(str: string) {
  if (typeof str !== 'string' || str.length === 0) {
    return null;
  }
  return str[0];
}

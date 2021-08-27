export function wrapWord (len, word) {
  return word?.length > len ? `${word.substring(0, len)}...` : word
}
export function replaceWhite (item) {
  return item.replace(/\s/g, '%20')
}

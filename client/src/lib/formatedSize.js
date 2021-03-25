export default function formatedSize(size) {
  return size
    .replace('1/3', ' ⅓')
    .replace('2/3', ' ⅔')
    .replace('.0', '')
    .replace('.', ',')
}

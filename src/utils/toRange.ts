export function toRange(start: number, end: number, step: number = 1) {
  const arr = []
  for (let i = start; i <= end; i += step) arr.push(i)
  return arr
}

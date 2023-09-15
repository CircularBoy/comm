// export function parseAmount(amount: string | number): number {
//   const num = typeof amount === 'string' ? parseInt(amount) : amount;
//   return num && num / 100;
// }

export function parsePrice(amount: number | string = 0): number {
  const num = typeof amount === 'string' ? parseFloat(amount) : amount;
  return num && num * 100;
}

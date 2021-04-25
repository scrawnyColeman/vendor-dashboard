export const addSymToAmount = (sym: string, amount: number): string =>
  sym + amount

export const deepClone = <T extends unknown>(obj: T) =>
  JSON.parse(JSON.stringify(obj))

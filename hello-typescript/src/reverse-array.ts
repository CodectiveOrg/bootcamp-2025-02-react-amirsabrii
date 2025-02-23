export function reverseArray<T>(items: T[]): T[] {
  const result: T[] = [];

  for (let i = items.length - 1; i >= 0; i--) {
    result.push(items[i]);
  }

  return result;
}

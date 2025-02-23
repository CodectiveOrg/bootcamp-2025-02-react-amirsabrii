export function countNumbers(items: unknown[]): number {
  let count = 0;

  for (const item of items) {
    if (typeof item === "number") {
      count++;
    }
  }

  return count;
}

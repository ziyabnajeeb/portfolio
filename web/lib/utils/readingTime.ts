export function readingTime(text: string, wordsPerMinute?: number): number {
  const wpm = wordsPerMinute ?? 200;
  const words = text.trim().split(/\s+/).length;
  return Math.ceil(words / wpm);
}
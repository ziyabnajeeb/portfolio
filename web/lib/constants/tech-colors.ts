const TECH_COLOR_RULES: [pattern: string, color: string][] = [
  ["react-bootstrap", "#7952B3"],
  ["react", "#61DAFB"],
  ["next.js", "var(--foreground)"],
  ["nextjs", "var(--foreground)"],
  ["typescript", "#3178C6"],
  ["javascript", "#F7DF1E"],
  ["tailwind", "#06B6D4"],
  ["bootstrap", "#7952B3"],
  ["node", "#339933"],
  ["express", "var(--foreground)"],
  ["mongoose", "#47A248"],
  ["mongodb", "#47A248"],
  ["redux", "#764ABC"],
  ["styled components", "#DB7093"],
  ["axios", "#5A29E4"],
  ["angular", "#DD0031"],
  ["html5", "#E34F26"],
  ["html", "#E34F26"],
  ["scss", "#CC6699"],
  ["sass", "#CC6699"],
  ["css3", "#1572B6"],
  ["css", "#1572B6"],
  ["webpack", "#8DD6F9"],
  ["jquery", "#0769AD"],
  ["salesforce", "#00A1E0"],
  ["puppeteer", "#40B5A4"],
  ["gsap", "#8AC640"],
  ["git", "#F05032"],
  ["vue", "#4FC08D"],
  ["figma", "#F24E1E"],
  ["docker", "#2496ED"],
  ["graphql", "#E10098"],
];

export function getTechColor(tech: string): string | null {
  const normalized = tech.toLowerCase();
  const match = TECH_COLOR_RULES.find(([pattern]) => normalized.includes(pattern));
  return match ? match[1] : null;
}

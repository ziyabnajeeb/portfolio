interface MarkProps {
  className?: string;
}

export function SmileyMark({ className }: MarkProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M14 24 Q20 18 26 24" />
      <path d="M38 24 Q44 18 50 24" />
      <path d="M12 34 Q32 54 52 34" />
    </svg>
  );
}

export function StarburstMark({ className }: MarkProps) {
  const rayCount = 20;
  const rays = Array.from({ length: rayCount }, (_, i) => {
    const angle = (i / rayCount) * Math.PI * 2;
    const inner = i % 2 === 0 ? 8 : 12;
    const outer = i % 2 === 0 ? 30 : 24;
    const x1 = 32 + Math.cos(angle) * inner;
    const y1 = 32 + Math.sin(angle) * inner;
    const x2 = 32 + Math.cos(angle) * outer;
    const y2 = 32 + Math.sin(angle) * outer;
    return { x1, y1, x2, y2 };
  });

  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      className={className}
      aria-hidden="true"
    >
      {rays.map((ray, i) => (
        <line key={i} x1={ray.x1} y1={ray.y1} x2={ray.x2} y2={ray.y2} />
      ))}
    </svg>
  );
}

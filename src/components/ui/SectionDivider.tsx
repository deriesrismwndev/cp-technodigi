interface SectionDividerProps {
  from: string;
  to: string;
}

export function SectionDivider({ from, to }: SectionDividerProps) {
  return (
    <div
      className="h-28 relative -mt-1 -mb-1 z-20 pointer-events-none overflow-hidden"
      style={{
        background: `linear-gradient(to bottom, ${from}, ${to})`,
      }}
    >
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#22b4a6]/20 to-transparent" />
    </div>
  );
}

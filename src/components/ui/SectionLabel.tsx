import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";

interface SectionLabelProps {
  children: string;
  className?: string;
}

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] backdrop-blur-xl border border-[#22b4a6]/35 border-t-white/40 shadow-[0_0_20px_rgba(34,180,166,0.25)] mb-6",
        className
      )}
    >
      <Sparkles className="w-3.5 h-3.5 text-[#22b4a6]" />
      <span className="font-mono text-xs tracking-[0.2em] text-[#22b4a6] uppercase font-semibold">
        {children}
      </span>
    </div>
  );
}

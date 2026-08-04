import { type ReactNode } from "react";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: ReactNode;
  className?: string;
}

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <div className={cn("flex items-center mb-4", className)}>
      <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] backdrop-blur-xl border border-white/15 border-t-white/30 font-mono text-xs font-semibold tracking-wider text-[#22b4a6]">
        <Sparkles className="w-3.5 h-3.5 text-[#22b4a6]" />
        {children}
      </span>
    </div>
  );
}

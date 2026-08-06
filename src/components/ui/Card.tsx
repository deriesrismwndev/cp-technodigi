import { cn } from "@/lib/utils";
import { type HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  accent?: boolean;
}

export function Card({
  hover = true,
  accent = true,
  className,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "relative bg-white/[0.035] backdrop-blur-2xl border border-white/10 border-t-white/25 rounded-3xl p-7 transition-all duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden group",
        hover &&
          "hover:bg-white/[0.065] hover:border-[#22b4a6]/30 hover:border-t-white/40 hover:shadow-[0_30px_70px_rgba(0,0,0,0.6),0_0_40px_rgba(34,180,166,0.15)] hover:-translate-y-1",
        accent && "before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/5 before:to-transparent before:pointer-events-none",
        className,
      )}
      {...props}
    >
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />
      {children}
    </div>
  );
}

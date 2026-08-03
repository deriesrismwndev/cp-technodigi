import { cn } from "@/lib/utils";
import { type ButtonHTMLAttributes, type ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  children?: ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  href,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2.5 font-mono text-sm tracking-wide transition-all duration-300 cursor-pointer whitespace-nowrap rounded-full font-medium relative overflow-hidden group";

  const variants = {
    primary:
      "text-white bg-[#22b4a6]/15 hover:bg-[#22b4a6]/25 border border-[#22b4a6]/40 border-t-white/40 shadow-[0_10px_30px_rgba(34,180,166,0.25)] hover:shadow-[0_15px_40px_rgba(34,180,166,0.4)] hover:scale-[1.02] active:scale-[0.98]",
    secondary:
      "text-white/90 bg-white/[0.04] hover:bg-white/[0.08] border border-white/15 border-t-white/30 backdrop-blur-xl shadow-[0_10px_25px_rgba(0,0,0,0.3)] hover:border-white/30 hover:scale-[1.02] active:scale-[0.98]",
    ghost:
      "text-[#a3a3a3] hover:text-white hover:bg-white/[0.05] border border-transparent hover:border-white/10 rounded-full",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-5 py-2.5 text-sm",
    lg: "px-7 py-3.5 text-base",
  };

  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  const innerShimmer = (
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transform duration-1000 ease-out" />
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
        {innerShimmer}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
      {innerShimmer}
    </button>
  );
}

import * as React from "react";

import { cn } from "@/lib/utils";

const styles = {
  primary:
    "border border-gold/70 bg-gold text-accent-foreground hover:brightness-110",
  secondary:
    "border border-border bg-card text-foreground hover:border-gold/50 hover:text-gold",
};

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof styles;
}

export const buttonStyles = (
  variant: keyof typeof styles = "primary",
  className?: string,
) =>
  cn(
    "inline-flex h-11 items-center justify-center gap-2 rounded-md px-5 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/50 disabled:pointer-events-none disabled:opacity-50",
    styles[variant],
    className,
  );

export function Button({
  className,
  variant = "primary",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={buttonStyles(variant, className)}
      {...props}
    />
  );
}

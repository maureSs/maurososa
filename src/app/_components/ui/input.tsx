import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, type, ...props }, ref) => (
  <input
    type={type}
    className={cn(
      "flex h-11 w-full rounded-md border border-border bg-background/80 px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/70 transition",
      "hover:border-gold/35 focus-visible:border-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/25",
      "disabled:cursor-not-allowed disabled:opacity-50",
      className,
    )}
    ref={ref}
    {...props}
  />
));
Input.displayName = "Input";

export { Input };

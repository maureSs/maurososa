"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

import { cn } from "@/lib/utils";

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "flex w-auto items-start justify-start gap-1",
      className,
    )}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "relative rounded-none border border-t-0 px-3.5 pb-1.5 pt-3.5 font-display text-xs tracking-wide text-gold/65 transition sm:px-4 sm:pt-4 sm:text-sm",
      "border-[color:var(--tab-border)] bg-[var(--tab-bg)]",
      "hover:text-gold",
      "data-[state=active]:border-b-2 data-[state=active]:border-l-2 data-[state=active]:border-r-2 data-[state=active]:border-t-0 data-[state=active]:border-b-gold data-[state=active]:border-l-gold data-[state=active]:border-r-gold data-[state=active]:bg-wow-tab data-[state=active]:px-4 data-[state=active]:pb-2.5 data-[state=active]:pt-4 data-[state=active]:text-foreground data-[state=active]:shadow-[0_4px_12px_hsl(var(--gold)/0.18)] sm:data-[state=active]:px-5 sm:data-[state=active]:pt-[1.125rem]",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/50",
      className,
    )}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-0 outline-none animate-tab-in focus-visible:ring-2 focus-visible:ring-gold/40",
      className,
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };

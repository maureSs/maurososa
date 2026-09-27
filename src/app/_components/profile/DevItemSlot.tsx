"use client";

import {
  Armchair,
  Bot,
  Brain,
  Coffee,
  Headphones,
  Keyboard,
  Mic,
  Monitor,
  Mouse,
  NotebookPen,
  PanelTop,
  Usb,
  type LucideIcon,
} from "lucide-react";

import type { DevItem, DevItemIcon, Rarity } from "@/app/api";
import { useMageTheme } from "@/app/mage-theme";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const iconMap: Record<DevItemIcon, LucideIcon> = {
  brain: Brain,
  monitor: Monitor,
  mic: Mic,
  keyboard: Keyboard,
  mouse: Mouse,
  headphones: Headphones,
  coffee: Coffee,
  notebook: NotebookPen,
  armchair: Armchair,
  usb: Usb,
  panel: PanelTop,
  bot: Bot,
};

const rarityClass: Record<Rarity, string> = {
  uncommon: "border-rarity-uncommon shadow-[0_0_10px_hsl(var(--rarity-uncommon)/0.35)]",
  rare: "border-rarity-rare shadow-[0_0_10px_hsl(var(--rarity-rare)/0.35)]",
  epic: "border-rarity-epic shadow-[0_0_10px_hsl(var(--rarity-epic)/0.35)]",
  legendary: "border-rarity-legendary shadow-[0_0_12px_hsl(var(--rarity-legendary)/0.4)]",
};

export default function DevItemSlot({ item }: { item: DevItem }) {
  const Icon = iconMap[item.icon];
  const { element } = useMageTheme();
  const name =
    element === "ice" && item.iceName ? item.iceName : item.name;
  const blurb =
    element === "ice" && item.iceBlurb ? item.iceBlurb : item.blurb;

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          type="button"
          className={cn(
            "group flex size-11 items-center justify-center rounded-sm border-2 bg-muted/70 text-foreground transition sm:size-12",
            "hover:scale-105 hover:bg-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/50",
            rarityClass[item.rarity],
          )}
          aria-label={`${name}: ${blurb}`}
        >
          <Icon
            aria-hidden="true"
            className="size-5 text-foreground/90 transition group-hover:text-gold sm:size-[1.35rem]"
          />
        </button>
      </TooltipTrigger>
      <TooltipContent side="top">
        <p className="font-semibold text-gold">{name}</p>
        <p className="mt-1 text-muted-foreground">{blurb}</p>
      </TooltipContent>
    </Tooltip>
  );
}

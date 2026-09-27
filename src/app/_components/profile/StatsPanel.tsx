import type { ReactNode } from "react";
import Link from "next/link";

import {
  attributes,
  interests,
  specializations,
  stackPower,
  training,
} from "@/app/api";

function StatLine({
  label,
  value,
  url,
}: {
  label: string;
  value: string;
  url?: string;
}) {
  const labelNode = url ? (
    <Link
      href={url}
      target="_blank"
      rel="noreferrer"
      className="text-gold transition hover:text-gold-bright"
    >
      {label}
    </Link>
  ) : (
    <span className="text-gold">{label}</span>
  );

  return (
    <div className="flex items-baseline justify-between gap-3 border-b border-border/50 py-1.5 text-sm last:border-0">
      {labelNode}
      <span className="font-medium tabular-nums text-foreground">{value}</span>
    </div>
  );
}

function SectionHeader({ children }: { children: ReactNode }) {
  return (
    <div className="stat-header mb-2 mt-4 flex items-center first:mt-0">
      <span className="stat-header-cap" aria-hidden="true" />
      <h3 className="flex-1 bg-muted/80 px-3 py-1.5 text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
        {children}
      </h3>
      <span className="stat-header-cap" aria-hidden="true" />
    </div>
  );
}

export default function StatsPanel() {
  return (
    <aside className="panel-surface flex max-h-full min-h-0 flex-col overflow-y-auto rounded-sm border border-border p-3 sm:p-4">
      <SectionHeader>{stackPower.label}</SectionHeader>
      <p className="text-center font-display text-4xl text-foreground sm:text-5xl">
        {stackPower.value}
      </p>

      <SectionHeader>Attributes</SectionHeader>
      <div>
        {attributes.map((stat) => (
          <StatLine key={stat.label} {...stat} />
        ))}
      </div>

      <SectionHeader>Specializations</SectionHeader>
      <div>
        {specializations.map((stat) => (
          <StatLine key={stat.label} {...stat} />
        ))}
      </div>

      <SectionHeader>Training</SectionHeader>
      <ul className="space-y-2 text-xs leading-5 text-muted-foreground">
        {training.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-gold/80" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div className="mt-4 flex flex-wrap gap-1.5 pb-1">
        {interests.map((interest) => (
          <span
            key={interest}
            className="rounded-sm border border-border/70 bg-muted/50 px-2 py-0.5 text-[10px] uppercase tracking-wider text-muted-foreground"
          >
            {interest}
          </span>
        ))}
      </div>
    </aside>
  );
}

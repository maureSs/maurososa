import Image from "next/image";

import { myWork } from "@/app/api";

export default function JourneyPane() {
  return (
    <div className="space-y-3 sm:space-y-4">
      <p className="text-sm leading-6 text-muted-foreground">
        Active and completed quests across logistics, enterprise learning, and
        independent builds.
      </p>

      <ul className="space-y-3">
        {myWork.map((work) => (
          <li
            key={work.name}
            className="rounded-sm border border-border/70 bg-background/45 p-3 sm:p-4"
          >
            <div className="flex gap-3 sm:gap-4">
              <div className="relative size-14 shrink-0 overflow-hidden rounded-sm border border-gold/30 bg-white sm:size-16">
                <Image
                  src={work.image}
                  alt={work.imageAlt}
                  fill
                  sizes="64px"
                  className={
                    work.name === "ABstract"
                      ? "object-contain p-2"
                      : "object-cover"
                  }
                />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
                  {work.role}
                </p>
                <h3 className="font-display text-xl text-foreground sm:text-2xl">
                  {work.name}
                </h3>
                <p className="mt-2 text-sm leading-6 text-foreground/90">
                  {work.summary}
                </p>
                <ul className="mt-3 space-y-1.5 text-sm leading-6 text-muted-foreground">
                  {work.details.map((detail) => (
                    <li key={detail} className="flex gap-2">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-arcane" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
                <ul
                  className="mt-3 flex flex-wrap gap-1.5"
                  aria-label={`${work.name} technologies`}
                >
                  {work.technologies.map((technology) => (
                    <li
                      key={technology}
                      className="rounded-sm border border-border/80 bg-muted/50 px-2 py-0.5 text-[11px] text-muted-foreground"
                    >
                      {technology}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

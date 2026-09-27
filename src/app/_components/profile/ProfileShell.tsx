"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Flame, Snowflake } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

import { parseProfileTab, type ProfileTab } from "@/app/api";
import { useMageTheme } from "@/app/mage-theme";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { TooltipProvider } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

import CharacterPane from "./CharacterPane";
import JourneyPane from "./JourneyPane";
import WhispersPane from "./WhispersPane";

const tabLabels: Record<ProfileTab, string> = {
  character: "Character",
  journey: "Journey",
  whispers: "Whispers",
};

export default function ProfileShell() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const { element, toggleElement } = useMageTheme();
  const [tab, setTab] = useState<ProfileTab>(() =>
    parseProfileTab(searchParams.get("tab")),
  );

  useEffect(() => {
    setTab(parseProfileTab(searchParams.get("tab")));
  }, [searchParams]);

  const onTabChange = useCallback(
    (value: string) => {
      const next = parseProfileTab(value);
      setTab(next);
      const params = new URLSearchParams(searchParams.toString());
      if (next === "character") {
        params.delete("tab");
      } else {
        params.set("tab", next);
      }
      const query = params.toString();
      router.replace(query ? `${pathname}?${query}` : pathname, {
        scroll: false,
      });
    },
    [pathname, router, searchParams],
  );

  return (
    <TooltipProvider delayDuration={200}>
      <div className="relative z-10 flex min-h-screen items-center justify-center px-3 py-6 sm:px-5 sm:py-8">
        <Tabs
          value={tab}
          onValueChange={onTabChange}
          className="relative flex w-full max-w-5xl flex-col"
        >
          <div className="profile-window animate-window-in relative z-10 flex max-h-[min(880px,calc(100vh-4.5rem))] w-full flex-col overflow-hidden">
            <header className="relative shrink-0">
              <div className="title-bar relative flex min-h-11 items-center justify-center border-b border-border py-2 sm:min-h-12">
                <div className="absolute left-3 top-1/2 z-10 -translate-y-1/2 sm:left-3.5">
                  <button
                    type="button"
                    onClick={toggleElement}
                    className="element-toggle"
                    aria-label={
                      element === "fire"
                        ? "Switch to ice mage theme"
                        : "Switch to fire mage theme"
                    }
                    title={
                      element === "fire"
                        ? "Ice mage mode"
                        : "Fire mage mode"
                    }
                  >
                    {element === "fire" ? (
                      <Flame
                        aria-hidden="true"
                        className="size-5 sm:size-6"
                        strokeWidth={2.25}
                      />
                    ) : (
                      <Snowflake
                        aria-hidden="true"
                        className="size-5 sm:size-6"
                        strokeWidth={2.25}
                      />
                    )}
                  </button>
                </div>
                <div className="mx-auto max-w-[16rem] px-14 text-center sm:max-w-none sm:px-16">
                  <h1 className="font-display text-sm font-semibold tracking-[0.08em] text-foreground sm:text-base">
                    Mauro Sosa
                  </h1>
                </div>
              </div>

              <div className="border-b border-border bg-muted/40 px-4 py-2.5 text-center sm:px-6">
                <p className="text-sm text-gold sm:text-[0.95rem]">
                  Fullstack Developer
                </p>
                <p className="mt-0.5 text-[11px] text-muted-foreground sm:text-xs">
                  Buenos Aires, Argentina
                </p>
              </div>
            </header>

            <div
              className={cn(
                "min-h-0 flex-1 px-3 pb-7 pt-4 sm:px-5 sm:pb-8 sm:pt-5",
                tab === "character" ? "overflow-hidden" : "overflow-y-auto",
              )}
            >
              <TabsContent value="character" className="mt-0 h-full min-h-0">
                <div className="flex h-full min-h-0 flex-col justify-start">
                  <CharacterPane />
                </div>
              </TabsContent>
              <TabsContent value="journey" className="mt-0">
                <JourneyPane />
              </TabsContent>
              <TabsContent value="whispers" className="mt-0">
                <WhispersPane />
              </TabsContent>
            </div>
          </div>

          {/* Tabs sit behind the window frame (WoW-style underlap) */}
          <div className="relative z-0 -mt-2 pl-2 sm:pl-3">
            <TabsList aria-label="Profile sections">
              {(Object.keys(tabLabels) as ProfileTab[]).map((key) => (
                <TabsTrigger key={key} value={key}>
                  {tabLabels[key]}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
        </Tabs>
      </div>
    </TooltipProvider>
  );
}

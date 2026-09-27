import { devItems } from "@/app/api";

import DevItemSlot from "./DevItemSlot";
import MageDevPortrait from "./MageDevPortrait";
import StatsPanel from "./StatsPanel";

export default function CharacterPane() {
  const left = devItems.filter((item) => item.side === "left");
  const right = devItems.filter((item) => item.side === "right");
  const bottom = devItems.filter((item) => item.side === "bottom");

  return (
    <div className="grid max-h-full items-start gap-4 pb-1 lg:grid-cols-[minmax(0,1.15fr)_minmax(260px,0.85fr)] lg:gap-5">
      <div className="panel-surface shrink-0 rounded-sm border border-border p-3 sm:p-4">
        <div className="grid grid-cols-[auto_1fr_auto] items-center gap-2 sm:gap-3">
          <div className="flex flex-col gap-2">
            {left.map((item) => (
              <DevItemSlot key={item.id} item={item} />
            ))}
          </div>

          <div className="flex min-h-56 flex-col items-center justify-center sm:min-h-72">
            <MageDevPortrait />
            <div className="mt-2 flex gap-2">
              {bottom.map((item) => (
                <DevItemSlot key={item.id} item={item} />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            {right.map((item) => (
              <DevItemSlot key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>

      <div className="min-h-0 max-h-full self-stretch lg:max-h-[calc(100%-0.25rem)]">
        <StatsPanel />
      </div>
    </div>
  );
}

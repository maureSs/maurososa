"use client";

import { useMageTheme } from "@/app/mage-theme";

export default function MageDevPortrait() {
  const { element } = useMageTheme();
  const isIce = element === "ice";

  const robe = isIce
    ? { top: "#1a1a1a", mid: "#0d0d0d", bot: "#050505" }
    : { top: "#31466e", mid: "#1a2740", bot: "#0d1422" };
  const hood = isIce
    ? { top: "#222222", bot: "#0a0a0a" }
    : { top: "#4a628f", bot: "#1e2d48" };
  const sleeves = isIce ? "#141414" : "#2a3d5c";
  const trim = isIce ? "#5a8fb0" : "#c9a227";
  const trimSoft = isIce ? "#7eb0cc" : "#8a7340";
  const eye = "#4ade80";
  const skin = isIce
    ? { mid: "#4a5564", dark: "#2a323c" }
    : { mid: "#3a322c", dark: "#1c1714" };

  return (
    <div
      className="mage-portrait relative mx-auto flex h-52 w-40 items-end justify-center sm:h-64 sm:w-48 lg:h-72 lg:w-52"
      aria-hidden="true"
    >
      <div className="mage-glow absolute inset-x-8 bottom-5 h-7 rounded-full bg-arcane/25 blur-xl" />

      <span className="mage-glyph absolute left-1 top-10 font-mono text-[10px] text-arcane/70 sm:text-xs">
        {"{ }"}
      </span>
      <span className="mage-glyph mage-glyph-delay absolute right-0 top-16 font-mono text-[10px] text-gold/60 sm:text-xs">
        {"</>"}
      </span>

      <svg
        viewBox="0 0 180 260"
        className="relative h-full w-full drop-shadow-[0_10px_28px_rgba(0,0,0,0.55)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="mdRobe" x1="90" y1="115" x2="90" y2="210" gradientUnits="userSpaceOnUse">
            <stop stopColor={robe.top} />
            <stop offset="0.55" stopColor={robe.mid} />
            <stop offset="1" stopColor={robe.bot} />
          </linearGradient>
          <linearGradient id="mdHood" x1="90" y1="62" x2="90" y2="102" gradientUnits="userSpaceOnUse">
            <stop stopColor={hood.top} />
            <stop offset="1" stopColor={hood.bot} />
          </linearGradient>
          <linearGradient id="mdLaptop" x1="65" y1="155" x2="115" y2="185" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3a4558" />
            <stop offset="0.45" stopColor="#232b3a" />
            <stop offset="1" stopColor="#151b27" />
          </linearGradient>
          <linearGradient id="mdSkin" x1="90" y1="84" x2="90" y2="108" gradientUnits="userSpaceOnUse">
            <stop stopColor={skin.mid} />
            <stop offset="1" stopColor={skin.dark} />
          </linearGradient>
          <radialGradient id="mdAura" cx="90" cy="175" r="30" gradientUnits="userSpaceOnUse">
            <stop stopColor="#38bdf8" stopOpacity="0.3" />
            <stop offset="1" stopColor="#38bdf8" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="mdHoodShade" cx="90" cy="94" r="16" gradientUnits="userSpaceOnUse">
            <stop stopColor="#000" stopOpacity="0.2" />
            <stop offset="0.6" stopColor="#000" stopOpacity="0.5" />
            <stop offset="1" stopColor="#000" stopOpacity="0.72" />
          </radialGradient>
        </defs>

        <ellipse cx="90" cy="228" rx="26" ry="6" fill={trim} opacity="0.12" />
        <circle cx="90" cy="175" r="28" fill="url(#mdAura)" className="mage-rune" />

        {/* compact body — shoulders match hood width */}
        <path
          d="M68 112 C71 138 68 168 64 205 L90 198 L116 205 C112 168 109 138 112 112 C105 118 97 120 90 120 C83 120 75 118 68 112Z"
          fill="url(#mdRobe)"
          stroke={trimSoft}
          strokeWidth="1"
        />
        <path
          d="M90 120 V194"
          stroke={trim}
          strokeWidth="0.85"
          opacity="0.4"
          strokeDasharray="2 3"
        />

        {/* sleeves tucked to torso */}
        <path
          d="M68 122 C62 136 63 148 70 153 L78 148"
          stroke={sleeves}
          strokeWidth="6.5"
          strokeLinecap="round"
        />
        <path
          d="M112 122 C118 136 117 148 110 153 L102 148"
          stroke={sleeves}
          strokeWidth="6.5"
          strokeLinecap="round"
        />

        {/* laptop */}
        <g>
          <rect
            x="66"
            y="152"
            width="48"
            height="30"
            rx="2"
            fill="url(#mdLaptop)"
            stroke="#6b7280"
            strokeWidth="0.9"
          />
          <rect
            x="68.5"
            y="154.5"
            width="43"
            height="25"
            rx="1"
            stroke="#94a3b8"
            strokeWidth="0.5"
            opacity="0.22"
          />
          <g transform="translate(90 167)" opacity="0.85">
            <circle r="5.2" stroke={trim} strokeWidth="1" fill="#0f141f" />
            <path
              d="M0 -3 L1.2 -0.6 L3.6 -0.5 L1.6 1 L2.3 3.3 L0 1.9 L-2.3 3.3 L-1.6 1 L-3.6 -0.5 L-1.2 -0.6 Z"
              fill={trim}
            />
            <circle r="1.2" fill="#38bdf8" opacity="0.85" />
          </g>
          <path
            d="M64 182 H116"
            stroke="#9ca3af"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.4"
          />
        </g>

        {/* head — sized so hood can wrap it tightly */}
        <g className="mage-face">
          <path
            d="M86 108 C87 112 88.5 114 90 114 C91.5 114 93 112 94 108"
            fill={skin.dark}
          />
          <ellipse cx="90" cy="94" rx="10" ry="12" fill="url(#mdSkin)" />
          <ellipse cx="90" cy="95" rx="10.5" ry="12.5" fill="url(#mdHoodShade)" />
          <ellipse cx="84.5" cy="94.5" rx="2.2" ry="1.5" fill="#0a0c12" opacity="0.8" />
          <ellipse cx="95.5" cy="94.5" rx="2.2" ry="1.5" fill="#0a0c12" opacity="0.8" />
          <ellipse
            cx="84.5"
            cy="94.5"
            rx="1.15"
            ry="0.95"
            fill={eye}
            opacity="0.5"
            className="mage-eye"
          />
          <ellipse
            cx="95.5"
            cy="94.5"
            rx="1.15"
            ry="0.95"
            fill={eye}
            opacity="0.5"
            className="mage-eye"
          />
          <path
            d="M87 103 Q90 104.2 93 103"
            stroke="#000"
            strokeWidth="0.9"
            strokeLinecap="round"
            opacity="0.28"
          />
        </g>

        {/* low hoodie-style hood — short height, wraps the crown */}
        <path
          d="M73 100
             C74 78 81 66 90 64
             C99 66 106 78 107 100
             C101 96 96 93 90 93
             C84 93 79 96 73 100Z"
          fill="url(#mdHood)"
          stroke={trim}
          strokeWidth="1.1"
        />
        {/* soft face opening / hood rim */}
        <path
          d="M77 98 C83 94 97 94 103 98"
          stroke="#000"
          strokeWidth="2"
          opacity="0.2"
          strokeLinecap="round"
        />

        <circle cx="90" cy="116" r="3.4" fill={trim} />
        <circle cx="90" cy="116" r="1.4" fill="#111827" />

        {/* small shoulder tips under hood — same width as hood base */}
        <path
          d="M68 110 C72 106 78 105 80 107"
          stroke={trim}
          strokeWidth="1.2"
          opacity="0.5"
        />
        <path
          d="M112 110 C108 106 102 105 100 107"
          stroke={trim}
          strokeWidth="1.2"
          opacity="0.5"
        />
      </svg>
    </div>
  );
}

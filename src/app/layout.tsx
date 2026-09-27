import type { Metadata } from "next";
import { Cinzel, Source_Sans_3 } from "next/font/google";

import MainContainer from "./_components/MainContainer";
import { MageThemeProvider } from "./mage-theme";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Mauro Sosa — Fullstack Developer",
    template: "%s — Mauro Sosa",
  },
  description:
    "Fullstack developer from Buenos Aires building fast, scalable web applications with TypeScript, React, Next.js, Java, and Spring Boot.",
};

const cinzel = Cinzel({
  weight: ["500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

const sourceSans = Source_Sans_3({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const mageThemeScript = `
  try {
    const saved = localStorage.getItem('mage-element');
    const element = saved === 'ice' ? 'ice' : 'fire';
    document.documentElement.dataset.mage = element;
    document.documentElement.classList.toggle('dark', element === 'fire');
    document.documentElement.style.colorScheme = element === 'fire' ? 'dark' : 'light';
  } catch (_) {
    document.documentElement.dataset.mage = 'fire';
    document.documentElement.classList.add('dark');
  }
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-mage="fire" className="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: mageThemeScript }} />
      </head>
      <body className={`${cinzel.variable} ${sourceSans.variable} font-sans`}>
        <MageThemeProvider>
          <MainContainer>{children}</MainContainer>
        </MageThemeProvider>
      </body>
    </html>
  );
}

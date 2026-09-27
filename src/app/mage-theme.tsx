"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type MageElement = "fire" | "ice";

interface MageThemeContextValue {
  element: MageElement;
  toggleElement: () => void;
}

const MageThemeContext = createContext<MageThemeContextValue | undefined>(
  undefined,
);

const STORAGE_KEY = "mage-element";

function applyElement(element: MageElement) {
  document.documentElement.dataset.mage = element;
  document.documentElement.classList.toggle("dark", element === "fire");
  document.documentElement.style.colorScheme =
    element === "fire" ? "dark" : "light";
}

export function MageThemeProvider({ children }: { children: ReactNode }) {
  const [element, setElement] = useState<MageElement>("fire");

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    const next: MageElement = saved === "ice" ? "ice" : "fire";
    setElement(next);
    applyElement(next);
  }, []);

  const toggleElement = useCallback(() => {
    setElement((current) => {
      const next: MageElement = current === "fire" ? "ice" : "fire";
      localStorage.setItem(STORAGE_KEY, next);
      applyElement(next);
      return next;
    });
  }, []);

  return (
    <MageThemeContext.Provider value={{ element, toggleElement }}>
      {children}
    </MageThemeContext.Provider>
  );
}

export function useMageTheme() {
  const context = useContext(MageThemeContext);
  if (!context) {
    throw new Error("useMageTheme must be used within MageThemeProvider");
  }
  return context;
}

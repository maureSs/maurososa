'use client'
import { createContext, useState, useContext, ReactNode  } from 'react';

interface ThemeContextProps {
  colorMode: string;
  toggleColorMode: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps>  = ({ children }) => {
  const [colorMode, setColorMode] = useState('dark');

  const toggleColorMode = () => {
    setColorMode((prevMode) => (prevMode === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{ colorMode, toggleColorMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
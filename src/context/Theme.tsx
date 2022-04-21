import React, { createContext, useState, useContext } from 'react';
//import { ThemeName } from '../styles/themes';

type ContextType = {
  themeName: string; //ThemeName
  setThemeName?: (value: React.SetStateAction<string>) => void;
};

const ThemeContext = createContext<ContextType>({
  themeName: 'default',
});

export const ThemeProvider: React.FC = ({ children }) => {
  const [themeName, setThemeName] = useState<string>('default');

  return (
    <ThemeContext.Provider
      value={{
        themeName,
        setThemeName,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within a ThemeContext');
  const { themeName, setThemeName } = context;
  return { themeName, setThemeName };
}

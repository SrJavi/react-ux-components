import React, { useEffect, createContext, useState, useContext } from 'react';
import { APIMenu } from '../@types';

import { Get } from '../services/api';

type ContextType = {
  menu?: Array<APIMenu>;
  showNav: boolean;
  setShowNav: (value: React.SetStateAction<boolean>) => void;
  error?: string;
};

const MenuContext = createContext<ContextType>({
  showNav: false,
  setShowNav: () => {},
});

export const MenuProvider: React.FC = ({ children }) => {
  const [menu, setMenu] = useState<Array<APIMenu>>();
  const [error, setError] = useState<string>();
  const [showNav, setShowNav] = useState<boolean>(false);

  useEffect(() => {
    async function fetchMenu() {
      try {
        let response = await Get<APIMenu[]>('api/Menu/GetMenu');
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        setMenu(response.parsedBody);
      } catch (err) {
        if (err && typeof err === 'object') {
          setError(err.toString());
        }
      }
    }
    fetchMenu();

    return () => {
      setMenu(undefined);
      setError(undefined);
    };
  }, []);

  return (
    <MenuContext.Provider
      value={{
        menu,
        showNav,
        setShowNav,
        error,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export function useMenu() {
  const context = useContext(MenuContext);
  if (!context) throw new Error('useMenu must be used within a MenuContext');
  const { menu, showNav, setShowNav, error } = context;
  return { menu, showNav, setShowNav, error };
}

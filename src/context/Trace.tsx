import React, { createContext, useState, useContext } from 'react';

import { Transaction } from '../@types';

type ContextType = {
  trace: Transaction[];
  setTrace: (value: React.SetStateAction<Transaction[]>) => void;
};

const TraceContext = createContext<ContextType>({
  trace: [],
  setTrace: (value: React.SetStateAction<Transaction[]>) => value,
});

export const TraceProvider: React.FC = ({ children }) => {
  const [trace, setTrace] = useState<Transaction[]>([]);

  return (
    <TraceContext.Provider value={{ trace, setTrace }}>
      {children}
    </TraceContext.Provider>
  );
};

export function useTrace() {
  const context = useContext(TraceContext);
  if (!context) throw new Error('useTrace must be used within a TraceProvider');
  const { trace, setTrace } = context;
  return { trace, setTrace };
}

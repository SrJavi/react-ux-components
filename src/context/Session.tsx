import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  useCallback,
  useRef,
} from 'react';

type ContextType = {
  countdown: number;
  finishCountdown: () => void;
  resetCountdown: () => void;
};

const SessionContext = createContext<ContextType>({
  countdown: 60,
  finishCountdown: () => {},
  resetCountdown: () => {},
});

const COUNTDOWN_INITIAL_TIME_IN_SECONDS = 20 * 60; //20 minutes

export const SessionProvider: React.FC = ({ children }) => {
  const [countdown, setCountdown] = useState<number>(
    COUNTDOWN_INITIAL_TIME_IN_SECONDS
  );

  const timeoutRef: { current: NodeJS.Timeout | null } = useRef(null);

  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    if (countdown <= 0) {
      setCountdown(0);
      return;
    }

    timeoutRef.current = setTimeout(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);
  }, [countdown]);

  const finishCountdown = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setCountdown(0);
  }, []);

  const resetCountdown = useCallback(() => {
    setCountdown(COUNTDOWN_INITIAL_TIME_IN_SECONDS);
  }, []);

  return (
    <SessionContext.Provider
      value={{ countdown, finishCountdown, resetCountdown }}
    >
      {children}
    </SessionContext.Provider>
  );
};

export function useSession() {
  const context = useContext(SessionContext);
  if (!context)
    throw new Error('useSession must be used within a SessionProvider');
  const { countdown, finishCountdown, resetCountdown } = context;
  return { countdown, finishCountdown, resetCountdown };
}

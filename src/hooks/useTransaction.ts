import { useEffect, useRef, useState } from 'react';
import { API, Unauthorized } from '../@types';
import { useSession } from '../context/Session';
import { useTrace } from '../context/Trace';
import { Post } from '../services/api';

export interface ITransaction<T> {
  result?: T;
  error?: any;
  loading: boolean;
}

export const useTransaction = <T>(
  url: string,
  data: any = undefined,
  skipFirst = false
) => {
  const { setTrace } = useTrace();
  const { finishCountdown, resetCountdown } = useSession();
  const isFirstRun = useRef(skipFirst);
  const [transaction, setTransaction] = useState<ITransaction<T>>({
    loading: false,
  });

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }

    (async function () {
      try {
        setTransaction({ loading: true });
        const response = await Post<API<T> | Unauthorized>(url, {
          Method: 'POST',
          Data: data,
        });

        const unauthorized = response.parsedBody as Unauthorized;

        if (unauthorized.unauthorized) {
          finishCountdown();
          setTransaction({ loading: false, result: undefined });
          return;
        }

        resetCountdown();

        const responseData = response.parsedBody as API<T>;

        const transactions = responseData.trace.transactions;
        if (transactions) {
          setTrace((prev) => [...prev, ...transactions]);
        }

        const result = responseData.data?.result;

        if (!result) {
          throw new Error(responseData.message);
        }

        setTransaction({ loading: false, result: result });
      } catch (err) {
        setTransaction({ loading: false, error: err });
      }
    })();
    return () => {
      setTransaction({
        loading: false,
      });
    };
  }, [data]);

  return {
    result: transaction.result,
    error: transaction.error,
    loading: transaction.loading,
  };
};

import React, { useState, useEffect } from 'react';
import { Unauthorized } from '../../../@types';
import { Get } from '../../../services/api';

interface Data {
  isAuthenticated?: boolean;
  error?: string;
}

interface Props {
  path: string;
}

export const PrivateRoute: React.FC<Props> = ({ path, children }) => {
  const [data, setData] = useState<Data>();

  useEffect(() => {
    async function ping() {
      try {
        let response = await Get<Unauthorized>('api/Access/Ping');
        if (!response.ok) {
          throw new Error(response.statusText);
        }

        //const unauthorized = response.parsedBody;

        setData({ isAuthenticated: true });
      } catch (err) {
        setData({ error: 'Error!' });
      }
    }

    ping();

    return () => {
      setData(undefined);
    };
  }, [path]);

  if (window.location.hostname !== 'localhost') {
    if (data?.error) {
      window.location.reload();
    }
  }

  return <>{children}</>;
};

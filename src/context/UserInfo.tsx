import React, {
  useEffect,
  createContext,
  useState,
  useContext,
  useCallback,
} from 'react';

import { APIUserInfo, Preference, Unauthorized } from '../@types';
import { Post } from '../services/api';

import { Loading } from '../atomic/atoms/Loading';
import { Alert } from '../atomic/atoms/Alert';

type ContextType = {
  user?: APIUserInfo;
  setUser?: (value: React.SetStateAction<APIUserInfo | undefined>) => void;
  translate: (value: string) => string;
  getPreference: (attribute: string) => string;
  setPreference: (preferences: Preference | Preference[]) => void;
};

const UserInfoContext = createContext<ContextType>({
  translate: (value: string) => value,
  getPreference: (attribute: string) => attribute,
  setPreference: (preferences: Preference | Preference[]) => preferences,
});

interface IUserInfoProvider {
  preferences?: Preference[];
}

export const UserInfoProvider: React.FC<IUserInfoProvider> = ({
  preferences,
  children,
}) => {
  const [user, setUser] = useState<APIUserInfo>();
  const [error, setError] = useState<string>();

  useEffect(() => {
    async function fetchUserInfo() {
      try {
        let response = await Post<APIUserInfo | Unauthorized>(
          'api/Access/UserInfo',
          preferences || []
        );

        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const unauthorized = response.parsedBody as Unauthorized;

        if (unauthorized.unauthorized) {
          if (window.location.hostname === 'localhost') {
            window.location.href = `./api/Access/Authenticate?returnUrl=${encodeURIComponent(
              window.location.href
            )}`;
          } else {
            setError(`unauthorized: ${unauthorized.unauthorized}`);
          }
        } else {
          setUser(response.parsedBody as APIUserInfo);
        }
      } catch (err) {
        if (err && typeof err === 'object') {
          setError(err.toString());
        }
      }
    }
    fetchUserInfo();

    return () => {
      setUser(undefined);
      setError(undefined);
    };
  }, [preferences]);

  const translate = (text: string) => {
    if (error || !user || !user.dictionary) {
      return text;
    }
    var translation = user.dictionary[String(text).toLowerCase()];
    return (translation && String(translation).toLowerCase()) || text;
  };

  const getPreference = useCallback(
    (attribute: string) => {
      return (
        (user &&
          user.preferences &&
          user.preferences.find((item) => item.attribute === attribute)
            ?.value) ||
        ''
      );
    },
    [user]
  );

  const setPreference = useCallback(
    (preferences: Preference | Preference[]) => {
      (async function () {
        try {
          const response = await Post(
            'api/Access/SaveDefaults',
            Array.isArray(preferences) ? preferences : [preferences]
          );
          if (!response.ok) {
            throw new Error(response.statusText);
          }
        } catch (err) {}
      })();
    },
    []
  );

  if (error) {
    return (
      <Alert
        title="Aviso"
        detail={error}
        confirmButtonText={translate('Aceptar')}
      />
    );
  }

  if (!user) {
    return <Loading>{translate('Autorizando')}...</Loading>;
  }

  return (
    <UserInfoContext.Provider
      value={{
        user,
        setUser,
        translate,
        getPreference,
        setPreference,
      }}
    >
      {children}
    </UserInfoContext.Provider>
  );
};

export function useUserInfo() {
  const context = useContext(UserInfoContext);
  if (!context)
    throw new Error('useUserInfo must be used within a UserInfoProvider');
  const { user, setUser, translate, getPreference, setPreference } = context;
  return { user, setUser, translate, getPreference, setPreference };
}

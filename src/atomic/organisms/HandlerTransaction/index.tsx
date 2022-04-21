import React, { memo } from 'react';
import { useUserInfo } from '../../../context/UserInfo';
import { Alert } from '../../atoms/Alert';
import { LoadingSpinner } from '../../atoms/LoadingSpinner';

interface IHandlerTransaction {
  loading: boolean;
  error: string;
}

export const HandlerTransaction: React.FC<IHandlerTransaction> = memo(
  ({ loading, error }) => {
    const { translate } = useUserInfo();
    return (
      <>
        {loading && <LoadingSpinner />}
        {error && (
          <Alert
            title={translate('Error')}
            detail={error}
            type="error"
            confirmButtonText={translate('Aceptar')}
          />
        )}
      </>
    );
  }
);

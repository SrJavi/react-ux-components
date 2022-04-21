import React from 'react';
import { useUserInfo } from '../../../context/UserInfo';
import { Button } from '../../atoms/Button';

import { Container } from './styles';

interface IPanelFilters {
  onRefresh: () => void;
}

export const PanelFilters: React.FC<IPanelFilters> = ({
  onRefresh,
  children,
}) => {
  const { translate } = useUserInfo();
  return (
    <Container>
      <div>{children}</div>
      <div>
        <Button onClick={onRefresh} styled={'Filter'}>
          {translate('Actualizar')}
        </Button>
      </div>
    </Container>
  );
};

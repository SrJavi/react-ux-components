import React from 'react';
import { useUserInfo } from '../../../context/UserInfo';
import { capitalizeFirstLetter } from '../../../utils';

import { Container, SpinIcon } from './styles';

export const LoadingSpinner: React.FC = () => {
  const { translate } = useUserInfo();
  return (
    <Container>
      <SpinIcon size={42} />
      <h5>{`${capitalizeFirstLetter(translate('cargando'))}...`}</h5>
    </Container>
  );
};

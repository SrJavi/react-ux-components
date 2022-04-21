import React from 'react';
import { Input } from '../Input';

import { Container, Calendar } from './styles';

export const InputDate: React.FC<React.InputHTMLAttributes<HTMLInputElement>> =
  ({ ...props }) => {
    return (
      <Container>
        <Input type={'date'} {...props} />
        <Calendar />
      </Container>
    );
  };

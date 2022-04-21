import React from 'react';

import { Container, InputGroup, InputGroupAppend } from './styles';

interface InputAppendProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export const InputAppend: React.FC<InputAppendProps> = ({
  children,
  disabled,
  ...props
}) => {
  return (
    <Container>
      <InputGroup disabled={disabled} {...props} />
      <InputGroupAppend>{children}</InputGroupAppend>
    </Container>
  );
};

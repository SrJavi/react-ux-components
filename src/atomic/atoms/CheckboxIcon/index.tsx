import React from 'react';

import { FaCheck } from 'react-icons/fa';

import { Container } from './styles';

interface CheckboxIconProps {
  isChecked?: boolean;
}

export const CheckboxIcon: React.FC<CheckboxIconProps> = ({
  isChecked = false,
}) => {
  return (
    <Container isChecked={isChecked}>
      {isChecked && <FaCheck size={10} />}
    </Container>
  );
};

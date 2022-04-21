import React from 'react';
import { Dropdown, DropdownProps } from '../../atoms/Dropdown';
import { LabelFilter } from '../../atoms/LabelFilter';

import { Container } from './styles';

interface SelectFilterProps extends DropdownProps {
  label: string;
}

export const SelectFilter: React.FC<SelectFilterProps> = ({
  label,
  ...props
}) => {
  return (
    <Container isMultiple={props.isMultiple}>
      <LabelFilter label={label} />
      <Dropdown isMultiple={props.isMultiple} {...props} />
    </Container>
  );
};

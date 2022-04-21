import React from 'react';
import { capitalizeFirstLetter } from '../../../utils';

import { Label } from './styles';

export interface LabelFilterProps {
  label: string;
}

export const LabelFilter: React.FC<LabelFilterProps> = ({ label }) => {
  return <Label>{capitalizeFirstLetter(label)}</Label>;
};

import React from 'react';

import { Container } from './styles';

export interface IItem {
  onClick?: () => void;
  children: React.ReactNode;
}

export const Item: React.FC<IItem> = ({ onClick, children }) => {
  return <Container onClick={onClick}>{children}</Container>;
};

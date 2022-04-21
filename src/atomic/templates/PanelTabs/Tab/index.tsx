import React from 'react';

import { TabItem } from './styles';

export interface ITab extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isActive?: boolean;
  disabled?: boolean;
  label: string;
}

const Tab: React.FC<ITab> = ({ isActive = false, label, ...props }) => {
  return (
    <TabItem isActive={isActive} {...props}>
      {label}
    </TabItem>
  );
};

export default Tab;

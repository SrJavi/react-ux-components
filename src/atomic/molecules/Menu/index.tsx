import React from 'react';
import { APIMenu } from '../../../@types';

import { MenuItem } from './MenuItem';

import { ListGroupMenu } from './styles';

interface Props {
  items: APIMenu[] | undefined;
}

export const Menu: React.FC<Props> = ({ items }) => {
  return !items?.length ? null : (
    <ListGroupMenu>
      {items
        .sort((a, b) => (a.order > b.order ? 1 : -1))
        .map((item) => {
          return (
            <MenuItem key={item.id} item={item}>
              {item.subItems.length > 0 && <Menu items={item.subItems} />}
            </MenuItem>
          );
        })}
    </ListGroupMenu>
  );
};

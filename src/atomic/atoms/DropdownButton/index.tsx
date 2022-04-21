import React, { useLayoutEffect, useState } from 'react';

import { Container, Button, Menu } from './styles';

import { Item, IItem } from './Item';

interface IDropdownButton {
  title: React.ReactNode;
  children: React.ReactNode;
}

const DropdownButton: React.FC<IDropdownButton> & {
  Item: React.FC<IItem>;
} = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useLayoutEffect(() => {
    const colse = () => {
      setIsOpen(false);
    };
    setTimeout(() => {
      if (isOpen) {
        window.addEventListener('click', colse);
      } else {
        window.removeEventListener('click', colse);
      }
    }, 0);
    return () => {
      window.removeEventListener('click', colse);
    };
  }, [isOpen]);

  return (
    <Container>
      <Button onClick={() => setIsOpen(!isOpen)}>{title}</Button>
      {isOpen && <Menu>{children}</Menu>}
    </Container>
  );
};

DropdownButton.Item = Item;

export { DropdownButton };

import React from 'react';

import { Container, Header, Body, Title } from './styles';

interface IPanelInformative {
  title?: string;
}

export const PanelInformative: React.FC<IPanelInformative> = ({
  title,
  children,
}) => {
  return (
    <Container>
      {title && (
        <Header>
          <Title>{title}</Title>
        </Header>
      )}
      <Body>{children}</Body>
    </Container>
  );
};

import React from 'react';

import { Container } from './styles';

export const Loading: React.FC = ({ children }) => {
  return (
    <Container>
      <div className="loader gray-bg">
        <div className="spinner">
          <div className="cube1"></div>
          <div className="cube2"></div>
        </div>
        <div className="my-5">{children}</div>
      </div>
    </Container>
  );
};

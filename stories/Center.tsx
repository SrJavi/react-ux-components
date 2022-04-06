import React from 'react';
import styled from 'styled-components';
// import { Container } from './styles';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Center: React.FC = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Center;

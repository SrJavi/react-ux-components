import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 20px 10px;
  margin: 0 15px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);
  background-color: ${(props) => props.theme.panel};
  border-radius: ${(props) => props.theme.borderRadius};
`;

export const Header = styled.div``;

export const Body = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 20px;
  font-weight: 600;
  color: ${(props) => props.theme.text};
  margin-bottom: 5px;
`;

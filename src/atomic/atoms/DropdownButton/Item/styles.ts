import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  column-gap: 5px;
  align-items: center;
  height: 30px;
  padding: 0 10px;

  cursor: pointer;

  text-transform: capitalize;

  &:not(:last-child) {
    border-bottom: 1px solid ${(props) => props.theme.border};
  }

  &:hover {
    background-color: ${(props) => props.theme.hover};
    color: ${(props) => props.theme.textLight};
  }
`;

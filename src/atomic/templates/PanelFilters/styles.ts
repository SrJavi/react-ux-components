import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 75px;
  background-color: ${(props) => props.theme.panel};
  margin-bottom: 10px;

  padding: 0 15px;

  > div {
    display: flex;
    column-gap: 20px;
  }
`;

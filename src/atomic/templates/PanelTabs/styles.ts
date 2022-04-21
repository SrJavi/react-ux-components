import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 15px 5px;
`;

export const TabList = styled.div`
  display: flex;
  column-gap: 2px;
`;

export const TabPanel = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 20px 10px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);
  background-color: ${(props) => props.theme.panel};
  border-radius: ${(props) => props.theme.borderRadius};
  border-top-left-radius: 0;
`;

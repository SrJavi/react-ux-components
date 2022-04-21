import styled from 'styled-components';

export const StyledSpan = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: ${(props) => props.theme.inputsHeight};
  font-size: ${(props) => props.theme.fontSize};
  border-radius: ${(props) => props.theme.fontSize};
  padding: 0 10px;
  background-color: ${(props) => props.theme.bg};
  border: 1px solid ${(props) => props.theme.border};
`;

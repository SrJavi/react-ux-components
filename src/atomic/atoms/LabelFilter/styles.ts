import styled from 'styled-components';

export const Label = styled.label`
  font-size: ${(props) => props.theme.fontSize};
  font-weight: 600;
  color: ${(props) => props.theme.text};
  margin: 5px 0;
`;

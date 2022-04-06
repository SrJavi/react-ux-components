import styled from 'styled-components';

interface IContainerProps {
  isChecked: boolean;
}

export const Container = styled.div<IContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  flex-shrink: 0;

  cursor: pointer;

  background-color: ${(props) =>
    props.isChecked ? props.theme.secondary : props.theme.default};
  color: ${(props) => props.theme.default};
  width: 16px;
  height: 16px;
  border-radius: 4px;

  border: 2px solid
    ${(props) => (props.isChecked ? props.theme.secondary : props.theme.border)};
`;

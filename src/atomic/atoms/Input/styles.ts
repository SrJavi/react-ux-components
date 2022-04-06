import styled from 'styled-components';

export const StyledInput = styled.input`
  font-size: ${(props) => props.theme.fontSize};
  height: ${(props) => props.theme.inputsHeight};
  padding: 0 10px;
  min-width: 1px;
  color: ${(props) => props.theme.text};
  border-radius: ${(props) => props.theme.borderRadius};
  background-color: ${(props) => props.theme.default};
  border: 1px solid ${(props) => props.theme.border};
  -webkit-transition: 0.2s;
  -moz-transition: 0.2s;
  -o-transition: 0.2s;
  -ms-transition: 0.2s;
  transition: 0.2s;
  &:focus {
    border: 1px solid ${(props) => props.theme.secondaryClick};
  }
  &:focus-visible {
    outline: ${(props) => props.theme.secondaryClick} solid 1px;
  }
  &:disabled {
    background: ${(props) => props.theme.disabledInput};
    cursor: not-allowed;
  }
  &::-webkit-calendar-picker-indicator {
    color: transparent;
    background: none;
    z-index: 1;
    cursor: pointer;
  }
`;

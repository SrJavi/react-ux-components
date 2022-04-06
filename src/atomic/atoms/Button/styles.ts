import styled, { css } from 'styled-components';

export type Styles = 'Primary' | 'Default' | 'Filter';

interface IPropsButton {
  styled: Styles;
  disabled?: boolean;
}

const btnPrimary = css`
  color: ${(props) => props.theme.textLight};
  background-color: ${(props) => props.theme.primary};
  border: 1px solid ${(props) => props.theme.primary};
  &:hover {
    background-color: ${(props) => props.theme.primaryHover};
  }
  &:active {
    background-color: ${(props) => props.theme.primaryClick};
  }
`;

const btnDefault = css`
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.default};
  border: 1px solid ${(props) => props.theme.border};
  &:hover {
    background-color: ${(props) => props.theme.defaultHover};
  }
  &:active {
    background-color: ${(props) => props.theme.defaultClick};
  }
`;

const btnFilter = css`
  color: ${(props) => props.theme.textLight};
  background-color: ${(props) => props.theme.secondary};
  border: 1px solid ${(props) => props.theme.secondary};
  &:hover {
    background-color: ${(props) => props.theme.secondaryHover};
  }
  &:active {
    background-color: ${(props) => props.theme.secondaryClick};
  }
`;

const btnDisabled = css`
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.disabledInput};
  border: 1px solid ${(props) => props.theme.borderButtonDisabled};
  cursor: not-allowed;
`;

const styles = {
  Primary: btnPrimary,
  Default: btnDefault,
  Filter: btnFilter,
};

const getStyleButton = (props: IPropsButton) => {
  if (props.disabled) {
    return btnDisabled;
  }

  return styles[props.styled];
};

export const StyledButton = styled.button<IPropsButton>`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 5px;
  text-transform: uppercase;
  border-radius: ${(props) => props.theme.borderRadius};
  height: ${(props) => props.theme.inputsHeight};
  padding: 0 20px;
  font-size: ${(props) => props.theme.fontSizeButtons};
  font-weight: 600;
  border: none;
  -webkit-transition: 0.2s;
  -moz-transition: 0.2s;
  -o-transition: 0.2s;
  -ms-transition: 0.2s;
  transition: 0.2s;
  &:focus-visible {
    outline: ${(props) => `${props.theme.borderFocusVisible} auto 2px`};
  }
  ${getStyleButton}
`;

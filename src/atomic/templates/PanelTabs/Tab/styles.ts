import styled, { css } from 'styled-components';

interface ITab {
  isActive: boolean;
}

export const TabItem = styled.button<ITab>`
  display: flex;
  align-items: center;
  border-radius: ${(props) => props.theme.borderRadius};
  height: 40px;
  padding: 0 20px;
  font-size: ${(props) => props.theme.fontSize};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.tab};
  border: none;
  border-bottom: 1px solid ${(props) => props.theme.tabActive};
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  -webkit-transition: 0.2s;
  -moz-transition: 0.2s;
  -o-transition: 0.2s;
  -ms-transition: 0.2s;
  transition: 0.2s;
  &:focus-visible {
    outline: ${(props) => props.theme.borderFocusVisible} auto 2px;
  }
  ${(props) => (props.isActive ? activeTab : !props.disabled && hoverStyle)}
  ${(props) => props.disabled && tabDisabled}
`;

const activeTab = css`
  color: ${(props) => props.theme.textLight};
  background-color: ${(props) => props.theme.tabActive};
  font-weight: 600;
`;

const hoverStyle = css`
  &:hover {
    background-color: ${(props) => props.theme.tabHover};
  }
  &:active {
    background-color: ${(props) => props.theme.tabClick};
  }
`;

const tabDisabled = css`
  background-color: ${(props) => props.theme.tabDisabled};
  cursor: not-allowed;
`;

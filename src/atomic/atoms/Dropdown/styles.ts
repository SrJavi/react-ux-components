import styled, { css } from 'styled-components';
import { FaChevronDown, FaChevronUp, FaSearch } from 'react-icons/fa';

interface IPropsContainer {
  disabled?: boolean;
}

export const Container = styled.div<IPropsContainer>`
  position: relative;
  color: ${(props) => props.theme.text};
  font-size: ${(props) => props.theme.fontSize};

  border-radius: ${(props) => props.theme.borderRadius};

  background-color: ${(props) =>
    props.disabled ? props.theme.disabled : props.theme.default};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
`;

interface IPropsSelect {
  disabled?: boolean;
}

const btnDisabled = css`
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.disabledInput};
  pointer-events: none;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Chrome y Opera */
`;

const checkDisabled = (props: IPropsSelect) => {
  if (props.disabled) {
    return btnDisabled;
  }
  return undefined;
};

export const Select = styled.button<IPropsSelect>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: ${(props) => props.theme.inputsHeight};
  width: 100%;
  border-radius: ${(props) => props.theme.borderRadius};
  padding: 0 10px;
  background-color: ${(props) => props.theme.default};
  border: 1px solid ${(props) => props.theme.border};
  &:hover {
    background-color: ${(props) => props.theme.defaultHover};
  }
  &:active {
    background-color: ${(props) => props.theme.defaultClick};
  }
  &:focus-visible {
    outline: ${(props) => props.theme.secondaryClick} solid 1px;
  }

  ${checkDisabled}
`;

export const HeaderValue = styled.div`
  color: ${(props) => props.theme.text};
  flex-grow: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: start;
  padding-right: 22px;
`;

export const ButtonClearSelection = styled.button`
  position: absolute;
  top: 50%;
  right: ${(props) => props.theme.inputsHeight};
  display: flex;
  border: none;
  background-color: transparent;
  color: ${(props) => props.theme.text};
  padding: 0;
  width: 13px;
  height: 13px;
  transform: translateY(-50%);
  &:hover {
    color: ${(props) => props.theme.primaryHover};
  }
`;

const iconCSS = css`
  color: ${(props) => props.theme.text};
  width: 16px;
  height: 16px;
  flex-shrink: 0;
`;

export const ChevronUp = styled(FaChevronUp)`
  ${iconCSS}
`;

export const ChevronDown = styled(FaChevronDown)`
  ${iconCSS}
`;

export const List = styled.div`
  position: absolute;
  width: 100%;
  background-color: white;
  z-index: 2;
`;

export const InputSearch = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  input {
    color: ${(props) => props.theme.text};
    height: ${(props) => props.theme.inputsHeight};
    border: 1px solid ${(props) => props.theme.border};
    width: 100%;
    padding: 0 20px 0 10px;
    -webkit-transition: 0.5s;
    outline: none;
    &:focus {
      border: 1px solid ${(props) => props.theme.secondaryClick};
    }
  }
`;

export const Search = styled(FaSearch)`
  position: absolute;
  right: 10px;
  width: 15px;
  height: 15px;
  color: ${(props) => props.theme.textNeutralLighter};
`;

export const ListScroll = styled.div`
  overflow-x: hidden;
  overflow-y: auto;

  max-height: 250px;

  border-bottom: 1px solid ${(props) => props.theme.border};
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;

  ::-webkit-scrollbar {
    width: ${(props) => props.theme.scrollbarWidth};
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.scrollbarThumbBg};
    border-radius: ${(props) => props.theme.scrollbarThumbRadius};
    &:hover {
      background-color: ${(props) => props.theme.scrollbarThumbHover};
    }
  }
  ::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme.scrollbarTrack};
  }
`;
interface IPropsListItem {
  isChecked?: boolean;
}

export const ListItem = styled.div<IPropsListItem>`
  display: flex;
  align-items: center;
  height: 30px;
  border-left: 1px solid ${(props) => props.theme.border};
  border-right: 1px solid ${(props) => props.theme.border};
  padding: 0 10px;

  background-color: ${(props) =>
    props.isChecked ? props.theme.defaultClick : props.theme.default};

  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.hover};
    color: ${(props) => props.theme.textLight};
  }
`;

export const ItemValue = styled.span`
  flex-grow: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Chrome y Opera */
`;

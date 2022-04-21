import styled from 'styled-components';
import { Input } from '../../atoms/Input';

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const InputGroup = styled(Input)`
  flex-grow: 1;
  &:not(:first-child) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  &:not(:last-child) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
`;

export const InputGroupAppend = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 0;
  > button,
  span {
    height: ${(props) => props.theme.inputsHeight};
    font-size: ${(props) => props.theme.fontSize};
    text-transform: none;
    font-weight: normal;
    padding: 0 10px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    &:not(:last-child) {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
  }
`;

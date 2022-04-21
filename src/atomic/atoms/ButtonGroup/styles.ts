import styled from 'styled-components';
import { Button } from '../Button';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonRadio = styled(Button)`
  font-size: ${(props) => props.theme.fontSize};
  text-transform: none;
  font-weight: normal;

  &:first-child:not(:last-child) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  &:last-child:not(:first-child) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  &:not(:first-child):not(:last-child) {
    border-radius: 0;
  }
`;

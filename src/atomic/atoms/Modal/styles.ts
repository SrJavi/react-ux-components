import styled from 'styled-components';
import { Modal } from 'react-bootstrap';
import { Button } from '../Button';

export const CustomModal = styled(Modal)`
  .modal-content {
    border: 1px solid ${(props) => props.theme.border};
    border-radius: ${(props) => props.theme.borderRadius};
    background-color: ${(props) => props.theme.panel};
  }
`;

export const Header = styled(Modal.Header)`
  border-bottom: 1px solid ${(props) => props.theme.border};
  border-top-left-radius: ${(props) => props.theme.borderRadius};
  border-top-right-radius: ${(props) => props.theme.borderRadius};
  padding: 15px;
  button.btn-close {
    padding: 6px;
    margin: 6px;
    width: 0;
    height: 0;
  }
`;

export const Title = styled.h1`
  font-size: ${(props) => props.theme.fontSizeTitle1};
  color: ${(props) => props.theme.text};
  font-weight: 600;
  margin: 0;
`;

export const Body = styled(Modal.Body)`
  color: ${(props) => props.theme.text};
  padding: 0 15px;
`;

export const Footer = styled(Modal.Footer)`
  border-top: 1px solid ${(props) => props.theme.border};
  border-bottom-left-radius: ${(props) => props.theme.borderRadius};
  border-bottom-right-radius: ${(props) => props.theme.borderRadius};
  column-gap: 10px;
  padding: 8px 15px;
  & > * {
    margin: 0;
  }
`;

export const ButtonFooter = styled(Button)`
  font-size: ${(props) => props.theme.fontSize};
`;

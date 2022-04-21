import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Modal } from '../../atoms/Modal';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 30px;
  padding: 0 15px;
  font-size: 13px;
  background-color: ${(props) => props.theme.bg};
  color: ${(props) => props.theme.text2};
  text-transform: capitalize;
  cursor: default;
`;

export const Breadcrumb = styled.div`
  display: flex;
  align-items: center;
  & > span {
    margin: 0 10px;
    cursor: pointer;
    &.active {
      color: ${(props) => props.theme.textHighlight};
      font-weight: 600;
    }
  }
`;

interface LinkBreadcrumbProps {
  active: number;
}

export const LinkBreadcrumb = styled(Link)<LinkBreadcrumbProps>`
  color: ${(props) =>
    props.active ? props.theme.textHighlight : props.theme.text2};
  font-weight: ${(props) => (props.active ? '600' : '400')};
  margin: 0 10px;
  text-decoration: none;
  &:hover {
    color: ${(props) =>
      props.active ? props.theme.secondaryHover : props.theme.text};
  }
`;

export const MenuRight = styled.div`
  position: relative;
`;

export const ModalSM = styled(Modal)`
  .modal-dialog.modal-lg {
    width: 580px;
  }
`;

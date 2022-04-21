import React from 'react';
import { ModalProps } from 'react-bootstrap';
import { useUserInfo } from '../../../context/UserInfo';

import {
  CustomModal,
  Header,
  Title,
  Body,
  Footer,
  ButtonFooter,
} from './styles';

export interface IModal extends ModalProps {
  title: string;
  acceptLabel?: string;
  acceptCallback?: () => void;
  children: React.ReactNode;
}

export const Modal: React.FC<IModal> = ({
  title,
  acceptLabel,
  acceptCallback,
  children,
  ...props
}) => {
  const { translate } = useUserInfo();
  return (
    <CustomModal size="lg" {...props}>
      <Header closeButton>
        <Title>{title}</Title>
      </Header>
      <Body>{children}</Body>
      <Footer>
        <ButtonFooter styled="Default" onClick={props.onHide}>
          {translate('cerrar')}
        </ButtonFooter>
        {acceptLabel && (
          <ButtonFooter styled="Primary" onClick={acceptCallback}>
            {acceptLabel}
          </ButtonFooter>
        )}
      </Footer>
    </CustomModal>
  );
};

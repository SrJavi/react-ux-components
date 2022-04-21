import React from 'react';

import { StyledButton, Styles } from './styles';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Tipos de Botones, por defecto "Default" */
  styled: Styles;
  /** Texto del botón */
  children: React.ReactNode;
  /** Habilitar o no el botón */
  disabled?: boolean;
}

/** Botón según el manual */
export const Button: React.FC<ButtonProps> = ({
  styled = 'Default',
  children,
  disabled,
  ...props
}) => {
  return (
    <StyledButton {...props} disabled={disabled} styled={styled}>
      {children}
    </StyledButton>
  );
};

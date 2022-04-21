import React, { memo } from 'react';

import { Container, ButtonRadio } from './styles';

interface Props {
  buttons: IButtonRadio[];
  setCallback: (value: string, index: number) => void;
  currentButton?: number;
}

interface IButtonRadio {
  name: string;
  value: string;
  disabled?: boolean;
}

export const ButtonGroup: React.FC<Props> = memo(
  ({ buttons, currentButton, setCallback }) => {
    const handleClick = (
      event: React.MouseEvent<HTMLButtonElement>,
      index: number
    ) => {
      setCallback(event.currentTarget.value, index);
    };

    return (
      <Container>
        {buttons.map((button, i) => (
          <ButtonRadio
            key={i}
            name={button.name}
            value={button.value}
            onClick={(event) => handleClick(event, i)}
            styled={
              (currentButton || currentButton === 0) && i === currentButton
                ? 'Filter'
                : 'Default'
            }
            disabled={button.disabled}
          >
            {button.name}
          </ButtonRadio>
        ))}
      </Container>
    );
  }
);

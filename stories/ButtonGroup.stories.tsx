import React, { useState } from 'react';
import { Meta, ComponentStory } from '@storybook/react';
import { ButtonGroup } from '../src/atomic/atoms/ButtonGroup';

const meta: Meta = {
  title: 'Atoms/ButtonGroup',
  component: ButtonGroup,
  argTypes: {
    numberOfOption: { type: 'number', defaultValue: 3 },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

interface Transaction {
  backendTime: number;
  dalTime: number;
  name: string;
}

const Template = ({ numberOfOption, ...args }) => {
  const [radioButton, setRadioButton] = useState(args.currentButton);

  const data =
    args.buttons ||
    [...Array(numberOfOption).keys()].map((n) => ({
      name: `name ${n + 1}`,
      value: `${n + 1}`,
    }));

  return (
    <>
      <ButtonGroup
        buttons={data}
        setCallback={(value: string, index: number) => setRadioButton(index)}
        currentButton={radioButton}
      />
    </>
  );
};

export const Default = Template.bind({});

Default.args = {
  currentButton: 1,
};

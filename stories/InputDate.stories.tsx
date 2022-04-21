import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { InputDate } from '../src/atomic/atoms/InputDate';

const meta: Meta = {
  title: 'Atoms/InputDate',
  component: InputDate,
  argTypes: {
    disabled: {
      control: {
        type: 'boolean',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<React.InputHTMLAttributes<HTMLInputElement>> = (args) => (
  <InputDate {...args} />
);

export const Default = Template.bind({});

export const Disabled = Template.bind({});

Disabled.args = {
  disabled: true,
};

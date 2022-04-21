import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { Input, InputProps } from '../src/atomic/atoms/Input';

const meta: Meta = {
  title: 'Atoms/Input',
  component: Input,
  argTypes: {
    placeholder: {
      defaultValue: 'Placeholder...',
      control: {
        type: 'text',
      },
    },
    value: {
      control: {
        type: 'text',
      },
    },
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

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Default = Template.bind({});

export const Disabled = Template.bind({});

Disabled.args = {
  disabled: true,
};

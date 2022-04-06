import React from 'react';
import { Meta, Story } from '@storybook/react';
import { FaPlus } from 'react-icons/fa';
import Button, { ButtonProps } from '../src/atomic/atoms/Button';
import Center from './Center';

const meta: Meta = {
  title: 'Atoms/Button',
  component: Button,
  //decorators: [(story) => <Center>{story()}</Center>],
  argTypes: {
    onClick: { action: 'clicked' },
    children: {
      defaultValue: 'Test',
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

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});

export const Primary = Template.bind({});

Primary.args = {
  styled: 'Primary',
  children: 'Primary',
};

export const Filter = Template.bind({});

Filter.args = {
  styled: 'Filter',
  children: 'Filter',
};

Filter.parameters = { controls: { include: ['children'] } };

export const WhitIcon = (args) => (
  <Button {...args} styled="Primary">
    <FaPlus />
    Whit Icon
  </Button>
);

WhitIcon.args = {
  styled: 'Primary',
};

export const Disabled = Template.bind({});

Disabled.args = {
  children: 'Disabled',
  disabled: true,
};

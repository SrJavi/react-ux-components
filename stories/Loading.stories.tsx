import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { Loading } from '../src/atomic/atoms/Loading';

const meta: Meta = {
  title: 'Atoms/Loading',
  component: Loading,
  argTypes: {
    children: {
      defaultValue: 'Cargando',
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = (args) => <Loading {...args} />;

export const Default = Template.bind({});

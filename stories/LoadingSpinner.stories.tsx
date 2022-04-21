import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { LoadingSpinner } from '../src/atomic/atoms/LoadingSpinner';
import Center from './Center';

const meta: Meta = {
  title: 'Atoms/LoadingSpinner',
  component: LoadingSpinner,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = (args) => <LoadingSpinner {...args} />;

export const Default = Template.bind({});

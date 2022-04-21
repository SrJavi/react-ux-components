import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { LabelFilter, LabelFilterProps } from '../src/atomic/atoms/LabelFilter';

const meta: Meta = {
  title: 'Atoms/LabelFilter',
  component: LabelFilter,
  argTypes: {
    label: {
      defaultValue: 'Prueba label',
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

const Template: Story<LabelFilterProps> = (args) => <LabelFilter {...args} />;

export const Default = Template.bind({});

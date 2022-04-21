import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { Span, SpanProps } from '../src/atomic/atoms/Span';

const meta: Meta = {
  title: 'Atoms/Span',
  component: Span,
  argTypes: {
    label: {
      defaultValue: '$$',
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

const Template: Story<SpanProps> = (args) => <Span {...args} />;

export const Default = Template.bind({});

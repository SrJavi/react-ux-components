import React, { useState } from 'react';
import { Meta, ComponentStory } from '@storybook/react';
import { InputAppend } from '../src/atomic/molecules/InputAppend';
import { Button } from '../src/atomic/atoms/Button';

const meta: Meta = {
  title: 'Molecules/InputAppend',
  component: InputAppend,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template = (args) => {
  return (
    <>
      <InputAppend placeholder={args.placeholder}>
        <Button styled={'Primary'}>Primary</Button>
      </InputAppend>
    </>
  );
};

export const Default = Template.bind({});

Default.args = {
  placeholder: 'buscar...',
};

import React, { useState } from 'react';
import { Meta } from '@storybook/react';
import { Alert } from '../src/atomic/atoms/Alert';
import { Button } from '../src/atomic/atoms/Button';

const meta: Meta = {
  title: 'Atoms/Alert',
  component: Alert,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template = (args) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button styled="Primary" onClick={() => setShow(true)}>
        Open Alert
      </Button>
      {show && (
        <Alert title={args.title} detail={args.detail} type={args.type} />
      )}
    </>
  );
};

export const Default = Template.bind({});

Default.args = {
  show: false,
  title: 'Default',
  detail: 'detail',
};

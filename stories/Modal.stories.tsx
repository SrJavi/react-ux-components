import React, { useState } from 'react';
import { Meta, ComponentStory } from '@storybook/react';
import { Modal, IModal } from '../src/atomic/atoms/Modal';
import { Button } from '../src/atomic/atoms/Button';

const meta: Meta = {
  title: 'Atoms/Modal',
  component: Modal,
  argTypes: {
    children: { type: 'string', defaultValue: 'Modal Body' },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template = (args) => {
  const [show, setShow] = React.useState(args.show);
  const onClose = () => setShow(false);

  return (
    <>
      <Button styled="Primary" onClick={() => setShow(true)}>
        Open modal
      </Button>
      <Modal {...args} show={show} onHide={onClose}>
        {args.children}
      </Modal>
    </>
  );
};

export const Default = Template.bind({});

Default.args = {
  show: false,
  title: 'Modal title',
};

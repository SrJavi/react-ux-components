import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Meta } from '@storybook/react';
import { Header } from '../src/atomic/organisms/Header';

const meta: Meta = {
  title: 'Organisms/Header',
  component: Header,
  decorators: [(story) => <MemoryRouter>{story()}</MemoryRouter>],
  argTypes: {},
  parameters: {
    docs: { iframeHeight: 500 },
    controls: { expanded: true },
  },
};

export default meta;

const Template = (args) => {
  const linksNavbar = [{ to: '/', name: 'Inicio' }];

  return (
    <>
      <Header appName={args.appName} links={linksNavbar} />
    </>
  );
};

export const Default = Template.bind({});

Default.args = {
  appName: 'NCA CLOUD',
};

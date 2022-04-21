import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Meta } from '@storybook/react';
import { SideMenu } from '../src/atomic/organisms/SideMenu';
import { MenuProvider, useMenu } from '../src/context/Menu';

import logo from './assets/logo.png';
import { Button } from '../src/atomic/atoms/Button';

const meta: Meta = {
  title: 'Organisms/SideMenu',
  component: SideMenu,
  decorators: [
    (Story) => {
      return (
        <MenuProvider>
          <Story />
        </MenuProvider>
      );
    },
  ],
  argTypes: {},
  parameters: {
    docs: { iframeHeight: 500 },
    controls: { expanded: true },
  },
};

export default meta;

const Template = (args) => {
  const { showNav, setShowNav } = useMenu();

  return (
    <>
      <Button styled="Primary" onClick={() => setShowNav(!showNav)}>
        Show Side Menu
      </Button>
      <SideMenu appName={args.appName} logo={logo} />
    </>
  );
};

export const Default = Template.bind({});

Default.args = {
  appName: 'NCA CLOUD',
};

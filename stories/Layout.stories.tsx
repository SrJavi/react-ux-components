import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Layout } from '../src/atomic/templates/Layout';

import logo from './assets/logo.png';
import { MenuProvider } from '../src/context/Menu';

export default {
  title: 'Page/Layout',
  component: Layout,
  decorators: [
    (Story) => (
      <MenuProvider>
        <MemoryRouter>
          <Story />
        </MemoryRouter>
      </MenuProvider>
    ),
  ],
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Layout>;

const Template = (args) => {
  return (
    <>
      <Layout
        logo={args.logo}
        appName={args.appName}
        linksNavbar={[{ to: '/', name: 'Inicio' }]}
      ></Layout>
    </>
  );
};

export const Default = Template.bind({});

Default.args = {
  appName: 'NCA CLOUD',
  logo: logo,
};

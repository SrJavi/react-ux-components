import { addDecorator, addParameters } from "@storybook/react";
import { WithThemeProvider } from "storybook-addon-styled-components-themes";
import '@storybook/addon-console';
import { getAllThemes } from '../src/styles/themes';

import theme from './theme';
import { withConsole } from "@storybook/addon-console";

addParameters({
  options: {
    theme,
  },
});

addParameters({
  styledComponentsThemes: {
    /**
     * Themes
     */
    themes: getAllThemes(),
    /**
     * Theme to start on - index - optional
     */
    initialTheme: 1, // optional
    /**
     *  Key for show name of theme - optional
     */
    label: 'name', // optional
  },
});

addDecorator(story => (
  <WithThemeProvider>
      {story()}
  </WithThemeProvider>
));

addDecorator((storyFn, context) => withConsole()(storyFn)(context));

// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
export const parameters = {
  viewMode: 'docs',
	options: {
		storySort: {
			method: 'alphabetical',
			order: [
				'Getting Started',
				[
					'Installation',
          'Start Development Environment',
					'Colors',
				],
				'Atoms',
				['Button', 'Dropdown'],
			],
		},
	},
  // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
  actions: { argTypesRegex: '^on.*' },
};

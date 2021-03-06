module.exports = {
  stories: [
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.@(ts|tsx|js|jsx)'],
  addons: [
    '@storybook/addon-storysource',
    '@storybook/addon-links', 
    '@storybook/addon-essentials', 
    'storybook-addon-styled-components-themes/register'],
  // https://storybook.js.org/docs/react/configure/typescript#mainjs-configuration
  typescript: {
    check: true, // type-check stories during Storybook build
  },
  staticDirs: ['../stories/assets'],
};

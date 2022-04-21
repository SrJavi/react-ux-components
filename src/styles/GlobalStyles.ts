import { createGlobalStyle } from 'styled-components';
import { ThemeType } from './themes';

type Props = {
  theme: ThemeType;
};

export default createGlobalStyle<Props>`
  *, button, input {
    font-family: 'Open Sans', sans-serif;
  }

  html,
  body,
  #root {
    height: 100%;
    background-color: ${(props) => props.theme.bg}
  }

`;

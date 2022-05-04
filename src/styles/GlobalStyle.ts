import styled, { createGlobalStyle } from 'styled-components';

import colors from './colors';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;

    box-sizing: border-box;

    font-family: 'Josefins Sans', Helvetica, sans-serif;
  }

  body {
    background-color: ${toggleThemeArea({
      theme: 'dark'
    })}
  }
`;

type ToggleThemeAreaProps = {
  theme: 'light' | 'dark';
}

function toggleThemeArea({ theme }: ToggleThemeAreaProps) {
  switch(theme) {
    case 'dark':
      return colors.dark.veryDarkBlue;
    
    case 'light':
      return colors.light.veryLightGray;

    default:
      return colors.dark.veryDarkBlue
  }
}

export default GlobalStyle;
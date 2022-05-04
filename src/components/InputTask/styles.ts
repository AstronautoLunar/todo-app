import styled from 'styled-components';
import colors from '../../styles/colors';

export type AreaProps = {
  mode: 'light' | 'dark';
}

type GetValueColor = {
  dark: string;
  light: string;
}

function toggleMode(mode: AreaProps['mode'], {
  dark,
  light
}: GetValueColor) {
  switch(mode) {
    case 'dark':
      return dark;

    case 'light':
      return light;

    default:
      return dark;
  }
}

export const Area = styled.div<AreaProps>`
  width: 100%;
  height: 75px;

  background-color: ${props => toggleMode(props.mode, {
    dark: colors.dark.darkGrayishBlue,
    light: colors.light.veryLightGray
  })};

  display: flex;
  justify-content: stretch;
  align-items: center;
`;

export type InputProps = {
  colorText: 'light' | 'dark';
}

export const Input = styled.input<InputProps>`
  flex: 1;

  &::placeholder {
    color: ${props => toggleMode(props.colorText, {
      dark: colors.dark.darkGrayishBlue,
      light: colors.light.veryLightGray
    })}
  }
`;
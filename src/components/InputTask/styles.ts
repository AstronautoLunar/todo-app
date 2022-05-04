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
    dark: colors.dark.veryDarkDesaturatedBlue,
    light: colors.light.veryLightGray
  })};

  display: flex;
  justify-content: stretch;
  align-items: center;

  border-radius: 4px;

  margin-top: 32px;
`;

export type InputProps = {
  colorText: 'light' | 'dark';
}

export const Input = styled.input<InputProps>`
  flex: 1;

  background-color: transparent;

  height: 100%;

  outline: none;
  border: none;

  &::placeholder {
    color: ${props => toggleMode(props.colorText, {
      dark: colors.dark.veryDarkDesaturatedBlue,
      light: colors.light.veryLightGray
    })};

    opacity: 0.5;

    font-size: 16px;
  }
`;

type CircleProps = {
  width?: string;
  height?: string;
}

export const Circle = styled.div<CircleProps>`
  width: ${props => props.width ? props.width : '25px'};
  height: ${props => props.height ? props.height : '25px'};

  border: 1px solid ${colors.dark.veryDarkGrayishBlue2};
  border-radius: 100%;

  margin: 24px;
`;
import styled from 'styled-components';

import colors from '../../styles/colors';

export type TextProps = {
  modeDark: boolean;
}

function applyModeDarkText(props: TextProps) {
  return (
    props.modeDark 
    ? 
    colors.light.veryLightGray 
    : 
    colors.dark.veryDarkDesaturatedBlue
  )
}

export const TextItem = styled.span<TextProps>`
  font-size: 16px;
  
  color: ${applyModeDarkText};

  opacity: 1;
`;

type AreaItemProps = {
  modeDark: boolean;
}

function applyModeDarkAreaItem(props: AreaItemProps) {
  return (
    props.modeDark 
    ? 
    colors.dark.veryDarkDesaturatedBlue 
    : 
    colors.light.veryLightGray
  )
}

export const AreaItem = styled.div<AreaItemProps>`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: inherit;
  padding: 22px 0;

  background-color: ${applyModeDarkAreaItem};

  border-bottom: 0.2px solid ${colors.dark.veryDarkGrayishBlue2};

  &:first-of-type {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }
`;

export const Circle = styled.div`
  width: 25px;
  height: 25px;

  margin: 0 24px;

  border: 1px solid ${colors.dark.veryDarkGrayishBlue2};
  border-radius: 100%;

  position: relative;

  &::before {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 23px;
    height: 23px;

    background-image: linear-gradient(45%, ${colors.primary.checkBackgroundFrom}, ${colors.primary.checkBackgroundTo});
  }
`; 
import styled from 'styled-components';

import colors from '../../styles/colors';

export const AreaButtonFilterTools = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AreaTools = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${colors.dark.veryDarkDesaturatedBlue};

  padding: 16px 24px;

  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`;

export type TextProps = {
  size?: string;
  modeDark: boolean;
  opacity?: number;
  letterSpacing?: number;
  color?: string;
  marginLeft?: string;
  marginRight?: string;
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

export const Text = styled.span<TextProps>`
  font-size: ${props => props.size ? props.size : '16px'};
  
  color: ${props => !props.color ? applyModeDarkText : props.color};

  opacity: ${props => props.opacity ? props.opacity : '1'};

  letter-spacing: ${props => props.letterSpacing ? `${props.letterSpacing}px` : '0px'};

  margin-left: ${props => props.marginLeft ? props.marginLeft : '0'};
  margin-right: ${props => props.marginRight ? props.marginRight : '0'};
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

export const AreaList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: stretch;

  width: 100%;

  margin-top: 24px;
`;
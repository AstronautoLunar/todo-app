import styled from 'styled-components';

export type BackgroundImageProps = {
  url: string;
}

export const BackgroundImage = styled.div<BackgroundImageProps>`
  width: 100%;
  height: 350px;

  background-image: ${props => `url(${props.url})`};
  background-repeat: no-repeat;
  background-size: cover;
`;
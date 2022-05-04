import styled from 'styled-components';

export type ImageProps = {
  url: string;
}

export const Image = styled.div<ImageProps>`
  width: 100%;
  height: 350px;

  background-image: ${props => `url(${props.url})`};
  background-repeat: no-repeat;
  background-size: cover;
`;
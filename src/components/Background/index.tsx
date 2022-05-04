import { Image, ImageProps } from './styles';

function Background({ url }: ImageProps) {
  return (
    <Image url={url}/>
  );
}

export default Background;
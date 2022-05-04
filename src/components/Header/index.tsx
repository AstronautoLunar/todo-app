import { BackgroundImage, BackgroundImageProps } from './styles';

function Header({ url }: BackgroundImageProps) {
  return (
    <BackgroundImage url={url}/>
  );
}

export default Header;
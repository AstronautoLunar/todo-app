import { Area } from './styles';

type HeaderProps = {
  children: JSX.Element | JSX.Element[];
}

function Header({ children }: HeaderProps) {
  return (
    <Area>
      { children }
    </Area>
  );
}

export default Header;
import { Area } from './styles';

type MainProps = {
  children: JSX.Element | JSX.Element[];
}

function Main({ children }: MainProps) {
  return (
    <Area>
      { children }
    </Area>
  );
}

export default Main;
import { Text } from './styles';

type TitleProps = {
  children: string;
}

function Title({ children }: TitleProps) {
  return (
    <Text>
      { children }
    </Text>
  );
}

export default Title;
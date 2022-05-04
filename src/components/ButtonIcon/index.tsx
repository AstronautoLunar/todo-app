import { Icon } from './styles';

type ButtonIconProps = {
  mode: 'dark' | 'light';
  onClick?: () => void;
}

function alternateModeIcon(mode: ButtonIconProps['mode']) {
  switch(mode) {
    case 'dark':
      return require(`../../assets/icon-moon.svg`).default;
      
    case 'light':
      return require(`../../assets/icon-sun.svg`).default;
        
    default:
      return require(`../../assets/icon-moon.svg`).default;
  }
}

function ButtonIcon({ mode, onClick }: ButtonIconProps) {
  return (
    <Icon
      src={alternateModeIcon(mode)}
      onClick={onClick}
    />
  );
}

export default ButtonIcon;
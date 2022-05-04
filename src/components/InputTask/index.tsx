import { Area, Input } from './styles';

type InputTaskProps = {
  children: string;
  modeDark: boolean;
  value: string;
}

function InputTask({ value, modeDark }: InputTaskProps) {
  return (
    <Area mode={modeDark ? 'dark' : 'light'}>
      
      <Input
        value={value}
        colorText={modeDark ? 'light' : 'dark'}
      />
    </Area>
  );
}

export default InputTask;
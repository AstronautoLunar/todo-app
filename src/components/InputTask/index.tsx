import { Area, Circle, Input } from './styles';

export function CheckInput() {
  return (
    <Circle/>
  )
}

type InputTaskProps = {
  modeDark: boolean;
  value: string;
  placeholder: string;
}

function InputTask({ 
    value, 
    modeDark,
    placeholder
  }: InputTaskProps) {
  return (
    <Area mode={modeDark ? 'dark' : 'light'}>
      <CheckInput/>
      <Input
        value={value}
        colorText={modeDark ? 'light' : 'dark'}
        placeholder={placeholder}
      />
    </Area>
  );
}

export default InputTask;
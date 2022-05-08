import { TextItem, TextProps, AreaItem, Circle } from './styles';

import DataRequired from '../../types/DataRequired';

type ItemProps = 
  Pick<DataRequired, 'text' | 'checked' > 
  & 
  TextProps;

function Item({ text, checked, modeDark }: ItemProps) {
  return (
    <AreaItem modeDark={modeDark}>
      <Circle/>
      <TextItem modeDark={modeDark}>
        { text }
      </TextItem>
    </AreaItem>
  );
}

export default Item;

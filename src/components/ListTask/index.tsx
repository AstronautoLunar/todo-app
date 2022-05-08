import { AreaList } from './styles';

import DataRequired from '../../types/DataRequired';
import Item from '../Item';
import Tools from '../Tools';

type ListTaskProps<Data> = {
  data: Data[];
}

function ListTask<Data extends DataRequired>({ data }: ListTaskProps<Data>) {
  return (
    <AreaList>
    {
      data.map(({ id, text, checked }) => (
        <Item
          key={id}
          text={text}
          checked={checked}
          modeDark={true}
        />
      ))
    }
    <Tools
      quantityItem={5}
      filterActions={{
        all: () => {},
        active: () => {},
        completed: () => {},
      }}
      clearAction={() => {}}
    />
    </AreaList>
  );
}

export default ListTask;
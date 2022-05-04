import {
  AreaButtonFilterTools,
  AreaItem,
  AreaList,
  AreaTools,
  Circle,
  Text,
  TextProps
} from './styles';

type FilterActions = {
  all: () => void;
  active: () => void;
  completed: () => void;
}

type ToolsProps = {
  quantityItem: number;
  filterActions: FilterActions;
  clearAction: () => void;
}

function Tools({ 
    quantityItem, 
    filterActions, 
    clearAction 
  }: ToolsProps) {
  return (
    <AreaTools>
      <Text 
        modeDark={true}
        opacity={0.2}
        size='12px'
        letterSpacing={1}
      >
        { quantityItem } items left
      </Text>
      <AreaButtonFilterTools>
        <Text 
          modeDark={true}
          onClick={filterActions.all}
          marginRight='16px'
          opacity={0.2}
          size='14px'
        >
          All
        </Text>

        <Text 
          modeDark={true}
          onClick={filterActions.active}
          opacity={0.2}
          size='14px'
        >
            Active  
        </Text>

        <Text 
          modeDark={true}
          onClick={filterActions.completed}
          marginLeft='16px'
          opacity={0.2}
          size='14px'
        >
            Completed
        </Text>
      </AreaButtonFilterTools>
      <Text
        modeDark={true}
        size='12px'
        opacity={0.2}
        onClick={clearAction}
      >
        Clear Completed
      </Text>
    </AreaTools>
  );
}

type ItemProps = 
  Pick<DataRequired, 'text' | 'checked' > 
  & 
  TextProps;

function Item({ text, checked, modeDark }: ItemProps) {
  return (
    <AreaItem modeDark={modeDark}>
      <Circle/>
      <Text modeDark={modeDark}>
        { text }
      </Text>
    </AreaItem>
  );
}

type DataRequired = {
  text: string;
  id: string;
  checked: boolean;
}

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
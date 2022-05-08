import { 
  // AreaButtonFilterTools, 
  AreaTools 
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
      {/* <Text 
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
      </Text> */}
    </AreaTools>
  );
}

export default Tools;
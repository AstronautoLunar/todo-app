import { 
  AreaButtonFilterTools, 
  AreaTools,
  TextTools
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
      <TextTools modeDark={true}>
        { quantityItem } items left
      </TextTools>
      <AreaButtonFilterTools>
        <TextTools 
          modeDark={true}
          onClick={filterActions.all}
        >
          All
        </TextTools>

        <TextTools 
          modeDark={true}
          onClick={filterActions.active}
        >
            Active  
        </TextTools>

        <TextTools 
          modeDark={true}
          onClick={filterActions.completed}
        >
            Completed
        </TextTools>
      </AreaButtonFilterTools>
      <TextTools modeDark={true}>
        Clear Completed
      </TextTools>
    </AreaTools>
  );
}

export default Tools;
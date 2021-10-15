import { Droppable } from 'react-beautiful-dnd';
import { useStoreState } from '../../hooks/store.hooks';
import { BlockList } from '../index';

function Board() {
  const blocks = useStoreState((state) => state.blocks);

  return (
    <Droppable droppableId="board">
      {(provided) => (
        <div ref={provided.innerRef} {...provided.droppableProps}>
          <BlockList blocks={blocks} />
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
}

export default Board;

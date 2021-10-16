import { Droppable } from 'react-beautiful-dnd';
import { useStoreState } from '../../hooks/store.hooks';
import { BlockList } from '../index';
import { defaultContainers } from '../../data';
import style from './Board.module.scss';

function Board() {
  const blocks = useStoreState(
    (state) => state.blocks[defaultContainers.board]
  );

  return (
    <Droppable droppableId={defaultContainers.board}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          className={style.root}
        >
          <BlockList blocks={blocks} />
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
}

export default Board;

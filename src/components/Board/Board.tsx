import { Droppable } from 'react-beautiful-dnd';
import { useStoreState } from '../../hooks/store.hooks';
import { BlockList } from '../index';
import { defaultContainers } from '../../data';
import { AddButton } from '../index';
import style from './Board.module.scss';

function Board() {
  const blocks = useStoreState(
    (state) => state.blocks[defaultContainers.board]
  );

  return (
    <div>
      <div className={style.Toolbar}>
        <AddButton />
      </div>
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
    </div>
  );
}

export default Board;

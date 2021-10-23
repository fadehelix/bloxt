import { Droppable } from 'react-beautiful-dnd';
import { useStoreState } from '../../../hooks/store.hooks';
import { BlockList } from '../../index';
import { defaultContainers } from '../../../data';
import style from './Board.module.scss';

import AddBlockInput from '../../AddBlock/AddBlockInput';
import classnames from 'classnames';

function Board() {
  const blocks = useStoreState(
    (state) => state.blocks[defaultContainers.board]
  );

  const getListStyle = (isDraggingOver: boolean) => ({
    boxShadow: isDraggingOver ? '0px 0px 10px -2px rgba(0, 0, 0, 1)' : 'none',
  });

  return (
    <div>
      <div className={classnames(style.Toolbar, 'toolbar')}>
        <AddBlockInput />
      </div>
      <Droppable droppableId={defaultContainers.board}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={style.root}
            style={getListStyle(snapshot.isDraggingOver)}
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

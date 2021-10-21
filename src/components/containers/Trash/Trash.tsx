import { useEffect } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { useStoreState, useStoreActions } from '../../../hooks/store.hooks';
import { BlockList } from '../../index';
import { defaultContainers } from '../../../data';

import style from './Trash.module.scss';

const getListStyle = (isDraggingOver: boolean) =>
  isDraggingOver
    ? {
        boxShadow: '0px 0px 10px -2px rgba(0, 0, 0, 1)',
        backgroundColor: 'orangered',
      }
    : {};

function Trash() {
  const blocks = useStoreState(
    (state) => state.blocks[defaultContainers.trash]
  );
  const emptyTrash = useStoreActions((action) => action.emptyContainer);

  useEffect(() => {
    blocks.length && emptyTrash(defaultContainers.trash);
  }, [blocks, emptyTrash]);

  return (
    <Droppable droppableId={defaultContainers.trash}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          className={style.root}
          style={getListStyle(snapshot.isDraggingOver)}
        >
          <h3 className={style.title}>Delete it!</h3>
          <BlockList blocks={blocks} />
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
}

export default Trash;

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
    (state) => state.blocks[defaultContainers.Trash]
  );
  const emptyTrash = useStoreActions((action) => action.emptyContainer);
  const notification = useStoreActions((action) => action.showNotification);

  useEffect(() => {
    if (!blocks.length) return;
    emptyTrash(defaultContainers.Trash);
    notification({ type: 'info', message: 'Blocks has been deleted.' });
  }, [blocks, emptyTrash, notification]);

  return (
    <Droppable droppableId={defaultContainers.Trash}>
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

import { useEffect } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { useStoreState, useStoreActions } from '../../hooks/store.hooks';
import { BlockList } from '../index';
import { defaultContainers } from '../../data';

import style from './Trash.module.scss';

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
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          className={style.root}
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

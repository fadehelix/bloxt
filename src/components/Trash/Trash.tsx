import { Droppable } from 'react-beautiful-dnd';
import { useStoreState } from '../../hooks/store.hooks';
import { BlockList } from '../index';
import { defaultContainers } from '../../data';

import style from './Trash.module.scss';

function Trash() {
  const blocks = useStoreState(
    (state) => state.blocks[defaultContainers.trash]
  );

  return (
    <Droppable droppableId={defaultContainers.trash}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          className={style.root}
        >
          <h3 className={style.title}>Move block here to delete it</h3>
          <BlockList blocks={blocks} />
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
}

export default Trash;

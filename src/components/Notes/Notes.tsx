import { Droppable } from 'react-beautiful-dnd';
import { useStoreState } from '../../hooks/store.hooks';
import { BlockList } from '../index';
import { defaultContainers } from '../../data';
import style from './Notes.module.scss';

function Notes() {
  const blocks = useStoreState(
    (state) => state.blocks[defaultContainers.notes]
  );

  return (
    <Droppable droppableId={defaultContainers.notes}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          className={style.root}
        >
          <h3 className={style.title}>Keep for later use</h3>
          <BlockList blocks={blocks} />
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
}

export default Notes;

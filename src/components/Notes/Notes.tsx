import { Droppable } from 'react-beautiful-dnd';
import { useStoreState } from '../../hooks/store.hooks';
import { BlockList } from '../index';
import { defaultContainers } from '../../data';
import style from './Notes.module.scss';

const getListStyle = (isDraggingOver: boolean) => ({
  boxShadow: isDraggingOver ? '0px 0px 10px -2px rgba(0, 0, 0, 1)' : 'none',
});

function Notes() {
  const blocks = useStoreState(
    (state) => state.blocks[defaultContainers.notes]
  );

  return (
    <Droppable droppableId={defaultContainers.notes}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          className={style.root}
          style={getListStyle(snapshot.isDraggingOver)}
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

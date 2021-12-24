import { Droppable } from 'react-beautiful-dnd';
import { useStoreState } from '../../../hooks/store.hooks';
import { BlockList } from '../../index';
import { defaultContainers } from '../../../data';
import style from './Board.module.scss';

import { AddEmptyBlockButton } from '../../index';

function Board() {
  const blocks = useStoreState(
    (state) => state.blocks[defaultContainers.Board]
  );

  return (
    <>
      <div>
        {/* <div className={classnames(style.Toolbar, 'toolbar')}>
        <AddBlockInput />
      </div> */}
        <Droppable droppableId={defaultContainers.Board}>
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className={style.root}
            >
              <BlockList blocks={blocks} />
              {provided.placeholder}
              <div className={style.AddBlock}>
                <AddEmptyBlockButton />
              </div>
            </div>
          )}
        </Droppable>
      </div>
    </>
  );
}

export default Board;

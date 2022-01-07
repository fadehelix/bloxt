import { Droppable } from 'react-beautiful-dnd';
import classnames from 'classnames';
import { useStoreState } from '../../../hooks/store.hooks';
import { BlockList } from '../../index';
import { defaultContainers } from '../../../data';
import CopyToClipboardButton from '../../CopyToClipboardButton/CopyToClipboardButton';
import style from './Board.module.scss';

import { AddEmptyBlockButton } from '../../index';

type BoardProps = React.HTMLProps<HTMLDivElement>;

function Board(props: BoardProps) {
  const blocks = useStoreState(
    (state) => state.blocks[defaultContainers.Board]
  );

  return (
    <div {...props}>
      <CopyToClipboardButton text="Test copy" />
      <Droppable droppableId={defaultContainers.Board}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={classnames('Board', style.root)}
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
  );
}

export default Board;

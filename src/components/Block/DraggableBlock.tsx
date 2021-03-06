import { Block } from '../index';
import BlockType from '../../data/block.model';
import { Draggable } from 'react-beautiful-dnd';

type DraggableBlockType = {
  block: BlockType;
  index: number;
};

function DraggableBlock({ block, index }: DraggableBlockType) {
  return (
    <Draggable draggableId={block.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Block data={block} />
        </div>
      )}
    </Draggable>
  );
}

export default DraggableBlock;

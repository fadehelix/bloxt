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
      {(provided, snapshot) => {
        console.log('is dragging?', snapshot.isDragging)
        const style = {
          ...provided.draggableProps.style,
          border: snapshot.isDragging ? '1px solid #000' : '1px solid #fff',
        };
        return (<div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={style}
        >
          <Block data={block} />
        </div>)
      }}
    </Draggable>
  );
}

export default DraggableBlock;

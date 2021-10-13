import React from 'react';
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from 'react-beautiful-dnd';
import { useStoreActions, useStoreState } from '../../hooks/store.hooks';
import BlockType from '../../data/block.model';
import style from './Editor.module.scss';

type DraggableBlockType = { block: BlockType; index: number };
type BlockListProps = { blocks: BlockType[] };

const reorder = (list: BlockType[], startIndex: number, endIndex: number) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

function DraggableBlock({ block, index }: DraggableBlockType) {
  return (
    <Draggable draggableId={block.id} index={index}>
      {(provided) => (
        <div
          className={style.block}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {block.content}
        </div>
      )}
    </Draggable>
  );
}

const BlockList: React.FC<BlockListProps> = ({ blocks }) => {
  return (
    <>
      {blocks.map((block, index: number) => (
        <DraggableBlock block={block} index={index} key={block.id} />
      ))}
    </>
  );
};

function Editor() {
  const blocks = useStoreState((state) => state.blocks);
  const reorderBlocks = useStoreActions((actions) => actions.reorderBlocks);

  function onDragEnd(result: DropResult) {
    if (!result.destination) {
      return;
    }

    if (result.destination.index === result.source.index) {
      return;
    }

    const newBlocks = reorder(
      blocks,
      result.source.index,
      result.destination.index
    );

    reorderBlocks(newBlocks);
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="list">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            <BlockList blocks={blocks} />
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default Editor;

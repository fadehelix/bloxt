// import React, { useEffect } from 'react';
import {
  DragDropContext,
  DraggableLocation,
  DropResult,
} from 'react-beautiful-dnd';
import { useStoreActions, useStoreState } from './hooks/store.hooks';
import { AppHeader, Board, Trash } from './components';
import BlockType from './data/block.model';
import style from './App.module.scss';
import Block from './data/block.model';
import Alert from './components/Notification/Notification';

const reorder = (list: BlockType[], startIndex: number, endIndex: number) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

/**
 * Moves an item from one list to another list.
 */
const move = (
  source: Block[],
  destination: Block[],
  droppableSource: DraggableLocation,
  droppableDestination: DraggableLocation
) => {
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const [removed] = sourceClone.splice(droppableSource.index, 1);

  destClone.splice(droppableDestination.index, 0, removed);

  const result: { [key: string]: Block[] } = {};
  result[droppableSource.droppableId] = sourceClone;
  result[droppableDestination.droppableId] = destClone;

  return result;
};

function App() {
  const blocks = useStoreState((state) => state.blocks);
  const reorderBlocks = useStoreActions((actions) => actions.reorderBlocks);

  function onDragEnd(result: DropResult) {
    const { source, destination } = result;
    if (!destination) {
      return;
    }

    if (destination.droppableId === source.droppableId) {
      const newBlocks = reorder(
        blocks[source.droppableId],
        source.index,
        destination.index
      );

      reorderBlocks({ ...blocks, [destination.droppableId]: newBlocks });
    } else {
      const result = move(
        blocks[source.droppableId],
        blocks[destination.droppableId],
        source,
        destination
      );
      reorderBlocks({ ...blocks, ...result });
    }
  }

  return (
    <div className={style.root}>
      <AppHeader />
      <main className={style.main}>
        <DragDropContext onDragEnd={onDragEnd}>
          <div className={style.sidebar}></div>
          <section className={style.board}>
            <Board />
          </section>
        </DragDropContext>
      </main>
      <Alert />
    </div>
  );
}

export default App;

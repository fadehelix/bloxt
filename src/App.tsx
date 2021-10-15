import React from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { useStoreActions, useStoreState } from './hooks/store.hooks';
import { AppHeader, Board, Notes, Trash } from './components';
import BlockType from './data/block.model';
import style from './App.module.scss';

const reorder = (list: BlockType[], startIndex: number, endIndex: number) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

function App() {
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
    <div className={style.root}>
      <AppHeader />
      <main className={style.main}>
        <DragDropContext onDragEnd={onDragEnd}>
          <Board />
          <aside className={style.sidebar}>
            <Notes />
            <Trash />
          </aside>
        </DragDropContext>
      </main>
    </div>
  );
}

export default App;

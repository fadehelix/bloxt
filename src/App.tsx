import React from 'react';
import style from './App.module.scss';
import { AppHeader, Board, Notes } from './components';

function App() {
  return (
    <div className={style.root}>
      <AppHeader />
      <main className={style.main}>
        <Board />
        <aside className={style.sidebar}>
          <Notes />
        </aside>
      </main>
    </div>
  );
}

export default App;
